<template>
    <div>
        <el-table :data="topics"  class="table" stripe border>
            <el-table-column prop="create_at" label="创建时间" sortable width="200"></el-table-column>
            <el-table-column label="作者" width="200">
                <template scope="scope">
                     <img :src="scope.row.author.avatar_url" /> <span>{{ scope.row.author.loginname }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column prop="visit_count" label="访问数" width="200"></el-table-column>
            <el-table-column prop="reply_count" label="回复数" width="200"></el-table-column>
        </el-table>
        <el-pagination
                layout="total, sizes, prev, pager, next, jumper"
                :total="topics.length"
                class="pagination">
        </el-pagination>
    </div>
</template>

<script>
    import config from "../config/config";
    export default {
        data () {
            return {
                topics:[]
            }
        },
        created(){
            this.get_data();
        },
        methods:{
            get_data:function(){
                this.$httpclient.get(config.base_url+"/api/v1/topics",null,r=>{
                    this.topics = r.data;
                });
            }
        }
    }
</script>
<style>
</style>