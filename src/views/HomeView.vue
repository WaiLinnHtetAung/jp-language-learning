<template>
  <HeroSection></HeroSection>
  <Info></Info>
  <Levels></Levels>
  <Images></Images>
</template>

<script>

import Images from '../components/Images'
import Levels from '../components/Levels'
import Info from '../components/Info'
import HeroSection from '../components/HeroSection'
export default {
  components: {
    Images,
    Levels,
    Info, HeroSection },
  name: 'HomeView',

}
</script>
<style>

</style>
