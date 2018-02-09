<template lang="html">
  <Panel title="新品推荐" :class="$style.panel">
      <section :class="$style.content">
          <div :class="$style.arrow">更多尖货</div>
          <Slider :options="options" :items="items" cname="product-slider"></Slider>
      </section>
  </Panel>
</template>


<script>
import Panel from "../core/panel.vue";
import Slider from "../core/slider.vue";
export default {
  components: {
      Panel,
      Slider
  },
  data() {
      return {
          items: [{
              href:"home",
              src:"//img12.360buyimg.com/jrpmobile/jfs/t14761/57/2177261730/49189/717a1c58/5a7846fcN9dd1fe09.jpg?width=335&height=421"
          },{
              href:"home",
              src:"//img12.360buyimg.com/jrpmobile/jfs/t14860/350/2164532413/39513/41b260d4/5a72e5c2N95212bfa.jpg?width=335&height=421"
          },{
              href:"home",
              src:"//img12.360buyimg.com/jrpmobile/jfs/t19189/78/412279407/50765/35866492/5a72e5d4Nc3d96002.jpg?width=335&height=421"
          },{
              href:"home",
              src:"//img12.360buyimg.com/jrpmobile/jfs/t17506/112/423288292/45039/ba638e28/5a72e986N9a577e50.jpg?width=335&height=421"
          }],
          options: {
              paginationClickable: true,
              slidesPerView:2.3,
              spaceBetween:30,
              freeMode:true
          }
      }
  }
}
</script>


<style lang="scss">
    .product-slider{
        // 插件自带类，如果使用module将无法获取类名
        .swiper-container{
            box-sizing: border-box;
            padding: 0 24px;
            .swiper-side{
                a{
                    display: inline-block;
                    width: 100%;
                    // 防止图片过小没有撑开
                    img{
                        width: 100%;
                        display: block;
                        height: 314px;
                        border: 1px solid #fafafa;
                    }
                }
            }
        }
    }
</style>

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        .content{
            padding-bottom:40px;
            position: relative;
            &>div{
                position: absolute;
                font-size:28px;
                color:#999;
                right: 20px;
                top:-70px;
            }
        }
    }
</style>