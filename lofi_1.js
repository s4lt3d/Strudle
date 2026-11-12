setcpm(74 / 4)

const harmony = chord(
  "<Ebmaj9 Cm9 Fm9 Bb13 Gm9 C7b9 Fm9 Bb13>"
).dict("ireal")

// Vinyl texture
$: stack(
  s("crackle").gain(.05),
  s("white").gain(.006)
)

// Warm piano chords
$: note(`<
    [g3,bb3,d4,f4] [g3,bb3,d4,eb4]
    [ab3,c4,eb4,g4] [ab3,c4,d4,g4]
    [bb3,d4,f4,a4] [bb3,db4,e4,g4]
    [ab3,c4,eb4,g4] [ab3,c4,d4,g4]
  >`)
  .piano()
  .gain(.30)
  .release(.85)
  .delay(.20)
  .room(.5)
  .orbit(1)

// Gentle upright bass
$: note(`<
    [eb2 ~ bb2 ~] [c2 ~ g2 ~]
    [f2 ~ c3 ~] [bb2 ~ f2 ~]
    [g2 ~ d3 ~] [c2 ~ g2 ~]
    [f2 ~ c3 ~] [bb2 ~ f2 ~]
  >`)
  .s("gm_acoustic_bass")
  .gain(.35)
  .attack(.01)
  .release(.25)
  .room(.12)
  .orbit(2)

// Original melody on jazz guitar
$: note(`<
    [~ bb4 [d5 f5] g5] [g5@2 eb5 ~]
    [~ c5 [eb5 g5] f5] [d5@2 c5 ~]
    [~ bb4 [d5 f5] a5] [g5@2 [e5 db5] ~]
    [c5@2 [eb5 g5] ab5] [g5 f5 d5 ~]
  >`)
  .s("gm_electric_guitar_jazz")
  .gain(.28)
  .release(.75)
  .room(.5)
  .delay(.18)
  .orbit(3)

// Wandering trombone, following the harmony
$: n(
    choose(
      fastcat(0, 2, 4, 6),
      choose(0, 1, 2, 3, 4)
    )
      .add("0 | [-1 0 1] | -1 | 1")
      .seg(choose(4, 6, 8))
  )
  .set(harmony)
  .anchor("G4")
  .voicing()
  .s("gm_trombone:5")
  .attack(rand.range(.06, .18))
  .release(.70)
  .postgain(rand.range(.22, .40))
  .room(.75)
  .size(6)
  .delay(.12)
  .orbit(4)
  .mask("<1 1 0 1 1 0 1 0>")
  ._pianoroll()

// Quiet percussion
$: s("rd ~ rd [~@2 rd]").gain(.07).lpf(4200)
$: s("~ rim ~ rim").gain(.05).lpf(2400)
$: s("bd:4 ~ ~ ~").gain(.08).lpf(650)
