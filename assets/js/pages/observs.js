
export default class Observs {
    constructor(thisContent) {let doc = thisContent
        this.$html = document.querySelector('html')
        this.qsa = (s, o = doc) => o.querySelectorAll(s),
            this.qs = (s, o = doc) => o.querySelector(s)

        // ____________ marquees
        this.$marquees = this.qsa('.marquee__travel')
        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                let $mq = entry.target
                if (!entry.isIntersecting) {
                    $mq.classList.remove('mq')
                } else {
                    $mq.classList.add('mq')
                }
            })
        })

        this.$marquees.forEach(el => observer.observe(el))

        //_____________ cta
        this.$cta = this.qsa('.code-more__cta__svg svg')
        const observer_rotate = new IntersectionObserver(function (entries, observer_rotate) {
            entries.forEach(entry => {
                let $mq = entry.target
                if (!entry.isIntersecting) {
                    $mq.classList.remove('is-rotate')
                } else {
                    $mq.classList.add('is-rotate')
                }
            })
        })

        this.$cta.forEach(el => observer_rotate.observe(el))

    }
}