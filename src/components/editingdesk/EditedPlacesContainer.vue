<template lang="pug">
v-container.pa-3.pt-10
  //- v-row
  //-   SwitchBtn
  v-row
    EditedPlaceHeader
    EditedPlaceItem(v-for="(place, index) in objs" :key="index" v-bind:place="place")
</template>

<script>
import EditedPlaceHeader from "./EditedPlaceHeader.vue";
import EditedPlaceItem from "./EditedPlaceItem.vue";
export default {
  components: {
    EditedPlaceHeader,
    EditedPlaceItem,
  },
  data(){
    return {
      objs: [
        {photo: "https://doqvf81n9htmm.cloudfront.net/data/Luke1226_165/2020-02/%E5%92%96%E5%95%A1%E5%BB%B3/%E5%8F%B0%E5%8C%97%E7%99%AE%E5%92%96%E5%95%A1_40a.jpg", name: "某某某某某咖啡廳", phone: "02-23456789"},
        {photo: "https://doqvf81n9htmm.cloudfront.net/data/Luke1226_165/2020-02/%E5%92%96%E5%95%A1%E5%BB%B3/%E5%8F%B0%E5%8C%97%E7%99%AE%E5%92%96%E5%95%A1_40a.jpg", name: "哈囉咖啡廳", phone: "0987654321"}
      ]
    }
  }
};
</script>

<style lang="sass" scoped>

</style>


