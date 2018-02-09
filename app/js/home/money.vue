<template>
  <Panel title="理财精选" :class="$style.panel">
      <section :class="$style.content">
          <div :class="$style.item" v-for="item in items" :key="item.title">
              <dt>{{item.title}}<span :class="$style.red">{{item.sub}}</span></dt>
              <dd :class="$style.red">{{item.rate}}</dd>
              <dd>{{item.text}}</dd>
          </div>
      </section>
  </Panel>
</template>

<script>
import Panel from "../core/panel.vue";
export default {
  components: {
      Panel,

  },
  data() {
      return   {
          items: [{
            title: "定期理财",
            sub: "理财首选",
            rate: "5.60%",
            text: "历史年化回报率"
          },{
            title: "定期理财",
            sub: "理财首选",
            rate: "5.60%",
            text: "历史年化回报率"
          },{
            title: "定期理财",
            sub: "理财首选",
            rate: "5.60%",
            text: "历史年化回报率"
          },{
            title: "定期理财",
            sub: "理财首选",
            rate: "5.60%",
            text: "历史年化回报率"
          }]
      }
  }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
    .content{
        @include flex(row);
        justify-content: space-around;
        box-sizing: border-box;
        // 中间的线
        &:after{
            content: " ";
            display: block;
            width: 100%;
            height: 0px;
            box-sizing: border-box;
            border-bottom: 1px solid #ddd;
            position: relative;
            top: -208px;
        }
        .item{
            box-sizing: border-box;
            position: relative;
            width:50%;
            &:after{
                content: " ";
                width: 1px;
                height: 136px;
                display: block;
                position: absolute;
                top:50%;
                right: 0;
                margin-top: -68px;
                border-right: 1px solid #ddd;
            }
            &:nth-child(2n){
                &:after{
                    display: none;
                }
            }
            padding: 34px 16px;
           .red{
                color: #ff5155;
            }
            dt{
                font-size: 30px;
                line-height: 42px;
                color: #333;
                span{
                    font-size: 22px;
                    border: 1px solid #ff5155;
                    padding: 0 8px;
                    vertical-align: 1px;
                    margin-left: 2px;
                }
            }
            dd{
                &:nth-child(2){
                    font-weight: 700;
                    font-size: 44px;
                    height: 58px;
                    line-height: 58px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;

                }
                &:nth-child(3){
                    font-size: 24px;
                    height: 34px;
                    line-height: 34px;
                    color: #999;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;

                }
            }
        }
    }
}
</style>

