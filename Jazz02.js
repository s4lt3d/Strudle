setcpm(94 / 4)

stack(
  // Fmaj9 · A7b13 · Dm9 · G13 · Gm9 · C13 · Fmaj9 · C7b9
  note(`<
    [a3,c4,e4,g4] [g3,c#4,f4,b4]
    [f3,c4,e4,a4] [f3,b3,e4,a4]
    [f3,bb3,d4,a4] [e3,bb3,d4,a4]
    [a3,c4,e4,g4] [g3,bb3,db4,e4]
  >`).struct("[~ x ~@2 x ~@3]").s("gm_epiano1").gain(.33).room(.2).release(1),

  note(`<
    [f2 a2 c3 g#2] [a2 e2 g2 c#3]
    [d2 f2 a2 ab2] [g2 b2 d3 f#2]
    [g2 bb2 d3 b2] [c3 bb2 a2 gb2]
    [f2 a2 c3 b2]  [c3 g2 e2 gb2]
  >`).s("gm_acoustic_bass").gain(.44).release(1),

  note(`<
    [~ [a4 c5] e5 g5] [f5@2 [e5 c#5] ~]
    [~ [a4 c5] e5 a5] [g5@2 [e5 d5] ~]
    [~ [bb4 d5] f5 a5] [g5 e5 [d5 c5] ~]
    [a4 c5 e5 g5] [e5 [db5 c5] bb4 ~]
  >`).s("gm_electric_guitar_jazz").gain(.34).room(.3).orbit(1).release(1),

  s("bd ~ [~ bd] ~, ~ rim ~ rim").gain(.14).lpf(5000).release(1),
  s("hh [hh@2 hh] hh [hh@2 hh]").gain(".09 .05 .08 .05").release(1)
)
