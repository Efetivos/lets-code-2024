import { _ as __nuxt_component_0, a as __nuxt_component_2, b as __nuxt_component_3 } from './Footer-KohOksXR.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/vue/server-renderer/index.mjs';
import { b as usePrismic, u as useHead, _ as _export_sfc } from '../server.mjs';
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

const _sfc_main$1 = {
  props: ["postData"],
  methods: {
    onClick(event) {
    }
  },
  mounted() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hall-fame" }, _attrs))}><div class="hall-fame__holder"><div class="hall-fame__display"><img${ssrRenderAttr("src", $props.postData.img.url)} loading="lazy" alt="" class="hall-fame__display__img">`);
  if ($props.postData.video.url) {
    _push(`<div class="hall-fame__video"><video${ssrRenderAttr("src", $props.postData.video.url)} loading="lazy" muted loop playsinline class="hall-fame__video__video"></video></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="hall-fame__info"><div class="hall-fame__info__ctn"><a${ssrRenderAttr("href", $props.postData.project_url)} target="_blank" class="hall-fame__cta"><div class="hall-fame__cta__span">${ssrInterpolate($props.postData.title)}</div></a><h1 class="hall-fame__info__h1">${ssrInterpolate($props.postData.author)}</h1></div><ul class="hall-fame__socials">`);
  if ($props.postData.social_media_1) {
    _push(`<li><a${ssrRenderAttr("href", $props.postData.url_social_media_1)} target="_blank">${ssrInterpolate($props.postData.social_media_1)}</a></li>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.postData.social_media_2) {
    _push(`<li><a${ssrRenderAttr("href", $props.postData.url_social_media_2)} target="_blank">${ssrInterpolate($props.postData.social_media_2)}</a></li>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</ul></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HallOfFameCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __default__ = {
  methods: {
    scrollDown(event) {
    }
  },
  mounted() {
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "hall",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { client } = usePrismic();
    const { data } = ([__temp, __restore] = withAsyncContext(() => client.getSingle("homepage")), __temp = await __temp, __restore(), __temp);
    const { data: hall } = ([__temp, __restore] = withAsyncContext(() => client.getSingle("hall")), __temp = await __temp, __restore(), __temp);
    useHead({
      title: "Hall of Fame | " + data.metatitle,
      bodyAttrs: {
        class: "hall"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Marquee = __nuxt_component_0;
      const _component_HallOfFameCard = __nuxt_component_1;
      const _component_CtaStarSvg = __nuxt_component_2;
      const _component_Footer = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-page": "hall",
        class: "page page-hall hall"
      }, _attrs))}><div class="hero hero-hall"><div class="hero__hold"><div class="hero__welcome"><div class="hero__welcome__text">${ssrInterpolate(unref(hall).welcome)}</div></div><div class="hero__eat-fun"><div class="hero__eat-fun__svg w-embed"><svg height="11.945rem" viewBox="0 0 549 120" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M548.18 0.553345V33.1452H407.062V87.4081H548.18V120H374.47V0.553345H548.18ZM548.18 44.0661V76.4873H417.983V44.0661H548.18Z" fill="var(--line-soft)"></path><path d="M227.015 44.0661H324.62V0.553345H357.212V120H324.62V76.4873H227.015V44.0661ZM183.502 120V0.553345H216.094V120H183.502Z" fill="var(--line-soft)"></path><path d="M0.0239258 33.1452V0.553345H173.733V33.1452H103.26V120H70.6681V33.1452H0.0239258Z" fill="var(--line-soft)"></path></svg><svg height="11.945rem" viewBox="0 0 722 120" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M721.983 87.4081V120H548.273V0.553345H580.865V87.4081H721.983Z" fill="var(--line-soft)"></path><path d="M538.514 87.4081V120H364.804V0.553345H397.396V87.4081H538.514Z" fill="var(--line-soft)"></path><path d="M226.139 0.553345H312.994L356.336 120H321.697L313.847 98.329H236.719L248.664 65.7371H301.903L290.129 33.1452H248.834L217.266 120H182.627L226.139 0.553345Z" fill="var(--line-soft)"></path><path d="M44.0447 44.0661H141.65V0.553345H174.242V120H141.65V76.4873H44.0447V44.0661ZM0.531982 120V0.553345H33.1239V120H0.531982Z" fill="var(--line-soft)"></path></svg><svg height="11.945rem" viewBox="0 0 360 120" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M186.168 120V0.553345H359.878V33.1452H218.76V120H186.168ZM359.878 44.0661V76.4873H229.681V44.0661H359.878Z" fill="var(--line-soft)"></path><path d="M60.1362 0.553345H114.399C122.59 0.553345 130.325 2.14597 137.606 5.33121C144.886 8.4027 151.2 12.6687 156.547 18.1291C162.007 23.4757 166.273 29.7893 169.345 37.0699C172.53 44.3505 174.122 52.086 174.122 60.2767C174.122 68.4673 172.53 76.2029 169.345 83.4835C166.273 90.764 162.007 97.1345 156.547 102.595C151.2 107.942 144.886 112.208 137.606 115.393C130.325 118.464 122.59 120 114.399 120H60.1362C51.9455 120 44.21 118.464 36.9294 115.393C29.6488 112.208 23.2783 107.942 17.8179 102.595C12.4713 97.1345 8.20531 90.764 5.02007 83.4835C1.94858 76.2029 0.412842 68.4673 0.412842 60.2767C0.412842 52.086 1.94858 44.3505 5.02007 37.0699C8.20531 29.7893 12.4713 23.4757 17.8179 18.1291C23.2783 12.6687 29.6488 8.4027 36.9294 5.33121C44.21 2.14597 51.9455 0.553345 60.1362 0.553345ZM33.0047 60.2767C33.0047 64.0307 33.6873 67.5572 35.0524 70.8562C36.5312 74.1552 38.4651 77.0561 40.8541 79.5588C43.3568 81.9477 46.2576 83.8816 49.5566 85.3605C52.8556 86.7256 56.3821 87.4081 60.1362 87.4081H114.399C118.153 87.4081 121.68 86.7256 124.979 85.3605C128.278 83.8816 131.122 81.9477 133.511 79.5588C136.013 77.0561 137.947 74.1552 139.312 70.8562C140.791 67.5572 141.531 64.0307 141.531 60.2767C141.531 56.5226 140.791 52.9961 139.312 49.6971C137.947 46.3981 136.013 43.5541 133.511 41.1652C131.122 38.6625 128.278 36.7286 124.979 35.3635C121.68 33.8847 118.153 33.1452 114.399 33.1452H60.1362C56.3821 33.1452 52.8556 33.8847 49.5566 35.3635C46.2576 36.7286 43.3568 38.6625 40.8541 41.1652C38.4651 43.5541 36.5312 46.3981 35.0524 49.6971C33.6873 52.9961 33.0047 56.5226 33.0047 60.2767Z" fill="var(--line-soft)"></path></svg></div></div><div class="hero__code w-embed"><svg width="100%" viewBox="0 0 1837 298" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1836.95 0.902664V81.9678H1485.95V216.935H1836.95V298H1404.88V0.902664H1836.95ZM1836.95 109.131V189.772H1513.11V109.131H1836.95Z" fill="white"></path><path d="M1024.56 0.902664L1119.21 195.714L1213.43 0.902664H1361.98V298H1281.34V81.9678H1264.36L1159.53 298H1078.46L973.629 81.9678H957.077V298H876.012V0.902664H1024.56Z" fill="white"></path><path d="M531.114 0.902664H747.146L854.95 298H768.791L749.268 244.098H557.428L587.138 163.033H719.558L690.273 81.9678H587.562L509.043 298H422.885L531.114 0.902664Z" fill="white"></path><path d="M0.221191 298V0.902664H432.286V81.9678H81.2863V298H0.221191ZM432.286 109.131V189.772H108.45V109.131H432.286Z" fill="var(--white)"></path></svg></div><div class="hero__subtitles"><div class="hero__subtitles__left"><div class="hero__subtitles__span">${ssrInterpolate(unref(hall).hero_text_left)}</div></div><div class="hero__subtitles__right"><div class="hero__subtitles__span">${ssrInterpolate(unref(hall).hero_text_right)}</div></div></div></div></div><section id="projects" class="showcase"><div class="showcase__hold">`);
      _push(ssrRenderComponent(_component_Marquee, {
        text: unref(hall).showcase_marquee,
        theme: "showcase__marquee"
      }, null, _parent));
      _push(`<div class="showcase__title"><div class="showcase__descr"><p class="showcase__p">${ssrInterpolate(unref(hall).description_showcase)}</p></div><a href="/" class="showcase__submit">SUBMIT</a></div><ul role="list" class="showcase__list"><!--[-->`);
      ssrRenderList(unref(hall).projects_group, (project, index) => {
        _push(`<li class="showcase__each">`);
        _push(ssrRenderComponent(_component_HallOfFameCard, {
          postData: project,
          "data-index": index
        }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></section><section class="code-more"><div class="code-more__hold">`);
      _push(ssrRenderComponent(_component_Marquee, {
        text: unref(data).code_more_marquee,
        theme: "marquee__color"
      }, null, _parent));
      _push(`<div class="code-more__time"><h1 class="code-more__time__h1">${ssrInterpolate(unref(data).title_code_more)}</h1></div><div class="code-more__big-ctn"><div class="code-more__big-title"><h1 class="code-more__big__h1">${ssrInterpolate(unref(data).big_1_code_more)}</h1><h1 class="code-more__big__h1__2">${ssrInterpolate(unref(data).big_2_code_more)}</h1></div><div class="code-more__descr"><p class="code-more__descr__p">${ssrInterpolate(unref(data).description_code_more)}</p></div></div><div class="code-more__cta"><a${ssrRenderAttr("href", unref(data).url_code_more)} target="_blank" class="code-more__cta__ctn"><div class="code-more__cta__svg w-embed">`);
      _push(ssrRenderComponent(_component_CtaStarSvg, null, null, _parent));
      _push(`</div><div class="code-more__cta__text">${ssrInterpolate(unref(data).label_code_more)}</div></a></div><div class="code-more__lines"><!--[-->`);
      ssrRenderList(unref(data).code_more_group, (item, index) => {
        _push(`<div class="code-more__lines__each"><h1 class="code-more__lines__text"${ssrRenderAttr("data-line", index)}>${ssrInterpolate(item.line)}</h1></div>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_Footer, { postData: unref(data) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hall.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=hall-SnZw6KwV.mjs.map
