
import * as THREE from "three";
import { anima_webgl } from "@/assets/js/webgl/anima-webgl";
export default class Models {
	constructor(webglapp) {
		this.webgl_app = webglapp;
		this.scene = this.webgl_app.scene;
		this.camera = this.webgl_app.camera;
		this.world = this.webgl_app.world;
		this.debug = this.webgl_app.debug;
		this.models = this.webgl_app.resources.models;
		this.objs = [];
		this.childrens = []

		this.setModels();
		// Debug
		if (this.debug.active) {
			this.setDebug();
		}

	}



	//? - =========================  MODELS  ========================= -//
	//? - =========================  MODELS  ========================= -//

	setModels() {

		this.clouds = []

		this.models.forEach((model, index) => {
			model.obj.scene.children.forEach((child, i) => {
				this.childrens.push(child)
			})
			model.obj.scene.scale.setScalar(1)

			window.modmodels = this



			this.scene.add(model.obj.scene);
			this.objs.push(model.obj.scene);
		});
		// anima_webgl.setters(this.objs, this.model_world, this.camera, this.mixer, this.action)

	}




	//? - =========================  set DEBUG  ========================= -//
	//? - =========================  set DEBUG  ========================= -//
	setDebug() {
		let that = this;
		//  console.log(this.uniforms.uColor)
		if (this.debug.active) {

			this.childrens.forEach((el, index) => {

				let params = {
					color: '#fff'
				}
				let debugModel = that.debug.ui.addFolder(`${el.name}`);
				//position
				debugModel
					.add(el.position, "x")
					.name(`Position X`)
					.min(-5)
					.max(10)
					.step(0.01);
				debugModel
					.add(el.position, "y")
					.name(`Position Y`)
					.min(-5)
					.max(10)
					.step(0.01);
				debugModel
					.add(el.position, "z")
					.name(`Position Z`)
					.min(-5)
					.max(10)
					.step(0.01);
			})


			this.models.forEach((el, index) => {
				let debugModel = that.debug.ui.addFolder(`${el.name}`);

				//rotation
				debugModel
					.add(el.obj.scene.rotation, "x")
					.name(`Rotation X`)
					.min(-Math.PI)
					.max(Math.PI)
					.step(0.01);
				debugModel
					.add(el.obj.scene.rotation, "y")
					.name(`Rotation Y`)
					.min(-Math.PI)
					.max(Math.PI)
					.step(0.01);
				debugModel
					.add(el.obj.scene.rotation, "z")
					.name(`Rotation Z`)
					.min(-Math.PI)
					.max(Math.PI)
					.step(0.01);


				//position
				debugModel
					.add(el.obj.scene.position, "x")
					.name(`Position X`)
					.min(-5)
					.max(10)
					.step(0.01);
				debugModel
					.add(el.obj.scene.position, "y")
					.name(`Position Y`)
					.min(-5)
					.max(10)
					.step(0.01);
				debugModel
					.add(el.obj.scene.position, "z")
					.name(`Position Z`)
					.min(-5)
					.max(10)
					.step(0.01);

				debugModel
					.add(el.obj.scene.scale, "x").name('setScalar').min(0).max(30).step(0.01)
					.onChange(() => {
						el.obj.scene.scale.setScalar(el.obj.scene.scale.x)
					})
			})

		}
	}

}
