// 상태 변수
let state = {
    instrument: 'guitar',
    root: 'C',
    type: 'major',
    capo: 0,
    lefty: false,
    showNotes: true,
    currentPosition: 0
};

// DOM 요소
const fretLinesGroup = document.getElementById('fret-lines');
const stringsGroup = document.getElementById('strings');
const fingerGroup = document.getElementById('finger-positions');
const fretNumGroup = document.getElementById('fret-numbers');
const fretMarkersGroup = document.getElementById('fret-markers');
const nutElement = document.getElementById('nut');
const chordNameDisplay = document.getElementById('chord-name-display');
const chordNotesDisplay = document.getElementById('chord-notes');
const playBtn = document.getElementById('play-btn');
const prevPosBtn = document.getElementById('prev-pos-btn');
const nextPosBtn = document.getElementById('next-pos-btn');
const positionLabel = document.getElementById('position-label');
const relatedGrid = document.getElementById('related-chords-grid');
const fretboardGlass = document.querySelector('.fretboard-glass');

let currentChordData = null;
let currentPositions = [];
let audioCtx = null;

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    setupInstrumentTabs();
    setupRootButtons();
    setupTypeButtons();
    setupCapoControls();
    setupToggles();
    setupPositionNavigation();
    playBtn.addEventListener('click', playChord);
    updateChord();
});

// 악기 탭 설정
function setupInstrumentTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            state.instrument = tab.dataset.instrument;
            state.currentPosition = 0;
            updateChord();
        });
    });
}

// 루트음 버튼 설정
function setupRootButtons() {
    const rootBtns = document.querySelectorAll('.root-btn');
    rootBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            rootBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.root = btn.dataset.root;
            state.currentPosition = 0;
            updateChord();
        });
    });
}

// 코드 타입 버튼 설정
function setupTypeButtons() {
    const typeBtns = document.querySelectorAll('.type-btn');
    typeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            typeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.type = btn.dataset.type;
            state.currentPosition = 0;
            updateChord();
        });
    });
}

// 카포 컨트롤 설정
function setupCapoControls() {
    const capoMinus = document.getElementById('capo-minus');
    const capoPlus = document.getElementById('capo-plus');
    const capoValue = document.getElementById('capo-value');

    capoMinus.addEventListener('click', () => {
        if (state.capo > 0) {
            state.capo--;
            capoValue.textContent = state.capo;
            updateChord();
        }
    });

    capoPlus.addEventListener('click', () => {
        if (state.capo < 12) {
            state.capo++;
            capoValue.textContent = state.capo;
            updateChord();
        }
    });
}

// 토글 설정
function setupToggles() {
    const leftyToggle = document.getElementById('lefty-toggle');
    const noteToggle = document.getElementById('note-toggle');

    leftyToggle.addEventListener('change', (e) => {
        state.lefty = e.target.checked;
        fretboardGlass.classList.toggle('lefty', state.lefty);
    });

    noteToggle.addEventListener('change', (e) => {
        state.showNotes = e.target.checked;
        updateChord();
    });
}

// 포지션 네비게이션 설정
function setupPositionNavigation() {
    prevPosBtn.addEventListener('click', () => {
        if (state.currentPosition > 0) {
            state.currentPosition--;
            updateChord();
        }
    });

    nextPosBtn.addEventListener('click', () => {
        if (state.currentPosition < currentPositions.length - 1) {
            state.currentPosition++;
            updateChord();
        }
    });
}

// 코드 업데이트
function updateChord() {
    const { instrument, root, type } = state;

    if (typeof instrumentData === 'undefined') return;

    const instConfig = instrumentData[instrument];
    const chordData = instConfig.chords[root] && instConfig.chords[root][type];

    if (!chordData || chordData.length === 0) {
        chordNameDisplay.textContent = `${root} ${formatTypeName(type)}`;
        chordNotesDisplay.textContent = '데이터 준비중';
        clearBoard();
        currentPositions = [];
        updatePositionNav();
        return;
    }

    currentPositions = chordData;
    
    // 포지션 범위 체크
    if (state.currentPosition >= currentPositions.length) {
        state.currentPosition = 0;
    }

    currentChordData = currentPositions[state.currentPosition];

    // 코드명 표시
    chordNameDisplay.textContent = `${root} ${formatTypeName(type)}`;

    // 구성음 표시
    if (typeof getChordNoteNames === 'function') {
        const notes = getChordNoteNames(root, type);
        chordNotesDisplay.textContent = notes.join(' - ');
    }

    // 프렛보드 그리기
    clearBoard();
    drawBoard(instrument, instConfig, currentChordData);

    // 포지션 네비게이션 업데이트
    updatePositionNav();

    // 관련 코드 업데이트
    updateRelatedChords();
}

// 포지션 네비게이션 UI 업데이트
function updatePositionNav() {
    const total = currentPositions.length;
    const current = state.currentPosition + 1;

    positionLabel.textContent = `포지션 ${current}/${total}`;

    prevPosBtn.disabled = state.currentPosition === 0;
    nextPosBtn.disabled = state.currentPosition >= total - 1;
}

