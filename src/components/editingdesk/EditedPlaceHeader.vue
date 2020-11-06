<template lang="pug">
v-container.wrapper.pa-0.pb-3
  v-row#info(no-gutters)
    //- pen
    v-col(cols="auto")
      .pen.fill-height.d-flex.justify-center.align-center 編輯
    //- photo
    v-col(cols="auto")
      .photo.fill-height.d-flex.justify-center.align-center 照片
    //- name
    v-col 
      .fill-height.d-flex.justify-center.align-center 地點
    //- phone
    v-col(cols="auto")
      .phone.fill-height.d-flex.justify-center.align-center 聯絡電話
    //- pin
    v-col(cols="auto")
      .pin.fill-height.d-flex.justify-center.align-center 導航
    //- select
    v-col(cols="auto")
      .select.fill-height.d-flex.justify-center.align-center 全選
</template>

<script>
import "@/assets/icon/tag.svg";
import "@/assets/icon/pen.svg";
import "@/assets/icon/pin.svg";
import "@/assets/icon/select.svg";

export default {
  props: {
    obj: {
      type: Object,
    },
  },
  data() {
    return {
      chip: true,
      tagNames: ["好吃", "有趣", "漂亮", "有椅子"],
    };
  },
  mounted() {
    this.tagNames.indexOf;
  },
};
</script>



<style lang="sass" scoped>

$width-base: 50px

*
  // outline: 1px red solid
  font-size: 12px
v-col
  background-color: grey
svg
  width: 20px
  height: 20px
.tag, .pen, .pin, .select
  width: $width-base 
.photo
  width: $width-base*2
.phone 
  width: $width-base*2
.first-space
  width: calc(#{$width-base*2} + 12px) 
.wrapper
  border-bottom: solid 1px #afb4b9
</style>