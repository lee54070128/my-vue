import * as API from './'

export default {
  //获取侧边栏配置
  getNavConf: params => {
    return API.GET('/api/get_nav_conf', params)
  },
  //获取设置
  addSetting: params => {
    return API.GET('/api/get_setting', params)
  },
}