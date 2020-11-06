<template lang="pug">
v-container
  v-row
    v-col.block.col-lg-4.col-md-6.col-sm-12.col-xs-12(
      v-for="(list, index) in objs",
      :key="index"
    )
      ListItem(v-bind:list="list" @showDialog="showDialog()")
  
  v-dialog(v-model="dialog" width="30%" )
    ListDialog(
      @close="closeDialog()",
      @save="saveTags()",
      v-for="(list, index) in objs" :key="index",
      v-bind:list="list"
      )
</template>

<script>
import ListItem from "./ListItem.vue";
import ListDialog from "./ListDialog.vue"
export default {
  components: {
    ListItem,
    ListDialog,
  },
  // props:{
  //   title: "編輯清單",
  // },
  data() {
    return {
      objs: [
        { name: "閒來無事的去處", photo: "https://doqvf81n9htmm.cloudfront.net/data/Luke1226_165/2020-02/%E5%92%96%E5%95%A1%E5%BB%B3/%E5%8F%B0%E5%8C%97%E7%99%AE%E5%92%96%E5%95%A1_40a.jpg" },
        { name: "老戲院的味道", photo: "https://doqvf81n9htmm.cloudfront.net/data/Luke1226_165/2020-02/%E5%92%96%E5%95%A1%E5%BB%B3/%E5%8F%B0%E5%8C%97%E7%99%AE%E5%92%96%E5%95%A1_40a.jpg" },
      ],
      dialog: false,
    };
  },
  methods:{
    showDialog: function(){
      this.dialog = true;
    },
    closeDialog: function(){
      this.dialog = false;
    },
    saveTags: function(){
      this.dialog = false;
    }
  }
};
</script>

<style lang="sass" scoped>
</style>