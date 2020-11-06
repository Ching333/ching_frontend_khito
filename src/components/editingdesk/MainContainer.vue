<template lang="pug">
v-container
  v-tabs(v-model="tab" color="#4d89a5" )
    v-tab
      svg.pocket
        use(xlink:href="#pocket")
      span.mx-3 口袋
    v-tab
      svg.list
        use(xlink:href="#list")
      span.mx-3 清單

  v-tabs-items(v-model="tab")
    v-tab-item
      EditedPlacesContainer
    v-tab-item
      ListsContainer
</template>

<script>
import EditedPlacesContainer from "./EditedPlacesContainer.vue";
import ListsContainer from "./ListsContainer.vue";
import "@/assets/icon/pocket.svg";
import "@/assets/icon/list.svg";

export default {
  components: {
    EditedPlacesContainer,
    ListsContainer,
  },
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style lang="sass" scoped>

svg
  width: 20px
  height: 20px         

.pocket
  filter: invert(100%) sepia(1%) saturate(7385%) hue-rotate(128deg) brightness(74%) contrast(93%)

.v-tab--active .pocket
  filter: invert(54%) sepia(8%) saturate(2259%) hue-rotate(154deg) brightness(90%) contrast(91%)

.list
  filter: invert(100%) sepia(1%) saturate(7385%) hue-rotate(128deg) brightness(74%) contrast(93%)

.v-tab--active .list
  filter: invert(54%) sepia(8%) saturate(2259%) hue-rotate(154deg) brightness(90%) contrast(91%)



</style>