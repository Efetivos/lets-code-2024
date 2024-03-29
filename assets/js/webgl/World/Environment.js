import * as THREE from "three";

export default class Environment {
	constructor(webglapp) {
		this.webgl_app = webglapp;

		this.scene = this.webgl_app.scene;
		this.camera = this.webgl_app.camera;
		this.resources = this.webgl_app.resources;
		this.debug = this.webgl_app.debug;
		// Debug
		if (this.debug.active) {
			this.debugFolder = this.debug.ui.addFolder("Environment");
		}

		//calling
		this.setSunlight();
		this.setDirectlight();
		this.setEnvironmentMap();
	}

	//? - =========================  setSunlight  ========================= -//
	//? - =========================  setSunlight  ========================= -//
	setSunlight() {

		this.ambientLight = new THREE.AmbientLight("#ffffff", 0.1);
		this.scene.add(this.ambientLight);


		this.DirLighWhite = new THREE.DirectionalLight("#ffffff", 0.2);
		this.DirLighWhite.castShadow = true;
		this.DirLighWhite.shadow.camera.far = 15;
		this.DirLighWhite.shadow.mapSize.set(1024, 1024);
		this.DirLighWhite.shadow.normalBias = 0.05;
		this.DirLighWhite.position.set(1.1, 1.9, -0.9);
		this.DirLighWhite.castShadow = true;

		this.scene.add(this.DirLighWhite);


		if (this.debug.active) {
			this.debugFolder
				.add(this.ambientLight, "intensity")
				.name("AmbientLight")
				.min(0)
				.max(30)
				.step(0.001);


			this.debugFolder
				.add(this.DirLighWhite, "intensity")
				.name("sunLightIntensity")
				.min(0)
				.max(30)
				.step(0.001);

			this.debugFolder
				.add(this.DirLighWhite.position, "x")
				.name("sunLightX")
				.min(-5)
				.max(5)
				.step(0.001);

			this.debugFolder
				.add(this.DirLighWhite.position, "y")
				.name("sunLightY")
				.min(-5)
				.max(5)
				.step(0.001);

			this.debugFolder
				.add(this.DirLighWhite.position, "z")
				.name("sunLightZ")
				.min(-5)
				.max(5)
				.step(0.001);
		}
	}


	//? - =========================  setSunlight  ========================= -//
	//? - =========================  setSunlight  ========================= -//
	setDirectlight() {
		this.DirLightNoise = new THREE.DirectionalLight(0xffffff, 0.5);
		this.DirLightNoise.castShadow = true;
		this.DirLightNoise.shadow.mapSize.set(1920, 1080);
		this.DirLightNoise.shadow.normalBias = 0.45;
		this.DirLightNoise.position.set(0.33, 1.11, 1.2);

		this.scene.add(this.DirLightNoise);

		if (this.debug.active) {
			this.debugFolder
				.add(this.DirLightNoise, "intensity")
				.name("DirecttIntensity")
				.min(0)
				.max(30)
				.step(0.001);

			this.debugFolder
				.add(this.DirLightNoise.position, "x")
				.name(" Pos DirecttX")
				.min(-5)
				.max(5)
				.step(0.001);

			this.debugFolder
				.add(this.DirLightNoise.position, "y")
				.name(" Pos DirectY")
				.min(-5)
				.max(5)
				.step(0.001);

			this.debugFolder
				.add(this.DirLightNoise.position, "z")
				.name(" Pos DirectZ")
				.min(-5)
				.max(5)
				.step(0.001);



		}
	}

	//? - =========================  setEnvironmentMap  ========================= -//
	//? - =========================  setEnvironmentMap  ========================= -//
	setEnvironmentMap() {
		this.environmentMap = {};
		this.environmentMap.intensity = 6;
		this.environmentMap.texture = this.resources.items.environmentMapTexture;
		// this.environmentMap.texture.encoding = THREE.sRGBEncoding;

		this.scene.environment = this.environmentMap.texture;

		this.environmentMap.updateMaterials = () => {
			this.scene.traverse((child) => {
				if (
					child instanceof THREE.Mesh &&
					child.material instanceof THREE.MeshStandardMaterial
				) {
					child.material.envMap = this.environmentMap.texture;
					child.material.envMapIntensity = this.environmentMap.intensity;
					child.material.needsUpdate = true;
				}
			});
		};
		this.environmentMap.updateMaterials();

		if (this.debug.active) {
			this.debugFolder
				.add(this.environmentMap, "intensity")
				.name("envMapIntensity")
				.min(3)
				.max(6)
				.step(0.0001)
				.onChange(this.environmentMap.updateMaterials);
		}
	}
}
