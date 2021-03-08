<template>
  <section class="search-banner default-card">
    <div class="search-banner-content">
      <a-row :gutter="[60, 0]" type="flex" align="middle" :class="{ 'p-3': $device.isMobile }">
        <a-col :lg="{ span: 11, offset: 1 }" :xs="24">
          <a-tabs class="search-tabs" default-active-key="groups">
            <a-tab-pane key="groups" tab="找團帶">
              <div class="slogan mb-4">
                匯集全台灣最多的旅行團，讓你淡旺季都有團可帶
              </div>
              <a-row :gutter="[15, 15]" type="flex" align="middle" class="mb-4">
                <a-col :lg="6" :xs="24">
                  <a-select class="default-selector" placeholder="地點">
                    <a-select-option value="uk">
                      英國
                    </a-select-option>
                    <a-select-option value="us">
                      美國
                    </a-select-option>
                  </a-select>
                </a-col>
                <a-col :lg="12" :xs="24">
                  <a-range-picker class="default-selector" />
                </a-col>
              </a-row>
              <a-row :gutter="[12, 0]" type="flex" align="middle" class="mb-2">
                <a-col :lg="18">
                  <a-input class="default-input" placeholder="輸入關鍵字" />
                </a-col>
                <a-col :lg="6">
                  <a-button class="search-button default-gradient-button">
                    <span>搜尋</span>
                    <svg-icons name="search-button" />
                  </a-button>
                </a-col>
              </a-row>
            </a-tab-pane>
            <a-tab-pane key="jobs" tab="找工作" force-render>
              <div class="slogan mb-4">
                匯集全台灣最多的旅行社工作機會，職涯不再擔憂
              </div>
              <a-row :gutter="[15, 15]" type="flex" align="middle" class="mb-4">
                <a-col :lg="6" :xs="24">
                  <a-select class="default-selector" placeholder="地點">
                    <a-select-option value="uk">
                      英國
                    </a-select-option>
                    <a-select-option value="us">
                      美國
                    </a-select-option>
                  </a-select>
                </a-col>
                <a-col :lg="12" :xs="24">
                  <a-range-picker class="default-selector" />
                </a-col>
              </a-row>
              <a-row :gutter="[12, 0]" type="flex" align="middle" class="mb-2">
                <a-col :lg="18">
                  <a-input class="default-input" placeholder="輸入關鍵字" />
                </a-col>
                <a-col :lg="6">
                  <a-button class="search-button default-gradient-button">
                    <svg-icons name="search-button" />
                    <span>搜尋</span>
                  </a-button>
                </a-col>
              </a-row>
            </a-tab-pane>
          </a-tabs>
        </a-col>
        <a-col :lg="12" :xs="24">
          <img
            class="search-banner-image w-100"
            src="/images/banner-sketch.svg"
            alt="banner-sketch.svg"
          >
        </a-col>
      </a-row>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import SvgIcons from '~/components/SvgIcons/index.vue'

@Component({
  components: {
    SvgIcons
  }
})
export default class SearchBanner extends Vue {
  bannerBackgroundImage: string = '/images/banner-background.svg'
}
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.search-banner {
  &-content {
    border-radius: 20px;
  }

  &-image {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .slogan {
    font-size: 1.875rem;
    font-weight: 700;
    color: $default-color;
    line-height: 1.5;
  }

  .search-button {
    display: inline-block;
  }
}
.search-tabs {
  font-size: $small-text-size;
  line-height: 1.5;
  color: $secondary-color;

  ::v-deep .ant-tabs-bar {
    border-bottom: none;

    .ant-tabs-tab {
      &:hover {
        color: $default-color;
      }

      &:active {
        color: $default-color;
      }
    }

    .ant-tabs-tab-active {
      color: $default-color;
      font-weight: 700;
    }

    .ant-tabs-ink-bar {
      height: 4px;
      border-radius: 10px;
      background-color: $default-color;
    }
  }
}
</style>
