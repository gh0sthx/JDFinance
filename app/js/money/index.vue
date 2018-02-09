<template lang="html">
    <div>
      <Heador></Heador>
      <Mslider></Mslider>
      <Ad></Ad>
      <Money></Money>
      <Adb></Adb>
      <Finance></Finance>
      <Adc></Adc>


      <Footor cname="mfooter"></Footor>
      <Navbar></Navbar>

    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Footor from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
import Mslider from './mslider.vue'
import Ad from './ad.vue'
import Money from './money.vue'
import Adb from './adb.vue'
import Finance from './finance.vue'
import Adc from './adc.vue'
export default {
  components: {
    Heador,
    Footor,
    Mslider,
    Navbar,
    Ad,
    Money,
    Adb,
    Finance,
    Adc
  }
}
</script>


<style lang="scss">

.mfooter{
  ul{
    li:first-child{
      display: none;
    }
  }
}

</style>


