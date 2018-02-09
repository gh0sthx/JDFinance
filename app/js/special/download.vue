<template>
  <Panel title="APP下载" :class="$style.panel">
      <section :class="$style.content">
          <div></div>
          <p>立即下载</p>
          <span>copyright</span>
      </section>
  </Panel>  
</template>

<script>
import Panel from "../core/panel.vue";
export default {
  components: {
      Panel
  }
}
</script>


<style lang="scss" module>
@import "../../css/element.scss";
html,body{
    background: #fff;
}
.panel{
    @include panel;
    >h4{
        display: none;
    }
    .content{
        // 解决任意尺寸垂直居中问题
        @include flex;
        justify-content: center;
        align-items: center;
        height:1136px;
        width: 100%;
        >div{
           background: url('//img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png?') center center no-repeat;
           width: 600px;
           height: 800px; 
           background-size: 100% auto;
           margin-top: -400px;
        }
        >p{
            @include btn($size:32px,$color:#fff,$bgcolor:#f1443e,$padding:5px,$radius:5px);
            height:100px;
            width:471px;
            line-height: 100px;
            background-image: linear-gradient(270deg,#F55C33 0,#EE2D1B 75%);
            box-shadow: 0 6px 16px 0 rgba(255,159,135,.6);
            // 定位
            position:fixed;
            bottom:130px;
        }

        span{
            position: fixed;
            bottom: 16px;
            font-size: 24px;
            color: #eee;

        }
    }
}
</style>
