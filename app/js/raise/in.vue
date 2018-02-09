<template>
  <Panel title="In货推荐" :class="$style.panel">
      <section :class="$style.content">
          <div :class="$style.item" v-for="item in items" :key="item.catory">
              <img :src="item.catory" alt="">
          <section :class="$style.list">
             <div :class="$style.product" v-for="product in item.list" :key="product.img">
                  <img :src="product.img" alt="">
                  <p :class="$style.title">{{product.title}}</p>
                  <p :class="$style.price"><em>{{product.price}}</em>起</p>
                  <article>
                      <div :class="$style.wrapper">
                          <div :class="$style.inner" :style="{width:product.progress+'%'}"></div>
                      </div>
                      <p>{{ product.progress }}%</p>
                  </article>
                  <label :class="$style.care">{{ product.care }}</label>
              </div>
          </section>
          </div>
      </section>
  </Panel>  
</template>

<script>
import Panel from "../core/panel.vue";
export default {
  components: {
      Panel
  },
  data() {
      return {
          items:[
              {
                catory:'//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200',
                list:[
                    {
                        img: "//img30.360buyimg.com/cf/s250x250_jfs/t16897/179/5503620/136988/48118941/5a57290bN52e19f82.jpg",
                        title: "微型摄像头",
                        price: "49.00",
                        progress:30,
                        care: "精选"

                    },
                    {
                         img: "//img30.360buyimg.com/cf/s250x250_jfs/t19180/119/103841930/89625/55994449/5a5d59f9N01432fde.jpg",
                        title: "智能手表",
                        price: "99.00",
                        progress:40
                    }
                ]
              },
              {
                catory:'//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200',
                list:[
                    {
                        img: "//img30.360buyimg.com/cf/s250x250_jfs/t13834/192/2625202072/70435/e5b85a62/5a460eefN94289190.jpg",
                        title: "智能后视镜",
                        price: "90.00",
                        progress:100

                    },
                    {
                         img: "//img30.360buyimg.com/cf/s250x250_jfs/t17917/186/321392651/99329/32c1ae84/5a6c0e2cNdcabeb5c.jpg",
                        title: "RELX雾化电子烟",
                        price: "69.00",
                        progress:30
                    }
                ]
              },
              {
                catory:'//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200',
                list:[
                    {
                        img: "//img30.360buyimg.com/cf/s250x250_jfs/t19087/67/359234055/152112/75036460/5a6ecc5fN565775cd.jpg",
                        title: "雪花酥",
                        price: "29.00",
                        progress:30

                    },
                    {
                         img: "//img30.360buyimg.com/cf/s250x250_jfs/t14506/168/2096353267/153845/5bb0a2e6/5a6e9518N15da6f7c.jpg",
                        title: "华礼脸饼",
                        price: "99.00",
                        progress:30
                    }
                ]
              }
          ]
      }
  }
}
</script>


<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
    .content{
       @include flex;
       .item {
           >img{
               display: block;
               width: 100%;
               height: 170px;
           }
           margin-bottom: 40px;
           .list{
               @include flex(row);
               .product{
                   width: 50%;
                   height: 396px;
                   box-sizing: border-box;
                   background: rgba(0,0,0,.02);
                   text-align: center;
                   position: relative;
                   img{
                       width: 180px;
                       height: 180px;
                       margin-right: 44px auto 20px;
                   }
                   .title{
                        font-family: PingFangSC-Medium;
                        font-size: 28px;
                        font-weight: 700;
                        color: #444;
                   }
                   .price{
                        font-family: PingFangSC-Medium;
                        font-size: 20px;
                        color: #999;
                        height: 48px;
                        line-height: 48px;
                       em{
                           font-size: 36px;
                           color: #ff3232;
                           margin-right: 4px;
                           &:before{
                               content:"￥";
                               font-size: 28px;

                           }
                       }

                   }
                   article{
                       @include flex(row);
                       align-items: center;
                       justify-content: space-around;
                       padding: 0 20px;
                       height: 30px;
                       line-height: 30px;
                       margin-top: 16px;
                       .wrapper{
                           width: 144px;
                           height: 10px;
                           background: #f6e6e6;
                           border-radius: 22px;
                           .inner{
                               width: 40%;
                               height: 10px;
                               background-image: linear-gradient(270deg,#F55 1%,#FF9C31 100%);
                               border-radius: 22px;
                           }
                       }
                       p{
                           font-size: 24px;
                           color: #999;
                       }
                  }
                  label{
                            position: absolute;
                            left: 0;
                            top: 0;
                            font-family: PingFangSC-Medium;
                            font-size: 20px;
                            color: #FF0000;
                            text-align: center;
                            padding: 2px 4px;
                            background-image: linear-gradient(-35deg,#C1C1C1 0,#ACACAC 100%);    
                        }
               }
           }
       } 
    }
}
</style>
