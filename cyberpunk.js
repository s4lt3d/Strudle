setCpm(90/4)

const kick = s("bd!4:6").duckorbit(2).duckattack(.25)
const snare = s("- sd:4 - sd:4")
const hh = s("hh!8:1").orbit(2).gain(.4)

drums: stack(snare, kick, hh )._scope()

synth: note("f2 d2!6 d#2!3 d2!5 d1")
  .s("supersaw")
  .orbit(2)
  ._pianoroll()


arp: note("<[d5 a5 a#5 d6]*4 [[d5 a5 a#5 f6] [d5 a5 a#5 e6]] * 2 >")
.trans(-12)
.s("sawtooth")
.distort(0.5)
.lpenv(perlin.slow(3).range(1,5))
.lpf(perlin.slow(2).range(100, 3000))
.gain(0.5)
.room(0.8)
.rsize(6)
._pianoroll()


// suspensful xylophone

setCpm(90/4)

const kick = s("bd!4:6").duckorbit(2).duckattack(.25)
const snare = s("- sd:4 - sd:4").gain(.2)
const hh = s("hh!15:1").orbit(2).gain(.5)

drums: stack(snare, kick, hh )._scope()

synth: note("f2 d2!6 d#2!3 d2!5 d2")
  .trans(12)
  .s("gm_xylophone")
  .orbit(2)
  .gain(.3)
  ._pianoroll()


arp: note("<[d5 a5 a#5 d6]*4 [[d5 a5 a#5 f6] [d5 a5 a#5 e6]] * 2 >")
.trans(-12)
.s("gm_xylophone")
.distort(0.5)
.lpenv(perlin.slow(3).range(1,5))
.lpf(perlin.slow(2).range(100, 3000))
.gain(0.5)
.room(0.8)
.rsize(6)
._pianoroll()
