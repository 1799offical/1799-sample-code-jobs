// 通用時間 Types
export interface Datetime {
  createdat?: string
  updatedat?: string
}

export enum CompletionContents {
  name = 'name',
  nickname = 'nickname',
  intentposition = 'intentposition',
  intentworkplace = 'intentworkplace',
  liveplace = 'liveplace',
  intro = 'intro',
  position = 'position',
  companyname = 'companyname',
  workexptype = 'workexptype',
  workexpfromyear = 'workexpfromyear',
  workexpcontent = 'workexpcontent',
  languages = 'languages',
  skills = 'skills',
  major = 'major',
  educationfromyear = 'educationfromyear',
  schoolname = 'schoolname',
  educationtype = 'educationtype'
}

export enum CompletionTitles {
  basicInfo = 'basicInfo',
  workExperience = 'workExperience',
  abilities = 'abilities',
  educations = 'educations'
}

// 檔案完成度 Types
export interface Completion {
  key: CompletionContents
  name: string
  value: number
  finished: boolean
}

// 檔案完成度 Types
export interface CompletionSection {
  title: CompletionTitles
  name: string
  content: Array<Completion>
}

// 工作意向 Types
export interface JobIntent {
  type: string, // 工作類型 ['全職', '兼職']
  occupation: Array<string>, // 職位 ['領隊', '線控']
  place: string // 工作地點
}

// 使用者資料 Types
export interface UserInfo {
  title: string, // 頭銜
  currentResidence: string, // 現居地
  contact: string, // 聯繫資料
  jobIntent: JobIntent // 工作意向
}

// 使用者 Types
export interface User {
  id: number,
  name: string,
  avatar: string,
  nickname?: string,
  cover?: string,
  description?: string,
  info?: UserInfo
}

export interface Badge {
  id: number
  name: string
  url: string
  type: string
  condition: string
}

// Gallery Types
export interface Photo {
  id: number,
  name: string,
  url: string,
  description?: string,
  status?: string,
}

export interface GroupYearInfo {
  leader: {
    year: number,
    routes: Array<{ id: number, name: string }>,
  },
  guide: {
    year: number,
    placetypes: Array<{ id: number, name: string }>,
  },
}

export interface Recommender {
  id: number,
  name: string
  recommendtime: string
  content: string
  avatar: string
}

export interface ParagraphContent {
  id: number
  type: string
  content: string
}

export interface GroupExp extends Datetime {
  id: number
  title: string
  intro: string
  type: string
  groupdate: string
  places: Array<string>
  content: Array<ParagraphContent>
  images: Array<Photo>
  recommender: Array<Recommender>
}

export interface Level {
  leader: { level: number, name: string }
  guide: { level: number, name: string }
}

export interface Calendar {
  id: number
  type: string
  name: string
  from: string
  to: string
}

export interface WorkExpContent {
  link: string
  title: string
  intro: string
  image: string
}

export interface WorkExp {
  id?: number
  position: string
  companyname: string
  intro: string
  type: string
  image: string
  fromyear: number | null
  frommonth: number | null
  toyear: number | null
  tomonth: number | null
  iscurrent: boolean
  content: Array<WorkExpContent>
}

export interface Language {
  id: number
  name: string
  level: number | null
}

export interface Skill {
  id: number
  name: string
  description: string
}

export interface Certificate {
  id?: number
  name: string
  issuer: string
  fromyear: number | null
  frommonth: number | null
  toyear: number | null
  tomonth: number | null
  isnonexpired: boolean
  images: Array<Photo>
}

export interface EducationBackground {
  id?: number
  schoolname: string
  major: string
  intro: string
  image: string
  fromyear: number | null
  frommonth: number | null
  toyear: number | null
  tomonth: number | null
  iscurrent: boolean
  type: string
  content: Array<{
    link: string
    title: string
    intro: string
    image: string
  }>
}

export interface NewUser extends Datetime {
  id?: number
  coverimage: string
  avatar: string
  name: string
  nickname: string
  position: string
  liveplace: string
  contactinfo: string
  intro: string
  intentposition?: string
  intentworkplace?: string
  badges: Array<Badge>
  levels: Level
  leaderratings: number
  guideratings: number
  averageratings: number
  localgroupcount: number
  internationalgroupcount: number
  totalgroupcount: number
  groupyearinfo: GroupYearInfo
  groupexp: Array<GroupExp>
  calendar: Array<Calendar>
  workexp: Array<WorkExp>
  languages: Array<Language>
  skills: Array<Skill>
  certificates: Array<Certificate>
  educationbackground: Array<EducationBackground>
}

