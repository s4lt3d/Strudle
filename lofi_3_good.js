setcpm(94 / 4)

const harmony = chord(
  "<Fmaj9 A7b13 Dm9 G13 Gm9 C13 Fmaj9 C7b9>"
).dict("ireal")

// Vinyl texture
$: stack(
  s("crackle").gain(.05),
  s("white").gain(.006)
)

// Syncopated piano chords
$: note(`<
    [a3,c4,e4,g4] [g3,c#4,f4,b4]
    [f3,c4,e4,a4] [f3,b3,e4,a4]
    [f3,bb3,d4,a4] [e3,bb3,d4,a4]
    [a3,c4,e4,g4] [g3,bb3,db4,e4]
  >`)
  .struct("[~ x ~@2 x ~@3]")
  .piano()
  .gain(.30)
  .release(.55)
  .delay(.18)
  .room(.45)
  .orbit(1)._pianoroll()

// Gentle upright bass
$: note(`<
    [f2 ~ c3 ~] [a2 ~ e2 ~]
    [d2 ~ a2 ~] [g2 ~ d3 ~]
    [g2 ~ d3 ~] [c2 ~ g2 ~]
    [f2 ~ c3 ~] [c2 ~ g2 ~]
  >`)
  .s("gm_acoustic_bass")
  .gain(.36)
  .attack(.01)
  .release(.20)
  .room(.12)
  .orbit(2)._pianoroll()
const lead = "gm_trombone:5"
// Original guitar melody
$: note(`<
    [~ a4 c5 [e5 d5]]
    [c#5@2 ~ e5]
    [f5@2 [e5 d5] c5]
    [b4@3 ~]
    [bb4 d5 ~ [f5 e5]]
    [e5@2 d5 bb4]
    [a4@3 ~]
    [~ g4 bb4 [db5 e5]]

    [e5@2 [d5 c5] a4]
    [g4 ~ [b4 c5] c#5]
    [d5@3 [e5 f5]]
    [e5 d5 b4@2]
    [~ bb4 [d5 e5] f5]
    [e5@3 [d5 bb4]]
    [a4 c5 ~ e5]
    [db5@2 bb4 ~]

    [c5@3 a4]
    [~ [g4 a4] c#5 e5]
    [f5 e5 d5@2]
    [~ b4 d5@2]
    [f5@2 ~ d5]
    [e5 d5 [c5 bb4] ~]
    [a4@2 c5 e5]
    [~ db5 [c5 bb4] g4]

    [a4 c5 [e5 g5] a5]
    [g5@2 [f5 e5] c#5]
    [d5 ~ [f5 g5] a5]
    [g5 e5 d5 b4]
    [bb4@2 d5 [f5 a5]]
    [g5@2 e5 bb4]
    [a4 [c5 e5] g5@2]
    [~ e5 db5 bb4]

    [a4@3 [c5 d5]]
    [e5@2 ~ c#5]
    [d5@4]
    [~@2 [b4 c5] d5]
    [f5@3 ~]
    [e5@2 [d5 c5] bb4]
    [a4 ~ c5@2]
    [~@3 bb4]

    [a4 c5 e5@2]
    [~ g5 [f5 e5] c#5]
    [d5 f5 [e5 d5] ~]
    [b4@2 d5 e5]
    [f5 d5 bb4@2]
    [~ e5 d5 bb4]
    [a4@2 [g4 a4] c5]
    [bb4@3 ~]
  >`)
  .s(lead)
  .size(6)
  .room(.9)
  .delay(.1)
  .att(rand.range(0, 0.3))
  .postgain(rand.range(0.3, 1.4))
  ._pianoroll()
  ._pianoroll()

// Wandering trombone, following the harmony
$: n(
    choose(
      fastcat(0, 2, 4, 6),
      choose(0, 1, 2, 3, 4, 5)
    )
      .add("0 | [-1 0 1] | -1 | 1 | [2 1 0]")
      .seg(choose(4, 6, 8))
  )
  .set(harmony)
  .anchor("G4")
  .voicing()
  .s("gm_trombone:5")
  .attack(rand.range(.04, .15))
  .release(.55)
  .postgain(rand.range(.22, .40))
  .room(.7)
  .size(6)
  .delay(.1)
  .orbit(4)
  .mask("<1 0 1 1 0 1 1 0>")
  ._pianoroll()

// Soft swung ride
$: s("rd*4").gain(".08 .05 .07 .05").lpf(4500)
$: s("~ [~@2 rd] ~ [~@2 rd]").gain(.045).lpf(4500)

// Light backbeat and kick
$: s("~ rim ~ rim").gain(.055).lpf(2400)
$: s("bd:4 ~ ~ ~").gain(.09).lpf(650)
