export default class Debug {
    constructor() {
        this.active = true
        let has_gui = false
        this.ui = false
        if(!this.active) return
        has_gui = true
        const init = async () => {
            const dat = await import('dat.gui')
            const init = await import('three-dat.gui')
            dat.GUI.prototype._addFolder = function(name) {
                if (this.__folders[name]) {
                    return this.__folders[name]
                } else {
                    return this.addFolder(name)
                }
            }
            this.ui = new dat.GUI({ width: 350 })
        }
        init()

    }
}