// 登入使用者 Types
export interface Owner extends User {
  accessToken: string,
  account: string,
  email: string,
  phone?: string
}

// 登入表單 Types
export interface LoginField {
  email?: string,
  phone?: string,
  password: string,
}

// 註冊表單 Types
export interface RegisterField {
  email: string,
  password: string,
  passwordConfirmed: string,
}

// Connect Phone Types
export interface ConnectPhoneField {
  phone: string
}

// Forget Password Types
export interface ForgetPasswordField {
  account: string
}

// Reset Password Types
export interface ResetPasswordField {
  email?: string,
  phone?: string,
  password: string
}

// 旅行社資訊 Types
export interface TravelAgency {
  id: number,
  name: string,
  avatar: string
}

// OtherInfo Types
export interface OtherInfo {
  appliedNumber: number,
  pageViews?: number,
  updatedDate: string
}

// 工作 Types
export interface Work {
  id: number,
  name: string,
  cover: string,
  travelAgency: TravelAgency,
  description: string,
  type: string,
  demandNumber: number,
  date: string,
  leadNumber: number,
  otherInfo: OtherInfo,
  photos?: Array<Photo>,
  files?: Array<string>,
  applicationConditions?: string,
  keywords?: Array<string>,
  tags?: Array<string>
}

// Case Other Conditions Types
export interface CaseOtherConditions {
  hasExpenses?: boolean,
  expenses?: {
    amount: number,
    currency: string
  },
  hasPaidSingleRoom?: boolean,
  paidSingleRoom?: {
    amount: number,
    currency: string
  },
  hasPaidUpgradePosition?: boolean,
  hasFreeUpgradePosition?: boolean,
  hasShareRoomWithGuest?: boolean
}

// 案件 Types
export interface Case extends Work {
  region: string,
  location: string,
  otherConditions?: CaseOtherConditions,
  fee?: number
}

// 工作 Types
export interface Job extends Work {
  location: string,
  otherConditions?: string,
}

// 課程表單 Types
export interface CourseForm {
  name: string,
  email: string,
  phone: string,
  age: number
}

export interface Category {
  id: number,
  title: string
}

export interface Genre {
  id: number,
  name: string
}

// 課程 Types
export interface Course {
  id: number
  type: string
  title: string
  subtitle: string
  willlearn: string
  genre: Array<number>
  content: string
  keyword: Array<string>
  image: string
  from: string
  to: string
  courseplace: string
  peoplelimit: number
  videolink: string
  videotime: string
  memberprice: number
  nonmemberprice: number
  teachername: string
  teacheravatar: string
  teacherintro: string
  teacherlink: string
  seotitle: string
  seocontent: string
  isSelected: boolean
}

// 推薦人 Types
export interface Referrer extends User {
  date: string,
  description: string
}

// 帶團經歷 Types
export interface LeadExperience {
  id: number,
  name: string,
  cover: string,
  description: string,
  caseType: string,
  date: string,
  location: string,
  referrers?: Array<Referrer>
  content?: Array<object>
}

// 工作經歷 Types
export interface WorkExperience {
  id: number,
  title: string,
  avatar: string,
  description: string,
  companyName: string,
  startDate: string,
  endDate?: string,
  untilNow?: boolean,
  workType: string,
  photos?: Array<Photo>
}

// 證照資訊 Types
export interface License {
  id: number,
  name: string,
  agency: string,
  startDate: string,
  endDate?: string,
  forever?: boolean
}

// 教育背景 Types
export interface Education {
  id: number,
  title: string,
  avatar: string,
  description: string,
  school: string,
  startDate: string,
  endDate?: string,
  untilNow?: boolean,
  degree: string, // 學位
  photos?: Array<Photo>
}

// 案件簡短資訊 Types
export interface CaseLite {
  id: number,
  name: string,
  cover: string,
  travelAgency: TravelAgency
}

