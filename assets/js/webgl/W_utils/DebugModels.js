export default class DebugModels {
    constructor(debug, models, children) {
        this.debug = debug
        this.models = models;
        this.children = children;
        this.setDebug()
        return;
    }

    //? - =========================  set DEBUG  ========================= -//
    //? - =========================  set DEBUG  ========================= -//
    setDebug() {
        let that = this;
        this.children.forEach((el, index) => {
            let debugModel = that.debug.ui.addFolder(`${el.name}`);
            //position
            debugModel
                .add(el.position, "x")
                .name(`Position X`)
                .min(-5)
                .max(5)
                .step(0.01);
            debugModel
                .add(el.position, "y")
                .name(`Position Y`)
                .min(-5)
                .max(5)
                .step(0.01);
            debugModel
                .add(el.position, "z")
                .name(`Position Z`)
                .min(-5)
                .max(5)
                .step(0.01);
        });

        this.models.forEach((el, index) => {
            const options = { value: el.obj.scene.scale.y };

            const toggleObj = {
                hide: () => {
                    that.scene.remove(el.obj.scene);
                },

                show: () => {
                    that.scene.add(el.obj.scene);
                },
            };
            let debugModel = that.debug.ui.addFolder(`${el.name}`);

            debugModel
                .add(options, "value")
                .min(-4)
                .max(4)
                .step(0.01)
                .onChange(() => {
                    el.obj.scene.scale.y = options.value;
                    el.obj.scene.scale.x = options.value;
                    el.obj.scene.scale.z = options.value;
                });
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
                .max(5)
                .step(0.01);
            debugModel
                .add(el.obj.scene.position, "y")
                .name(`Position Y`)
                .min(-5)
                .max(5)
                .step(0.01);
            debugModel
                .add(el.obj.scene.position, "z")
                .name(`Position Z`)
                .min(-5)
                .max(5)
                .step(0.01);

            //scale
            debugModel
                .add(el.obj.scene.scale, "x")
                .name(`Scale X`)
                .min(0)
                .max(10)
                .step(0.01);
            debugModel
                .add(el.obj.scene.scale, "y")
                .name(`Scale Y`)
                .min(0)
                .max(10)
                .step(0.01);
            debugModel
                .add(el.obj.scene.scale, "z")
                .name(`Scale Z`)
                .min(0)
                .max(10)
                .step(0.01);
            debugModel.add(toggleObj, "hide");
            debugModel.add(toggleObj, "show");
        });
    }
}
