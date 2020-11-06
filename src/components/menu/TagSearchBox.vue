<template lang="pug">
v-container.fill-height.rounded-lg.white.align-content-start 
  v-row.px-3
    v-autocomplete(
      v-model="inputTag",
      :items="hotTags.map((t) => t.name)",
      background-color="#f1f0f0",
      dense,
      flat,
      hide-no-data,
      hide-selected,
      solo,
      label="輸入標籤，新增進篩選器",
      @change="onValueChange()",
      ref="autocomplete"
    )
      template(v-slot:append)
        svg.icon
          use(xlink:href="#search")

  v-row.px-3.fill-height 
    v-chip-group.align-start(column)
      v-chip(
        v-for="(tag, index) in selectTags",
        :key="index",
        close,
        @click:close="$store.commit('DELETE_SELECTTAG', index)"
      ) {{ tag.name }}
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      inputTag: null,
    };
  },
  computed: {
    ...mapState(["selectTags"]),
    ...mapState("common", ["hotTags"]),
  },
  methods: {
    onValueChange() {
      if (this.inputTag) {
        const index = this.hotTags.map((t) => t.name).indexOf(this.inputTag);
        this.$store.commit("ADD_SELECTTAG", this.hotTags[index]);
        this.$store.commit("common/DELETE_HOT_TAGS", index);

        this.inputTag = null;
        this.$refs.autocomplete.lazyValue = null;
      }
    },
  },
};
</script>

<style scoped lang="sass">
::v-deep       
  .v-label
    font-family: TaipeiSansTCBeta
    font-size: 10.5px
    letter-spacing: 0.95px
    color: #818181
  .v-input__append-inner
    cursor: pointer
    .icon
      width: 20px
      height: 20px
  .v-text-field__details
    display: none !important
  .v-chip
    height: 22px !important
    border-radius: 6px !important
    box-shadow: 0 1px 4px 0 rgba(212, 212, 212, 0.5) !important
    background-color: #f7efd4 !important
  .v-chip__content
    font-family: TaipeiSansTCBeta !important
    font-size: 11.5px !important
    letter-spacing: 1.05px !important
    color: #617283 !important
  .v-input__control
    min-height: 35px !important
    height: 35px !important
  .v-autocomplete__content::-webkit-scrollbar 
    width: 10px !important


.v-chip-group
  width: 100%
  height: calc(100% - 35px)
  overflow-y: scroll
  -ms-overflow-style: none
  scrollbar-width: none
  &::-webkit-scrollbar 
    display: none


</style>