import * as API from './'

export default {
  //增加辅助方法
  addMethod: params => {
    return API.POST('/api/add_new_method', params)
  },
  //修改辅助方法
  editMethod: params => {
    return API.POST('/api/edit_method', params)
  },
  //获取辅助方法代码
  editMethod: params => {
    return API.GET('/api/get_method_detail', params)
  },
}