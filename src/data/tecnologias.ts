import angularLogo from '../assets/tecnologias/angularLogo.jpg'
import reactLogo from '../assets/tecnologias/React-icon.jpg'
import tsLogo from '../assets/tecnologias/ts.jpg'
import jsLogo from '../assets/tecnologias/javascript-logo-1.png'
import nextjsLogo from '../assets/tecnologias/nextjs.jpg'
import reduxLogo from '../assets/tecnologias/redux.png'
import firebaseLogo from '../assets/tecnologias/firebase.png'
import nodeLogo from '../assets/tecnologias/nodejs.jpg'
import sassLogo from '../assets/tecnologias/sasslogo.png'
import tailwindLogo from '../assets/tecnologias/tailwindLogo.png'

interface DataTec {
  name: string
  image: string
}

export const dataTec: Array<DataTec> = [
  {
    name: 'JScript',
    image: jsLogo
  },
  {
    name: 'TScript',
    image: tsLogo
  },
  {
    name: 'React',
    image: reactLogo
  },
  {
    name: 'Angular',
    image: angularLogo
  },
  {
    name: 'Next.js',
    image: nextjsLogo
  },
  {
    name: 'Redux',
    image: reduxLogo
  },
  {
    name: 'Sass',
    image: sassLogo
  },
  {
    name: 'Tailwind',
    image: tailwindLogo
  },
  {
    name: 'Firebase',
    image: firebaseLogo
  },
  {
    name: 'Node.js',
    image: nodeLogo
  }
]
