import { fromEvent } from "rxjs"
import { map, tap } from "rxjs/operators"


const texto = document.createElement('div')
texto.innerHTML = `
  <br />
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum pretium diam, sit amet condimentum quam ornare eu. Phasellus sodales leo non ligula euismod, at consequat lectus fermentum. Aliquam et justo ac eros bibendum pretium. Phasellus at libero nec est finibus pulvinar vitae consequat libero. Proin urna mauris, dapibus ut tortor ut, ullamcorper sodales nibh. Morbi sagittis quis nibh et posuere. Etiam sagittis risus sem, nec volutpat risus mattis a. Nunc eu leo mi. Donec id gravida est. In hac habitasse platea dictumst.
  <br /><br />
  Donec in feugiat orci. In tincidunt varius dui, ut vulputate odio congue a. Suspendisse lobortis auctor nunc eget finibus. Phasellus lobortis sollicitudin tellus id vulputate. Sed laoreet sed nisi at consequat. Fusce aliquam orci ac quam imperdiet, efficitur sollicitudin mauris elementum. Nullam vestibulum nisi at velit malesuada dapibus.
  <br /><br />
  Maecenas at arcu in mi condimentum pretium sed in ex. Etiam interdum dignissim massa, vel ullamcorper dolor vestibulum ac. Donec sed tortor sit amet nibh malesuada faucibus. Praesent semper nibh in enim malesuada, ac ultrices magna iaculis. Praesent rhoncus dui a libero consectetur, at mattis neque porttitor. Praesent faucibus orci ante, accumsan laoreet erat lacinia in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse maximus lobortis feugiat. Donec nulla diam, rutrum vel pretium sit amet, bibendum eget turpis. Fusce vehicula nibh sed turpis viverra, eu convallis lorem imperdiet. Nunc a quam quis tellus finibus consequat. Maecenas venenatis ullamcorper ex, sed pretium lectus tristique ac. Sed egestas varius neque, id bibendum diam dapibus id.
  <br /><br />
  Cras laoreet sit amet quam ultrices accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum elit nec urna luctus, non vehicula augue vestibulum. Aliquam placerat magna sed cursus egestas. Nam luctus ullamcorper dui id maximus. In ligula ipsum, vulputate quis justo ut, molestie dignissim orci. Phasellus ac mattis odio, imperdiet elementum erat. Nunc tincidunt gravida ultricies. Nunc cursus aliquam ante, ac congue turpis laoreet interdum. Nunc at feugiat nunc, et vestibulum nunc. Vestibulum vulputate, lorem nec vestibulum aliquet, justo sem porta est, quis pulvinar lacus risus at nunc. Nulla facilisi. Vestibulum vitae turpis tincidunt, tristique mi et, viverra nibh. Integer non erat ut nulla rhoncus maximus. Aliquam egestas magna sit amet quam pellentesque, in tincidunt nibh ornare. Duis venenatis mauris ut erat imperdiet sollicitudin.
  <br /><br />
  Quisque gravida risus elit, non aliquet ex tincidunt posuere. In placerat nibh eu fermentum euismod. Cras vulputate lacus a metus finibus, ut malesuada nisi suscipit. Cras commodo ex id nulla laoreet venenatis non eu mi. Mauris vitae lorem tincidunt, rhoncus urna eu, rhoncus enim. Ut a elementum nisi, vitae tristique ex. Integer bibendum condimentum orci ultrices scelerisque.
`

const body = document.querySelector('body')
body.append(texto)

const progressBar = document.createElement('div')
progressBar.setAttribute('class', 'progress-bar')
body.append(progressBar)

const calcularPorcentajeScroll = (e) => {
  const { scrollTop, scrollHeight, clientHeight } = e.target.documentElement
  return (scrollTop / (scrollHeight - clientHeight)) * 100
}

// streams = observable
const scroll$ = fromEvent(document, 'scroll')

scroll$.pipe(
  // map(e => calcularPorcentajeScroll(e))
  map( calcularPorcentajeScroll ),
  tap(console.log)
)
.subscribe(porcentaje => {
  progressBar.style.width = `${ porcentaje }%`
})