<template lang="pug">
.wrap
  v-row.tag.fill-height.d-flex.justify-end.align-center.px-2.my-5(
    @click="selectWant",
    :style="{'background-color':  wantSelected ? '#f6e18e' : '#eeeeee' }"
    )
    svg
      use(xlink:href="#want")
  v-row.tag.fill-height.d-flex.justify-end.align-center.px-2.my-5(
    @click="selectLove",
    :style="{'background-color':  loveSelected ? '#f6e18e' : '#eeeeee' }"
    )
    svg
      use(xlink:href="#love")
  v-row.tag.fill-height.d-flex.justify-end.align-center.px-2.my-5(
    @click="selectTempsave",
    :style="{'background-color':  tempsaveSelected ? '#f6e18e' : '#eeeeee' }"
    )
    svg
      use(xlink:href="#tempsave")
</template>

<script>
import "@/assets/icon/want.svg";
import "@/assets/icon/love.svg";
import "@/assets/icon/tempsave.svg";

export default {
  data(){
    return{
      wantSelected: false,
      loveSelected: false,
      tempsaveSelected: false,
    }
  },
  methods: {
    selectWant: function(){
      this.wantSelected = !this.wantSelected
    },
    selectLove: function(){
      this.loveSelected = !this.loveSelected
    },
    selectTempsave: function(){
      this.tempsaveSelected = !this.tempsaveSelected
    },

  },
};
</script>

<style lang="sass" scoped>
*
  // outline: red 1px solid
svg
  width: 18px
  height: 18px
  filter: invert(54%) sepia(8%) saturate(2259%) hue-rotate(154deg) brightness(90%) contrast(91%)

.tag
  cursor: pointer
  width: 64px
  height: 33.5px
  border-radius: 0 10px 10px 0
  box-shadow: 0 1px 2px 0 #cccece

</style>