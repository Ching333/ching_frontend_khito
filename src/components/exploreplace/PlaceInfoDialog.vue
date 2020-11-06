<template lang="pug">
v-container(fluid, py-0)
  v-row
    v-card.mx-auto.w-100.pa-3(outlined, :height="cardHeight")
      .d-flex.flex-no-wrap.justify-space-between.align-center 
        v-col(cols="8")
          v-card-title.pa-0.mb-3.headline(
            v-text="`${placeInfo.name}`",
            :style="{ color: '#989898', fontFamily: 'TaipeiSansTCBeta', fontSize: '14px' }"
          )
          v-card-text.pa-0.mb-1(
            v-text="`電話 : ${placeInfo.phone}`",
            :style="{ color: '#989898', fontFamily: 'AvantGardeLT', fontSize: '12px' }"
          )
          v-card-text.pa-0.mb-1(
            v-text="`地址 : ${placeInfo.address}`",
            :style="{ color: '#989898', fontFamily: 'AvantGardeLT', fontSize: '12px' }"
          )
          //- img(:src="placeInfo.photo")

        v-col(cols="auto")
          v-avatar.rounded-xl(size="125", tile)
            v-img(
              src="https://imgs.gvm.com.tw/upload/gallery/20190212/55927_01.jpg"
            )
      v-card-actions.d-flex.pa-3
        v-btn-toggle.w-100(background-color="#4d89a5", block)
          v-btn(text, color="#ffffff", width="100%", @click="dropdown") 
            span {{ cardHeight ? '標籤確認，將地點收進口袋' : '為地點加標籤' }}

      .middle.pa-3(v-if="loggedIn && cardHeight")
        TagSearchBox
      .bottom.pa-3(v-if="loggedIn && cardHeight")
        TagSelector
</template>
<script>
import { mapState, mapGetters } from "vuex";

import TagSearchBox from "@/components/exploreplace/TagSearchBox";
import TagSelector from "@/components/exploreplace/TagSelector";

export default {
  data() {
    return {
      cardHeight: undefined,
    };
  },
  components: {
    TagSearchBox,
    TagSelector,
  },
  computed: {
    ...mapState("map", ["placeInfo"]),
    ...mapGetters("auth", ["loggedIn"]),
  },
  methods: {
    dropdown() {
      this.cardHeight = "80vh";
    },
  },
};
</script>
<style lang="sass" scoped>
.middle
  min-height: 150px
  max-height: 200px
  height: 30vh
.bottom
  min-height: 150px
  max-height: 200px
  height: 30vh
  overflow-y: scroll
  -ms-overflow-style: none
  scrollbar-width: none
  &::-webkit-scrollbar
    display: none
</style>