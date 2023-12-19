import l3ComexImg from '../assets/l3comex.png';
import angularImg from '../assets/angularProject.png';
import despegueImg from '../assets/despegue.jpg';
import ecommerceImg from '../assets/ecommerce.jpg';
import pokedexImg from '../assets/pokedex.png';
import gameImg from '../assets/game.png';
import piFoodImg from '../assets/pifood.png';
import weatherAppImg from '../assets/weather.jpg';
import mlibreTestImg from '../assets/mlibre.png';
import urlShortening from '../assets/urlshortening.jpg';
import angularLogo from '../assets/tecnologias/angularLogo.jpg';
import reactLogo from '../assets/tecnologias/React-icon.jpg';
import tsLogo from '../assets/tecnologias/ts.jpg';
import jsLogo from '../assets/tecnologias/javascript-logo-1.png';
import nextjsLogo from '../assets/tecnologias/nextjs.png';
import reduxLogo from '../assets/tecnologias/redux.png';
import firebaseLogo from '../assets/tecnologias/firebase.png';
import nodeLogo from '../assets/tecnologias/nodejs.jpg';

export type DetailsProjects = {
  img: string;
  deploy?: string;
  name: string;
  repo?: string;
  description: string;
  tecnologias?: Array<string | string>;
};

export const dataProjects: Array<DetailsProjects> = [
  {
    img: l3ComexImg,
    name: 'projects-names.l3comex.name',
    repo: '',
    deploy: 'l3comex.com',
    tecnologias: [nextjsLogo, tsLogo, firebaseLogo],
    description: 'projects-names.l3comex.name'
  },
  {
    img: mlibreTestImg,
    name: 'projects-names.mlibre.name',
    repo: 'https://github.com/SaanCaba/mlibre-test',
    deploy: 'https://mlibre-test.vercel.app/',
    tecnologias: [nextjsLogo, tsLogo],
    description: 'projects-names.mlibre.desc'
  },
  {
    img: pokedexImg,
    name: 'projects-names.pokedex.name',
    repo: 'https://github.com/SaanCaba/pokedex-project',
    deploy: 'https://pokedex-nine-tau-72.vercel.app/',
    tecnologias: [jsLogo, reactLogo],
    description: 'projects-names.pokedex.desc'
  },
  {
    img: urlShortening,
    name: 'projects-names.urlShort.name',
    repo: 'https://github.com/SaanCaba/fmentor-folder/tree/main/url-shortening-api-master/react-app',
    deploy: 'https://url-shortening-plcvzo6hb-saancaba.vercel.app/',
    tecnologias: [reactLogo, tsLogo],
    description: 'projects-names.urlShort.desc'
  },
  {
    img: piFoodImg,
    name: 'projects-names.piFood.name',
    repo: 'https://github.com/SaanCaba/demo-client',
    deploy: 'https://demo-front-foodapp.vercel.app/',
    tecnologias: [reactLogo, jsLogo, nodeLogo, reduxLogo],
    description: 'projects-names.piFood.desc'
  },
  {
    img: ecommerceImg,
    name: 'Ecommerce App',
    repo: 'https://github.com/SaanCaba/e-commerce',
    deploy: 'https://e-commerce-sc.vercel.app/',
    tecnologias: [reactLogo, reduxLogo, tsLogo, nodeLogo],
    description: 'projects-names.ecommerce.desc'
  },
  {
    img: despegueImg,
    name: 'projects-names.flights.name',
    repo: 'https://github.com/laubento/Despegue',
    deploy: 'https://despegue.vercel.app/',
    tecnologias: [reactLogo, reduxLogo, nodeLogo, jsLogo],
    description: 'projects-names.flights.desc'
  },
  {
    img: angularImg,
    name: 'projects-names.foods-app.name',
    repo: 'https://github.com/SaanCaba/food-store-frontend',
    deploy: 'https://angular-food-store-78fcc.web.app/home',
    tecnologias: [angularLogo, tsLogo, firebaseLogo, nodeLogo],
    description: 'projects-names.foods-app.desc'
  },
  {
    img: weatherAppImg,
    name: 'projects-names.weather.name',
    repo: 'https://github.com/SaanCaba/appclima',
    deploy: 'https://appclima-one.vercel.app/',
    tecnologias: [reactLogo, jsLogo],
    description: 'projects-names.weather.desc'
  },
  {
    img: gameImg,
    name: 'projects-names.game.name',
    repo: 'https://github.com/SaanCaba/stone-paper-scissor-game',
    deploy: 'https://stone-paper-scissor-game-navy.vercel.app/',
    tecnologias: [nextjsLogo, tsLogo],
    description: 'projects-names.game.desc'
  }
];
