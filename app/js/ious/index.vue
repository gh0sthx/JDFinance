<template lang="html">
    <div>
      <Heador></Heador>
      <Islider></Islider>
      <Welfare></Welfare>
      <Service></Service>

      <Footor></Footor>
      <Navbar></Navbar>

    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Footor from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
import Islider from './islider.vue'
import Welfare from './welfare.vue'
import Service from './service.vue'
export default {
  components: {
    Heador,
    Footor,
    Islider,
    Navbar,
    Welfare,
    Service
  }
}
</script>

