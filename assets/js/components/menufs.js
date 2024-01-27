import { gsap } from "gsap"

export class MenuFS {
    constructor() {
        this.$html = document.querySelector('html')
        this.$logo = document.querySelector('.header__logo')
        this.menufs = {
            $el: document.querySelector('.menu-fs'),
            $fader: document.querySelector('.menu-fs__fader'),
            $bg: document.querySelector('.menu-fs__bg'),
            $trg: document.querySelector('.header__trg-menu'),
            $content: document.querySelector('.menu-fs__content'),
            $links: document.querySelectorAll('.menu-fs__nav a, .menu-fs__socials li'),
        }
        this.time = 1
        this.animating = false
        this.setters()
        this.bindEvents()
    }


    setters() {  
        this.tl_menufs = gsap.timeline({ paused: true })
        .fromTo(this.menufs.$content, { xPercent: -100 }, { xPercent: 0, duration: this.time  }, 0)
        .fromTo(this.menufs.$fader, { opacity: 0 }, { opacity: 1, duration: this.time  }, 0)
        .fromTo(this.menufs.$links, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: this.time, stagger: 0.1 }, '<50%')
    }

    openMenu() {
        this.animating = true
        this.$html.classList.add('is-menufs')
        this.tl_menufs.tweenTo(this.tl_menufs.duration(), { duration: this.time * 8 ,  ease:  'expo.out', onComplete: () => {
            this.animating = false
        }})
    }


    closeMenu() {
        this.animating = true
        this.$html.classList.remove('is-menufs')
        this.tl_menufs.tweenTo(0, { duration: this.time ,  ease:  'expo.out', onComplete: () => {
            this.animating = false
        }})
    }

    bindEvents() { 
        this.menufs.$trg.addEventListener('click', () => {
            if(this.$html.classList.contains('is-menufs')){ 
                this.closeMenu()
            }
            else {
                this.openMenu()
            }
        })

        this.menufs.$links.forEach($link => {
            $link.addEventListener('click', () => {
                this.closeMenu()
            })
        })
        this.$logo.addEventListener('click', () => {
            if(this.$html.classList.contains('is-menufs')){ 
                this.closeMenu()
            }
        })
    }
}