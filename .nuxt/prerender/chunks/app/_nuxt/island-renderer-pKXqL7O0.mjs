import { defineComponent, onErrorCaptured, createVNode } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/vue/index.mjs';
import { c as createError } from '../server.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/hookable/dist/index.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/unctx/dist/index.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/unhead/dist/index.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/h3/dist/index.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/ufo/dist/index.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/gsap/dist/gsap.js';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/@studio-freight/lenis/dist/lenis.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/three/build/three.module.js';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/three/examples/jsm/loaders/DRACOLoader.js';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/three/examples/jsm/controls/OrbitControls.js';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/three/examples/jsm/postprocessing/EffectComposer.js';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/three/examples/jsm/postprocessing/RenderPass.js';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/three/examples/jsm/postprocessing/DotScreenPass.js';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/defu/dist/defu.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/klona/dist/index.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/destr/dist/index.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/ohash/dist/index.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/@prismicio/client/dist/index.js';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/vue/server-renderer/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/scule/dist/index.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/pathe/dist/index.mjs';

const islandComponents = {};
const islandRenderer = defineComponent({
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${props.context.name}`
      });
    }
    onErrorCaptured((e) => {
      console.log(e);
    });
    return () => createVNode(component || "span", { ...props.context.props, "data-island-uid": "" });
  }
});

export { islandRenderer as default };
//# sourceMappingURL=island-renderer-pKXqL7O0.mjs.map
