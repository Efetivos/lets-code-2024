import EventEmitter from "./EventEmitter"
export default class Sizes extends EventEmitter {
    constructor() {

        super()
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        window.addEventListener('resize', () => {
            this.width = window.innerWidth
            this.height = window.innerHeight
            this.pixelRatio = Math.min(window.devicePixelRatio, 2)

            this.trigger('resize')
            this.fixMobile()
        }, )
        
        this.fixMobile()
    }


    //? - =========================  FIX MOBILE  ========================= -//
    //? - =========================  FIX MOBILE  ========================= -//
    fixMobile() {
        let vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)

        let clientWidth = Math.max(document.documentElement.clientWidth, 320)
        let vw = clientWidth * 0.01
        document.documentElement.style.setProperty('--vw', `${vw}px`);
    }
}