import { gsap } from 'gsap'

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
            $projects: this.qsa('.hall .showcase__each')
        }


        this.shuffleCards()
    }


    shuffleCards() {
        const shuffled = Array.from(this.DOM.$projects).sort(() => 0.5 - Math.random())
        shuffled.forEach((card, i) => {
            card.style.order = i
        })
    }



}

export const hall = new Hall()