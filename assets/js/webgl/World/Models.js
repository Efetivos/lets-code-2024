
import * as THREE from "three";
import { anima_webgl } from "@/assets/js/webgl/anima-webgl";
import DebugModels from "../W_utils/DebugModels";
export default class Models {
	constructor(webglapp) {
		this.webgl_app = webglapp;
		this.scene = this.webgl_app.scene;
		this.resources = this.webgl_app.resources;
		this.debug = this.webgl_app.debug;
		this.models = this.webgl_app.resources.models;
		this.children = [];
		this.objs = []

		//calling
		this.setModels();


		// Debug
		if (this.debug.active) {
			new DebugModels(this.debug, this.models, this.children);
		}
		// anima_webgl.animateChildren(this.objs, this.children);
	}

	//? - =========================  MODELS  ========================= -//
	//? - =========================  MODELS  ========================= -//

	setModels() {
		const DoubleSide = THREE.DoubleSide;

		this.models.forEach((model, index) => {
			const obj = model.obj.scene
			obj.children.forEach((model, i) => {
				this.children.push(model);
				if (model.name.indexOf('BOX') > -1) {
					// model.material.color = new THREE.Color('blue')
				} else {
					// model.material.color = new THREE.Color('yellow')
				}
			});

			this.cube_model = obj
		});

		this.setModelHero()
		this.setModelCodeMore()
	}




	//? - =========================  MODEL HERO  ========================= -//
	//? - =========================  MODEL HERO  ========================= -//

	setModelHero() {
		const cube_hero = this.cube_model.clone()
		cube_hero.name = 'cube_hero'
		if(window.innerWidth > 1024) {
			cube_hero.position.y = -0.81;
		} else {
			cube_hero.scale.setScalar(0.6);
			cube_hero.position.y = 0;
		}
		cube_hero.rotation.x = 0.52;
		cube_hero.rotation.y = Math.PI * 0.25;
		this.scene.add(cube_hero);
		anima_webgl.animaModelHero(cube_hero);
	}
	



	
	//? - =========================  MODEL HERO  ========================= -//
	//? - =========================  MODEL HERO  ========================= -//

	setModelCodeMore() {
		const cube_code_more = this.cube_model.clone()
		cube_code_more.name = 'cube_code_more'
		cube_code_more.children.forEach((model, i) => {
			if (model.name.indexOf('BOX') > -1) {
				let material = model.material.clone()
				model.material = material
				material.color = new THREE.Color('black')
			} else {
				let material = model.material.clone()
				model.material = material
				material.color = new THREE.Color('white')
			}
		});
		if(window.innerWidth > 1024) {
			cube_code_more.position.y = 0;
			cube_code_more.position.x = 1.5;
			cube_code_more.scale.setScalar(0.6);
		} else {
			cube_code_more.scale.setScalar(0.35);
			cube_code_more.position.y = 0;
		}
		cube_code_more.rotation.x = 0.52;
		cube_code_more.rotation.y = Math.PI * 0.16;
		cube_code_more.rotation.z = 0.2;
		this.scene.add(cube_code_more);
		anima_webgl.animaModelCode(cube_code_more);
	}



}
