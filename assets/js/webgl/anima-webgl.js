import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

class AnimaWebGL {
	constructor() {
		return;
	}


	setters() {
	}



	//? - =========================  MODEL HERO  ========================= -//
	//? - =========================  MODEL HERO  ========================= -//
    animaModelHero(model) {
        let that = this
        this.$hero__top = document.querySelector('.hero')
        this.$hero_release = document.querySelector('.hero__subtitles')
        let scaleModel = model.scale.x
        this.tl_move_modelHero = gsap.timeline({ paused: true })
            .fromTo(model.position, { y: model.position.y }, { duration: 1,  y: 3.5, ease: 'none' })
            .fromTo(model.scale, { x: scaleModel , y: scaleModel , z: scaleModel }, { duration: 1,  x: 0.1, y: 0.1, z: 0.1, ease: 'none' }, 0)
            .to(model.rotation, { duration: 1, x: `-=0.7`, y: `+=6`, ease: 'none' }, 0)

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

		this.onMouseMove(model)
    }



	//? - =========================  MODEL code  ========================= -//
	//? - =========================  MODEL code  ========================= -//
    animaModelCode(modelCode) {
        let that = this
        this.$code__top = document.querySelector('.code-more__time__h1')
        this.$code_release = document.querySelector('.code-more__descr__p')
        let scaleModel = modelCode.scale.x
        this.tl_move_modelCode = gsap.timeline({ paused: true })
            .fromTo(modelCode.position, { y: -3 }, { duration: 1,  y: 3, ease: 'none' })
            .fromTo(modelCode.scale, { x: scaleModel , y: scaleModel , z: scaleModel }, { duration: 1,  x: `+=0.1`, y: `+=0.1`, z: `+=0.1`, ease: 'none' }, 0)
            .to(modelCode.rotation, { duration: 1, x: `-=0.1`, y: `+=2`, ease: 'none' }, 0)

        ScrollTrigger.create({
            trigger: this.$code__top,
            start: "top 100%",
            endTrigger: this.$code_release,
            end: "bottom 75",
            onEnter: () => {
            },
            onEnterBack: () => {

            },
            onLeave: () => {
            },
            onUpdate: self => {
                that.tl_move_modelCode.progress(self.progress.toFixed(3))
            }
        });
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
