import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
//import { OrbitControls } from "orbit-controls";

export default class Camera {
  constructor(webglapp) {
    this.webgl_app = webglapp;
    this.matcaps = this.webgl_app.resources.matcaps;
    this.sizes = this.webgl_app.sizes;
    this.scene = this.webgl_app.scene
    this.canvas = this.webgl_app.canvas; 
    this.debug = this.webgl_app.debug;

    // calling functions
    this.setInstance();
    this.isorbit = true;
    this.setOrbitControls();
    if (this.debug.active) {
      this.setDebug();
    }
  }

  //? - =========================  SET INSTANCE  ========================= -//
  //? - =========================  SET INSTANCE  ========================= -//

  setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      35,
      this.sizes.width / this.sizes.height,
      0.1,
      100
    );
    this.instance.position.z = 6;
    this.instance.position.y = 0.85;
    
    this.scene.add(this.instance);
  }

  //? - =========================  orbitControl  ========================= -//
  //? - =========================  orbitControl  ========================= -//
  setOrbitControls() {
    if (this.isorbit) {
      this.controls = new OrbitControls(this.instance, this.canvas);
      this.controls.enableDamping = true;
      this.is_rotate =  {
        Rotate: false
      }
      this.controls.autoRotate = this.is_rotate.Rotate;
      this.controls.autoRotateSpeed  = 5;
    }
    
    
  }

  //? - =========================  resize on Camera  ========================= -//
  //? - =========================  resize on Camera  ========================= -//
  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }

  update() {
    if (this.isorbit) {
      this.controls.update();
    }
  }

  

  //? - =========================  set DEBUG  ========================= -//
  //? - =========================  set DEBUG  ========================= -//
  setDebug() {
    let that = this;
    const options =  { 
      x: 0,
      y: 0.3 
    }
    let debugModel = that.debug.ui.addFolder(`Camera`);
    debugModel.add(options, "x").min(-2).max(2).step(0.001)
    .onChange(() => {
      this.instance.position.x =  Math.PI * options.x
    })
    
    debugModel.add(options, "y").min(-2).max(2).step(0.001)
    .onChange(() => {
      this.instance.position.y =  Math.PI * options.y
    })

    debugModel.add(that.is_rotate, 'Rotate')
    .listen()
      .onChange(()=> {
        console.log(that.is_rotate.Rotate)
        if(that.is_rotate.Rotate == false) {
          that.is_rotate.Rotate = false
          that.controls.autoRotateSpeed  = 0;
        } else {
          that.is_rotate.Rotate = true
          that.controls.autoRotateSpeed  = 10;

        }
      })
    
  }
}
