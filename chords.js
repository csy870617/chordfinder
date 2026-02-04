// 전체 12음계와 다양한 코드 타입, 여러 포지션 지원
const instrumentData = {
    "guitar": {
        "strings": 6,
        "tuning": ["E", "A", "D", "G", "B", "E"],
        "tuningFreq": [82.41, 110.00, 146.83, 196.00, 246.94, 329.63],
        "chords": {
            "C": {
                "major": [
                    { frets: [-1, 3, 2, 0, 1, 0], fingers: [0, 3, 2, 0, 1, 0], position: 1 },
                    { frets: [8, 10, 10, 9, 8, 8], fingers: [1, 3, 4, 2, 1, 1], position: 8 },
                    { frets: [-1, 3, 5, 5, 5, 3], fingers: [0, 1, 2, 3, 4, 1], position: 3 }
                ],
                "minor": [
                    { frets: [-1, 3, 5, 5, 4, 3], fingers: [0, 1, 3, 4, 2, 1], position: 3 },
                    { frets: [8, 10, 10, 8, 8, 8], fingers: [1, 3, 4, 1, 1, 1], position: 8 }
                ],
                "7": [
                    { frets: [-1, 3, 2, 3, 1, 0], fingers: [0, 3, 2, 4, 1, 0], position: 1 },
                    { frets: [8, 10, 8, 9, 8, 8], fingers: [1, 3, 1, 2, 1, 1], position: 8 }
                ],
                "m7": [
                    { frets: [-1, 3, 5, 3, 4, 3], fingers: [0, 1, 3, 1, 2, 1], position: 3 },
                    { frets: [8, 10, 8, 8, 8, 8], fingers: [1, 3, 1, 1, 1, 1], position: 8 }
                ],
                "maj7": [
                    { frets: [-1, 3, 2, 0, 0, 0], fingers: [0, 3, 2, 0, 0, 0], position: 1 },
                    { frets: [8, 10, 9, 9, 8, 8], fingers: [1, 4, 2, 3, 1, 1], position: 8 }
                ],
                "sus2": [
                    { frets: [-1, 3, 0, 0, 1, 3], fingers: [0, 2, 0, 0, 1, 3], position: 1 }
                ],
                "sus4": [
                    { frets: [-1, 3, 3, 0, 1, 1], fingers: [0, 3, 4, 0, 1, 1], position: 1 }
                ],
                "dim": [
                    { frets: [-1, 3, 4, 2, 4, 2], fingers: [0, 2, 3, 1, 4, 1], position: 2 }
                ],
                "aug": [
                    { frets: [-1, 3, 2, 1, 1, 0], fingers: [0, 4, 3, 1, 2, 0], position: 1 }
                ],
                "add9": [
                    { frets: [-1, 3, 2, 0, 3, 0], fingers: [0, 2, 1, 0, 3, 0], position: 1 }
                ],
                "6": [
                    { frets: [-1, 3, 2, 2, 1, 0], fingers: [0, 4, 2, 3, 1, 0], position: 1 }
                ],
                "9": [
                    { frets: [-1, 3, 2, 3, 3, 3], fingers: [0, 2, 1, 3, 3, 3], position: 1 }
                ]
            },
            "C#": {
                "major": [
                    { frets: [-1, 4, 3, 1, 2, 1], fingers: [0, 4, 3, 1, 2, 1], position: 1 },
                    { frets: [9, 11, 11, 10, 9, 9], fingers: [1, 3, 4, 2, 1, 1], position: 9 }
                ],
                "minor": [
                    { frets: [-1, 4, 6, 6, 5, 4], fingers: [0, 1, 3, 4, 2, 1], position: 4 },
                    { frets: [9, 11, 11, 9, 9, 9], fingers: [1, 3, 4, 1, 1, 1], position: 9 }
                ],
                "7": [
                    { frets: [-1, 4, 3, 4, 2, 1], fingers: [0, 3, 2, 4, 1, 1], position: 1 }
                ],
                "m7": [
                    { frets: [-1, 4, 6, 4, 5, 4], fingers: [0, 1, 3, 1, 2, 1], position: 4 }
                ],
                "maj7": [
                    { frets: [-1, 4, 3, 1, 1, 1], fingers: [0, 4, 3, 1, 1, 1], position: 1 }
                ],
                "sus2": [
                    { frets: [-1, 4, 6, 6, 4, 4], fingers: [0, 1, 3, 4, 1, 1], position: 4 }
                ],
                "sus4": [
                    { frets: [-1, 4, 4, 1, 2, 2], fingers: [0, 3, 4, 1, 2, 2], position: 1 }
                ],
                "dim": [
                    { frets: [-1, 4, 5, 3, 5, 3], fingers: [0, 2, 3, 1, 4, 1], position: 3 }
                ],
                "aug": [
                    { frets: [-1, 4, 3, 2, 2, 1], fingers: [0, 4, 3, 2, 2, 1], position: 1 }
                ],
                "add9": [
                    { frets: [-1, 4, 3, 1, 4, 1], fingers: [0, 3, 2, 1, 4, 1], position: 1 }
                ],
                "6": [
                    { frets: [-1, 4, 3, 3, 2, 1], fingers: [0, 4, 2, 3, 1, 1], position: 1 }
                ],
                "9": [
                    { frets: [9, 11, 9, 10, 9, 11], fingers: [1, 3, 1, 2, 1, 4], position: 9 }
                ]
            },
            "D": {
                "major": [
                    { frets: [-1, -1, 0, 2, 3, 2], fingers: [0, 0, 0, 1, 3, 2], position: 1 },
                    { frets: [-1, 5, 7, 7, 7, 5], fingers: [0, 1, 2, 3, 4, 1], position: 5 },
                    { frets: [10, 12, 12, 11, 10, 10], fingers: [1, 3, 4, 2, 1, 1], position: 10 }
                ],
                "minor": [
                    { frets: [-1, -1, 0, 2, 3, 1], fingers: [0, 0, 0, 2, 3, 1], position: 1 },
                    { frets: [-1, 5, 7, 7, 6, 5], fingers: [0, 1, 3, 4, 2, 1], position: 5 }
                ],
                "7": [
                    { frets: [-1, -1, 0, 2, 1, 2], fingers: [0, 0, 0, 2, 1, 3], position: 1 },
                    { frets: [10, 12, 10, 11, 10, 10], fingers: [1, 3, 1, 2, 1, 1], position: 10 }
                ],
                "m7": [
                    { frets: [-1, -1, 0, 2, 1, 1], fingers: [0, 0, 0, 2, 1, 1], position: 1 }
                ],
                "maj7": [
                    { frets: [-1, -1, 0, 2, 2, 2], fingers: [0, 0, 0, 1, 1, 1], position: 1 }
                ],
                "sus2": [
                    { frets: [-1, -1, 0, 2, 3, 0], fingers: [0, 0, 0, 1, 2, 0], position: 1 }
                ],
                "sus4": [
                    { frets: [-1, -1, 0, 2, 3, 3], fingers: [0, 0, 0, 1, 3, 4], position: 1 }
                ],
                "dim": [
                    { frets: [-1, -1, 0, 1, 3, 1], fingers: [0, 0, 0, 1, 3, 2], position: 1 }
                ],
                "aug": [
                    { frets: [-1, -1, 0, 3, 3, 2], fingers: [0, 0, 0, 2, 3, 1], position: 1 }
                ],
                "add9": [
                    { frets: [-1, -1, 0, 2, 3, 0], fingers: [0, 0, 0, 1, 2, 0], position: 1 }
                ],
                "6": [
                    { frets: [-1, -1, 0, 2, 0, 2], fingers: [0, 0, 0, 1, 0, 2], position: 1 }
                ],
                "9": [
                    { frets: [-1, 5, 4, 5, 5, 5], fingers: [0, 2, 1, 3, 3, 3], position: 4 }
                ]
            },
            "D#": {
                "major": [
                    { frets: [-1, 6, 8, 8, 8, 6], fingers: [0, 1, 2, 3, 4, 1], position: 6 },
                    { frets: [11, 13, 13, 12, 11, 11], fingers: [1, 3, 4, 2, 1, 1], position: 11 }
                ],
                "minor": [
                    { frets: [-1, 6, 8, 8, 7, 6], fingers: [0, 1, 3, 4, 2, 1], position: 6 }
                ],
                "7": [
                    { frets: [-1, -1, 1, 3, 2, 3], fingers: [0, 0, 1, 3, 2, 4], position: 1 }
                ],
                "m7": [
                    { frets: [-1, -1, 1, 3, 2, 2], fingers: [0, 0, 1, 3, 2, 2], position: 1 }
                ],
                "maj7": [
                    { frets: [-1, -1, 1, 3, 3, 3], fingers: [0, 0, 1, 2, 3, 4], position: 1 }
                ],
                "sus2": [
                    { frets: [-1, 6, 8, 8, 6, 6], fingers: [0, 1, 3, 4, 1, 1], position: 6 }
                ],
                "sus4": [
                    { frets: [-1, 6, 6, 8, 8, 6], fingers: [0, 1, 1, 3, 4, 1], position: 6 }
                ],
                "dim": [
                    { frets: [-1, -1, 1, 2, 1, 2], fingers: [0, 0, 1, 3, 2, 4], position: 1 }
                ],
                "aug": [
                    { frets: [-1, -1, 1, 0, 0, 3], fingers: [0, 0, 1, 0, 0, 4], position: 1 }
                ],
                "add9": [
                    { frets: [-1, 6, 5, 8, 6, 6], fingers: [0, 2, 1, 4, 3, 3], position: 5 }
                ],
                "6": [
                    { frets: [-1, -1, 1, 3, 1, 3], fingers: [0, 0, 1, 3, 1, 4], position: 1 }
                ],
                "9": [
                    { frets: [-1, 6, 5, 6, 6, 6], fingers: [0, 2, 1, 3, 3, 3], position: 5 }
                ]
            },
            "E": {
                "major": [
                    { frets: [0, 2, 2, 1, 0, 0], fingers: [0, 2, 3, 1, 0, 0], position: 1 },
                    { frets: [-1, 7, 9, 9, 9, 7], fingers: [0, 1, 2, 3, 4, 1], position: 7 }
                ],
                "minor": [
                    { frets: [0, 2, 2, 0, 0, 0], fingers: [0, 2, 3, 0, 0, 0], position: 1 },
                    { frets: [-1, 7, 9, 9, 8, 7], fingers: [0, 1, 3, 4, 2, 1], position: 7 }
                ],
                "7": [
                    { frets: [0, 2, 0, 1, 0, 0], fingers: [0, 2, 0, 1, 0, 0], position: 1 },
                    { frets: [0, 2, 2, 1, 3, 0], fingers: [0, 1, 2, 1, 3, 0], position: 1 }
                ],
                "m7": [
                    { frets: [0, 2, 0, 0, 0, 0], fingers: [0, 2, 0, 0, 0, 0], position: 1 },
                    { frets: [0, 2, 2, 0, 3, 0], fingers: [0, 1, 2, 0, 3, 0], position: 1 }
                ],
                "maj7": [
                    { frets: [0, 2, 1, 1, 0, 0], fingers: [0, 3, 1, 2, 0, 0], position: 1 }
                ],
                "sus2": [
                    { frets: [0, 2, 4, 4, 0, 0], fingers: [0, 1, 3, 4, 0, 0], position: 1 }
                ],
                "sus4": [
                    { frets: [0, 2, 2, 2, 0, 0], fingers: [0, 2, 3, 4, 0, 0], position: 1 }
                ],
                "dim": [
                    { frets: [0, 1, 2, 0, -1, 0], fingers: [0, 1, 2, 0, 0, 0], position: 1 }
                ],
                "aug": [
                    { frets: [0, 3, 2, 1, 1, 0], fingers: [0, 4, 3, 1, 2, 0], position: 1 }
                ],
                "add9": [
                    { frets: [0, 2, 2, 1, 0, 2], fingers: [0, 2, 3, 1, 0, 4], position: 1 }
                ],
                "6": [
                    { frets: [0, 2, 2, 1, 2, 0], fingers: [0, 2, 3, 1, 4, 0], position: 1 }
                ],
                "9": [
                    { frets: [0, 2, 0, 1, 0, 2], fingers: [0, 2, 0, 1, 0, 3], position: 1 }
                ]
            },
            "F": {
                "major": [
                    { frets: [1, 3, 3, 2, 1, 1], fingers: [1, 3, 4, 2, 1, 1], position: 1 },
                    { frets: [-1, 8, 10, 10, 10, 8], fingers: [0, 1, 2, 3, 4, 1], position: 8 }
                ],
                "minor": [
                    { frets: [1, 3, 3, 1, 1, 1], fingers: [1, 3, 4, 1, 1, 1], position: 1 },
                    { frets: [-1, 8, 10, 10, 9, 8], fingers: [0, 1, 3, 4, 2, 1], position: 8 }
                ],
                "7": [
                    { frets: [1, 3, 1, 2, 1, 1], fingers: [1, 3, 1, 2, 1, 1], position: 1 }
                ],
                "m7": [
                    { frets: [1, 3, 1, 1, 1, 1], fingers: [1, 3, 1, 1, 1, 1], position: 1 }
                ],
                "maj7": [
                    { frets: [-1, -1, 3, 2, 1, 0], fingers: [0, 0, 3, 2, 1, 0], position: 1 },
                    { frets: [1, 3, 2, 2, 1, 1], fingers: [1, 4, 2, 3, 1, 1], position: 1 }
                ],
                "sus2": [
                    { frets: [-1, -1, 3, 0, 1, 1], fingers: [0, 0, 3, 0, 1, 1], position: 1 }
                ],
                "sus4": [
                    { frets: [1, 3, 3, 3, 1, 1], fingers: [1, 3, 4, 4, 1, 1], position: 1 }
                ],
                "dim": [
                    { frets: [1, 2, 3, 1, -1, 1], fingers: [1, 2, 3, 1, 0, 1], position: 1 }
                ],
                "aug": [
                    { frets: [-1, -1, 3, 2, 2, 1], fingers: [0, 0, 4, 2, 3, 1], position: 1 }
                ],
                "add9": [
                    { frets: [1, 3, 3, 2, 1, 3], fingers: [1, 2, 3, 1, 1, 4], position: 1 }
                ],
                "6": [
                    { frets: [1, 3, 3, 2, 3, 1], fingers: [1, 2, 3, 1, 4, 1], position: 1 }
                ],
                "9": [
                    { frets: [1, 3, 1, 2, 1, 3], fingers: [1, 3, 1, 2, 1, 4], position: 1 }
                ]
            },
            "F#": {
                "major": [
                    { frets: [2, 4, 4, 3, 2, 2], fingers: [1, 3, 4, 2, 1, 1], position: 2 },
                    { frets: [-1, 9, 11, 11, 11, 9], fingers: [0, 1, 2, 3, 4, 1], position: 9 }
                ],
                "minor": [
                    { frets: [2, 4, 4, 2, 2, 2], fingers: [1, 3, 4, 1, 1, 1], position: 2 }
                ],
                "7": [
                    { frets: [2, 4, 2, 3, 2, 2], fingers: [1, 3, 1, 2, 1, 1], position: 2 }
                ],
                "m7": [
                    { frets: [2, 4, 2, 2, 2, 2], fingers: [1, 3, 1, 1, 1, 1], position: 2 }
                ],
                "maj7": [
                    { frets: [2, 4, 3, 3, 2, 2], fingers: [1, 4, 2, 3, 1, 1], position: 2 }
                ],
                "sus2": [
                    { frets: [2, 4, 4, 4, 2, 2], fingers: [1, 2, 3, 4, 1, 1], position: 2 }
                ],
                "sus4": [
                    { frets: [2, 4, 4, 4, 2, 2], fingers: [1, 3, 4, 4, 1, 1], position: 2 }
                ],
                "dim": [
                    { frets: [2, 3, 4, 2, -1, 2], fingers: [1, 2, 3, 1, 0, 1], position: 2 }
                ],
                "aug": [
                    { frets: [2, -1, 4, 3, 3, 2], fingers: [1, 0, 4, 2, 3, 1], position: 2 }
                ],
                "add9": [
                    { frets: [2, 4, 4, 3, 2, 4], fingers: [1, 2, 3, 1, 1, 4], position: 2 }
                ],
                "6": [
                    { frets: [2, 4, 4, 3, 4, 2], fingers: [1, 2, 3, 1, 4, 1], position: 2 }
                ],
                "9": [
                    { frets: [2, 4, 2, 3, 2, 4], fingers: [1, 3, 1, 2, 1, 4], position: 2 }
                ]
            },
            "G": {
                "major": [
                    { frets: [3, 2, 0, 0, 0, 3], fingers: [2, 1, 0, 0, 0, 3], position: 1 },
                    { frets: [3, 2, 0, 0, 3, 3], fingers: [2, 1, 0, 0, 3, 4], position: 1 },
                    { frets: [3, 5, 5, 4, 3, 3], fingers: [1, 3, 4, 2, 1, 1], position: 3 }
                ],
                "minor": [
                    { frets: [3, 5, 5, 3, 3, 3], fingers: [1, 3, 4, 1, 1, 1], position: 3 }
                ],
                "7": [
                    { frets: [3, 2, 0, 0, 0, 1], fingers: [3, 2, 0, 0, 0, 1], position: 1 },
                    { frets: [3, 5, 3, 4, 3, 3], fingers: [1, 3, 1, 2, 1, 1], position: 3 }
                ],
                "m7": [
                    { frets: [3, 5, 3, 3, 3, 3], fingers: [1, 3, 1, 1, 1, 1], position: 3 }
                ],
                "maj7": [
                    { frets: [3, 2, 0, 0, 0, 2], fingers: [3, 2, 0, 0, 0, 1], position: 1 }
                ],
                "sus2": [
                    { frets: [3, 0, 0, 0, 3, 3], fingers: [2, 0, 0, 0, 3, 4], position: 1 }
                ],
                "sus4": [
                    { frets: [3, 3, 0, 0, 1, 3], fingers: [2, 3, 0, 0, 1, 4], position: 1 }
                ],
                "dim": [
                    { frets: [3, 4, 5, 3, -1, 3], fingers: [1, 2, 3, 1, 0, 1], position: 3 }
                ],
                "aug": [
                    { frets: [3, 2, 1, 0, 0, 3], fingers: [3, 2, 1, 0, 0, 4], position: 1 }
                ],
                "add9": [
                    { frets: [3, 2, 0, 2, 0, 3], fingers: [2, 1, 0, 3, 0, 4], position: 1 }
                ],
                "6": [
                    { frets: [3, 2, 0, 0, 0, 0], fingers: [2, 1, 0, 0, 0, 0], position: 1 }
                ],
                "9": [
                    { frets: [3, 2, 0, 2, 0, 1], fingers: [3, 2, 0, 4, 0, 1], position: 1 }
                ]
            },
            "G#": {
                "major": [
                    { frets: [4, 6, 6, 5, 4, 4], fingers: [1, 3, 4, 2, 1, 1], position: 4 }
                ],
                "minor": [
                    { frets: [4, 6, 6, 4, 4, 4], fingers: [1, 3, 4, 1, 1, 1], position: 4 }
                ],
                "7": [
                    { frets: [4, 6, 4, 5, 4, 4], fingers: [1, 3, 1, 2, 1, 1], position: 4 }
                ],
                "m7": [
                    { frets: [4, 6, 4, 4, 4, 4], fingers: [1, 3, 1, 1, 1, 1], position: 4 }
                ],
                "maj7": [
                    { frets: [4, 6, 5, 5, 4, 4], fingers: [1, 4, 2, 3, 1, 1], position: 4 }
                ],
                "sus2": [
                    { frets: [4, 6, 6, 6, 4, 4], fingers: [1, 2, 3, 4, 1, 1], position: 4 }
                ],
                "sus4": [
                    { frets: [4, 6, 6, 6, 4, 4], fingers: [1, 3, 4, 4, 1, 1], position: 4 }
                ],
                "dim": [
                    { frets: [4, 5, 6, 4, -1, 4], fingers: [1, 2, 3, 1, 0, 1], position: 4 }
                ],
                "aug": [
                    { frets: [4, -1, 6, 5, 5, 4], fingers: [1, 0, 4, 2, 3, 1], position: 4 }
                ],
                "add9": [
                    { frets: [4, 6, 6, 5, 4, 6], fingers: [1, 2, 3, 1, 1, 4], position: 4 }
                ],
                "6": [
                    { frets: [4, 6, 6, 5, 6, 4], fingers: [1, 2, 3, 1, 4, 1], position: 4 }
                ],
                "9": [
                    { frets: [4, 6, 4, 5, 4, 6], fingers: [1, 3, 1, 2, 1, 4], position: 4 }
                ]
            },
            "A": {
                "major": [
                    { frets: [-1, 0, 2, 2, 2, 0], fingers: [0, 0, 2, 3, 4, 0], position: 1 },
                    { frets: [5, 7, 7, 6, 5, 5], fingers: [1, 3, 4, 2, 1, 1], position: 5 }
                ],
                "minor": [
                    { frets: [-1, 0, 2, 2, 1, 0], fingers: [0, 0, 2, 3, 1, 0], position: 1 },
                    { frets: [5, 7, 7, 5, 5, 5], fingers: [1, 3, 4, 1, 1, 1], position: 5 }
                ],
                "7": [
                    { frets: [-1, 0, 2, 0, 2, 0], fingers: [0, 0, 2, 0, 3, 0], position: 1 },
                    { frets: [5, 7, 5, 6, 5, 5], fingers: [1, 3, 1, 2, 1, 1], position: 5 }
                ],
                "m7": [
                    { frets: [-1, 0, 2, 0, 1, 0], fingers: [0, 0, 2, 0, 1, 0], position: 1 }
                ],
                "maj7": [
                    { frets: [-1, 0, 2, 1, 2, 0], fingers: [0, 0, 2, 1, 3, 0], position: 1 }
                ],
                "sus2": [
                    { frets: [-1, 0, 2, 2, 0, 0], fingers: [0, 0, 1, 2, 0, 0], position: 1 }
                ],
                "sus4": [
                    { frets: [-1, 0, 2, 2, 3, 0], fingers: [0, 0, 2, 3, 4, 0], position: 1 }
                ],
                "dim": [
                    { frets: [-1, 0, 1, 2, 1, -1], fingers: [0, 0, 1, 3, 2, 0], position: 1 }
                ],
                "aug": [
                    { frets: [-1, 0, 3, 2, 2, 1], fingers: [0, 0, 4, 2, 3, 1], position: 1 }
                ],
                "add9": [
                    { frets: [-1, 0, 2, 2, 0, 0], fingers: [0, 0, 1, 2, 0, 0], position: 1 }
                ],
                "6": [
                    { frets: [-1, 0, 2, 2, 2, 2], fingers: [0, 0, 1, 2, 3, 4], position: 1 }
                ],
                "9": [
                    { frets: [-1, 0, 2, 4, 2, 3], fingers: [0, 0, 1, 4, 2, 3], position: 1 }
                ]
            },
            "A#": {
                "major": [
                    { frets: [-1, 1, 3, 3, 3, 1], fingers: [0, 1, 2, 3, 4, 1], position: 1 },
                    { frets: [6, 8, 8, 7, 6, 6], fingers: [1, 3, 4, 2, 1, 1], position: 6 }
                ],
                "minor": [
                    { frets: [-1, 1, 3, 3, 2, 1], fingers: [0, 1, 3, 4, 2, 1], position: 1 },
                    { frets: [6, 8, 8, 6, 6, 6], fingers: [1, 3, 4, 1, 1, 1], position: 6 }
                ],
                "7": [
                    { frets: [-1, 1, 3, 1, 3, 1], fingers: [0, 1, 3, 1, 4, 1], position: 1 }
                ],
                "m7": [
                    { frets: [-1, 1, 3, 1, 2, 1], fingers: [0, 1, 3, 1, 2, 1], position: 1 }
                ],
                "maj7": [
                    { frets: [-1, 1, 3, 2, 3, 1], fingers: [0, 1, 3, 2, 4, 1], position: 1 }
                ],
                "sus2": [
                    { frets: [-1, 1, 3, 3, 1, 1], fingers: [0, 1, 3, 4, 1, 1], position: 1 }
                ],
                "sus4": [
                    { frets: [-1, 1, 3, 3, 4, 1], fingers: [0, 1, 2, 3, 4, 1], position: 1 }
                ],
                "dim": [
                    { frets: [-1, 1, 2, 3, 2, -1], fingers: [0, 1, 2, 4, 3, 0], position: 1 }
                ],
                "aug": [
                    { frets: [-1, 1, 4, 3, 3, 2], fingers: [0, 1, 4, 2, 3, 1], position: 1 }
                ],
                "add9": [
                    { frets: [-1, 1, 3, 3, 1, 1], fingers: [0, 1, 3, 4, 1, 1], position: 1 }
                ],
                "6": [
                    { frets: [-1, 1, 3, 3, 3, 3], fingers: [0, 1, 2, 3, 4, 4], position: 1 }
                ],
                "9": [
                    { frets: [6, 8, 6, 7, 6, 8], fingers: [1, 3, 1, 2, 1, 4], position: 6 }
                ]
            },
            "B": {
                "major": [
                    { frets: [-1, 2, 4, 4, 4, 2], fingers: [0, 1, 2, 3, 4, 1], position: 2 },
                    { frets: [7, 9, 9, 8, 7, 7], fingers: [1, 3, 4, 2, 1, 1], position: 7 }
                ],
                "minor": [
                    { frets: [-1, 2, 4, 4, 3, 2], fingers: [0, 1, 3, 4, 2, 1], position: 2 },
                    { frets: [7, 9, 9, 7, 7, 7], fingers: [1, 3, 4, 1, 1, 1], position: 7 }
                ],
                "7": [
                    { frets: [-1, 2, 1, 2, 0, 2], fingers: [0, 2, 1, 3, 0, 4], position: 1 },
                    { frets: [-1, 2, 4, 2, 4, 2], fingers: [0, 1, 3, 1, 4, 1], position: 2 }
                ],
                "m7": [
                    { frets: [-1, 2, 4, 2, 3, 2], fingers: [0, 1, 3, 1, 2, 1], position: 2 }
                ],
                "maj7": [
                    { frets: [-1, 2, 4, 3, 4, 2], fingers: [0, 1, 3, 2, 4, 1], position: 2 }
                ],
                "sus2": [
                    { frets: [-1, 2, 4, 4, 2, 2], fingers: [0, 1, 3, 4, 1, 1], position: 2 }
                ],
                "sus4": [
                    { frets: [-1, 2, 4, 4, 5, 2], fingers: [0, 1, 2, 3, 4, 1], position: 2 }
                ],
                "dim": [
                    { frets: [-1, 2, 3, 4, 3, -1], fingers: [0, 1, 2, 4, 3, 0], position: 2 }
                ],
                "aug": [
                    { frets: [-1, 2, 5, 4, 4, 3], fingers: [0, 1, 4, 2, 3, 1], position: 2 }
                ],
                "add9": [
                    { frets: [-1, 2, 4, 4, 2, 2], fingers: [0, 1, 3, 4, 1, 1], position: 2 }
                ],
                "6": [
                    { frets: [-1, 2, 4, 4, 4, 4], fingers: [0, 1, 2, 3, 4, 4], position: 2 }
                ],
                "9": [
                    { frets: [7, 9, 7, 8, 7, 9], fingers: [1, 3, 1, 2, 1, 4], position: 7 }
                ]
            }
        }
    },
    "ukulele": {
        "strings": 4,
        "tuning": ["G", "C", "E", "A"],
        "tuningFreq": [392.00, 261.63, 329.63, 440.00],
        "chords": {
            "C": {
                "major": [
                    { frets: [0, 0, 0, 3], fingers: [0, 0, 0, 3], position: 1 },
                    { frets: [5, 4, 3, 3], fingers: [3, 2, 1, 1], position: 3 }
                ],
                "minor": [
                    { frets: [0, 3, 3, 3], fingers: [0, 3, 2, 1], position: 1 }
                ],
                "7": [
                    { frets: [0, 0, 0, 1], fingers: [0, 0, 0, 1], position: 1 }
                ],
                "m7": [
                    { frets: [3, 3, 3, 3], fingers: [1, 1, 1, 1], position: 3 }
                ],
                "maj7": [
                    { frets: [0, 0, 0, 2], fingers: [0, 0, 0, 2], position: 1 }
                ],
                "sus2": [
                    { frets: [0, 2, 3, 3], fingers: [0, 1, 2, 3], position: 1 }
                ],
                "sus4": [
                    { frets: [0, 0, 1, 3], fingers: [0, 0, 1, 3], position: 1 }
                ],
                "dim": [
                    { frets: [0, 3, 2, 3], fingers: [0, 2, 1, 3], position: 1 }
                ],
                "aug": [
                    { frets: [1, 0, 0, 3], fingers: [1, 0, 0, 4], position: 1 }
                ],
                "add9": [
                    { frets: [0, 2, 0, 3], fingers: [0, 2, 0, 3], position: 1 }
                ],
                "6": [
                    { frets: [0, 0, 0, 0], fingers: [0, 0, 0, 0], position: 1 }
                ],
                "9": [
                    { frets: [0, 2, 0, 1], fingers: [0, 2, 0, 1], position: 1 }
                ]
            },
            "C#": {
                "major": [
                    { frets: [1, 1, 1, 4], fingers: [1, 1, 1, 4], position: 1 }
                ],
                "minor": [
                    { frets: [1, 4, 4, 4], fingers: [1, 4, 3, 2], position: 1 }
                ],
                "7": [
                    { frets: [1, 1, 1, 2], fingers: [1, 1, 1, 2], position: 1 }
                ],
                "m7": [
                    { frets: [4, 4, 4, 4], fingers: [1, 1, 1, 1], position: 4 }
                ],
                "maj7": [
                    { frets: [1, 1, 1, 3], fingers: [1, 1, 1, 3], position: 1 }
                ],
                "sus2": [
                    { frets: [1, 3, 4, 4], fingers: [1, 2, 3, 4], position: 1 }
                ],
                "sus4": [
                    { frets: [1, 1, 2, 4], fingers: [1, 1, 2, 4], position: 1 }
                ],
                "dim": [
                    { frets: [1, 4, 3, 4], fingers: [1, 3, 2, 4], position: 1 }
                ],
                "aug": [
                    { frets: [2, 1, 1, 4], fingers: [2, 1, 1, 4], position: 1 }
                ],
                "add9": [
                    { frets: [1, 3, 1, 4], fingers: [1, 3, 2, 4], position: 1 }
                ],
                "6": [
                    { frets: [1, 1, 1, 1], fingers: [1, 1, 1, 1], position: 1 }
                ],
                "9": [
                    { frets: [1, 3, 1, 2], fingers: [1, 3, 1, 2], position: 1 }
                ]
            },
            "D": {
                "major": [
                    { frets: [2, 2, 2, 0], fingers: [1, 2, 3, 0], position: 1 },
                    { frets: [2, 2, 2, 5], fingers: [1, 1, 1, 4], position: 1 }
                ],
                "minor": [
                    { frets: [2, 2, 1, 0], fingers: [2, 3, 1, 0], position: 1 }
                ],
                "7": [
                    { frets: [2, 2, 2, 3], fingers: [1, 1, 1, 2], position: 1 }
                ],
                "m7": [
                    { frets: [2, 2, 1, 3], fingers: [2, 1, 1, 3], position: 1 }
                ],
                "maj7": [
                    { frets: [2, 2, 2, 4], fingers: [1, 1, 1, 3], position: 1 }
                ],
                "sus2": [
                    { frets: [2, 2, 0, 0], fingers: [1, 2, 0, 0], position: 1 }
                ],
                "sus4": [
                    { frets: [2, 2, 3, 0], fingers: [1, 2, 3, 0], position: 1 }
                ],
                "dim": [
                    { frets: [2, 0, 1, 0], fingers: [2, 0, 1, 0], position: 1 }
                ],
                "aug": [
                    { frets: [3, 2, 2, 5], fingers: [2, 1, 1, 4], position: 1 }
                ],
                "add9": [
                    { frets: [2, 4, 2, 5], fingers: [1, 3, 2, 4], position: 1 }
                ],
                "6": [
                    { frets: [2, 2, 2, 2], fingers: [1, 1, 1, 1], position: 1 }
                ],
                "9": [
                    { frets: [2, 4, 2, 3], fingers: [1, 3, 1, 2], position: 1 }
                ]
            },
            "D#": {
                "major": [
                    { frets: [3, 3, 3, 1], fingers: [2, 3, 4, 1], position: 1 },
                    { frets: [0, 3, 3, 1], fingers: [0, 2, 3, 1], position: 1 }
                ],
                "minor": [
                    { frets: [3, 3, 2, 1], fingers: [3, 4, 2, 1], position: 1 }
                ],
                "7": [
                    { frets: [3, 3, 3, 4], fingers: [1, 1, 1, 2], position: 3 }
                ],
                "m7": [
                    { frets: [3, 3, 2, 4], fingers: [2, 1, 1, 4], position: 1 }
                ],
                "maj7": [
                    { frets: [3, 3, 3, 5], fingers: [1, 1, 1, 3], position: 3 }
                ],
                "sus2": [
                    { frets: [3, 3, 1, 1], fingers: [3, 4, 1, 2], position: 1 }
                ],
                "sus4": [
                    { frets: [3, 3, 4, 1], fingers: [2, 3, 4, 1], position: 1 }
                ],
                "dim": [
                    { frets: [0, 1, 2, 1], fingers: [0, 1, 3, 2], position: 1 }
                ],
                "aug": [
                    { frets: [0, 3, 3, 2], fingers: [0, 2, 3, 1], position: 1 }
                ],
                "add9": [
                    { frets: [0, 3, 1, 1], fingers: [0, 3, 1, 2], position: 1 }
                ],
                "6": [
                    { frets: [3, 3, 3, 3], fingers: [1, 1, 1, 1], position: 3 }
                ],
                "9": [
                    { frets: [0, 3, 1, 4], fingers: [0, 2, 1, 4], position: 1 }
                ]
            },
            "E": {
                "major": [
                    { frets: [1, 4, 0, 2], fingers: [1, 4, 0, 2], position: 1 },
                    { frets: [4, 4, 4, 2], fingers: [2, 3, 4, 1], position: 2 }
                ],
                "minor": [
                    { frets: [0, 4, 3, 2], fingers: [0, 3, 2, 1], position: 1 }
                ],
                "7": [
                    { frets: [1, 2, 0, 2], fingers: [1, 2, 0, 3], position: 1 }
                ],
                "m7": [
                    { frets: [0, 2, 0, 2], fingers: [0, 1, 0, 2], position: 1 }
                ],
                "maj7": [
                    { frets: [1, 3, 0, 2], fingers: [1, 3, 0, 2], position: 1 }
                ],
                "sus2": [
                    { frets: [4, 4, 2, 2], fingers: [3, 4, 1, 2], position: 2 }
                ],
                "sus4": [
                    { frets: [2, 4, 0, 2], fingers: [1, 4, 0, 2], position: 1 }
                ],
                "dim": [
                    { frets: [0, 4, 0, 1], fingers: [0, 4, 0, 1], position: 1 }
                ],
                "aug": [
                    { frets: [1, 0, 0, 3], fingers: [1, 0, 0, 4], position: 1 }
                ],
                "add9": [
                    { frets: [1, 4, 2, 2], fingers: [1, 4, 2, 3], position: 1 }
                ],
                "6": [
                    { frets: [4, 4, 4, 4], fingers: [1, 1, 1, 1], position: 4 }
                ],
                "9": [
                    { frets: [1, 2, 2, 2], fingers: [1, 2, 3, 4], position: 1 }
                ]
            },
            "F": {
                "major": [
                    { frets: [2, 0, 1, 0], fingers: [2, 0, 1, 0], position: 1 },
                    { frets: [5, 5, 5, 3], fingers: [2, 3, 4, 1], position: 3 }
                ],
                "minor": [
                    { frets: [1, 0, 1, 3], fingers: [1, 0, 2, 4], position: 1 }
                ],
                "7": [
                    { frets: [2, 3, 1, 0], fingers: [2, 3, 1, 0], position: 1 }
                ],
                "m7": [
                    { frets: [1, 3, 1, 3], fingers: [1, 3, 2, 4], position: 1 }
                ],
                "maj7": [
                    { frets: [2, 4, 1, 3], fingers: [2, 4, 1, 3], position: 1 }
                ],
                "sus2": [
                    { frets: [0, 0, 1, 3], fingers: [0, 0, 1, 3], position: 1 }
                ],
                "sus4": [
                    { frets: [3, 0, 1, 1], fingers: [3, 0, 1, 2], position: 1 }
                ],
                "dim": [
                    { frets: [1, 0, 1, 2], fingers: [1, 0, 2, 3], position: 1 }
                ],
                "aug": [
                    { frets: [2, 1, 1, 4], fingers: [2, 1, 1, 4], position: 1 }
                ],
                "add9": [
                    { frets: [0, 0, 1, 0], fingers: [0, 0, 1, 0], position: 1 }
                ],
                "6": [
                    { frets: [5, 5, 5, 5], fingers: [1, 1, 1, 1], position: 5 }
                ],
                "9": [
                    { frets: [2, 3, 1, 3], fingers: [2, 3, 1, 4], position: 1 }
                ]
            },
            "F#": {
                "major": [
                    { frets: [3, 1, 2, 1], fingers: [3, 1, 2, 1], position: 1 }
                ],
                "minor": [
                    { frets: [2, 1, 2, 0], fingers: [2, 1, 3, 0], position: 1 }
                ],
                "7": [
                    { frets: [3, 4, 2, 1], fingers: [2, 3, 1, 1], position: 1 }
                ],
                "m7": [
                    { frets: [2, 4, 2, 4], fingers: [1, 3, 2, 4], position: 1 }
                ],
                "maj7": [
                    { frets: [3, 5, 2, 4], fingers: [2, 4, 1, 3], position: 1 }
                ],
                "sus2": [
                    { frets: [1, 1, 2, 4], fingers: [1, 2, 3, 4], position: 1 }
                ],
                "sus4": [
                    { frets: [4, 1, 2, 2], fingers: [4, 1, 2, 3], position: 1 }
                ],
                "dim": [
                    { frets: [2, 0, 2, 0], fingers: [1, 0, 2, 0], position: 1 }
                ],
                "aug": [
                    { frets: [3, 2, 2, 5], fingers: [2, 1, 1, 4], position: 1 }
                ],
                "add9": [
                    { frets: [1, 1, 2, 1], fingers: [1, 2, 3, 1], position: 1 }
                ],
                "6": [
                    { frets: [3, 1, 2, 4], fingers: [3, 1, 2, 4], position: 1 }
                ],
                "9": [
                    { frets: [3, 4, 2, 4], fingers: [2, 3, 1, 4], position: 1 }
                ]
            },
            "G": {
                "major": [
                    { frets: [0, 2, 3, 2], fingers: [0, 1, 3, 2], position: 1 },
                    { frets: [4, 2, 3, 2], fingers: [3, 1, 2, 1], position: 2 }
                ],
                "minor": [
                    { frets: [0, 2, 3, 1], fingers: [0, 2, 3, 1], position: 1 }
                ],
                "7": [
                    { frets: [0, 2, 1, 2], fingers: [0, 2, 1, 3], position: 1 }
                ],
                "m7": [
                    { frets: [0, 2, 1, 1], fingers: [0, 2, 1, 1], position: 1 }
                ],
                "maj7": [
                    { frets: [0, 2, 2, 2], fingers: [0, 1, 2, 3], position: 1 }
                ],
                "sus2": [
                    { frets: [0, 2, 3, 0], fingers: [0, 1, 3, 0], position: 1 }
                ],
                "sus4": [
                    { frets: [0, 2, 3, 3], fingers: [0, 1, 3, 4], position: 1 }
                ],
                "dim": [
                    { frets: [0, 1, 3, 1], fingers: [0, 1, 3, 2], position: 1 }
                ],
                "aug": [
                    { frets: [0, 3, 3, 2], fingers: [0, 2, 3, 1], position: 1 }
                ],
                "add9": [
                    { frets: [0, 2, 5, 2], fingers: [0, 1, 4, 2], position: 1 }
                ],
                "6": [
                    { frets: [0, 2, 0, 2], fingers: [0, 1, 0, 2], position: 1 }
                ],
                "9": [
                    { frets: [2, 2, 1, 2], fingers: [2, 3, 1, 4], position: 1 }
                ]
            },
            "G#": {
                "major": [
                    { frets: [5, 3, 4, 3], fingers: [3, 1, 2, 1], position: 3 },
                    { frets: [1, 3, 4, 3], fingers: [1, 2, 4, 3], position: 1 }
                ],
                "minor": [
                    { frets: [1, 3, 4, 2], fingers: [1, 3, 4, 2], position: 1 }
                ],
                "7": [
                    { frets: [1, 3, 2, 3], fingers: [1, 3, 2, 4], position: 1 }
                ],
                "m7": [
                    { frets: [1, 3, 2, 2], fingers: [1, 4, 2, 3], position: 1 }
                ],
                "maj7": [
                    { frets: [1, 3, 3, 3], fingers: [1, 2, 3, 4], position: 1 }
                ],
                "sus2": [
                    { frets: [1, 3, 4, 1], fingers: [1, 3, 4, 2], position: 1 }
                ],
                "sus4": [
                    { frets: [1, 3, 4, 4], fingers: [1, 2, 3, 4], position: 1 }
                ],
                "dim": [
                    { frets: [1, 2, 4, 2], fingers: [1, 2, 4, 3], position: 1 }
                ],
                "aug": [
                    { frets: [1, 0, 0, 3], fingers: [1, 0, 0, 4], position: 1 }
                ],
                "add9": [
                    { frets: [1, 3, 6, 3], fingers: [1, 2, 4, 3], position: 1 }
                ],
                "6": [
                    { frets: [1, 3, 1, 3], fingers: [1, 3, 2, 4], position: 1 }
                ],
                "9": [
                    { frets: [3, 3, 2, 3], fingers: [2, 3, 1, 4], position: 1 }
                ]
            },
            "A": {
                "major": [
                    { frets: [2, 1, 0, 0], fingers: [2, 1, 0, 0], position: 1 },
                    { frets: [2, 4, 5, 4], fingers: [1, 2, 4, 3], position: 2 }
                ],
                "minor": [
                    { frets: [2, 0, 0, 0], fingers: [2, 0, 0, 0], position: 1 }
                ],
                "7": [
                    { frets: [0, 1, 0, 0], fingers: [0, 1, 0, 0], position: 1 }
                ],
                "m7": [
                    { frets: [0, 0, 0, 0], fingers: [0, 0, 0, 0], position: 1 }
                ],
                "maj7": [
                    { frets: [1, 1, 0, 0], fingers: [1, 2, 0, 0], position: 1 }
                ],
                "sus2": [
                    { frets: [2, 4, 5, 2], fingers: [1, 3, 4, 2], position: 2 }
                ],
                "sus4": [
                    { frets: [2, 2, 0, 0], fingers: [1, 2, 0, 0], position: 1 }
                ],
                "dim": [
                    { frets: [2, 0, 2, 0], fingers: [1, 0, 2, 0], position: 1 }
                ],
                "aug": [
                    { frets: [2, 1, 1, 4], fingers: [2, 1, 1, 4], position: 1 }
                ],
                "add9": [
                    { frets: [2, 1, 0, 2], fingers: [2, 1, 0, 3], position: 1 }
                ],
                "6": [
                    { frets: [2, 1, 2, 0], fingers: [2, 1, 3, 0], position: 1 }
                ],
                "9": [
                    { frets: [0, 1, 0, 2], fingers: [0, 1, 0, 2], position: 1 }
                ]
            },
            "A#": {
                "major": [
                    { frets: [3, 2, 1, 1], fingers: [3, 2, 1, 1], position: 1 }
                ],
                "minor": [
                    { frets: [3, 1, 1, 1], fingers: [3, 1, 1, 1], position: 1 }
                ],
                "7": [
                    { frets: [1, 2, 1, 1], fingers: [1, 2, 1, 1], position: 1 }
                ],
                "m7": [
                    { frets: [1, 1, 1, 1], fingers: [1, 1, 1, 1], position: 1 }
                ],
                "maj7": [
                    { frets: [2, 2, 1, 1], fingers: [2, 3, 1, 1], position: 1 }
                ],
                "sus2": [
                    { frets: [3, 0, 1, 1], fingers: [3, 0, 1, 2], position: 1 }
                ],
                "sus4": [
                    { frets: [3, 3, 1, 1], fingers: [3, 4, 1, 2], position: 1 }
                ],
                "dim": [
                    { frets: [0, 1, 0, 1], fingers: [0, 1, 0, 2], position: 1 }
                ],
                "aug": [
                    { frets: [3, 2, 2, 5], fingers: [2, 1, 1, 4], position: 1 }
                ],
                "add9": [
                    { frets: [3, 2, 1, 3], fingers: [3, 2, 1, 4], position: 1 }
                ],
                "6": [
                    { frets: [0, 2, 1, 1], fingers: [0, 2, 1, 1], position: 1 }
                ],
                "9": [
                    { frets: [1, 2, 1, 3], fingers: [1, 2, 1, 4], position: 1 }
                ]
            },
            "B": {
                "major": [
                    { frets: [4, 3, 2, 2], fingers: [3, 2, 1, 1], position: 2 }
                ],
                "minor": [
                    { frets: [4, 2, 2, 2], fingers: [3, 1, 1, 1], position: 2 }
                ],
                "7": [
                    { frets: [2, 3, 2, 2], fingers: [1, 2, 1, 1], position: 2 }
                ],
                "m7": [
                    { frets: [2, 2, 2, 2], fingers: [1, 1, 1, 1], position: 2 }
                ],
                "maj7": [
                    { frets: [3, 3, 2, 2], fingers: [2, 3, 1, 1], position: 2 }
                ],
                "sus2": [
                    { frets: [4, 1, 2, 2], fingers: [4, 1, 2, 3], position: 1 }
                ],
                "sus4": [
                    { frets: [4, 4, 2, 2], fingers: [3, 4, 1, 1], position: 2 }
                ],
                "dim": [
                    { frets: [1, 2, 1, 2], fingers: [1, 3, 2, 4], position: 1 }
                ],
                "aug": [
                    { frets: [0, 3, 3, 2], fingers: [0, 2, 3, 1], position: 1 }
                ],
                "add9": [
                    { frets: [4, 3, 2, 4], fingers: [3, 2, 1, 4], position: 2 }
                ],
                "6": [
                    { frets: [1, 3, 2, 2], fingers: [1, 4, 2, 3], position: 1 }
                ],
                "9": [
                    { frets: [2, 3, 2, 4], fingers: [1, 2, 1, 4], position: 2 }
                ]
            }
        }
    }
};

