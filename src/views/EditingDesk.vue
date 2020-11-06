<template lang="pug">
  v-container.wrap
    v-row.main
      MainContainer
    v-row.king-tags
      KingTags
    v-row
      .icon
        svg
          use(xlink:href="")
      
</template>

<script>
import KingTags from "../components/editingdesk/KingTags.vue";
import MainContainer from "../components/editingdesk/MainContainer.vue";
export default {
  components: {
    KingTags,
    MainContainer,
  },
};
</script>

<style lang="sass" scoped>
  *
    // outline: blue 1px solid
  .wrap
    width: 80%
  .main
    width: 90%
  .king-tags
    position: absolute
    left: 0
    top: 20%
  .icon
    cursor: pointer
    position: fixed
    background-color: #ede8df
    width: 70px
    height: 70px
    border-radius: 50%
    right: 70px
    bottom: 70px



</style>