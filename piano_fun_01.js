setCpm(140 / 4)

// Left hand: continuous bass–chord pulse
// F6 · F7 · Bb6 · Bbm6 · F6/A · D7 · Gm7 · C7
$: note(`<
    [f2 [a3,c4,d4] c3 [a3,c4,d4]]
    [f2 [a3,c4,eb4] c3 [a3,c4,eb4]]
    [bb2 [g3,bb3,d4] f2 [g3,bb3,d4]]
    [bb2 [g3,bb3,db4] f2 [g3,bb3,db4]]
    [a2 [a3,c4,d4] c3 [a3,c4,d4]]
    [d2 [f#3,c4,e4] a2 [f#3,c4,e4]]
    [g2 [f3,bb3,d4] d3 [f3,bb3,d4]]
    [c3 [e3,bb3,d4] g2 [e3,bb3,d4]]
  >`)
  .piano()
  .gain(.24)
  .release(.24)
  .swingBy(.16, 8)
  .room(.22)
  .orbit(1)

// Right hand: bluesy hook and changing answers
$: note(`<
    [[~ c5] [eb5 e5] f5 [d5 c5]]
    [a4@2 ~ [c5 eb5]]
    [d5 [~ f5] g5 [f5 d5]]
    [db5@2  ~]

    [[~ c5] [eb5 e5] f5 a5]
    [f#5@2 [e5 d5] c5]
    [bb4 [d5 f5] a5 [g5 f5]]
    [e5@2 [d5 bb4] ~]
  >`)
  .piano()
  .gain(.42)
  .release(.45)
  .swingBy(.16, 8)
  .room(.22)
  .orbit(1)
  ._pianoroll()

// Swing ride: quarter-note pulse with soft pickups
$: s("rd [rd rd] rd [rd rd]")
  .gain(".12 [.14 .07] .11 [.14 .07]")
  .swingBy(.16, 8)
  .lpf(6500)
  .room(.12)
  .orbit(2)

// Closed hi-hat on two and four
$: s("~ hh ~ hh")
  .gain(.09)
  .lpf(5000)
  .orbit(2)

// Feathered kick beneath the piano
$: s("bd:4*4")
  .gain(".055 .035 .045 .035")
  .lpf(700)
  .orbit(2)

// Sparse snare responses over four bars
_$: s(`<
    [~ ~ [~ sd:2] ~]
    [~ sd:2 ~ ~]
    [~ [~ sd:2] ~ [~ sd:2]]
    [~ ~ sd:2 [~ sd:2]]
  >`)
  .gain(.065)
  .swingBy(.16, 8)
  .lpf(2600)
  .orbit(2)
