export default ($axios :any) => (resource : string) => ({
  get (id: number) {
    return $axios.$post(`${resource}/get`, {
      id
    })
  },

  list (startCount : number = 1, amount : number = 10) {
    return $axios.$post(`${resource}/list`, {
      start_count: startCount,
      amount
    })
  }
})
