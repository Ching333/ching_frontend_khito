<template lang="pug">
v-container
  v-row.flex-column.flex-nowrap.h-100
    .top.flex-grow-1
      Navigation
    .middle.flex-grow-1.my-5
      TagSearchBox
    .bottom.flex-grow-1
      TagSelector
</template>
<script>
import Navigation from "./Navigation";
import TagSearchBox from "./TagSearchBox";
import TagSelector from "./TagSelector";
export default {
  data() {
    return {};
  },
  components: {
    Navigation,
    TagSearchBox,
    TagSelector,
  },

  mounted() {
    this.$store
      .dispatch("common/getHotTags", { count: 20, page: 1 })
      .then((response) => {
        this.hotTags = response;
      });
  },
};
</script>

<style scoped lang="sass">
$container_padding: 12px

.top
  flex-basis: 150px
  min-height: 100px
  max-height: 200px
.middle
  flex-basis: 200px
  min-height: 150px
  .container
    max-width: 85%
.bottom
  overflow: hidden
  .container
    max-width: 85%
</style>