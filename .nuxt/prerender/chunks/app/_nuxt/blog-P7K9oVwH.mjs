import { b as usePrismic, e as useAsyncData, u as useHead, a as __nuxt_component_0$1 } from '../server.mjs';
import { withAsyncContext, resolveComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/vue/server-renderer/index.mjs';
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

const __default__ = {
  methods: {
    scrollDown(event) {
    }
  },
  mounted() {
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "blog",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { client } = usePrismic();
    [__temp, __restore] = withAsyncContext(() => client.getSingle("blog")), __temp = await __temp, __restore();
    const { data: posts } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(async () => {
      const document = await client.getAllByType("article");
      return document;
    }, "$JbyJGr6ky2")), __temp = await __temp, __restore(), __temp);
    useHead({
      title: "Blog Page | Boiler Nuxt & Prismic",
      bodyAttrs: {
        class: "blog"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardArticle = resolveComponent("CardArticle");
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "page page-blog blog",
        "data-page": "blog"
      }, _attrs))}><h1>Blog Page</h1><div class="blog-grid"><!--[-->`);
      ssrRenderList(unref(posts), (post, index) => {
        _push(ssrRenderComponent(_component_CardArticle, {
          postData: post.data,
          type: post.type,
          uid: post.uid
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Go to home Page `);
          } else {
            return [
              createTextVNode(" Go to home Page ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=blog-P7K9oVwH.mjs.map
