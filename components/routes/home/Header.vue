<template>
  <section>
    <a-alert
      message="公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容"
      banner
      :show-icon="false"
      closable
      class="broadcast"
    />
    <a-row type="flex" align="middle" class="layout-header">
      <a-col span="6">
        <div class="d-flex align-items-center">
          <div class="logo1799 be-pointer" @click="goHome">
            <img
              src="/logo/1799-logo.svg"
              title="回到首頁"
              alt="1799_logo"
            >
          </div>
        </div>
      </a-col>
      <a-col span="18" class="text-right">
        <a-tabs
          v-show="$device.isDesktop"
          class="main-menu"
          :active-key="$store.getters.currentMenu"
          :default-active-key="$store.getters.currentMenu"
          :tab-bar-gutter="12"
          :tab-bar-style="{ 'margin-bottom': '0', 'border-bottom': '1px solid #fff' }"
          @change="handleMenu"
        >
          <a-tab-pane v-for="menu in menus" :key="menu.id">
            <div slot="tab">
              <svg-icons :name="menu.icon" :icon-style="{ fontSize: '1rem' }" />
              <span class="font-size-small font-weight-bold">{{ menu.name }}</span>
            </div>
          </a-tab-pane>
          <div slot="tabBarExtraContent">
            <div class="d-inline-flex align-items-center ml-3">
              <a-popover
                v-if="isLogin"
                trigger="hover"
                placement="bottomRight"
                :overlay-style="{ width: '40%' }"
                overlay-class-name="notification-card"
              >
                <div slot="content">
                  <a-tabs class="text-center" default-active-key="notice">
                    <a-tab-pane key="message" class="text-left" tab="訊息" :force-render="true">
                      <a-list size="small" :data-source="message">
                        <a-list-item slot="renderItem" slot-scope="item">
                          <a-list-item-meta>
                            <a slot="title" href="https://www.antdv.com/">{{ item.user.name }}</a>
                            <a-avatar
                              slot="avatar"
                              shape="square"
                              :size="60"
                              :src="item.user.avatar"
                            />
                            <template slot="description">
                              <p>{{ item.messages }}</p>
                              <p>{{ item.updatedAt }}</p>
                            </template>
                          </a-list-item-meta>
                        </a-list-item>
                      </a-list>
                    </a-tab-pane>
                    <a-tab-pane key="notice" class="text-left" tab="通知" :force-render="true">
                      <a-list size="small" :data-source="notice">
                        <a-list-item slot="renderItem" slot-scope="item">
                          <a-list-item-meta>
                            <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                            <a-avatar
                              slot="avatar"
                              shape="square"
                              :size="60"
                              :src="item.cover"
                            />
                            <template slot="description">
                              <p>{{ item.description }}</p>
                              <p>{{ item.updatedAt }}．{{ item.status }}</p>
                            </template>
                          </a-list-item-meta>
                        </a-list-item>
                      </a-list>
                    </a-tab-pane>
                    <a-tab-pane key="request" class="text-left" tab="請求" :force-render="true">
                      <a-list size="small" :data-source="request">
                        <a-list-item slot="renderItem" slot-scope="item">
                          <a-list-item-meta>
                            <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                            <a-avatar
                              slot="avatar"
                              shape="square"
                              :size="60"
                              :src="item.cover"
                            />
                            <template slot="description">
                              <p>{{ item.description }}</p>
                              <div>
                                <span v-if="false">
                                  <a-button type="primary" shape="round" icon="check" size="small">
                                    同意
                                  </a-button>
                                  <a-button type="danger" shape="round" icon="cross" size="small">
                                    婉拒
                                  </a-button>
                                </span>
                                <span v-if="true">
                                  <a-button type="link" shape="round" icon="cross" size="small">
                                    取消
                                  </a-button>
                                </span>
                                {{ item.updatedAt }}．{{ item.status }}
                              </div>
                            </template>
                          </a-list-item-meta>
                        </a-list-item>
                      </a-list>
                    </a-tab-pane>
                  </a-tabs>
                  <div class="bg-grey text-center py-2">
                    <b><a>查看所有對話</a></b>
                  </div>
                </div>
                <div class="d-inline-block font-size-small font-weight-bold be-pointer">
                  <svg-icons name="notification-default" />
                  <span>通知</span>
                </div>
              </a-popover>
              <a-dropdown v-if="isLogin" placement="bottomRight">
                <div class="header-avatar be-pointer" :style="{ backgroundImage: avatarBackground }">
                  <a-avatar
                    class="avatar-content ml-3"
                    :size="36"
                    :src="$store.getters.user.avatar"
                    :src-set="$store.getters.user.avatar"
                  />
                </div>
                <a-menu slot="overlay">
                  <a-menu-item>
                    <nuxt-link :to="localePath('account-application-history')">
                      <span>應徵紀錄</span>
                    </nuxt-link>
                  </a-menu-item>
                  <a-menu-item>
                    <nuxt-link :to="localePath('account-manage')">
                      <span>帳號管理</span>
                    </nuxt-link>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
              <div v-show="!isLogin" class="login-and-register">
                <nuxt-link :to="localePath('login')">
                  <span class="text">登入</span>
                </nuxt-link>
                <span class="text">｜</span>
                <nuxt-link :to="localePath('register')">
                  <span class="text">註冊</span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </a-tabs>
        <div v-show="$device.isMobile" @click="openMenuDrawer">
          <a-icon type="menu" />
        </div>
        <a-drawer
          placement="right"
          :visible="visibleMenuDrawer"
          @close="closeMenuDrawer"
        >
          <p>Menu</p>
        </a-drawer>
      </a-col>
    </a-row>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import moment from 'moment'
