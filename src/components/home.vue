<template>
    <!-- <el-row id="new_p"> -->
<div>
    <el-button id="new_p" type="primary" icon="el-icon-plus" @click="showAddProjDialog">
        新建项目
    </el-button>
    <el-button id="new_s" type="primary" icon="el-icon-plus" @click="showAddSuitDialog">
        新建用例集
    </el-button>

    <el-dialog title="新建项目" :visible.sync="addProjDialogFormVisible" :close-on-click-modal="false">
        <el-form :model="p_form" label-width="80px" ref="p_form">
            <el-form-item label="项目标识" :label-width="formLabelWidth" prop="id">
                <el-input v-model="p_form.id" auto-complete="off" placeholder="请输入英文或数字"></el-input>
            </el-form-item>
            <el-form-item label="项目名称" :label-width="formLabelWidth" prop='name'>
                <el-input v-model="p_form.name" auto-complete="off"  placeholder="项目名称"></el-input>
            </el-form-item>
            <el-form-item label="项目描述" :label-width="formLabelWidth" prop="desc">
                <el-input type="textarea" :rows="8" v-model="p_form.desc" auto-complete="off" placeholder="请项目描述"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="addProjDialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click.native="submitProj" :loading="addLoading">确 定</el-button>
        </div>
    </el-dialog>
    <el-dialog title="新建用例集" :visible.sync="addSuitDialogFormVisible">
        <el-form :model="s_form" label-width="100px" ref="s_form">
            <el-form-item label="用例集标识" :label-width="formLabelWidth">
                <el-input v-model="s_form.id" auto-complete="off" placeholder="请输入英文或数字"></el-input>
            </el-form-item>
            <el-form-item label="用例集名称" :label-width="formLabelWidth">
                <el-input v-model="s_form.name" auto-complete="off"  placeholder="项目名称"></el-input>
            </el-form-item>
            <el-form-item label="所属项目" :label-width="formLabelWidth">
                <el-select v-model="s_form.proj" placeholder="请选择所属项目">
                    <el-option v-for="(proj,index) in this.projs" :key="index" :label="proj.name" :value="proj.projId"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="用例集描述" :label-width="formLabelWidth">
                <el-input type="textarea" :rows="8" v-model="s_form.desc" auto-complete="off" placeholder="请项目描述"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="addSuitDialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click.native="submitSuit" :loading="addLoading">确 定</el-button>
        </div>
    </el-dialog>
</div>
    <!-- </el-row> -->
    <!-- <div id="myvue">欢迎来到主页!</div> -->
</template>

<script>
import API from '../api/api_project' 
export default {
    name:"Home",
    data:function(){
        console.log("初始化home...")
        return {
            addProjDialogFormVisible: false,
            addSuitDialogFormVisible: false,
            formLabelWidth: '120px',
            addLoading: false,
            projs:[],
            p_form: {
                id: '',
                name: '',
                desc: ''
            },
            s_form: {
                id: '',
                name: '',
                proj: '',
                desc: ''
            }
        }
    },
    methods:{
        showAddProjDialog: function(){
            this.addProjDialogFormVisible = true,
            this.p_form={
                id: '',
                name: '',
                desc: ''
            }
        },
        showAddSuitDialog: function(){
            this.addSuitDialogFormVisible = true,
            this.s_form= {
                id: '',
                name: '',
                proj: '',
                desc: ''
            }
        },
        submitProj: function(){
            let that = this;
            let params={
                id: that.p_form.id,
                name: that.p_form.name,
                desc: that.p_form.desc
            };
            API.addProject(params).then(function(result){
                if (result && parseInt(result.code) == 1000) {
                    that.$message.success({showClose: true,message: result.msg, duration: 2000});
                }else{
                    that.$message.error({showClose: true,message: result.msg, duration: 2000});
                }
            },function(result){
                that.$message.error({showClose: true,message: '接口请求失败！', duration: 2000});
            })
            .catch(function(error){
                console.log(error);
                that.$message.error({showClose: true, message: '接口请求异常', duration: 2000});
            });

        },
        submitSuit: function(){

        }

    },
    beforeCreate:function(){
        console.log("before create初始化home...")
        console.log("请求项目列表...")
        let that = this;
        API.getAllProject({}).then(function(result){
            if (result && parseInt(result.code) == 1000) {
                that.projs=result.data
            }else{
                that.$message.error({showClose: true,message: '获取项目列表异常！', duration: 2000});
            }
        },function(err){
            that.$message.error({showClose: true,message: '接口请求失败！', duration: 2000});
        }).catch(function(error){
            console.log(error);
          that.$message.error({showClose: true, message: '接口请求异常', duration: 2000});
        });
    }

}
</script>

<style type="text/css">
#new_p{
    float: left;
}
#new_s{
    float: left;
}
.el-select{
    float: left;
}
</style>
