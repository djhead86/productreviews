---
title: "Bass Woodshed"
description: "An odd-meter metronome and a 4, 5 and 6 string neck map in one page. Built for my own shed time."
url: "/projects/woodshed/"
ShowToc: false
ShowBreadCrumbs: false
ShowReadingTime: false
---

<p>
<a class="kd-btn" href="https://djhead86.github.io/kodiak-woodshed/" rel="noopener">Open Bass Woodshed</a>
<a class="kd-btn kd-btn--ghost" href="https://github.com/djhead86/kodiak-woodshed" rel="noopener">Source on GitHub</a>
</p>

A practice tool I built for my own shed time. The top half is a metronome that actually handles odd meters: type in 2+2+3 or 3+3+2, mute or accent any beat, add subdivisions, and let the speed trainer push the tempo a few BPM every few bars. The bottom half is a neck map for 4, 5 and 6 string basses in standard and drop tunings. Pick a scale or mode, lay any diatonic chord over it, or isolate an arpeggio. Lock it to one box position and step up the neck. Every dot shows the note and its interval, and you can click one to hear it.

## Metronome

- Any meter from 1 to 15 beats over /4 or /8
- Accent groupings with one-click presets for the meter you're in
- Click any beat to cycle it through downbeat accent, group accent, normal and mute
- Subdivisions at 2, 3 or 4 clicks per beat
- Speed trainer: start BPM, target BPM, +N every M bars
- Tap tempo

## Neck map

- 4 string: standard, Drop D, E♭, D standard, Drop C
- 5 string: standard, Drop A, High C, B♭ standard
- 6 string: standard, Drop A
- 15 scales and modes, including harmonic and melodic minor, Phrygian dominant, Hungarian minor and double harmonic
- **Scale + chord:** click any diatonic triad or 7th to light up its chord tones over the scale, with intervals counted from the chord or the key
- **Arpeggio:** 17 chord types on any root
- **Box mode:** limit the board to a 4 to 6 fret window and step through positions

## Keys

| Key | Action |
|---|---|
| Space | Start / stop |
| T | Tap tempo |
| ↑ / ↓ | BPM ±1 (Shift ±5) |
| [ / ] | Move the box down / up the neck |

It's a single HTML file with no build step and no account. Settings save in your browser.
