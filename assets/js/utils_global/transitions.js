

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { smooth_scroll } from './smooth-scroll';
import Debug from "@/assets/js/webgl/W_utils/Debug.js";
import { webgl_app } from '@/assets/js/webgl/webgl-app';
import Time from '@/assets/js/utils/time';
gsap.registerPlugin(ScrollTrigger)



import { home } from '../pages/home';
import { about } from '../pages/about';
class Transitions {
    constructor() {
        this.debug = new Debug()
        this.webgl_active = true
        return;
    }

    init(isPage, DOM) {
        this.body = document.querySelector('body')
        this.$current = DOM
        this.current_page_name = isPage
        this.$old = null
        this.old_page_name = null
    }








    //? - =========================  first  ========================= -//
    //? - =========================  first  ========================= -//
    instancingPages($current, pageName) {
        ScrollTrigger.getAll().forEach(st => st.kill())
        if (pageName == 'index')  {
            home.init($current)
        }
        if (pageName == 'about')  {
            about.init($current)
        }
    }







    //? - =========================  on leave  ========================= -//
    //? - =========================  on leave  ========================= -//
    onLeave($old, done) {
        this.$old = $old
        this.old_page_name = this.$old.dataset.page
        gsap.to(this.$old, { opacity: 0, duration: 1.2, ease: 'power3.inOut', onComplete: () =>{  
            console.log(smooth_scroll.lenis)
            smooth_scroll.lenis.destroy()
            done() 
        } })

    }






    //? - =========================  before  ========================= -//
    //? - =========================  before  ========================= -//
    beforeEnter($current) {
        this.$current = $current
        this.current_page_name = this.$current.dataset.page
        gsap.set(this.$current, {  opacity: 0 })
    }







    //? - =========================  enter ========================= -//
    //? - =========================  enter ========================= -//
    onEnter($current, done) {
        history.scrollRestoration = "manual";
        this.$current = $current
        this.instancingPages($current, this.current_page_name)
        smooth_scroll.setLenis(this.time)
		gsap.to(this.$current, { opacity: 1, duration: 1.2, ease: 'power3.out', onComplete: () =>{  
            done() 
        } })
        //done()
    }








    //? - =========================  first  ========================= -//
    //? - =========================  first  ========================= -//
    firstEntrance() {
        this.body = document.querySelector('body')
        this.time = new Time()
        smooth_scroll.setLenis(this.time)
        if(!this.webgl_active) {
            this.body.classList.add('no-webgl')
            return
        }
        if(this.debug.active) {
            gsap.delayedCall(0.01, () => {
                webgl_app.init(document.querySelector("canvas.webgl"), this.debug);
            })
        }
        else {
            this.debug.active = false
            webgl_app.init(document.querySelector("canvas.webgl"), this.debug);
        }
    }

}
export const transitions = new Transitions()