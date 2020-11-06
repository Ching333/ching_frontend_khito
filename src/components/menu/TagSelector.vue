<template lang="pug">
v-container
  v-tabs(v-model="tab", grow, background-color="transparent")
    v-tab
      svg.icon
        use(xlink:href="#person-n-1")
    v-tab
      svg.icon
        use(xlink:href="#system-n-1")

  v-tabs-items.mt-3(v-model="tab")
    v-tab-item
      v-chip-group(column)
        v-chip.mb-3.mr-3.rounded-lg(
          v-for="(tag, index) in hotTags",
          :key="index",
          @click="$store.commit('common/DELETE_HOT_TAGS', index); $store.commit('ADD_SELECTTAG', tag)"
        ) {{ tag.name }}

    v-tab-item
      v-chip-group(column)
        v-chip.mb-3.mr-3.rounded-lg(
          v-for="(tag, index) in hotTags",
          :key="index",
          @click="$store.commit('common/DELETE_HOT_TAGS', index); $store.commit('ADD_SELECTTAG', tag)"
        ) {{ tag.name }}
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      tab: null,
    };
  },
  props: {
    tags: {
      type: Object,
    },
  },
  computed: {
    ...mapState("common", ["hotTags"]),
  },
};
</script>

<style scoped lang="sass">

.icon
  height: 25px
  width: 25px


::v-deep
  .v-chip
    height: 22px !important
    border-radius: 6px !important
    box-shadow: 0 1px 4px 0 rgba(212, 212, 212, 0.5) !important
    background-color: #f7efd4 !important

  .v-tabs-items
    background-color: transparent !important
    max-height: 40vh
    overflow-y: scroll
    -ms-overflow-style: none
    scrollbar-width: none
    &::-webkit-scrollbar 
      display: none

  
    .v-chip__content
      font-family: TaipeiSansTCBeta !important
      font-size: 11.5px !important
      letter-spacing: 1.05px !important
      color: #617283 !important
</style>