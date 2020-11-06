<template lang="pug">
v-container.wrap(@click="$emit('showDialog')")
  v-row.photo
    img(v-bind:src="list.photo")
    svg.camera
      use(xlink:href="#camera")
    svg.pen
      use(xlink:href="#pen")
  v-row.list-info {{ list.name }}
</template>

<script>
export default {
  props: {
    list: { type: Object },
  },
};
</script>

<style lang="sass" scoped>
*
  font-size: 15px

.wrap
  cursor: pointer

.photo
  position: relative
  width: 100%
  height: 80%
  &:hover
    img
      -webkit-filter: brightness(.8)

img
  
  width: 100%
  height: 100%
  object-fit: cover
  border-radius: 16px

svg
  position: absolute
  width: 15px
  height: 15px
  &:hover
    -webkit-filter: brightness(.9)
.camera
  right: 0.5rem
  bottom: 2rem
.pen
  z-index: 3
  right: 0.5rem
  bottom: 0.5rem

.list-info
  width: 100%
  height: 20%
  padding: 10px
  color: #acacac
</style>