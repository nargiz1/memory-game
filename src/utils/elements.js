import ReactLogo from '/src/assets/React-icon.svg.png'
import NodeLogo from "/src/assets/nodejs-logo-FBE122E377-seeklogo.com.png"
import VueLogo from "/src/assets/vue.png"
import AngularLogo from "/src/assets/angular.png"
import BootstrapLogo from "/src/assets/bootstrap.png"
import JQueryLogo from "/src/assets/jquery.png"
import JsLogo from "/src/assets/js.png"
import LaravelLogo from "/src/assets/laravel.png"
import ReduxLogo from "/src/assets/redux.png"

import {shuffle} from "./utils"



const elements = [
    {
        name: "React",
        image: ReactLogo
    },
    {
        name: "Node",
        image: NodeLogo
    },
    {
        name: "Vue",
        image: VueLogo
    },
    {
        name: "Angular",
        image: AngularLogo
    },
    {
        name: "Bootstrap",
        image: BootstrapLogo
    },
    {
        name: "JQuery",
        image: JQueryLogo
    },
    {
        name: "Js",
        image: JsLogo
    },
    {
        name: "Laravel",
        image: LaravelLogo
    },
    {
        name: "Redux",
        image: ReduxLogo
    },
]

export const final = shuffle(elements.concat(elements))

