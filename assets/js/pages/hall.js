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
    }
}

export const hall = new Hall()