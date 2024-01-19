import * as THREE from "three";
import Sizes from "./W_utils/Sizes.js";
import Time from "./W_utils/Time.js";
import Resources from "./W_utils/Resource.js";
import Camera from "./Camera.js";
import Renderer from "./Renderer.js";
import World from "./World/World.js";
import sources from "./sources.js";

class WebGLApp {
  constructor() {
    return;
  }

  init(canvas, debug) {
		this.html = document.querySelector('html')
    this.html.classList.add('is-gl-splash')
    // this options
    this.canvas = canvas;
    alert('WebGLApp')

    // instances
    this.debug = debug;
    this.sizes = new Sizes();
    this.time = new Time();

    //emiiter Events
    this.sizes.on("resize", () => {
      this.resize();
    }); 
    // Time on Tick
    this.time.on("tick", () => {
      this.update();
    }); 

    //THREE instaces
    this.scene = new THREE.Scene();
    this.resources = new Resources(sources);
    this.camera = new Camera(this);
    this.renderer = new Renderer(this);
    this.world = new World(this);

  }

  //? - =========================  resizing  ========================= -//
  //? - =========================  resizing  ========================= -//
  resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  //? - =========================  update  ========================= -//
  //? - =========================  update  ========================= -//
  update() {
    this.camera.update();
    this.world.updateScene(this.time.elapsed)
    this.renderer.update();
  }
}

export const webgl_app = new WebGLApp();
