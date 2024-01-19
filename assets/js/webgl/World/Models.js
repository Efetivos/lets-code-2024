
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

			obj.scale.setScalar(0.86);
			obj.rotation.x = 0.52;
			obj.rotation.y = Math.PI * 0.25;
			obj.position.y = -0.81;
			this.scene.add(obj);
			this.objs.push(obj)
		});
	}
}
