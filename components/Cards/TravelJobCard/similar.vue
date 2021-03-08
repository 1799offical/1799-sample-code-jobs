<template>
  <a-card
    class="travel-job-similar-card flat-card"
    :bordered="bordered"
    :body-style="{ padding: 0 }"
  >
    <section class="d-flex justify-content-between align-items-center">
      <nuxt-link :to="localePath({ name: 'jobs-id', params: { id: data.id.toString() } })">
        <span class="title big-default-700">{{ data.title }}</span>
      </nuxt-link>
      <div class="be-pointer" @click="favorite">
        <svg-icons
          :name="isFavorite ? 'favorite-active' : 'favorite-default'"
          :icon-style="{ fontSize: '1.25rem' }"
        />
      </div>
    </section>
    <a-divider class="divider" />
    <section>
      <a-row type="flex" :gutter="[8, 8]">
        <a-col>
          <div class="info-tag">
            {{ $t(`commons.${data.type}`) }} {{ data.amountofpeople }}
          </div>
        </a-col>
        <a-col>
          <div class="info-tag">
            {{ $t(`positions.${data.position}`) }}
          </div>
        </a-col>
        <a-col>
          <div class="info-tag">
            {{ data.enterpriseplace }}
          </div>
        </a-col>
      </a-row>
    </section>
  </a-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import SvgIcons from '~/components/SvgIcons/index.vue'
import { TravelJob } from '~/types'

@Component({
  components: {
    SvgIcons
  }
})
export default class TravelJobSimilarCard extends Vue {
  @Prop({ type: Object }) readonly data!: TravelJob
  @Prop({ type: Boolean, default: false }) readonly bordered!: boolean
  $message: any
  isFavorite: boolean = false

  favorite () : void {
    this.isFavorite = !this.isFavorite
    this.$message.success(`你收藏了 ${this.data.id} 的職缺`)
  }
}
</script>

<style lang="scss" scoped>
.travel-job-similar-card {
  .title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .divider {
    margin-top: 20px;
    margin-bottom: 15px;
  }
}
</style>
