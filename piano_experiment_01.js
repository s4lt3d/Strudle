setCpm(100/4)

const lofi = "<c:major d:minor g:major>"

const guitar = "gm_electric_guitar_jazz"
const lead = "gm_trombone:5"

  $: n("[ 0 -5]!1/2 | [0 3]!1/2")
.scale(lofi)
.piano()
._pianoroll()

  $: n("[ 3 -2]!1/2 | [3 8]!1/2")
.scale(lofi)
.piano()
.early(0.01)
._pianoroll()




$: n(irand(8).add(12).scale("minor")
   .struct("<0@.25 0.125> <1@2 1 1@.5> 1@.6 1@1.9 1 <1@1 1 1@2>"))
   .scale(lofi)
   
   .piano()
   .room(1)
   ._pianoroll()

