<template lang="pug">
v-container#wrapper.pa-0
  v-row(no-gutters)
    //- pen
    v-col.pen.d-flex.justify-center.align-center(cols="auto") 
      svg
        use(xlink:href="#tag")
    //- photo
    v-col.photo.fill-height.d-flex.justify-center.align-center.pa-2(cols="auto")
      img(v-bind:src="place.photo")
    //- name
    v-col.name.d-flex.justify-start.px-8(align-self="center") {{place.name}}
    //- phone
    v-col.phone.d-flex.justify-center(cols="auto", align-self="center") {{place.phone}}
    //- pin
    v-col.pin.d-flex.justify-center(cols="auto", align-self="center") 
      svg
        use(xlink:href="#pin")
    //- select
    v-col.select.d-flex.justify-center(
      cols="auto",
      align-self="center",
      @click.stop="toggleSelect"
    )
      svg(:style="{ fill: selected ? '#e7c99e' : '#EDE8DF' }")
        use(xlink:href="#select")

 
        
        

</template>

<script>
export default {
  props: {
    place: {
      type: Object,
    },
  },
  data() {
    return {
      selected: false,
    };
  },
  methods: {
    toggleSelect: function () {
      this.selected = !this.selected;
    },
  },
};
</script>



<style lang="sass" scoped>
$width-base: 50px
$margin-base: 12px

*
  // outline: 1px red solid
  font-size: 12px

svg
  width: 18px
  height: 18px

  cursor: pointer

.pen, .pin, .select, .first-space
  width: $width-base

.name
  overflow: auto
  white-space: nowrap
  letter-spacing: 1px

.photo
  width: $width-base*2
  height: $width-base*1.6
  img
    border-radius: 3px

.phone
  width: $width-base*2

#wrapper
  background-color: transparent
  &:hover
    background-color: #f8f8f8
    cursor: default
  &.rowChosen
    background-color: #f8f8f8

img
  width: 100%
  height: 100%
  object-fit: cover

</style>