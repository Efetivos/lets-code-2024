import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["prismic"]?: typeof import("@nuxtjs/prismic").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["googleFonts"]?: typeof import("@nuxtjs/google-fonts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["gtag"]?: typeof import("nuxt-gtag").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/prismic", Exclude<NuxtConfig["prismic"], boolean>] | ["@nuxtjs/google-fonts", Exclude<NuxtConfig["googleFonts"], boolean>] | ["nuxt-gtag", Exclude<NuxtConfig["gtag"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },
  }
  interface PublicRuntimeConfig {
   prismic: {
      endpoint: string,

      environment: string,

      clientConfig: any,

      client: string,

      linkResolver: string,

      richTextSerializer: string,

      injectComponents: boolean,

      components: any,

      preview: boolean,

      toolbar: boolean,
   },

   gtag: {
      enabled: boolean,

      id: string,

      initCommands: Array<any>,

      config: any,

      tags: Array<any>,

      loadingStrategy: string,

      url: string,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }