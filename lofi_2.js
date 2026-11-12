setCpm(70 / 4)

vinyl: stack(
  s("crackle").gain(0.07),
  s("white").gain(0.008)
)

const lofi = "<g:major gb:minor a:minor>"
const guitar = "gm_electric_guitar_jazz"
const lead = "gm_trombone:5"

// Piano
$: n("[0,2,5,7,11,13?]")
  .scale(lofi)
  .delay(.3)
  .room(.5)
  .piano()
  .gain(slider(0.444))
  ._pianoroll()

// Quiet upright bass
$: n("0 ~ 4 ~")
  .scale(lofi)
  .trans(-12)
  .s("gm_acoustic_bass")
  .gain(2.38)
  .attack(.01)
  .release(1.42)
  .room(.12)
  .orbit(1)
  ._pianoroll()

// Soft ride with a swung pickup
$: s("rd ~ rd [~@2 rd]")
  .gain(.09)
  .lpf(4200)

// Light backbeat
$: s("~ rim ~ rim")
  .gain(.065)
  .lpf(2400)

// Gentle kick
$: s("bd:4 ~ ~ ~")
  .gain(.10)
  .lpf(650)

// Staggered jazz guitar
$: n("0")
  .scale(lofi)
  .s(guitar)
  .early(-0.00)
  .postgain(0.8)

$: n("2")
  .scale(lofi)
  .s(guitar)
  .early(-0.04)
  .postgain(0.8)

$: n("3")
  .scale(lofi)
  .s(guitar)
  .early(-0.07)
  .postgain(0.8)

$: n("5")
  .scale(lofi)
  .s(guitar)
  .early(-0.10)
  .postgain(0.8)

$: n("9 [8 _ 7 _ _]")
  .scale(lofi)
  .s(guitar)
  .early(-0.12)
  .postgain(0.8)

// Wandering trombone
$: n(
    choose(
      fastcat(4, 6, 9, 11),
      choose(1, 2, 3, 5, 7, 9)
    )
      .add("0 | [-2 0 2] | -2 | 2 | [4 3 2 1]")
      .seg(choose(4, 6, 8))
  )
  .scale(lofi)
  .s(lead)
  .size(6)
  .room(.9)
  .delay(.1)
  .att(rand.range(0, 0.3))
  .postgain(rand.range(0.3, 1.4))
  ._pianoroll()
