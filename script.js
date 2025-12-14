// 상태 변수
let state = {
    instrument: 'guitar',
    root: 'C',
    type: 'major'
};

const playBtn = document.getElementById('play-btn');

// 실행
document.addEventListener('DOMContentLoaded', () => {
    setupDropdowns();
    // 데이터 로드 확인 후 실행
    if (typeof instrumentData !== 'undefined') {
        updateChord();
    } else {
        alert("chords.js 파일이 로드되지 않았습니다.");
    }
});

playBtn.addEventListener('click', playChord);

// 드롭다운 설정
function setupDropdowns() {
    const dropdowns = document.querySelectorAll('.custom-dropdown');
    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.dropdown-btn');
        const items = dropdown.querySelectorAll('.dropdown-item');

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeAllDropdowns(dropdown);
            dropdown.classList.toggle('active');
        });

        items.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const value = item.dataset.value;
                btn.textContent = item.textContent;
                
                if (dropdown.id === 'dd-instrument') state.instrument = value;
                if (dropdown.id === 'dd-root') state.root = value;
                if (dropdown.id === 'dd-type') state.type = value;

                dropdown.classList.remove('active');
                updateChord();
            });
        });
    });

    document.addEventListener('click', () => closeAllDropdowns());
}

function closeAllDropdowns(except) {
    document.querySelectorAll('.custom-dropdown').forEach(dd => {
        if (dd !== except) dd.classList.remove('active');
    });
}

// 그리기 로직
const fretLinesGroup = document.getElementById('fret-lines');
const stringsGroup = document.getElementById('strings');
const fingerGroup = document.getElementById('finger-positions');
const fretNumGroup = document.getElementById('fret-numbers');
const nutElement = document.getElementById('nut');
const chordNameDisplay = document.getElementById('chord-name-display');

let currentChordData = null;
const tuningFreq = {
    "guitar": [82.41, 110.00, 146.83, 196.00, 246.94, 329.63],
    "ukulele": [392.00, 261.63, 329.63, 440.00] 
};

function updateChord() {
    const { instrument, root, type } = state;
    
    // 데이터 체크
    if (typeof instrumentData === 'undefined') return;

    const instConfig = instrumentData[instrument];
    const data = (instConfig.chords[root] && instConfig.chords[root][type]) ? instConfig.chords[root][type] : null;

    currentChordData = data;
    const instName = instrument === 'guitar' ? 'GUITAR' : 'UKULELE';
    
    if (!data) {
        chordNameDisplay.innerHTML = `<span style="font-size:0.6em; opacity:0.7">${instName}</span><br>준비중`;
        clearBoard();
        return;
    }
    
    let typeDisplay = type.replace('_', ' ');
    if(type === 'high_major') typeDisplay = 'Major (High)';

    chordNameDisplay.innerHTML = `<span style="font-size:0.6em; opacity:0.7">${instName}</span><br>${root} ${typeDisplay}`;
    
    clearBoard();
    drawBoard(instrument, instConfig, data);
}

function drawBoard(instrument, instConfig, data) {
    const stringCount = instConfig.strings;
    const startX = instrument === 'guitar' ? 50 : 82; 
    const nutWidth = (stringCount - 1) * 32;

    nutElement.setAttribute("x", startX);
    nutElement.setAttribute("width", nutWidth);

    // 프렛
    for (let i = 0; i < 6; i++) {
        const y = 30 + (i * 40);
        createSVG('line', { x1: startX, y1: y, x2: startX + nutWidth, y2: y, class: 'fret' }, fretLinesGroup);
    }
    // 줄
    for (let i = 0; i < stringCount; i++) {
        const x = startX + (i * 32);
        createSVG('line', { x1: x, y1: 30, x2: x, y2: 230, class: 'string' }, stringsGroup);
    }

    const activeFrets = data.frets.filter(f => f > 0);
    const minFret = activeFrets.length > 0 ? Math.min(...activeFrets) : 1;
    const maxFret = activeFrets.length > 0 ? Math.max(...activeFrets) : 1;
    let startFret = 1;
    if (maxFret > 5) startFret = minFret;

    nutElement.setAttribute("visibility", startFret === 1 ? "visible" : "hidden");

    for (let i = 0; i < 5; i++) {
        const num = startFret + i;
        const text = createSVG('text', {
            x: startX - 25, y: 50 + (i * 40), class: 'fret-num', "text-anchor": "middle", "dominant-baseline": "middle"
        }, fretNumGroup);
        text.textContent = num;
    }

    data.frets.forEach((fret, idx) => {
        if (idx >= stringCount) return;
        const finger = data.fingers[idx];
        const x = startX + (idx * 32);

        if (fret === -1) {
            const t = createSVG('text', { x: x, y: 15, "text-anchor": "middle", class: "finger-text" }, fingerGroup);
            t.textContent = 'X';
        } else if (fret === 0) {
            drawCircle(x, 15, false, '');
        } else {
            const relativeFret = fret - startFret + 1;
            if (relativeFret >= 1 && relativeFret <= 5) {
                const y = 30 + (relativeFret * 40) - 20;
                drawCircle(x, y, true, finger);
            }
        }
    });
}

// 오디오 재생
let audioCtx = null;
function playChord() {
    if (!currentChordData) return;
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const instrument = state.instrument;
    const baseFreqs = tuningFreq[instrument];
    const frets = currentChordData.frets;
    let delay = 0;

    frets.forEach((fret, index) => {
        if (fret !== -1) {
            const frequency = baseFreqs[index] * Math.pow(2, fret / 12);
            playTone(frequency, audioCtx.currentTime + delay);
            delay += 0.05;
        }
    });
}

function playTone(freq, startTime) {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.value = freq;
    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(0.3, startTime + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + 1.5);
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc.start(startTime);
    osc.stop(startTime + 1.5);
}

function clearBoard() {
    fretLinesGroup.innerHTML = ''; stringsGroup.innerHTML = '';
    fingerGroup.innerHTML = ''; fretNumGroup.innerHTML = '';
}

function createSVG(type, attributes, parent) {
    const el = document.createElementNS("http://www.w3.org/2000/svg", type);
    for (const key in attributes) el.setAttribute(key, attributes[key]);
    if (parent) parent.appendChild(el);
    return el;
}

function drawCircle(x, y, isFilled, fingerNum) {
    const group = createSVG('g', {}, fingerGroup);
    createSVG('circle', {
        cx: x, cy: y, r: isFilled ? 12 : 7,
        class: isFilled ? 'finger-dot filled' : 'finger-dot open'
    }, group);
    
    if (isFilled && fingerNum > 0) {
        const text = createSVG('text', {
            x: x, y: y + 5, "text-anchor": "middle", class: "finger-num-text"
        }, group);
        text.textContent = fingerNum;
    }
}