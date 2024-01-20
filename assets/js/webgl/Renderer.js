import * as THREE from 'three'

// import { EffectComposer, RenderPass, EffectPass } from 'postprocessing'
//PostProcessing
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass'

export default class Renderer {
    constructor(webglapp) {
        this.webgl_app = webglapp

        this.sizes = this.webgl_app.sizes
        this.scene = this.webgl_app.scene
        this.canvas = this.webgl_app.canvas
        this.camera = this.webgl_app.camera


        //calling
        this.setInstance()
        this.onEffectComposer()

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
        // this.instance.useLegacyLights = true;
    }

    
    
    

	//? - =========================  PostProcessing  ========================= -//
	//? - =========================  PostProcessing  ========================= -//
	onEffectComposer(){
		this.renderTarget = new THREE.WebGLRenderTarget(
			800,
			600, {
				samples: 2
			}
		)
		this.effectComposer = new EffectComposer(this.instance, this.renderTarget)
		this.effectComposer.setSize(this.sizes.width, this.sizes.height)
		this.effectComposer.setPixelRatio(this.sizes.pixelRatio)

		this.renderPass = new RenderPass(this.scene, this.camera.instance)
		this.effectComposer.addPass(this.renderPass)

		
		this.dotScreenPass = new DotScreenPass()
		this.dotScreenPass.enabled = true 
		this.effectComposer.addPass(this.dotScreenPass)



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
        // this.effectComposer.render()
    }
    
}