import SvgIcons from '~/components/SvgIcons/index.vue'

interface Menus {
  id: string,
  name: string,
  icon: string
}

@Component({
  components: {
    SvgIcons
  }
})
export default class Header extends Vue {
  @Prop({ type: Boolean }) isLogin!: boolean

  menus: Array<Menus> = [
    // {
    //   id: 'groups',
    //   name: '找團帶',
    //   icon: 'travel-groups-default'
    // },
    {
      id: 'jobs',
      name: '找工作',
      icon: 'travel-jobs-default'
    },
    {
      id: 'courses',
      name: '課程',
      icon: 'courses-default'
    }
    // {
    //   id: 'news',
    //   name: '旅人頻道',
    //   icon: 'news-default'
    // },
    // {
    //   id: 'blogs',
    //   name: '旅知分享',
    //   icon: 'blogs-default'
    // }
  ]

  visibleMenuDrawer: boolean = false

  notice : Array<object> = [
    {
      id: 1,
      title: '應徵請求已被婉拒',
      description: '團案：《日本嚴選》京都・獨家高台寺湖月庵夜楓・世界...',
      cover: 'https://i.picsum.photos/id/130/100/100.jpg?hmac=d1Od-mrKbt8ndQksD8CThvcUu6O6strGPHL1NMGyJac',
      updatedAt: moment(new Date(2020, 11, 20)).toNow(),
      status: '已婉拒'
    },
    {
      id: 2,
      title: '應徵請求已被婉拒',
      description: '團案：《日本嚴選》京都・獨家高台寺湖月庵夜楓・世界...',
      cover: 'https://i.picsum.photos/id/192/100/100.jpg?hmac=iqi6mdb1cAlGkz7rFWSAmDqMk6UP0wysjBi1PLHHRR0',
      updatedAt: moment(new Date(2020, 11, 1)).toNow(),
      status: '已婉拒'
    },
    {
      id: 3,
      title: '應徵請求已被婉拒',
      description: '團案：《日本嚴選》京都・獨家高台寺湖月庵夜楓・世界...',
      cover: 'https://i.picsum.photos/id/635/100/100.jpg?hmac=Bem4r6wDm4-Z4w6oqPbt4glEGguCZOq2X0IIzcf-v3U',
      updatedAt: moment(new Date(2020, 11, 2)).toNow(),
      status: '已婉拒'
    },
    {
      id: 4,
      title: '應徵請求已被婉拒',
      description: '團案：《日本嚴選》京都・獨家高台寺湖月庵夜楓・世界...',
      cover: 'https://i.picsum.photos/id/32/100/100.jpg?hmac=xgnkU02haerGe9lcvmJEhlKwC-3o5ZLkL1Q3MbBgBFc',
      updatedAt: moment(new Date(2020, 11, 20)).toNow(),
      status: '已婉拒'
    }
  ]

  message : Array<object> = [
    {
      id: 1,
      user: {
        id: 888,
        name: '王曉琪',
        avatar: 'https://avatars.dicebear.com/api/avataaars/556.svg'
      },
      messages: '告訴你一個神祕的地方',
      updatedAt: moment(new Date(2020, 11, 20)).toNow(),
      status: 'unread'
    },
    {
      id: 2,
      user: {
        id: 66,
        name: '琴使華',
        avatar: 'https://avatars.dicebear.com/api/avataaars/76.svg'
      },
      messages: '待在神奇的角落，望著天空，朝著一望無際的海洋擤鼻涕',
      updatedAt: moment(new Date(2020, 11, 6)).toNow(),
      status: 'unread'
    },
    {
      id: 3,
      user: {
        id: 66,
        name: '劉人',
        avatar: 'https://avatars.dicebear.com/api/avataaars/211.svg'
      },
      messages: '好的！',
      updatedAt: moment(new Date(2020, 12, 6)).toNow(),
      status: 'read'
    }
  ]

