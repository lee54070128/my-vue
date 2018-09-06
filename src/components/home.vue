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
            <el-form-item label="用例集标识" :label-width="formLabelWidth" prop="id">
                <el-input v-model="s_form.id" auto-complete="off" placeholder="请输入英文或数字"></el-input>
            </el-form-item>
            <el-form-item label="用例集名称" :label-width="formLabelWidth" prop='name'>
                <el-input v-model="s_form.name" auto-complete="off"  placeholder="项目名称"></el-input>
            </el-form-item>
            <el-form-item label="所属项目" :label-width="formLabelWidth">
                <el-select v-model="s_form.proj" placeholder="请选择所属项目">
                    <el-option v-for="(proj,index) in this.projs" :key="index" :label="proj.name" :value="proj.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="用例集描述" :label-width="formLabelWidth" prop="desc">
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
const projs = [
    {
        "id": "p_project1",
        "name": "项目1",
        "desc": "项目1描述"
    },
    {
        "id": "p_project2",
        "name": "项目2",
        "desc": "项目2描述"
    },
    {
        "id": "p_project3",
        "name": "项目3",
        "desc": "项目3描述"
    },
    {
        "id": "p_project4",
        "name": "项目4",
        "desc": "项目4描述"
    }
]
export default {
    name:"Home",
    data (){
        return {
            addProjDialogFormVisible: false,
            addSuitDialogFormVisible: false,
            projs: projs,
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
            s_form= {
                id: '',
                name: '',
                proj: '',
                desc: ''
            }
        },
        submitProj: function(){

        },
        submitSuit: function(){

        }

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
