setCpm(70/4)

vinyl: stack(
  s("crackle").gain(0.07),
  s("white").gain(0.008)
)

//const lofi = "<c:major a2:minor g2:major g2:pentatonic>"
//const lofi = "<d:minor eb:minor>"
//const lofi = "<a:minor d:major f:major c:major>"
const lofi = "<d:minor f:minor c:minor g:major>"


keys: n("[0,2,5,7,11,13?]")
  .scale(lofi)
  .delay(.3)
  .room(.5)
.piano().gain(slider(0.444))
._pianoroll()

 baseline: n(irand(7).rib(7,1).sub(1)
   .struct("1 0 <[2 1] 0> [1 1] 0 1 0 <[1 1]!3 1>"))
   .scale(lofi)
   .s("gm_fretless_bass:1, sine")
   ._pianoroll()

$: s("bd:4").beat("0,6,9.2,13?", 16).lpf(800)
$: s("sd:2").beat("4,12,14.9?", 16).lpf(1200)
$: s("hh:1!8").rarely(ply(2)).gain(rand.range(0.3, 0.8)).lpf(7800)


$: n("0").scale(lofi).s("gm_electric_guitar_jazz").early(-0.00)
$: n("2").scale(lofi).s("gm_electric_guitar_jazz").early(-0.03)
$: n("3").scale(lofi).s("gm_electric_guitar_jazz").early(-0.06)
$: n("5").scale(lofi).s("gm_electric_guitar_jazz").early(-0.09)
$: n("9 [8 _ 7 _  _ ]").scale(lofi).s("gm_electric_guitar_jazz").early(-0.12)
  