  request : Array<object> = [
    {
      id: 1,
      title: '收到一則應徵邀請',
      description: '團案：《日本嚴選》京都・獨家高台寺湖月庵夜楓・世界...',
      cover: 'https://i.picsum.photos/id/130/100/100.jpg?hmac=d1Od-mrKbt8ndQksD8CThvcUu6O6strGPHL1NMGyJac',
      updatedAt: moment(new Date(2020, 11, 20)).toNow(),
      status: '等待回覆'
    },
    {
      id: 2,
      title: '應徵請求已被婉拒',
      description: '團案：《日本嚴選》京都・獨家高台寺湖月庵夜楓・世界...',
      cover: 'https://i.picsum.photos/id/192/100/100.jpg?hmac=iqi6mdb1cAlGkz7rFWSAmDqMk6UP0wysjBi1PLHHRR0',
      updatedAt: moment(new Date(2020, 11, 1)).toNow(),
      status: '已婉拒'
    },
    {
      id: 3,
      title: '應徵請求已被婉拒',
      description: '團案：《日本嚴選》京都・獨家高台寺湖月庵夜楓・世界...',
      cover: 'https://i.picsum.photos/id/635/100/100.jpg?hmac=Bem4r6wDm4-Z4w6oqPbt4glEGguCZOq2X0IIzcf-v3U',
      updatedAt: moment(new Date(2020, 11, 2)).toNow(),
      status: '已婉拒'
    },
    {
      id: 4,
      title: '應徵請求已被婉拒',
      description: '團案：《日本嚴選》京都・獨家高台寺湖月庵夜楓・世界...',
      cover: 'https://i.picsum.photos/id/32/100/100.jpg?hmac=xgnkU02haerGe9lcvmJEhlKwC-3o5ZLkL1Q3MbBgBFc',
      updatedAt: moment(new Date(2020, 11, 20)).toNow(),
      status: '已婉拒'
    }
  ]

  hasNotify : boolean = true

  get avatarBackground () : string {
    return this.hasNotify ? 'linear-gradient(90deg, #00D2FF 0%, #3A7BD5 100%)' : 'none'
  }

  goToPage (item : any) :void {
    this.$router.push(this.localePath(item.key))
  }

  handleMenu (activeKey : string) : void {
    this.$store.commit('setCurrentMenu', activeKey)
    this.$router.push(`/${activeKey}`)
  }

  goHome () : void {
    this.$store.commit('setCurrentMenu', 'home')
    this.$router.push('/')
  }

  openMenuDrawer () :void {
    this.visibleMenuDrawer = true
  }

  closeMenuDrawer () : void {
    this.visibleMenuDrawer = false
  }
}
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";

.broadcast {
  background-color: $primary-blue-color;
  font-size: $small-text-size;
  font-weight: 700;
  line-height: 1.5;
  ::v-deep .ant-alert-message {
    color: white;
  }

  ::v-deep .anticon-close {
    color: white;
  }
}

.layout-header {
  padding: 0 50px;
}

.notification-icon {
  font-size: 1rem;
  cursor: pointer;
}

.login-and-register {
  font-size: $small-text-size;
  font-weight: 700;
  background: $primary-blue-color;
  border-radius: 34px;
  padding: 6px 12px;
  line-height: 1.5;
  .text {
    color: #fff;
  }
}

.main-menu {
  ::v-deep .ant-tabs-nav-container {
    line-height: 2.6;
    .ant-tabs-tab {
      color: $default-color;
      &:active {
        color: $default-color;
      }
      &:hover {
        background: #F4F5F7;
      }
      &-active {
        background: #F4F5F7;
      }
    }
    .ant-tabs-ink-bar {
      height: 3px;
      background: linear-gradient(90deg, #00D2FF 0%, #3A7BD5 100%);
    }
  }

  ::v-deep .ant-tabs-extra-content {
    line-height: 59px;
  }
}

::v-deep.ant-popover-arrow {
  display: none;
}

.bg-grey {
  background-color: #ebebeb;
}

.logo1799 {
  margin-top: 12px;
  margin-bottom: 12px;
}

.header-avatar {
  position: relative;
  margin-left: 1rem;
  width: 42px;
  height: 42px;
  box-sizing: border-box;
  padding: 3px;
  border-radius: 50%;
  background-image: none;
  .avatar-content {
    position: absolute;
    right: 3px;
    border: 3px solid #fff;
  }
}
</style>
