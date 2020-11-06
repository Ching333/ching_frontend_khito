<template lang="pug">
v-container.fill-height.align-content-space-around
  v-row
    router-link(:to="{ name: 'ExploreLists' }") 
      span.Khito Khito
  v-row.justify-end
    router-link(:to="{ name: 'EditingDesk' }") 
      svg.mr-4.icon
        use(xlink:href="#pocket")
    router-link(:to="{ name: 'Member' }") 
      svg.mr-4.icon
        use(xlink:href="#member")
    router-link(:to="{ name: 'ExplorePlaces' }") 
      svg.mr-10.icon
        use(xlink:href="#discover")
</template>

<script>
export default {};
</script>

<style scoped lang="sass">

.Khito
  font-family: K2D
  font-size: 32px
  letter-spacing: 1.9px 
  color: #ffffff
  margin-left: 40px
  
.icon
  width: 20px
  height: 20px
  filter: invert(84%) sepia(1%) saturate(0%) hue-rotate(39deg) brightness(112%) contrast(103%)

</style>