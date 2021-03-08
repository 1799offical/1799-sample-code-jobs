<template>
  <div class="container">
    <urgent-section />
    <jobs-search-bar class="mb-5" />
    <a-row :gutter="[20, 0]" type="flex">
      <a-col :lg="17" :xs="24">
        <div class="d-md-flex justify-content-md-between align-items-md-center mb-3">
          <hashtag-title title="最多的職缺都在這裡" />
          <a-button
            class="icon-round-button ant-btn-icon-only"
            @click="filterModalVisible = true"
          >
            <svg-icons name="filter-default" />
          </a-button>
        </div>
        <travel-job-card
          v-for="travelJob in travelJobs"
          :key="travelJob.id"
          class="mb-3"
          :data="travelJob"
        />
      </a-col>
      <a-col :lg="7" :xs="24">
        <career-objective-card class="career-object-card" />
        <aside class="position-relative">
          <section class="recommend-travel-job-section">
            <hashtag-title class="mb-3" :title="$t('jobs.collections')" />
            <a-card class="default-card" :body-style="{ padding: '4px 8px' }">
              <travel-job-side-card
                v-for="travelJob in myCollectionTravelJobs"
                :key="travelJob.id"
                :data="travelJob"
              />
              <a-button class="secondary-round-button">
                <svg-icons name="arrow-right-default" />
                所有收藏職缺
              </a-button>
            </a-card>
          </section>
          <section class="my-browse-travel-job-section">
            <hashtag-title class="mb-3" :title="$t('commons.history')" />
            <a-card class="default-card" :body-style="{ padding: '4px 8px' }">
              <travel-job-side-card
                v-for="travelJob in myBrowseTravelJobs"
                :key="travelJob.id"
                :data="travelJob"
              />
            </a-card>
          </section>
        </aside>
      </a-col>
    </a-row>
    <a-modal v-model="filterModalVisible" :body-style="{ padding: '20px 20px 25% 20px' }">
      <div slot="title" class="d-flex align-items-center">
        <span class="small-default-700 mr-1">推薦設定</span>
        <svg-icons name="filter-default" />
      </div>
      <div class="small-secondary-700 mb-3">
        設定條件以獲取最佳團案推薦體驗
      </div>
      <div>
        <a-tree-select
          v-model="filterValue"
          class="w-100"
          :tree-data="filterData"
          tree-checkable
          search-placeholder="設定條件"
        />
      </div>
      <div slot="footer">
        <a-space :size="10">
          <a-button
            class="secondary-round-button"
            @click="filterModalVisible = false"
          >
            取消
          </a-button>
          <a-button class="third-round-button">
            確定
          </a-button>
        </a-space>
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import TravelJobCard from '~/components/Cards/TravelJobCard/index.vue'
import TravelJobSideCard from '~/components/Cards/TravelJobCard/side.vue'
import JobsSearchBar from '~/components/routes/jobs/JobsSearchBar.vue'
import CareerObjectiveCard from '~/components/Cards/CareerObjectiveCard/index.vue'
import UrgentSection from '~/components/UrgentSection/index.vue'
import SvgIcons from '~/components/SvgIcons/index.vue'
import HashtagTitle from '~/components/HashtagTitle/HashtagTitle.vue'
import { TravelJob } from '~/types'

@Component({
  head (this: JobsPage) :object {
    return {
      title: this.pageTitle,
      meta: [
        { hid: 'title', name: 'title', content: this.pageTitle },
        { hid: 'description', name: 'description', content: this.pageDescription },
        { hid: 'og:title', property: 'og:title', content: this.pageTitle },
        { hid: 'og:description', property: 'og:description', content: this.pageDescription },
        { hid: 'og:image', property: 'og:image', content: 'https://i.picsum.photos/id/43/800/450.jpg?hmac=FKKhluwfrjDsPoKc1AL7b89WoOz4TYqx0BU-hgwqs9g' }
      ]
    }
  },
  components: {
    UrgentSection,
    HashtagTitle,
    SvgIcons,
    TravelJobCard,
    JobsSearchBar,
    TravelJobSideCard,
    CareerObjectiveCard
  }
})
export default class JobsPage extends Vue {
  $travelJobRepository: any
  imageUrl: string = 'https://i.picsum.photos/id/357/1600/900.jpg?hmac=uJotUTE-n4qoArk3TLalAgTmxyvQU9iXDsNf7t8O1lc'

  filterModalVisible: boolean = false

  travelJobs: Array<TravelJob> = []

  myCollectionTravelJobs: Array<TravelJob> = []

  myBrowseTravelJobs: Array<TravelJob> = []

  filterValue: Array<string> = []
  filterData: Array<object> = [
    {
      title: '類別',
      value: 'leader',
      key: 'type'
    },
    {
      title: '職位',
      value: 'full-time',
      key: 'position'
    }
  ]

  async created () {
    this.$store.commit('setCurrentMenu', 'jobs')
    await Promise.all([
      this.getTravelJobs(),
      this.getMyCollectionTravelJobs(),
      this.getMyBrowseTravelJobs()
    ])
  }

  get pageTitle () : any {
    return `${this.$t('jobs.title')}${this.$t('page-title')}`
  }

  get pageDescription () : any {
    return `${this.$t('jobs.description')}`
  }

  async getTravelJobs () : Promise<void> {
    this.travelJobs = await this.$travelJobRepository.randomList().then((response : any) => response.travel_jobs)
  }

  async getMyCollectionTravelJobs () : Promise<void> {
    this.myCollectionTravelJobs = await this.$travelJobRepository.myCollectionList().then((response : any) => response.travel_jobs)
  }

  async getMyBrowseTravelJobs () : Promise<void> {
    this.myBrowseTravelJobs = await this.$travelJobRepository.myBrowseList().then((response : any) => response.travel_jobs)
  }
}
</script>

<style lang="scss" scoped>
.container {
  .jobs-cover {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 150px;
  }

  .switch-personal-intent {
    position: absolute;
    top: 0;
    right: 0;
  }

  .career-object-card, .recommend-travel-job-section {
    margin-bottom: 4rem;
  }

  .secondary-round-button {
    display: inline-block;
    padding: 6px 14px;
    margin-top: 18px;
    margin-bottom: 16px;
    margin-left: 8px;
  }
}
</style>
