import { NewUser } from '~/types'

interface State {
  locales: Array<string>,
  locale: string,
  role: string,
  user: NewUser,
  currentMenu: string,
  isLogin: boolean
}

export const state = () => ({
  locales: ['en'],
  locale: 'en',
  role: `${process.env.ROLE}`,
  currentMenu: 'home',
  isLogin: false,
  user: {}
})

export const getters = {
  role: (state : State) : string => state.role,
  fullUrl: () : string => window.location.origin,
  user: (state : State) : NewUser => state.user,
  currentMenu: (state : State) : string => state.currentMenu,
  isLogin: (state : State) : boolean => state.isLogin
}

export const mutations = {
  SET_LANG (state : any, locale : any) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  setCurrentMenu (state : any, currentMenu: string) {
    if (state.currentMenu !== currentMenu) {
      state.currentMenu = currentMenu
    }
  },
  SET_USER: (state: any, user: NewUser) => {
    state.user = user
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch }: any) {
    try {
      await dispatch('getUser')
    } catch (error) {
      // you could redirect to custom error page for instance
    }
  },
  async getUser (store : any) {
    // @ts-ignore
    const user = await this.$userRepository.info().then((response: any) => response.user)
    store.commit('SET_USER', user)
  }
}
