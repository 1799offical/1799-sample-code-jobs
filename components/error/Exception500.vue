<template>
  <a-result status="500" title="500" sub-title="抱歉，您遇到了意料之外的錯誤！請盡快聯絡我們協助您處理問題！">
    <template #extra>
      <a-button type="primary" @click="toHome">
        回首頁
      </a-button>
    </template>
  </a-result>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class Exception500 extends Vue {
  toHome () : void {
    this.$router.push('/')
  }
}
</script>
