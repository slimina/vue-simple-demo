<template>
    <div>
        <el-form inline :model="query" label-position="right" label-width="60px" class="query-form">
            <el-form-item label="姓名" prop="name">
                <el-input v-model="query.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="日期" prop="date">
                <el-date-picker v-model="query.date" type="daterange" placeholder="选择日期范围"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">查询</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="movies"  class="table" stripe border>
            <el-table-column prop="images.small" label="图片" width="200"></el-table-column>
            <el-table-column prop="title" label="名称" sortable width="200"></el-table-column>
            <el-table-column prop="year" label="年份" width="200"></el-table-column>
            <el-table-column prop="collect_count" label="关注数"></el-table-column>
            <el-table-column prop="genres" label="类型" width="200"></el-table-column>

        </el-table>
        <el-pagination
                layout="total, sizes, prev, pager, next, jumper"
                :total="movies.length"
                class="pagination">
        </el-pagination>
    </div>
</template>

<script>
    import config from "../config/config";
    export default {
        data () {
            return {
                movies:[],
                query :{
                    name:"",
                    date:""
                }
            }
        },
        created(){
            this.get_data();
        },
        methods:{
            get_data:function(){
                this.$httpclient.get("/v2/movie/top250",null,r=>{
                    console.log(r.data);
                    this.movies = r.data.subjects;
                });
            }
        }
    }
</script>
<style>
</style>