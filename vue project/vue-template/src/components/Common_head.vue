<template>
    <div :class="{'Common_head' : true, 'bg_black': bg_color}">
        <div class="container_box">
            <div class="logo">
                <router-link tag='a' to='/' >
                    <img src="../assets/img/logo.669dc290.svg" alt="">
                </router-link>
            </div>
            <ul class="head_list">
                <li>
                    <router-link tag='a' to='/' >
                        首页
                    </router-link>
                </li>
                <li>
                    <router-link tag='a' to='/c2c' >
                        法币交易
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Common_head',
    data () {
        return {
            
        }
    },
    props: {
        bg_color: String
    },
    methods: {
        
    },
}
</script>

<!-- 添加“scoped”属性 CSS仅对此组件生效 -->
<style scoped lang="less">
.Common_head{
    overflow: hidden;
    color: #fff;
    transition: 0.3s;
    background: blue;

    .logo{
        float: left;
        img{
            height: 26px;
        }
    }

    .head_list{
        li{
            float: left;
        }
    }
}

.bg_black{
    background: #252732;
}
</style>
