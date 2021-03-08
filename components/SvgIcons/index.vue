<template>
  <a-icon :component="iconName" :style="iconStyle" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
// @ts-ignore
import addFavoriteDefault from '@/assets/icons/add-favorite-default.svg?inline'
// @ts-ignore
import addFavoriteActive from '@/assets/icons/add-favorite-active.svg?inline'
// @ts-ignore
import calendarDefault from '@/assets/icons/calendar-default.svg?inline'
// @ts-ignore
import groupPeopleDefault from '@/assets/icons/group-people-default.svg?inline'
// @ts-ignore
import placeDefault from '@/assets/icons/place-default.svg?inline'
// @ts-ignore
import professionDefault from '@/assets/icons/profession-default.svg?inline'
// @ts-ignore
import urgentDefault from '@/assets/icons/urgent-default.svg?inline'
// @ts-ignore
import flagDefault from '@/assets/icons/flag-default.svg?inline'
// @ts-ignore
import filterDefault from '@/assets/icons/filter-default.svg?inline'
// @ts-ignore
import hashtagDefault from '@/assets/icons/hashtag-default.svg?inline'
// @ts-ignore
import hashtagActive from '@/assets/icons/hashtag-active.svg?inline'
// @ts-ignore
import jobTypeDefault from '@/assets/icons/job-type-default.svg?inline'
// @ts-ignore
import notificationDefault from '@/assets/icons/notification-default.svg?inline'
// @ts-ignore
import blogsDefault from '@/assets/icons/blogs-default.svg?inline'
// @ts-ignore
import newsDefault from '@/assets/icons/news-default.svg?inline'
// @ts-ignore
import coursesDefault from '@/assets/icons/courses-default.svg?inline'
// @ts-ignore
import travelJobsDefault from '@/assets/icons/travel-jobs-default.svg?inline'
// @ts-ignore
import travelGroupsDefault from '@/assets/icons/travel-groups-default.svg?inline'
// @ts-ignore
import SearchButton from '@/assets/icons/search-button.svg?inline'
// @ts-ignore
import ArrowRightDefault from '@/assets/icons/arrow-right-default.svg?inline'
// @ts-ignore
import UrgentActive from '@/assets/icons/urgent-active.svg?inline'
// @ts-ignore
import RouteSunDefault from '@/assets/icons/route-sun-default.svg?inline'
// @ts-ignore
import ShareLinkActive from '@/assets/icons/share-link-active.svg?inline'
// @ts-ignore
import TagDefault from '@/assets/icons/tag-default.svg?inline'
// @ts-ignore
import ApplyDefault from '@/assets/icons/apply-default.svg?inline'
// @ts-ignore
import ViewsDefault from '@/assets/icons/views-default.svg?inline'
// @ts-ignore
import SendWhite from '@/assets/icons/send-white.svg?inline'
// @ts-ignore
import FavoriteDefault from '@/assets/icons/favorite-default.svg?inline'
// @ts-ignore
import FavoriteActive from '@/assets/icons/favorite-active.svg?inline'
// @ts-ignore
import LayoutDefault from '@/assets/icons/layout-default.svg?inline'
// @ts-ignore
import EditDefault from '@/assets/icons/edit-default.svg?inline'
// @ts-ignore
import SeekDefault from '@/assets/icons/seek-default.svg?inline'
// @ts-ignore
import UpDefault from '@/assets/icons/up-default.svg?inline'
// @ts-ignore
import RecommenderDownDefault from '@/assets/icons/recommender-down-default.svg?inline'
// @ts-ignore
import PlusCircleDefault from '@/assets/icons/plus-circle-default.svg?inline'
// @ts-ignore
import PlusThird from '@/assets/icons/plus-third.svg?inline'

@Component({})
export default class SvgIcons extends Vue {
  @Prop({ type: String, required: true }) name!: string
  @Prop({ type: Object, required: false }) iconStyle!: object

  get iconName () : any {
    const nameSplit = this.name.split('-')
    const color : string = nameSplit[nameSplit.length - 1]
    switch (color) {
      case 'white':
        switch (this.name) {
          case 'send-white':
            return SendWhite
        }
        break
      case 'third':
        switch (this.name) {
          case 'plus-third':
            return PlusThird
        }
        break
      default:
        switch (this.name) {
          case 'add-favorite-default':
            return addFavoriteDefault
          case 'add-favorite-active':
            return addFavoriteActive
          case 'calendar-default':
            return calendarDefault
          case 'group-people-default':
            return groupPeopleDefault
          case 'place-default':
            return placeDefault
          case 'profession-default':
            return professionDefault
          case 'urgent-default':
            return urgentDefault
          case 'flag-default':
            return flagDefault
          case 'filter-default':
            return filterDefault
          case 'hashtag-default':
            return hashtagDefault
          case 'hashtag-active':
            return hashtagActive
          case 'job-type-default':
            return jobTypeDefault
          case 'notification-default':
            return notificationDefault
          case 'blogs-default':
            return blogsDefault
          case 'news-default':
            return newsDefault
          case 'courses-default':
            return coursesDefault
          case 'travel-groups-default':
            return travelGroupsDefault
          case 'travel-jobs-default':
            return travelJobsDefault
          case 'search-button':
            return SearchButton
          case 'arrow-right-default':
            return ArrowRightDefault
          case 'urgent-active':
            return UrgentActive
          case 'route-sun-default':
            return RouteSunDefault
          case 'share-link-active':
            return ShareLinkActive
          case 'tag-default':
            return TagDefault
          case 'apply-default':
            return ApplyDefault
          case 'views-default':
            return ViewsDefault
          case 'favorite-default':
            return FavoriteDefault
          case 'favorite-active':
            return FavoriteActive
          case 'layout-default':
            return LayoutDefault
          case 'edit-default':
            return EditDefault
          case 'seek-default':
            return SeekDefault
          case 'up-default':
            return UpDefault
          case 'recommender-down-default':
            return RecommenderDownDefault
          case 'plus-circle-default':
            return PlusCircleDefault
        }
    }
  }
}
</script>
