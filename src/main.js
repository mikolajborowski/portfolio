import {createApp} from 'vue';
import App from './App.vue';
import {createRouter, createWebHashHistory} from "vue-router";
import {library} from "@fortawesome/fontawesome-svg-core";
import {
    faAt,
    faBars,
    faBriefcase,
    faCircleDot,
    faCircleLeft,
    faCode,
    faCube,
    faFaceGrinWink,
    faFileCircleCheck,
    faLaptopCode,
    faLink,
    faMessage,
    faPaperPlane,
    faPerson,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
    faBootstrap,
    faCss3Alt,
    faDocker,
    faGit,
    faGithubSquare,
    faHtml5,
    faJsSquare,
    faLaravel,
    faLinkedin,
    faLinux,
    faNpm,
    faPhp,
    faReadme,
    faStackOverflow,
    faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import 'animate.css';
import MainView from './views/MainView.vue';
import NotFoundView from './views/NotFoundView.vue';
import ProjectView from './views/ProjectView.vue';

library.add({
    faDocker,
    faLinkedin,
    faVuejs,
    faGithubSquare,
    faJsSquare,
    faPhp,
    faCss3Alt,
    faStackOverflow,
    faFileCircleCheck,
    faCube,
    faBriefcase,
    faLaptopCode,
    faCircleDot,
    faPerson,
    faLink,
    faMessage,
    faBars,
    faXmark,
    faAt,
    faPaperPlane,
    faCircleLeft,
    faCode,
    faHtml5,
    faFaceGrinWink,
    faLaravel,
    faBootstrap,
    faGit,
    faLinux,
    faNpm,
    faReadme
});

const routes = [
    {path: '/', component: MainView},
    {path: '/:pathMatch(.*)*', component: NotFoundView},
    {path: '/project', component: ProjectView},
];

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior() {
        return {top: 0}
    },
    routes
})

const app = createApp(App);
app.config.globalProperties.window = window;
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount('#app');

console.log("%cHello, im Mikołaj Borowski", "color: blue; font-family:serif; font-size: 30px");
console.log("%cIf you are here it means you are some sort of technician. I'm more than happy to answer all your questions and listen to your job opportunities or project collaborations. If you see any bug or unusual behavior please contact me and give me a hint.", "font-size: 20px");