import * as API from './'

export default {
  //新增一个项目
  addProject: params => {
    return API.POST('/api/add_new_proj', params)
  },
  //获取所有项目信息
  getAllProject:params =>{
    return API.GET('/api/get_all_project', params)
  },
  //增加一个测试用例集
  addCaseSuit: params => {
    return API.POST('/api/add_new_case_suit', params)
  },
  //为一个测试用例集增加用例
  addCase: params => {
    return API.POST('/api/add_new_case_suit', params)
  },
  //获取一个用例详细信息
  getCaseDatail: params => {
    return API.GET('/api/get_case_detail', params)
  },
  //编辑用例
  editCase: params => {
    return API.POST('/api/edit_case', params)
  },
}