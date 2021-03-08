<template>
  <div class="nuxt-error">
    <component :is="errorPage" :error="error" />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import Exception404 from '~/components/error/Exception404.vue'
import Exception500 from '~/components/error/Exception500.vue'

@Component({
  components: { Exception404, Exception500 }
})
export default class Error extends Vue {
  @Prop({ type: Object, required: false }) readonly error!: any

  get errorPage () : any {
    if (this.error.statusCode === 404) {
      return Exception404
    }
    // catch everything else
    return Exception500
  }
}
</script>
