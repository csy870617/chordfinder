const instrumentData = {
    // 1. 기타 데이터 (6줄)
    "guitar": {
        "strings": 6,
        "tuning": ["E", "A", "D", "G", "B", "E"],
        "chords": {
            "C": {
                "major": { frets: [-1, 3, 2, 0, 1, 0], fingers: [0, 3, 2, 0, 1, 0] },
                "high_major": { frets: [8, 10, 10, 9, 8, 8], fingers: [1, 3, 4, 2, 1, 1] },
                "minor": { frets: [-1, 3, 5, 5, 4, 3], fingers: [0, 1, 3, 4, 2, 1] },
                "7":     { frets: [-1, 3, 2, 3, 1, 0], fingers: [0, 3, 2, 4, 1, 0] },
                "sus4":  { frets: [-1, 3, 3, 0, 1, 1], fingers: [0, 3, 4, 0, 1, 1] },
                "sus2":  { frets: [-1, 3, 0, 0, 1, -1], fingers: [0, 3, 0, 0, 1, 0] },
                "maj7":  { frets: [-1, 3, 2, 0, 0, 0], fingers: [0, 3, 2, 0, 0, 0] },
                "m7":    { frets: [-1, 3, 5, 3, 4, 3], fingers: [0, 1, 3, 1, 2, 1] },
                "dim7":  { frets: [-1, 3, 4, 2, 4, -1], fingers: [0, 2, 3, 1, 4, 0] }
            },
            "D": {
                "major": { frets: [-1, -1, 0, 2, 3, 2], fingers: [0, 0, 0, 1, 3, 2] },
                "high_major": { frets: [-1, 5, 7, 7, 7, 5], fingers: [0, 1, 2, 3, 4, 1] },
                "minor": { frets: [-1, -1, 0, 2, 3, 1], fingers: [0, 0, 0, 2, 3, 1] },
                "7":     { frets: [-1, -1, 0, 2, 1, 2], fingers: [0, 0, 0, 2, 1, 3] },
                "sus4":  { frets: [-1, -1, 0, 2, 3, 3], fingers: [0, 0, 0, 1, 3, 4] },
                "sus2":  { frets: [-1, -1, 0, 2, 3, 0], fingers: [0, 0, 0, 1, 2, 0] },
                "maj7":  { frets: [-1, -1, 0, 2, 2, 2], fingers: [0, 0, 0, 1, 1, 1] },
                "m7":    { frets: [-1, -1, 0, 2, 1, 1], fingers: [0, 0, 0, 2, 1, 1] },
                "dim7":  { frets: [-1, -1, 0, 1, 0, 1], fingers: [0, 0, 0, 1, 0, 2] }
            },
            "E": {
                "major": { frets: [0, 2, 2, 1, 0, 0], fingers: [0, 2, 3, 1, 0, 0] },
                "high_major": { frets: [-1, 7, 9, 9, 9, 7], fingers: [0, 1, 2, 3, 4, 1] },
                "minor": { frets: [0, 2, 2, 0, 0, 0], fingers: [0, 2, 3, 0, 0, 0] },
                "7":     { frets: [0, 2, 0, 1, 0, 0], fingers: [0, 2, 0, 1, 0, 0] },
                "sus4":  { frets: [0, 2, 2, 2, 0, 0], fingers: [0, 2, 3, 4, 0, 0] },
                "sus2":  { frets: [0, 2, 4, 4, 0, 0], fingers: [0, 1, 3, 4, 0, 0] },
                "maj7":  { frets: [0, 2, 1, 1, 0, 0], fingers: [0, 3, 1, 2, 0, 0] },
                "m7":    { frets: [0, 2, 0, 0, 0, 0], fingers: [0, 2, 0, 0, 0, 0] },
                "dim7":  { frets: [-1, 1, 2, 0, 2, 0], fingers: [0, 1, 2, 0, 3, 0] }
            },
            "F": {
                "major": { frets: [1, 3, 3, 2, 1, 1], fingers: [1, 3, 4, 2, 1, 1] },
                "high_major": { frets: [-1, 8, 10, 10, 10, 8], fingers: [0, 1, 2, 3, 4, 1] },
                "minor": { frets: [1, 3, 3, 1, 1, 1], fingers: [1, 3, 4, 1, 1, 1] },
                "7":     { frets: [1, 3, 1, 2, 1, 1], fingers: [1, 3, 1, 2, 1, 1] },
                "sus4":  { frets: [1, 3, 3, 3, 1, 1], fingers: [1, 3, 4, 4, 1, 1] },
                "sus2":  { frets: [-1, -1, 3, 0, 1, 1], fingers: [0, 0, 3, 0, 1, 1] },
                "maj7":  { frets: [-1, 3, 3, 2, 1, 0], fingers: [0, 3, 4, 2, 1, 0] },
                "m7":    { frets: [1, 3, 1, 1, 1, 1], fingers: [1, 3, 1, 1, 1, 1] },
                "dim7":  { frets: [-1, -1, 0, 1, 0, 1], fingers: [0, 0, 0, 1, 0, 2] }
            },
            "G": {
                "major": { frets: [3, 2, 0, 0, 0, 3], fingers: [2, 1, 0, 0, 0, 3] },
                "high_major": { frets: [3, 5, 5, 4, 3, 3], fingers: [1, 3, 4, 2, 1, 1] },
                "minor": { frets: [3, 5, 5, 3, 3, 3], fingers: [1, 3, 4, 1, 1, 1] },
                "7":     { frets: [3, 2, 0, 0, 0, 1], fingers: [3, 2, 0, 0, 0, 1] },
                "sus4":  { frets: [3, 3, 0, 0, 1, 1], fingers: [3, 4, 0, 0, 1, 1] },
                "sus2":  { frets: [3, 0, 0, 2, 3, 3], fingers: [2, 0, 0, 1, 3, 4] },
                "maj7":  { frets: [3, 2, 0, 0, 0, 2], fingers: [3, 2, 0, 0, 0, 1] },
                "m7":    { frets: [3, 5, 3, 3, 3, 3], fingers: [1, 3, 1, 1, 1, 1] },
                "dim7":  { frets: [3, 4, 2, 3, -1, -1], fingers: [2, 3, 1, 4, 0, 0] }
            },
            "A": {
                "major": { frets: [-1, 0, 2, 2, 2, 0], fingers: [0, 0, 2, 3, 4, 0] },
                "high_major": { frets: [5, 7, 7, 6, 5, 5], fingers: [1, 3, 4, 2, 1, 1] },
                "minor": { frets: [-1, 0, 2, 2, 1, 0], fingers: [0, 0, 2, 3, 1, 0] },
                "7":     { frets: [-1, 0, 2, 0, 2, 0], fingers: [0, 0, 2, 0, 3, 0] },
                "sus4":  { frets: [-1, 0, 2, 2, 3, 0], fingers: [0, 0, 2, 3, 4, 0] },
                "sus2":  { frets: [-1, 0, 2, 2, 0, 0], fingers: [0, 0, 1, 2, 0, 0] },
                "maj7":  { frets: [-1, 0, 2, 1, 2, 0], fingers: [0, 0, 2, 1, 3, 0] },
                "m7":    { frets: [-1, 0, 2, 0, 1, 0], fingers: [0, 0, 2, 0, 1, 0] },
                "dim7":  { frets: [-1, 0, 1, 2, 1, 2], fingers: [0, 0, 1, 3, 2, 4] }
            },
            "B": {
                "major": { frets: [-1, 2, 4, 4, 4, 2], fingers: [0, 1, 2, 3, 4, 1] },
                "high_major": { frets: [7, 9, 9, 8, 7, 7], fingers: [1, 3, 4, 2, 1, 1] },
                "minor": { frets: [-1, 2, 4, 4, 3, 2], fingers: [0, 1, 3, 4, 2, 1] },
                "7":     { frets: [-1, 2, 1, 2, 0, 2], fingers: [0, 2, 1, 3, 0, 4] },
                "sus4":  { frets: [-1, 2, 4, 4, 0, 0], fingers: [0, 1, 3, 4, 0, 0] },
                "sus2":  { frets: [-1, 2, 4, 4, 2, 2], fingers: [0, 1, 3, 4, 1, 1] },
                "maj7":  { frets: [-1, 2, 4, 3, 4, 2], fingers: [0, 1, 3, 2, 4, 1] },
                "m7":    { frets: [-1, 2, 4, 2, 3, 2], fingers: [0, 1, 3, 1, 2, 1] },
                "dim7":  { frets: [-1, 2, 3, 1, 3, 1], fingers: [0, 2, 3, 1, 4, 1] }
            }
        }
    },

    // 2. 우쿨렐레 데이터 (4줄: G C E A)
    "ukulele": {
        "strings": 4,
        "tuning": ["G", "C", "E", "A"],
        "chords": {
            "C": {
                "major": { frets: [0, 0, 0, 3], fingers: [0, 0, 0, 3] },
                "minor": { frets: [0, 3, 3, 3], fingers: [0, 3, 2, 1] }, // Barre or 123
                "7":     { frets: [0, 0, 0, 1], fingers: [0, 0, 0, 1] },
                "sus4":  { frets: [0, 0, 1, 3], fingers: [0, 0, 1, 3] },
                "sus2":  { frets: [0, 2, 3, 3], fingers: [0, 1, 2, 3] },
                "maj7":  { frets: [0, 0, 0, 2], fingers: [0, 0, 0, 2] },
                "m7":    { frets: [3, 3, 3, 3], fingers: [1, 1, 1, 1] },
                "dim7":  { frets: [2, 3, 2, 3], fingers: [1, 2, 3, 4] },
                "high_major": { frets: [5, 4, 3, 3], fingers: [3, 2, 1, 1] }
            },
            "D": {
                "major": { frets: [2, 2, 2, 0], fingers: [1, 2, 3, 0] },
                "minor": { frets: [2, 2, 1, 0], fingers: [2, 3, 1, 0] },
                "7":     { frets: [2, 2, 2, 3], fingers: [1, 1, 1, 2] }, // Barre
                "sus4":  { frets: [2, 2, 3, 0], fingers: [1, 2, 3, 0] },
                "sus2":  { frets: [2, 2, 0, 0], fingers: [1, 2, 0, 0] },
                "maj7":  { frets: [2, 2, 2, 4], fingers: [1, 1, 1, 3] },
                "m7":    { frets: [2, 2, 1, 3], fingers: [2, 1, 1, 3] },
                "dim7":  { frets: [1, 2, 1, 2], fingers: [1, 2, 3, 4] },
                "high_major": { frets: [7, 6, 5, 5], fingers: [3, 2, 1, 1] }
            },
            "E": {
                "major": { frets: [1, 4, 0, 2], fingers: [1, 4, 0, 2] }, // or 4447
                "minor": { frets: [0, 4, 3, 2], fingers: [0, 3, 2, 1] },
                "7":     { frets: [1, 2, 0, 2], fingers: [1, 2, 0, 3] },
                "sus4":  { frets: [2, 4, 0, 2], fingers: [1, 4, 0, 2] }, // tricky
                "sus2":  { frets: [4, 4, 2, 2], fingers: [3, 4, 1, 2] },
                "maj7":  { frets: [1, 3, 0, 2], fingers: [1, 3, 0, 2] },
                "m7":    { frets: [0, 2, 0, 2], fingers: [0, 1, 0, 2] },
                "dim7":  { frets: [0, 1, 0, 1], fingers: [0, 1, 0, 2] }, // Edim7=Gdim7...
                "high_major": { frets: [4, 4, 4, 7], fingers: [1, 1, 1, 4] }
            },
            "F": {
                "major": { frets: [2, 0, 1, 0], fingers: [2, 0, 1, 0] },
                "minor": { frets: [1, 0, 1, 3], fingers: [1, 0, 2, 4] },
                "7":     { frets: [2, 3, 1, 0], fingers: [2, 3, 1, 0] }, // or 2313
                "sus4":  { frets: [3, 0, 1, 1], fingers: [3, 0, 1, 1] },
                "sus2":  { frets: [0, 0, 1, 3], fingers: [0, 0, 1, 3] },
                "maj7":  { frets: [2, 4, 1, 3], fingers: [2, 4, 1, 3] }, // or 5500
                "m7":    { frets: [1, 3, 1, 3], fingers: [1, 3, 2, 4] },
                "dim7":  { frets: [1, 2, 1, 2], fingers: [1, 2, 3, 4] },
                "high_major": { frets: [5, 5, 5, 8], fingers: [1, 1, 1, 4] }
            },
            "G": {
                "major": { frets: [0, 2, 3, 2], fingers: [0, 1, 3, 2] },
                "minor": { frets: [0, 2, 3, 1], fingers: [0, 2, 3, 1] },
                "7":     { frets: [0, 2, 1, 2], fingers: [0, 2, 1, 3] },
                "sus4":  { frets: [0, 2, 3, 3], fingers: [0, 1, 3, 4] },
                "sus2":  { frets: [0, 2, 3, 0], fingers: [0, 1, 3, 0] },
                "maj7":  { frets: [0, 2, 2, 2], fingers: [0, 1, 1, 1] },
                "m7":    { frets: [0, 2, 1, 1], fingers: [0, 2, 1, 1] },
                "dim7":  { frets: [0, 1, 0, 1], fingers: [0, 1, 0, 2] },
                "high_major": { frets: [4, 2, 3, 2], fingers: [3, 1, 2, 1] }
            },
            "A": {
                "major": { frets: [2, 1, 0, 0], fingers: [2, 1, 0, 0] },
                "minor": { frets: [2, 0, 0, 0], fingers: [2, 0, 0, 0] },
                "7":     { frets: [0, 1, 0, 0], fingers: [0, 1, 0, 0] },
                "sus4":  { frets: [2, 2, 0, 0], fingers: [1, 2, 0, 0] },
                "sus2":  { frets: [2, 1, 0, 2], fingers: [2, 1, 0, 3] }, // or 2452? simple: 2102? No, 2100 is A. B is 2 fret.
                "maj7":  { frets: [1, 1, 0, 0], fingers: [1, 2, 0, 0] },
                "m7":    { frets: [0, 0, 0, 0], fingers: [0, 0, 0, 0] },
                "dim7":  { frets: [2, 3, 2, 3], fingers: [1, 2, 3, 4] },
                "high_major": { frets: [2, 1, 0, 0], fingers: [2, 1, 0, 0] } // Open is easiest
            },
            "B": {
                "major": { frets: [4, 3, 2, 2], fingers: [3, 2, 1, 1] },
                "minor": { frets: [4, 2, 2, 2], fingers: [3, 1, 1, 1] },
                "7":     { frets: [2, 3, 2, 2], fingers: [1, 2, 1, 1] }, // or 4320
                "sus4":  { frets: [4, 4, 2, 2], fingers: [3, 4, 1, 1] },
                "sus2":  { frets: [4, 3, 2, 4], fingers: [3, 2, 1, 4] },
                "maj7":  { frets: [3, 3, 2, 2], fingers: [2, 3, 1, 1] },
                "m7":    { frets: [2, 2, 2, 2], fingers: [1, 1, 1, 1] }, // Barre
                "dim7":  { frets: [1, 2, 1, 2], fingers: [1, 2, 3, 4] },
                "high_major": { frets: [4, 3, 2, 2], fingers: [3, 2, 1, 1] }
            }
        }
    }
};