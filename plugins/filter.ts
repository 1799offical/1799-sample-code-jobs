// @ts-ignore
import Vue from 'vue'
// @ts-ignore
import moment from 'moment'
import 'moment/locale/zh-tw'

moment.locale('zh-tw')

Vue.filter('NumberFormat', (value: number) => {
  if (!value) {
    return '0'
  }
  return value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
})

Vue.filter('dayjs', (dataStr : string, pattern = 'YYYY-MM-DD HH:mm:ss') => {
  return moment(dataStr).format(pattern)
})

Vue.filter('moment', (dataStr : string, pattern = 'YYYY-MM-DD HH:mm:ss') => {
  return moment(dataStr).format(pattern)
})

Vue.filter('dateFormat', (dataStr : string, pattern = 'YYYY-MM-DD') => {
  return moment(dataStr).format(pattern)
})

Vue.filter('phoneFormat', (dataStr : string) => {
  return dataStr.replace(/(\d{1,4})(\d{1,3})(\d{1,3})/g, '$1-$2-$3')
})
