import { gsap } from 'gsap'
import Observs from './observs';

class Hall {
    constructor() {
        return;
    }

    init(thisContent) {
        let doc = thisContent
        this.$html = document.querySelector('html')
        this.qsa = (s, o = doc) => o.querySelectorAll(s),
            this.qs = (s, o = doc) => o.querySelector(s)

        this.$html.classList.add('remove-gl')
        this.DOM = {
            $projects: this.qsa('.hall .showcase__each'),
            $projects_video: this.qsa('.hall .showcase__each video')
        }

        this.applyHasVideo()
        this.shuffleCards()
        new Observs(thisContent)
    }

    applyHasVideo() {
        this.DOM.$projects_video.forEach((video) => {
            const liWithVideo = video.closest('li')
            liWithVideo.classList.add('has-video')
            liWithVideo.addEventListener('mouseenter', () => {
                video.play()
            })
            liWithVideo.addEventListener('mouseleave', () => {
                video.pause()
            })
        })
    }

    shuffleCards() {
        const shuffled = Array.from(this.DOM.$projects).sort(() => 0.5 - Math.random())
        shuffled.forEach((card, i) => {
            card.style.order = i
        })
    }

}

export const hall = new Hall()