// 코드 타입명 포맷
function formatTypeName(type) {
    const typeNames = {
        'major': 'Major', 'minor': 'minor', '7': '7', 'm7': 'm7',
        'maj7': 'Maj7', 'sus2': 'sus2', 'sus4': 'sus4',
        'dim': 'dim', 'aug': 'aug', 'add9': 'add9', '6': '6', '9': '9'
    };
    return typeNames[type] || type;
}

// 프렛보드 그리기
function drawBoard(instrument, instConfig, data) {
    const stringCount = instConfig.strings;
    const startX = instrument === 'guitar' ? 50 : 82;
    const nutWidth = (stringCount - 1) * 32;

    nutElement.setAttribute("x", startX);
    nutElement.setAttribute("width", nutWidth);

    // 프렛 라인
    for (let i = 0; i < 6; i++) {
        const y = 30 + (i * 40);
        createSVG('line', { 
            x1: startX, y1: y, 
            x2: startX + nutWidth, y2: y, 
            class: 'fret' 
        }, fretLinesGroup);
    }

    // 줄
    for (let i = 0; i < stringCount; i++) {
        const x = startX + (i * 32);
        const thickness = instrument === 'guitar' 
            ? 2.5 - (i * 0.3) 
            : 2;
        createSVG('line', { 
            x1: x, y1: 30, 
            x2: x, y2: 230, 
            class: 'string',
            'stroke-width': thickness
        }, stringsGroup);
    }

    // 시작 프렛 계산
    const activeFrets = data.frets.filter(f => f > 0);
    const minFret = activeFrets.length > 0 ? Math.min(...activeFrets) : 1;
    const maxFret = activeFrets.length > 0 ? Math.max(...activeFrets) : 1;
    let startFret = 1;
    if (maxFret > 5) startFret = minFret;

    // 너트 표시
    nutElement.setAttribute("visibility", startFret === 1 ? "visible" : "hidden");

    // 프렛 마커 (3, 5, 7, 9, 12, 15 프렛)
    const markerFrets = [3, 5, 7, 9, 12, 15, 17, 19, 21];
    markerFrets.forEach(fret => {
        const relativeFret = fret - startFret + 1;
        if (relativeFret >= 1 && relativeFret <= 5) {
            const y = 30 + (relativeFret * 40) - 20;
            const centerX = startX + nutWidth / 2;
            
            if (fret === 12) {
                // 12프렛은 더블 마커
                createSVG('circle', {
                    cx: centerX - 20, cy: y, r: 4, class: 'fret-marker'
                }, fretMarkersGroup);
                createSVG('circle', {
                    cx: centerX + 20, cy: y, r: 4, class: 'fret-marker'
                }, fretMarkersGroup);
            } else {
                createSVG('circle', {
                    cx: centerX, cy: y, r: 4, class: 'fret-marker'
                }, fretMarkersGroup);
            }
        }
    });

    // 프렛 번호
    for (let i = 0; i < 5; i++) {
        const num = startFret + i;
        createSVG('text', {
            x: startX - 20, y: 50 + (i * 40),
            class: 'fret-num',
            'text-anchor': 'middle',
            'dominant-baseline': 'middle'
        }, fretNumGroup).textContent = num;
    }

    // 튜닝 기준 음이름
    const tuning = instConfig.tuning;

    // 손가락 위치
    data.frets.forEach((fret, idx) => {
        if (idx >= stringCount) return;
        const finger = data.fingers[idx];
        const x = startX + (idx * 32);

        // 실제 음 계산 (카포 고려)
        const stringNote = tuning[idx];
        const noteIndex = noteNames.indexOf(stringNote);
        const actualFret = fret === -1 ? -1 : fret + state.capo;
        const playedNoteIndex = fret === -1 ? -1 : (noteIndex + actualFret) % 12;
        const playedNote = fret === -1 ? '' : noteNames[playedNoteIndex];

        if (fret === -1) {
            // 뮤트
            const t = createSVG('text', { 
                x: x, y: 15, 
                'text-anchor': 'middle', 
                class: 'finger-text' 
            }, fingerGroup);
            t.textContent = 'X';
        } else if (fret === 0) {
            // 개방현
            drawCircle(x, 15, false, '', playedNote);
        } else {
            // 프렛 누름
            const relativeFret = fret - startFret + 1;
            if (relativeFret >= 1 && relativeFret <= 5) {
                const y = 30 + (relativeFret * 40) - 20;
                
                // 루트음 확인
                const chordRoot = state.root;
                const isRoot = playedNote === chordRoot;
                
                drawCircle(x, y, true, finger, playedNote, isRoot);
            }
        }
    });
}