// 案件與工作簡短資訊 Types
export interface WorkLite {
  id: number,
  name: string,
  cover: string,
  travelAgency: TravelAgency
}

// 應徵卡片 Types
export interface Application {
  id: number,
  name: string,
  description: string,
  cover: string,
  status: string,
  fee: number,
  feeStatus: string,
  updatedAt: string,
}

// 行事曆內容的 Types
export interface OldCalendar {
  id: number,
  title: string,
  startDate: string,
  endDate: string,
  startTime: string,
  endTime: string
}

export interface ChatMember {
  id: number,
  user?: User,
  message: string
  updatedAt: string
}

// 聊天訊息 Types
export interface Chat {
  id: number,
  feeds: Array<ChatMember>
}

export interface ChatFeed {
  id: number,
  type: string,
  message: string,
  updatedAt: string
}

// 旅知分享作者 Types
interface Author {
  id: number,
  name: string,
  avatar: string
}

// 旅知分享資訊 Types
interface BlogInfo {
  likes: number,
  comments: number,
  collections: number
}

// 旅知分享 Types
export interface Blog {
  id: number,
  author: Author,
  title: string,
  description: string,
  content?: string,
  cover: string,
  keywords: Array<string>,
  info: BlogInfo,
  updatedAt: string
}

// 旅知分享內容類型
export enum BlogContentTypes {
  image = 'image',
  text = 'text',
  divider = 'divider'
}

// 旅知分享內容 Types
export interface BlogContentField {
  type: BlogContentTypes,
  content?: string
}

// 旅知分享表單 Types
export interface BlogField {
  title: string,
  content: Array<BlogContentField>
  categories: Array<string>
  keywords: Array<string>
}

// 評論 Types
export interface Comment {
  id: number,
  user: User,
  content: string,
  commentVisible? : boolean
}

// 公司 Types
export interface Company {
  id: number,
  name: string,
  avatar: string,
  address: string
}

// 緊急快遞 Types
export interface Urgent {
  id: number,
  title: string,
  author: {
    id: number,
    name: string,
    avatar: string
  },
  description: string,
  photos: Array<Photo>,
  updatedAt: string
}

export interface UrgentArticle {
  id: number
  title: string
  place: string
  content: string
  image: string
  authoravatar: string
  authorname: string
  datetime: string
  audit: string
}

// 緊急快遞 Types
export interface UrgentField {
  title: string,
  location: string,
  description: string,
  photos: Array<Photo>
}

// Profile 區塊 Types
export interface ProfileSection {
  leadSeniority?: object,
  leadExperience?: object,
  calendar?: object,
  workExperience?: object,
  skills?: object,
  certificates?: object,
  educations?: object
}

// Commons Types
export interface Col {
  span?: number | string,
  offset?: number | string,
}

export interface Validate {
  validator: any,
  trigger: Array<string>,
  required: boolean
}

export interface ValidateRules {
  email?: Array<Validate>
  phone?: Array<Validate>
  password?: Array<Validate>
}

export interface TravelGroup {
  id: number
  enterpriseid: number
  enterprisename: string
  enterpriseavatar: string
  type: string
  amountofpeople: number
  title: string
  groupdate: string
  groupamountofpeople: number
  area: string
  place: string
  description: string
  images: Array<string>
  files: Array<string>
  applyconditionshort: string
  applycondition: string
  keyword: Array<string>
  ispayexpense: boolean
  payexpenseamount: number
  payexpensecurrency: string
  issingleextra: boolean
  singleextraamount: number
  singleextracurrency: string
  ispayupgrade: boolean
  isfreeupgrade: boolean
  issameroom: boolean
  viewcount: number
  favoritecount: number
  applycount: number
  leadername: string
  leaderrating: string
  createat: string
  updateat: string
  startat: string
  endat: string
}

export interface TravelJob {
  id: number
  enterpriseid: number
  enterprisename: string
  enterpriseavatar: string
  enterpriseplace: string
  enterprisecover?: string
  enterpriseimages?: Array<string>
  position: string
  type: string
  amountofpeople: number
  title: string
  description: string
  condition?: string
  extracondition?: string
  keyword: Array<string>
  viewcount: number
  favoritecount: number
  applycount: number
  createat: string
  updateat: string
}
