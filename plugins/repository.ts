import createTravelJob from '~/api/travelJob'
import createUrgentArticle from '~/api/urgentArticle'

const api = {
  travelJob: '/travel_job',
  urgentArticle: '/urgent_article'
}

export default (context : any, inject : any) => {
  const travelJobWithAxios = createTravelJob(context.$axios)
  const travelJobRepository = travelJobWithAxios(api.travelJob)
  inject('travelJobRepository', travelJobRepository)
  context.$travelJobRepository = travelJobRepository
  // 緊急快遞
  const urgentArticleWithAxios = createUrgentArticle(context.$axios)
  const urgentArticleRepository = urgentArticleWithAxios(api.urgentArticle)
  inject('urgentArticleRepository', urgentArticleRepository)
  context.$urgentArticleRepository = urgentArticleRepository
}
