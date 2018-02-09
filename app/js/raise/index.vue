<template lang="html">
    <div>
      <Heador></Heador>
      <Rslider></Rslider>
      <Daily></Daily>
      <In></In>
      <More></More>
      <Footor cname="mfooter"></Footor>
      <Navbar></Navbar>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Footor from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
import Rslider from './rslider.vue'
import Daily from './daily.vue'
import In from './in.vue'
import More from './more.vue'
export default {
  components: {
    Heador,
    Footor,
    Rslider,
    Navbar,
    Daily,
    In,
    More
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


