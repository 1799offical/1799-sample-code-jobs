<template>
  <a-row type="flex" justify="space-around">
    <a-col :lg="3" :md="12" :xs="24">
      <div class="footer-sub-title">
        認識 1799
      </div>
      <a class="footer-sub-description" href="javascript:;">
        關於 1799
      </a>
      <br>
      <a class="footer-sub-description" href="javascript:;">
        免責聲明
      </a>
      <br>
      <a class="footer-sub-description" href="javascript:;">
        使用者條款
      </a>
    </a-col>
    <a-col :lg="3" :md="12" :xs="24">
      <div class="footer-sub-title">
        網站引導
      </div>
      <nuxt-link :to="localePath('groups')">
        <span class="footer-sub-description">找團帶</span>
      </nuxt-link>
      <br>
      <nuxt-link :to="localePath('jobs')">
        <span class="footer-sub-description">找工作</span>
      </nuxt-link>
      <br>
      <nuxt-link :to="localePath('courses')">
        <span class="footer-sub-description">課程活動</span>
      </nuxt-link>
      <br>
      <!--      <nuxt-link :to="localePath('news')">-->
      <!--        <span class="footer-sub-description">旅人頻道</span>-->
      <!--      </nuxt-link>-->
      <br>
      <!--      <nuxt-link :to="localePath('blogs')">-->
      <!--        <span class="footer-sub-description">旅知分享</span>-->
      <!--      </nuxt-link>-->
    </a-col>
    <a-col :lg="3" :md="12" :xs="24">
      <div class="footer-sub-title">
        語言設定
      </div>
      <a-dropdown>
        <a class="footer-sub-description" href="javascript:;">
          {{ $t('commons.language') }} <a-icon type="caret-down" />
        </a>
        <a-menu slot="overlay" @click="handleI18nClick">
          <a-menu-item v-for="(name, language) in languages" :key="language">
            <a href="javascript:;">{{ name }}</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </a-col>
    <a-col :lg="3" :md="12" :xs="24">
      <div class="footer-sub-title">
        聯絡我們
      </div>
      <a class="footer-sub-description" href="javascript:;">
        <a-icon class="social-icon" type="facebook" />
      </a>
      <a class="footer-sub-description" href="javascript:;">
        <a-icon class="social-icon" type="instagram" />
      </a>
      <a class="footer-sub-description" href="javascript:;">
        <a-icon class="social-icon" type="youtube" />
      </a>
    </a-col>
    <a-col :lg="4" :md="12" :xs="24">
      <img
        class="footer-sub-image"
        src="/logo/1799-logo.svg"
        title="Logo"
        alt="1799_logo"
      >
      <div class="footer-sub-description">
        客服專線：02-25179981
      </div>
      <div class="footer-sub-description">
        Email：service@1799.travel
      </div>
    </a-col>
    <a-divider />
    <div class="footer-copyright">
      COPYRIGHT 2020 1799 All rights reserved.
    </div>
  </a-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

interface Language {
  'zh-tw': string,
  'zh-cn': string,
  en: string
}

@Component({})
export default class Footer extends Vue {
  languages: Language = {
    'zh-tw': '繁體中文',
    'zh-cn': '简体中文',
    en: 'English(US)'
  }

  handleI18nClick (e : any) :void {
    const language : string = e.key
    window.localStorage.setItem('language', language)
    this.$store.commit('SET_LANG', language)
    this.$router.push(this.switchLocalePath(language))
  }
}
</script>

<style scoped>
.footer-sub-title {
  font-size: 1rem;
  color: #A6A6A6;
  margin-bottom: 0.75rem;
}
.footer-sub-description {
  font-size: 0.85rem;
  color: #000;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.footer-sub-description > .social-icon {
  font-size: 1.2rem;
  margin: 0 6px;
}
.footer-sub-image {
  width: 74px;
  margin-bottom: 0.75rem;
}
.footer-copyright {
  margin-left: auto;
  font-size: 0.85rem;
  color: #c4c4c4;
}
</style>
