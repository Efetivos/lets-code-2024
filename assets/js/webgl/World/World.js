import Environment from "./Environment";
import Models from "./Models";

export default class World {
  constructor(webglapp) {
    this.$html = document.querySelector('html')
    this.webgl_app = webglapp;
    this.resources = this.webgl_app.resources;
    this.is_ready = false



    this.resources.on("ready", () => {
      this.models = new Models(webglapp);
      this.env = new Environment(webglapp);
      this.is_ready = true
      this.$html.classList.add('has-gl')
    });
  }


  //? - =========================  update  ========================= -//
  //? - =========================  update  ========================= -//
  updateScene(elapsed) {
    if(this.is_ready) {
      // this.models.updateScene(elapsed)
    }
  }
}
