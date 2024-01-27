import { gsap } from 'gsap'
class Home {
    constructor() {
        return;
    }

    init(thisContent) {
        this.$html = document.querySelector('html')
        let doc = thisContent
        this.qsa = (s, o = doc) => o.querySelectorAll(s),
            this.qs = (s, o = doc) => o.querySelector(s)

        if(this.$html.classList.contains('remove-gl')){ 
            this.$html.classList.remove('remove-gl')
        }

    }
}

export const home = new Home()