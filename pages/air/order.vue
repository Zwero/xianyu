<template>
    <div class="container">
        <el-row type="flex" justify="space-between">
            <!-- 订单表单 -->
            <div class="main">
                <orderForm :data='infoData' @setAllPrice="setAllPrice"/>
            </div>

            <!-- 侧边栏 -->
            <div class="aside">
                <orderAside :data='infoData' :allPrice="allPrice"/>         
            </div>
        </el-row>
    </div>
</template>

<script>
import orderForm from '@/components/air/orderForm'
import orderAside from '@/components/air/orderAside'
export default {
    data () {
        return {
            infoData: {
                insurances: [],
                seat_infos: {}
            },
             // 总价格
            allPrice: 0
        }
    },
    components: {
        orderForm,
        orderAside
    },
     mounted(){
        const {query} = this.$route;

        this.$axios({
            url: `airs/${query.id}`,
            params: {
                seat_xid: query.seat_xid
            }
        }).then(res => {
            this.infoData = res.data;
            console.log(this.infoData);
        })
    },
    methods: {
         // 用于接收子组件返回的总价格
        setAllPrice( price ){
            this.allPrice = price;
            console.log('总额',this.allPrice);
        }
    }

}
</script>

<style lang="less" scoped>
    .container{
        width:1000px;
        margin:20px auto;
    }
    
    /*aside*/
    .aside{
        width: 350px;
        height: fit-content;
        border:1px #ddd solid;
    }
</style>