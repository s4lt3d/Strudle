setCpm(100 / 4)
// Sad ish

// Left hand: roots and fifths
$: note(`<
    [c2@2 g2@2]
    [d2@2 a2@2]
    [g2@2 d3@2]
  >`)
  .piano()
  .gain(.26)
  .release(.35)
  .room(.35)
  .orbit(1)

// Left hand: thirds and sevenths
// Cmaj7: E–B, Dm7: F–C, G7: F–B
$: note(`<
    [~ [e3,b3]@2 ~]
    [~ [f3,c4]@2 ~]
    [[f3,b3]@2 ~ [f3,b3]]
  >`)
  .piano()
  .gain(.22)
  .release(.55)
  .room(.35)
  .orbit(1)

// Right hand: eight connected three-bar phrases
$: note(`<
    [e4@2 g4 [a4 b4]]
    [c5@2 a4 f4]
    [~ d4 f4 [d4 f4]]

    [e4 g4 b4@2]
    [a4@2 [g4 f4] e4]
    [d4@3 b3]

    [c4 ~ e4 [g4 a4]]
    [a4 f4 [e4 d4] c4]
    [b3@2 d4 [f4 d4]]

    [e4@3 g4]
    [f4 a4 c5@2]
    [b4@2 [a4 g4] f4]

    [e4 [g4 b4] c5@2]
    [a4 c5 [d5 e5] f5]
    [f5@2 d5 b4]

    [c5@3 ~]
    [~ a4 [g4 f4] e4]
    [d4 f4 b4@2]

    [b4@2 [a4 g4] e4]
    [f4@3 a4]
    [g4@2 [a4 b4] d5]

    [e5@2 [d5 c5] b4]
    [a4@2 f4 ~]
    [~ d4 f4@2]
  >`)
  .piano()
  .gain(.42)
  .release(.60)
  .room(.35)
  .orbit(1)
  ._pianoroll()
