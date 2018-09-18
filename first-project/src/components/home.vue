<template>
    <div>
        <h1>我是首页</h1>
        <router-link :to="{path: '/login', 
            query: {userinfo: 'name is wangcai'}}">
        跳转到登录</router-link>
<<<<<<< HEAD
=======
        <button @click="handleGetData">发送数据</button>
        <button @click="getJsonp">获得Jsonp数据</button>
        <!-- <button @click="getJsonp2">利用插件获取Jsonp数据</button> -->
        <button @click="getNoSimple">post非简单请求</button>
>>>>>>> vue-03-跨域
    </div>
</template>

<script>
<<<<<<< HEAD
    export default {
        name: "home"
=======
    import axios from 'axios'
    // import jsonp from 'jsonp'

    export default {
        name: "home",
        methods: {
            handleGetData() {
                axios.get('http://localhost:3000/getMsg',{
                    withCredentials: true
                }).then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log('err',err)
                })
            },
            getJsonp() {
                let script = document.createElement('script')
                let body = document.body
                script.src = 'http://localhost:3000/getJsonp?callback=getData'
                body.appendChild(script)
            },
            // getJsonp2() {
            //     jsonp('http://localhost:3000/getJsonp',{
            //         param: 'callback',
            //         name: 'getData'
            //     },function getData(res){
            //         console.log(res)
            //     })
            // }
            getNoSimple() {
                axios.post('http://localhost:3000/noSimple',{
                    withCredentials: true
                }).then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log('err',err)
                })
            }
        }
>>>>>>> vue-03-跨域
    }
</script>

<style scoped>

</style>