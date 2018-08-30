<template>
    <div id="Common_head">
        <a href="" v-if="seen" >{{msg}}</a>
         <ol>
            <li v-for="obj in data.todos" >
                {{ obj.text }}
            </li>
        </ol>
        <p>{{ message }}</p>
        <p>{{ num }}</p>
         <button v-on:click="reverseMessage">逆转消息</button>
         <button v-on:click="change_f">改变父组件测试</button>
        <router-link tag='a' to='/' >home</router-link>
        <router-link tag='a' to='/about' ></router-link>
    </div>
</template>

<script>
export default {
    name: 'Common_head',
    data () {
        return {
            seen: true,
            data: {
                todos: [
                    { text: '学习 JavaScript' },
                    { text: '学习 Vue' },
                    { text: '整个牛项目' }
                ]
            },
            message: 'Hello Vue.js!',
            num: 0
        }
    },
    props: {
        msg: String
    },
    methods: {
        test () {
            console.log(123, this);
        },
        reverseMessage: function () {
            this.num++;
            this.message = this.message.split('').reverse().join('');
            console.log(this.$router);
        },
        change_f: function () {
            //改变父组件的数据
            this.$emit('change_f',"我是数据");
            console.log(123);
        }
    },
}
</script>

<!-- 添加“scoped”属性 CSS仅对此组件生效 -->
<style scoped lang="less">
.Common_head{
    
}
</style>
