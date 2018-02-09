<template lang="html">
    <article class="">
        <Slider :items="items" :cname="$style.slider"></Slider>
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in enters" :key="item.img">
                <router-link :to="{name: item.href}">
                    <img :src="item.img" alt="item.title" >
                    <h4>{{ item.title }}</h4>
                </router-link>
            </div>
        </section>
    </article>
</template>


<script>
    import Slider from '../core/slider.vue'
    export default {
        components: {
            Slider,
        },
        data() {
            return {
                items: [{
                    href: "Home",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t18604/51/473088414/33896/48b3f427/5a799f18N10e4911e.jpg?width=750&height=320"
                },{
                    href: "Home",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t15817/346/2087885774/45045/4f863b55/5a799f43N715b9fb9.jpg?width=750&height=320"
                },{
                    href: "Home",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t15193/32/2205587852/42374/f1659ce1/5a799f03Nd218f985.jpg?width=750&height=320"
                }],

                enters: [{
                    href: "Download",
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",
                    title: "优惠券"
                },{
                    href: "Home",
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132",
                    title: "领红包"
                },{
                    href: "Home",
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",
                    title: "优惠券"
                },{
                    href: "Home",
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",
                    title: "优惠券"
                },{
                    href: "Home",
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",
                    title: "优惠券"
                }]
            }
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .slider{
        margin-top:120px;
        img{
            width: 100%;
        }
    }
    .list{
        @include list(row);
        background: #fff;
        padding-top: 40px;
        padding-bottom: 20px;
        // 距离两端对齐
        justify-content:space-around;
        a{
            text-decoration: none;
        }
        .item{
            text-align: center;
            img{
               display: inline-block;
               width: 90px;
               height: 90px; 
            }
            h4{
                font-size: 26px;
                margin-top:12px;
                color: #666;
            }
        }
    }
</style>