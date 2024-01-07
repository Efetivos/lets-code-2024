import * as THREE from 'three'

export default class Renderer {
    constructor(webglapp) {
        this.webgl_app = webglapp

        this.sizes = this.webgl_app.sizes
        this.scene = this.webgl_app.scene
        this.canvas = this.webgl_app.canvas
        this.camera = this.webgl_app.camera


        //calling
        this.setInstance()

    }

    
    
    
    
    
    
    
    
    
    
    //? - =========================  setInstance  ========================= -//
    //? - =========================  setInstance  ========================= -//
    setInstance() {
        this.instance = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alias: true,
            alpha: true
        })

        this.instance.setClearColor(0x0000ff, 0)
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio)
        this.instance.outputColorSpace = THREE.SRGBColorSpace;
        this.instance.toneMapping = THREE.CineonToneMapping;
        this.instance.toneMappingExposure = 1.75;
        this.instance.shadowMap.enabled = true;
        this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
        this.instance.useLegacyLights = true;
    }

    
    
    
    
    
    
    
    
    
    
    //? - =========================  resize  ========================= -//
    //? - =========================  resize  ========================= -//
    resize() {
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio)

    }

    
    
    
    
    
    
    
    
    
    
    //? - =========================  update  ========================= -//
    //? - =========================  update  ========================= -//
    update() {
        this.instance.render(this.scene, this.camera.instance)
    }
    
}