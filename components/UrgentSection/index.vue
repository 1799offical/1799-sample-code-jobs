<template>
  <section
    v-show="urgentArticles.length > 0"
    class="urgent-section"
  >
    <a-space :size="16" :direction="$device.isMobile ? 'vertical' : 'horizontal'">
      <div class="single-urgent">
        <svg-icons name="urgent-active" class="mr-1" />
        <span>{{ currentUrgentArticle.title || '看看最新的緊急快遞！' }}</span>
      </div>
      <nuxt-link to="/" class="urgent-view-all">
        <svg-icons name="arrow-right-default" />
        <span>查看所有</span>
      </nuxt-link>
    </a-space>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { UrgentArticle } from '~/types'
import SvgIcons from '~/components/SvgIcons/index.vue'

@Component({
  components: {
    SvgIcons
  }
})
export default class UrgentSection extends Vue {
  $urgentArticleRepository: any
  urgentArticles: Array<UrgentArticle> = []
  currentUrgentArticle: UrgentArticle | {} = {}
  currentUrgentArticleIndex : number = 0

  async created () {
    await this.getUrgentArticles()
  }

  async getUrgentArticles () : Promise<void> {
    this.urgentArticles = await this.$urgentArticleRepository.list().then((response : any) => response.urgent_articles)
    this.changeUrgentArticle()
  }

  changeUrgentArticle () : void {
    this.currentUrgentArticle = this.urgentArticles[this.currentUrgentArticleIndex]
    this.currentUrgentArticleIndex += 1
    setInterval(() => {
      if (this.currentUrgentArticleIndex >= 10) {
        this.currentUrgentArticleIndex = 0
      }
      this.currentUrgentArticle = this.urgentArticles[this.currentUrgentArticleIndex]
      this.currentUrgentArticleIndex += 1
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.urgent-section {
  margin-bottom: 1.5rem;
  .single-urgent {
    background: #FFFFFF;
    border-radius: 50px;
    padding: 12px 20px;
    color: $default-color;
    font-size: $small-text-size;
    font-weight: 700;
  }
  .urgent-view-all {
    font-size: $small-text-size;
    color: $default-color;
    font-weight: 700;
  }
}
</style>