// 원 그리기 (손가락 위치)
function drawCircle(x, y, isFilled, fingerNum, noteName, isRoot = false) {
    const group = createSVG('g', {}, fingerGroup);

    if (isFilled) {
        createSVG('circle', {
            cx: x, cy: y, r: 13,
            class: isRoot ? 'finger-dot root' : 'finger-dot filled'
        }, group);

        if (state.showNotes && noteName) {
            const text = createSVG('text', {
                x: x, y: y + 4,
                'text-anchor': 'middle',
                class: 'note-name-text'
            }, group);
            text.textContent = noteName;
        } else if (fingerNum > 0) {
            const text = createSVG('text', {
                x: x, y: y + 4,
                'text-anchor': 'middle',
                class: 'finger-num-text'
            }, group);
            text.textContent = fingerNum;
        }
    } else {
        // 개방현
        createSVG('circle', {
            cx: x, cy: y, r: 7,
            class: 'finger-dot open'
        }, group);

        if (state.showNotes && noteName) {
            const text = createSVG('text', {
                x: x, y: y + 4,
                'text-anchor': 'middle',
                class: 'note-name-text open',
                'font-size': '8px'
            }, group);
            text.textContent = noteName;
        }
    }
}

// 관련 코드 업데이트
function updateRelatedChords() {
    relatedGrid.innerHTML = '';

    const relatedTypes = getRelatedChords(state.root, state.type);
    
    relatedTypes.forEach(rel => {
        const btn = document.createElement('button');
        btn.className = 'related-chord-btn';
        btn.innerHTML = `${rel.root}${rel.suffix}<span class="chord-label">${rel.label}</span>`;
        btn.addEventListener('click', () => {
            // 루트음 변경
            document.querySelectorAll('.root-btn').forEach(b => {
                b.classList.toggle('active', b.dataset.root === rel.root);
            });
            // 타입 변경
            document.querySelectorAll('.type-btn').forEach(b => {
                b.classList.toggle('active', b.dataset.type === rel.type);
            });
            state.root = rel.root;
            state.type = rel.type;
            state.currentPosition = 0;
            updateChord();
        });
        relatedGrid.appendChild(btn);
    });
}

// 관련 코드 계산
function getRelatedChords(root, type) {
    const rootIndex = noteNames.indexOf(root);
    const related = [];

    // 평행조 (메이저 ↔ 마이너)
    if (type === 'major') {
        const minorRoot = noteNames[(rootIndex + 9) % 12]; // 단6도 아래 = 관계 단조
        related.push({ root: minorRoot, type: 'minor', suffix: 'm', label: '관계단조' });
    } else if (type === 'minor') {
        const majorRoot = noteNames[(rootIndex + 3) % 12]; // 단3도 위 = 관계 장조
        related.push({ root: majorRoot, type: 'major', suffix: '', label: '관계장조' });
    }

    // 같은 루트의 다른 코드
    if (type === 'major') {
        related.push({ root, type: '7', suffix: '7', label: '도미넌트' });
        related.push({ root, type: 'maj7', suffix: 'M7', label: '메이저7' });
    } else if (type === 'minor') {
        related.push({ root, type: 'm7', suffix: 'm7', label: '마이너7' });
    }

    // 4도/5도 관계
    const fourthRoot = noteNames[(rootIndex + 5) % 12];
    const fifthRoot = noteNames[(rootIndex + 7) % 12];
    
    related.push({ root: fourthRoot, type: type === 'minor' ? 'minor' : 'major', 
                   suffix: type === 'minor' ? 'm' : '', label: 'IV (서브도미넌트)' });
    related.push({ root: fifthRoot, type: type === 'minor' ? 'minor' : 'major', 
                   suffix: type === 'minor' ? 'm' : '', label: 'V (도미넌트)' });

    return related.slice(0, 4); // 최대 4개
}

// 코드 재생
function playChord() {
    if (!currentChordData) return;
    
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    const instrument = state.instrument;
    const instConfig = instrumentData[instrument];
    const baseFreqs = instConfig.tuningFreq;
    const frets = currentChordData.frets;
    let delay = 0;

    // 버튼 애니메이션
    playBtn.style.transform = 'scale(0.95)';
    setTimeout(() => playBtn.style.transform = '', 100);

    frets.forEach((fret, index) => {
        if (fret !== -1) {
            const actualFret = fret + state.capo;
            const frequency = baseFreqs[index] * Math.pow(2, actualFret / 12);
            playTone(frequency, audioCtx.currentTime + delay);
            delay += 0.04;
        }
    });
}

// 톤 재생
function playTone(freq, startTime) {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    // 기타/우쿨렐레 소리 시뮬레이션
    osc.type = 'triangle';
    osc.frequency.value = freq;

    filter.type = 'lowpass';
    filter.frequency.value = 2000;
    filter.Q.value = 1;

    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(0.35, startTime + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.15, startTime + 0.3);
    gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + 2);

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start(startTime);
    osc.stop(startTime + 2);
}

// 보드 초기화
function clearBoard() {
    fretLinesGroup.innerHTML = '';
    stringsGroup.innerHTML = '';
    fingerGroup.innerHTML = '';
    fretNumGroup.innerHTML = '';
    if (fretMarkersGroup) fretMarkersGroup.innerHTML = '';
}

// SVG 요소 생성
function createSVG(type, attributes, parent) {
    const el = document.createElementNS("http://www.w3.org/2000/svg", type);
    for (const key in attributes) {
        el.setAttribute(key, attributes[key]);
    }
    if (parent) parent.appendChild(el);
    return el;
}