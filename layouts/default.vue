<template>
  <a-layout class="layout">
    <a-affix style="z-index: 700;">
      <a-layout-header class="header">
        <layout-header :is-login="$store.getters.isLogin" />
      </a-layout-header>
    </a-affix>
    <a-layout-content class="content">
      <Nuxt />
    </a-layout-content>
    <a-layout-footer class="footer text-center">
      <layout-footer />
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Header from '~/components/routes/home/Header.vue'
import Footer from '~/components/routes/home/Footer.vue'

@Component({
  head (this: Default) : object {
    return {
      htmlAttrs: {
        lang: this.htmlLang
      },
      meta: [
        { hid: 'og:url', property: 'og:url', content: this.getUrl }
      ]
    }
  },
  components: {
    'layout-header': Header,
    'layout-footer': Footer
  }
})
export default class Default extends Vue {
  get htmlLang () : string {
    return `${this.$t('lang')}`
  }

  get getUrl () : string {
    // eslint-disable-next-line quotes
    return `${process.env.baseUrl}${this.$route.path}`
  }
}
</script>

<style lang="scss">
html {
  font-family:
    'Kulim Park',
    'Noto Sans TC',
    -apple-system,
    BlinkMacSystemFont,
    Arial,
    sans-serif;
  font-size: 1rem;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  font-family:
    'Kulim Park',
    'Noto Sans TC',
    -apple-system,
    BlinkMacSystemFont,
    Arial,
    sans-serif;
  font-size: 1rem;
  background-color: #F4F5F6;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.header {
  background: #fff;
  height: auto;
  line-height: 1;
  padding: 0;
}

.container {
  max-width: 1080px;
  width: 95%;
  margin: 0 auto;
}

.content {
  // 滿高 - header 高 - footer 高 - footer 字高 - margin top bottom 距離
  min-height: calc(100vh - 48px - 48px - 1.5rem - 2rem);
  margin: 2.5rem auto 3rem auto;
  background-color: #F4F5F6;
}

.footer {
  background: #fff;
}
</style>
