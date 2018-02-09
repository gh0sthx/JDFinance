<template lang="html">
    <div>
      <Heador></Heador>
      <Hslider></Hslider>
      <Novice></Novice>
      <Borrow></Borrow>
      <Money></Money>
      <Product></Product>
      <Life></Life>
      <Footor></Footor>
      <Navbar></Navbar>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Footor from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
import Hslider from './hslider.vue'
import Novice from './novice.vue'
import Borrow from './borrow.vue'
import Money from './money.vue'
import Product from './product.vue'
import Life from './life.vue'


export default {
  components: {
    Heador,
    Footor,
    Hslider,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
    Navbar
  }
}
</script>