// 코드 구성음 데이터
const chordNotes = {
    "major": [0, 4, 7],          // 루트, 장3도, 완전5도
    "minor": [0, 3, 7],          // 루트, 단3도, 완전5도
    "7": [0, 4, 7, 10],          // 루트, 장3도, 완전5도, 단7도
    "m7": [0, 3, 7, 10],         // 루트, 단3도, 완전5도, 단7도
    "maj7": [0, 4, 7, 11],       // 루트, 장3도, 완전5도, 장7도
    "sus2": [0, 2, 7],           // 루트, 장2도, 완전5도
    "sus4": [0, 5, 7],           // 루트, 완전4도, 완전5도
    "dim": [0, 3, 6],            // 루트, 단3도, 감5도
    "aug": [0, 4, 8],            // 루트, 장3도, 증5도
    "add9": [0, 4, 7, 14],       // 루트, 장3도, 완전5도, 9도
    "6": [0, 4, 7, 9],           // 루트, 장3도, 완전5도, 장6도
    "9": [0, 4, 7, 10, 14]       // 루트, 장3도, 완전5도, 단7도, 9도
};

// 음이름 배열
const noteNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

// 코드 구성음 계산 함수
function getChordNoteNames(root, type) {
    const rootIndex = noteNames.indexOf(root);
    const intervals = chordNotes[type] || chordNotes["major"];
    return intervals.map(interval => noteNames[(rootIndex + interval) % 12]);
}