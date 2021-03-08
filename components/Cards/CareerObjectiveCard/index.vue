<template>
  <a-card class="completion-card default-card" :body-style="{ padding: '18px' }">
    <a-row type="flex" align="middle" justify="space-between">
      <a-col>
        <div class="d-flex align-items-center">
          <a-avatar :size="54" :src="$store.getters.user.avatar" class="avatar" />
          <div>
            <div class="subtitle mb-1">
              {{ $t('commons.completion') }}
            </div>
            <nuxt-link :to="localePath({ name: 'users-id', params: { id: $store.getters.user.id } })">
              <span class="link">檢視</span>
            </nuxt-link>
          </div>
        </div>
      </a-col>
      <a-col>
        <a-progress
          type="circle"
          :percent="100"
          :width="60"
          :stroke-color="progressColor"
        >
          <template #format="percent">
            <span class="font-color-primary-blue font-size-normal font-weight-bold">{{ percent }}%</span>
          </template>
        </a-progress>
      </a-col>
    </a-row>
    <a-divider class="my-3" />
    <a-row class="mb-3" type="flex" align="middle" justify="space-between">
      <a-col>
        <div class="personal-intent-text">
          媒合意向
        </div>
      </a-col>
      <a-col>
        <div class="personal-intent-switch">
          <a-switch class="default-switch mr-2" default-checked size="small" />
          <span>開啟</span>
        </div>
      </a-col>
    </a-row>
    <div class="personal-profession mb-2">
      <svg-icons name="profession-default" :icon-style="{ fontSize: '16px' }" />
      <span>正職．領隊、線控</span>
    </div>
    <div class="personal-locale">
      <svg-icons name="place-default" :icon-style="{ fontSize: '16px' }" />
      <span>台灣的縣市</span>
    </div>
  </a-card>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import SvgIcons from '~/components/SvgIcons/index.vue'

@Component({
  components: {
    SvgIcons
  }
})
export default class CareerObjectiveCard extends Vue {
  progressColor: string = '#255E93'
}
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";
@import "assets/scss/fonts";

.completion-card {
  .avatar {
    margin-right: 10px;
  }

  .subtitle {
    @extend .normal-default-700;
  }

  .link {
    @extend .small-primary-blue-700;
    &:hover {
      color: $primary-blue-color;
      filter: brightness(120%);
    }
  }

  .personal-intent-text {
    @extend .small-default-700;
  }

  .personal-intent-switch {
    display: flex;
    align-items: center;
  }

  .personal-profession, .personal-locale {
    @extend .small-default-700
  }
}
</style>
