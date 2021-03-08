<template>
  <a-card class="travel-job-side-card flat-card" :bordered="bordered" :body-style="{ padding: '12px 8px' }">
    <a-space
      class="d-flex travel-job-side-card-content"
      align="center"
      :size="10"
    >
      <nuxt-link :to="localePath({ name: 'enterprises-id', params: { id: data.enterpriseid.toString() } })">
        <a-avatar class="avatar" shape="square" :size="50" alt="旅行社" :src="data.enterpriseavatar" />
      </nuxt-link>
      <div class="w-100">
        <nuxt-link :to="localePath({ name: 'jobs-id', params: { id: data.id.toString() } })">
          <h5 class="title-4 font-color-default">
            {{ data.title }}
          </h5>
        </nuxt-link>
        <nuxt-link :to="localePath({ name: 'enterprises-id', params: { id: data.enterpriseid.toString() } })">
          <h6 class="sub-description">
            {{ data.enterprisename }}
          </h6>
        </nuxt-link>
      </div>
    </a-space>
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
export default class TravelJobSideCard extends Vue {
  @Prop({ type: Object }) readonly data!: TravelJob
  @Prop({ type: Boolean, default: false }) readonly bordered!: boolean
}
</script>

<style lang="scss" scoped>
$content-padding-left: 12%;
.travel-job-side-card {
  &-content {
    .ant-space-item:last-child {
      width: 100%;
    }

    .title-4 {
      margin-bottom: 0;
      padding-right: $content-padding-left;
    }

    .sub-description {
      margin-bottom: 0;
    }

    .avatar {
      border: 1px solid #F1F1F1;
      border-radius: 10px;
    }
  }
}
</style>
