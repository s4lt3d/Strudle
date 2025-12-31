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



$: n(irand(7).rib(irand(20), 2).add(12)
   .struct("1 1 1 <[1 1 1] [1 1] [0 0 1 0 1 0]>"))
   .scale(lofi)
   .piano()
   .room(1)
   ._pianoroll()

