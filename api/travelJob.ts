export default ($axios :any) => (resource : string) => ({
  list (payload : object) {
    return $axios.$post(`${resource}/list`, payload)
  },

  get (payload : object) {
    return $axios.$post(`${resource}/get`, payload)
  },

  myCollectionList (payload : object = { start_count: 1, amount: 10 }) {
    return $axios.$post(`${resource}/me/collection/list`, payload)
  },

  myBrowseList (payload : object = { start_count: 1, amount: 10 }) {
    return $axios.$post(`${resource}/me/browse/list`, payload)
  },

  randomList (payload : object = { start_count: 1, amount: 10 }) {
    return $axios.$post(`${resource}/random/list`, payload)
  },

  similarList (payload : object = { start_count: 1, amount: 10 }) {
    return $axios.$post(`${resource}/similar/list`, payload)
  }
})
