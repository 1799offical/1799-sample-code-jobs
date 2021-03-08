<i18n>
{
  "zh-tw": {
    "description": "抱歉，您似乎來到不存在的頁面囉！",
    "go-home-page": "回首頁"
  },
  "zh-cn": {
    "description": "抱歉，您似乎来到不存在的页面啰！",
    "go-home-page": "回首页"
  },
  "en": {
    "description": " Sorry, you seem to have come to a page that does not exist!",
    "go-home-page": "Home Page"
  }
}
</i18n>

<template>
  <a-result status="404" title="404" :sub-title="$t('description')">
    <template #extra>
      <a-button type="primary" @click="toHome">
        {{ $t('go-home-page') }}
      </a-button>
    </template>
  </a-result>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class Exception404 extends Vue {
  toHome () : void {
    this.$router.push('/')
  }
}
</script>
