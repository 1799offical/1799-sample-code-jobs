<template>
  <a-card class="default-card job-search-card" :body-style="$device.isMobile ? mobileCardBodyStyle : desktopCardBodyStyle">
    <img
      class="job-search-sketch"
      :class="{ 'position-absolute': !$device.isMobile, 'w-100': $device.isMobile }"
      src="/images/job-search-sketch.svg"
      alt="找工作"
    >
    <section>
      <h1 class="title-1">
        全台灣最多的旅遊業職缺都在這裡
      </h1>
      <a-space :size="20" :direction="$device.isMobile ? 'vertical' : 'horizontal'">
        <a-select
          v-model="form.type"
          class="default-selector"
          placeholder="分類"
          style="width: 95px;"
        >
          <a-select-option v-for="type in jobTypeOptions" :key="type" :value="type">
            {{ $t(`commons.${type}`) }}
          </a-select-option>
        </a-select>
        <a-select
          v-model="form.position"
          class="default-selector"
          placeholder="職位類型"
          style="width: 130px;"
        >
          <a-select-option v-for="position in jobPositionOptions" :key="position" :value="position">
            {{ $t(`positions.${position}`) }}
          </a-select-option>
        </a-select>
        <a-select
          v-model="form.place"
          class="default-selector"
          placeholder="地點"
          style="width: 95px;"
        >
          <a-select-option v-for="place in jobPlaceOptions" :key="place" :value="place">
            {{ $t(`places.${place}`) }}
          </a-select-option>
        </a-select>
        <a-button class="default-gradient-button">
          搜尋
          <svg-icons name="search-button" />
        </a-button>
      </a-space>
      <a-divider class="divider" />
      <section>
        <h3 class="small-secondary-700 mb-3">
          或者試試這些熱門的關鍵字
        </h3>
        <a-button v-for="i in 15" :key="i" class="quick-select-button secondary-round-button">
          <svg-icons name="route-sun-default" />
          亞洲線
        </a-button>
      </section>
    </section>
  </a-card>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import SvgIcons from '~/components/SvgIcons/index.vue'

interface JobSearchForm {
  searchKeyword: string,
  type: string | undefined
  position: string | undefined
  place: string | undefined
}

@Component({
  components: {
    SvgIcons
  }
})
export default class JobsSearchBar extends Vue {
  form: JobSearchForm = {
    searchKeyword: '',
    type: undefined,
    position: undefined,
    place: undefined
  }

  desktopCardBodyStyle : object = { padding: '40px 60px' }
  mobileCardBodyStyle : object = { padding: '10px 20px' }

  jobTypeOptions: Array<string> = ['leader', 'guide']

  jobPositionOptions: Array<string> = ['full-time', 'part-time', 'intern']

  jobPlaceOptions: Array<string> = [
    'taipei',
    'newTaipei'
  ]

  marks: object = {
    25: '25',
    80: '80'
  }

  experienceMarks: object = {
    0: '0',
    5: '5',
    10: '10',
    20: '20'
  }

  langsOptions: Array<object> = [
    {
      value: 'English',
      label: '英文',
      children: [
        {
          value: 'normal',
          label: '普通'
        },
        {
          value: 'good',
          label: '精通'
        }
      ]
    },
    {
      value: 'Japan',
      label: '日文',
      children: [
        {
          value: 'normal',
          label: '普通'
        },
        {
          value: 'good',
          label: '精通'
        }
      ]
    }
  ]
}
</script>

<style lang="scss" scoped>
.job-search-card {
  position: relative;
  .title-1 {
    margin-bottom: 1.875rem;
  }
  .job-search-sketch {
    width: auto;
    height: 145px;
    top: 22px;
    right: 32px;
    z-index: 1;
  }
  .divider {
    margin-top: 1.875rem;
    margin-bottom: 1rem;
  }
  .default-gradient-button {
    width: auto;
  }
  .quick-select-button {
    margin-left: 7.5px;
    margin-right: 7.5px;
    margin-bottom: 15px;
    &:first-child {
      margin-left: auto;
    }
    &:last-child {
      margin-right: auto;
    }
  }
}
</style>
