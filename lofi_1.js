setCpm(70/4)

vinyl: stack(
  s("crackle").gain(0.07),
  s("white").gain(0.008)
)

//const lofi = "<c:major a2:minor g2:major g2:pentatonic>"
//const lofi = "<d:minor eb:minor>"
//const lofi = "<a:minor d:major f:major c:major>"
//const lofi = "<d:minor f:minor c:minor g:major>"
const lofi = "<g:major gb:minor a:minor>"

const guitar = "gm_electric_guitar_jazz"
const lead = "gm_trombone:5"


$: n("[0,2,5,7,11,13?]")
  .scale(lofi)
  .delay(.3)
  .room(.5)
.piano().gain(slider(0.444))
._pianoroll()

 $: n(irand(7).rib(7,1).sub(1)
   .struct("1 0 0 [1 1] 0 0 1 <[1 1]!3 1>"))
   .scale(lofi)
   .s("gm_fretless_bass:1, sine")
   ._pianoroll()

$: s("bd:4").beat("0,6,9.2,13?", 16).lpf(800)
$: s("sd:2").beat("4,12,14.9?", 16).lpf(1200)
$: s("hh:1!8").rarely(ply(2)).gain(rand.range(0.3, 0.8)).lpf(7800)


$: n("0").scale(lofi).s(guitar).early(-0.00).postgain(0.8)
$: n("2").scale(lofi).s(guitar).early(-0.04).postgain(0.8)
$: n("3").scale(lofi).s(guitar).early(-0.07)  .postgain(0.8)
$: n("5").scale(lofi).s(guitar).early(-0.10)  .postgain(0.8)
$: n("9 [8 _ 7 _  _ ]").scale(lofi).s(guitar).early(-0.12)  .postgain(0.8)

$: n(choose(fastcat(4,6,9,11),choose(1,2,3,5,7,9))
     .add("0 | [-2 0 2] | -2 | 2 | [4 3 2 1]").seg(choose( 4, 6, 8)))
  .scale(lofi)
  .s(lead)
  .size(6)
  .room(.9)
  .delay(.1)
  .att(rand.range(0, 0.3))
  .postgain(rand.range(0.3, 1.4))
  ._pianoroll()
