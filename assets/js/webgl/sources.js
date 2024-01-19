import Model from './models/logo-cube.glb'

import px from '@/assets/images/px.jpeg'
import nx from '@/assets/images/nx.jpeg'
import py from '@/assets/images/py.jpeg'
import ny from '@/assets/images/ny.jpeg'
import pz from '@/assets/images/pz.jpeg'
import nz from '@/assets/images/nz.jpeg'
export default [

	{
		name: "environmentMapTexture",
		type: "cubeTexture",
		path: [px, nx, py, ny, pz, nz]
	},
	{
		name: "scene",
		type: "gltfModel",
		path: Model
	}

];
