<template>
  <section class="hashtag-title">
    <svg-icons name="hashtag-default" />
    <span class="font-size-normal font-color-default">{{ title }}</span>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import SvgIcons from '~/components/SvgIcons/index.vue'

@Component({
  components: {
    SvgIcons
  }
})
export default class HashtagTitle extends Vue {
  @Prop({ type: String }) title!: string
}
</script>

<style scoped>
.hashtag-title {
  display: inline-block;
  font-weight: 700;
  padding: 4px 26px 4px 0;
}
</style>
