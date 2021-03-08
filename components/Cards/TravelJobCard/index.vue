<template>
  <div class="position-relative">
    <a-card class="travel-job-card" :bordered="bordered">
      <a-space
        class="d-flex travel-job-card-content"
        align="start"
        :direction="$device.isMobile ? 'vertical': 'horizontal'"
        :size="20"
      >
        <nuxt-link :to="localePath({ name: 'enterprises-id', params: { id: data.enterpriseid.toString() } })">
          <a-avatar class="avatar" shape="square" :size="64" alt="旅行社" :src="data.enterpriseavatar" />
        </nuxt-link>
        <div class="w-100">
          <nuxt-link :to="localePath({ name: 'jobs-id', params: { id: data.id.toString() } })">
            <h3 class="title-2" :class="{ 'font-color-default': isLite, 'mb-0': isLite }">
              {{ data.title }}
            </h3>
          </nuxt-link>
          <nuxt-link :to="localePath({ name: 'enterprises-id', params: { id: data.enterpriseid.toString() } })">
            <h4 class="title-4" :class="{ 'font-color-default': isLite }">
              {{ data.enterprisename }}
            </h4>
          </nuxt-link>
          <section v-if="!isLight && !isLite">
            <p class="sub-description">
              {{ data.description }}
            </p>
          </section>
          <a-divider v-show="!isLite" class="my-2" />
          <section class="info font-color-default font-size-small">
            <a-row :gutter="[12, 12]" v-bind="isLite ? {} : { type: 'flex' }">
              <a-col>
                <svg-icons name="profession-default" />
                <span>{{ $t(`commons.${data.type}`) }}</span>
                <span>{{ data.amountofpeople }}</span>
              </a-col>
              <a-col :class="{ 'font-size-small': isLite, 'pt-0': isLite }">
                <svg-icons name="job-type-default" />
                <span>{{ $t(`positions.${data.position}`) }}</span>
              </a-col>
              <a-col v-show="!isLite">
                <svg-icons name="place-default" />
                <span>{{ data.enterpriseplace }}</span>
              </a-col>
            </a-row>
          </section>
          <a-divider v-if="!isLight && !isLite" class="my-2" />
          <section v-if="!isLight && !isLite" class="font-color-secondary font-size-normal font-weight-bold">
            <div class="d-flex">
              <div class="mr-3">
                {{ data.applycount }} 人應徵
              </div>
              <div>{{ $moment(data.updateat).fromNow() }}更新</div>
            </div>
          </section>
        </div>
      </a-space>
      <a-button v-if="!isLite" class="collect-button primary-round-button" :class="{ 'collected': toggleCollect }" size="large" @click="collect">
        <span>{{ toggleCollect ? $t('travel-job-card.collected') : $t('travel-job-card.collect') }}</span>
        <svg-icons :name="toggleCollect ? 'add-favorite-active' : 'add-favorite-default'" />
      </a-button>
    </a-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import SvgIcons from '~/components/SvgIcons/index.vue'
import { TravelJob } from '~/types'

enum Type {
  op = 'op',
  tp = 'tp',
  tc = 'tc',
  rc = 'rc',
  other = 'other'
}

function EnumProp<T extends string | number> (d: T, e: Record<T, any>) {
  return {
    default: d,
    validator (v: T) {
      return e[v] !== undefined
    }
  }
}

@Component({
  components: {
    SvgIcons
  }
})
export default class TravelJobCard extends Vue {
  @Prop({ type: Boolean, default: false }) readonly isLight!: boolean
  @Prop({ type: Boolean, default: false }) readonly isLite!: boolean
  @Prop(EnumProp(Type.other, Type)) readonly type!: Type
  @Prop({ type: Object }) readonly data!: TravelJob
  @Prop({ type: Boolean, default: false }) readonly bordered!: boolean
  $message: any

  toggleCollect : boolean = false

  collect () : void {
    this.toggleCollect = !this.toggleCollect
    this.$message.success(`收藏了 ${this.data.title}`)
  }
}
</script>

<style lang="scss" scoped>
$content-padding-left: 12%;
.travel-job-card {
  position: relative;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);

  &-content {
    .ant-space-item:last-child {
      width: 100%;
    }

    .title-2 {
      margin-bottom: 5px;
      padding-right: $content-padding-left;
    }

    .title-4 {
      margin-bottom: 10px;
      padding-right: $content-padding-left;
    }

    .sub-description {
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .avatar {
      border: 1px solid #F1F1F1;
      border-radius: 10px;
    }

    .info {
      font-weight: 700;
      line-height: 1.5;
    }
  }

  .collect-button {
    position: absolute;
    top: 24px;
    right: 24px;
  }
}

.urgent {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 600;
  color: #fff;
  font-weight: 700;
  background: linear-gradient(90deg, #FF416C 0%, #FF4B2B 100%);
  border-radius: 15px 0;
  padding: 6px 12px;
}

button[ant-click-animating-without-extra-node]:after {
  border: 0 none;
  opacity: 0;
  animation: none;
}
</style>
