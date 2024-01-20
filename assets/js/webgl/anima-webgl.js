import { on } from "events";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

class AnimaWebGL {
	constructor() {
		return;
	}


	setters() {
	}
	

    animaModelHero(modelHero) {
        let that = this
        this.$hero__top = document.querySelector('.hero')
        this.$hero_release = document.querySelector('.hero__subtitles')
        let scaleModel = modelHero.scale.x
        this.tl_move_modelHero = gsap.timeline({ paused: true })
            .fromTo(modelHero.position, { y: modelHero.position.y }, { duration: 1,  y: 3.5, ease: 'none' })
            .fromTo(modelHero.scale, { x: scaleModel , y: scaleModel , z: scaleModel }, { duration: 1,  x: 0.1, y: 0.1, z: 0.1, ease: 'none' }, 0)
            .to(modelHero.rotation, { duration: 1, x: `-=0.7`, y: `+=6`, ease: 'none' }, 0)

        ScrollTrigger.create({
            trigger: this.$hero__top,
            start: "top top",
            endTrigger: this.$hero_release,
            end: "top top",
            onEnter: () => {
            },
            onEnterBack: () => {

            },
            onLeave: () => {
            },
            onUpdate: self => {
                that.tl_move_modelHero.progress(self.progress.toFixed(3))
            }
        });

		this.onMouseMove(modelHero)
    }

	//?  -------------------------- MOUSE MOVE -------------------------- //
    //?  -------------------------- MOUSE MOVE -------------------------- //
	onMouseMove(model) {
        this.mouse = { x: 0, y: 0, moved: false };
		const inital_rot = { x: model.rotation.x, y: model.rotation.y };
        let that = this
        if(window.innerWidth > 1024) {
            this.$hero__top.addEventListener("mousemove", (e) => {
                that.mouse.moved = true;
                let x = e.clientX ;
                let y = e.clientY;
                gsap.to(model.rotation, { duration: 3, 
					y:  inital_rot.y - gsap.utils.mapRange(0, window.innerWidth, -2, 2, x),
					x: inital_rot.x - gsap.utils.mapRange(0, window.innerHeight, -0.5, 0.5, y),
					ease: 'expo.out', overwrite: true })
            }, null);
        }
        else {
            this.$hero__top.addEventListener("touchmove", (e) => {
                that.mouse.moved = true;
				let x = e.touches[0].clientX ;
				let y = e.touches[0].clientY;
                gsap.to(model.rotation, { duration: 6, 
					y:  inital_rot.y - gsap.utils.mapRange(0, window.innerWidth, -2, 2, x),
					x: inital_rot.x - gsap.utils.mapRange(0, window.innerHeight, -0.5, 0.5, y),
					ease: 'expo.out', overwrite: true })
            }, { passive: true })
        
        }
        
    }
	
	
	
	
	
	
	
	
	
	//? - =========================  introAnimation  ========================= -//
	//? - =========================  introAnimation  ========================= -//
	introAnimation() {

	}

















	//? - =========================  enter  ========================= -//
	//? - =========================  enter  ========================= -//
	onEnter() {
	}


	enterCompleted() {

	}
	
	
	
	
	
	
	
	






	bindEvents() {
	}





}

export const anima_webgl = new AnimaWebGL();
