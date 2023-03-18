import pokemonImg from '../assets/pokemonP.jpg'
import angularImg from '../assets/angularProject.png'
import despegueImg from '../assets/despegue.jpg'
import ecommerceImg from '../assets/ecommerce.jpg'
import gameImg from '../assets/game.png'
import goalsImg from '../assets/goals2023.jpg'
import piFoodImg from '../assets/pifood.png'
import weatherAppImg from '../assets/weather.jpg'
import angularLogo from '../assets/tecnologias/angularLogo.jpg'
import reactLogo from '../assets/tecnologias/React-icon.jpg'
import tsLogo from '../assets/tecnologias/ts.jpg'
import jsLogo from '../assets/tecnologias/javascript-logo-1.png'
import nextjsLogo from '../assets/tecnologias/nextjs.jpg'
import reduxLogo from '../assets/tecnologias/redux.png'
import firebaseLogo from '../assets/tecnologias/firebase.png'
import nodeLogo from '../assets/tecnologias/nodejs.jpg'

export type DetailsProjects = {
    img:string,
    deploy?:string,
    name:string,
    repo?:string,
    description: string,
    tecnologias?: Array<string | string>
}

export const dataProjects: Array<DetailsProjects> = [
    {
        img: pokemonImg,
        name:'projects-names.pokemon.name',
        repo:'https://github.com/SaanCaba/adivinar-pokemon',
        deploy:'https://guess-pokemon-one.vercel.app/',
        tecnologias:[reactLogo,tsLogo],
        description:'projects-names.pokemon.desc'
    },
    {
        img: piFoodImg,
        name:'projects-names.piFood.name',
        repo:'https://github.com/SaanCaba/demo-client',
        deploy:'https://demo-front-foodapp.vercel.app/',
        tecnologias:[reactLogo,jsLogo,nodeLogo,reduxLogo],
        description:'projects-names.piFood.desc'
    },
    {
        img: ecommerceImg,
        name:'Ecommerce App',
        repo:'https://github.com/SaanCaba/e-commerce',
        deploy:'https://e-commerce-sc.vercel.app/',
        tecnologias:[reactLogo,reduxLogo,tsLogo, nodeLogo],
        description:'projects-names.ecommerce.desc'
    },
    {
        img: despegueImg,
        name:'projects-names.flights.name',
        repo:'https://github.com/laubento/Despegue',
        deploy:'https://despegue.vercel.app/',
        tecnologias:[reactLogo,reduxLogo,nodeLogo,jsLogo],
        description:'projects-names.flights.desc'
    },
    {
        img: angularImg,
        name:'projects-names.foods-app.name',
        repo:'https://github.com/SaanCaba/food-store-frontend',
        deploy:'https://angular-food-store-78fcc.web.app/home',
        tecnologias:[angularLogo,tsLogo,firebaseLogo,nodeLogo],
        description:'projects-names.foods-app.desc'
    },
    {
        img: weatherAppImg,
        name:'projects-names.weather.name',
        repo:'https://github.com/SaanCaba/appclima',
        deploy:'https://appclima-one.vercel.app/',
        tecnologias:[reactLogo,jsLogo],
        description:'projects-names.weather.desc'
    },
    {
        img: goalsImg,
        name:'projects-names.goals.name',
        repo:'https://github.com/SaanCaba/goals2023',
        deploy:'https://goals2023.vercel.app/',
        tecnologias:[reactLogo,tsLogo],
        description:'projects-names.goals.desc'
    },
    {
        img: gameImg,
        name:'projects-names.game.name',
        repo:'https://github.com/SaanCaba/stone-paper-scissor-game',
        deploy:'https://stone-paper-scissor-game-navy.vercel.app/',
        tecnologias:[nextjsLogo, tsLogo],
        description:'projects-names.game.desc'
    },
]