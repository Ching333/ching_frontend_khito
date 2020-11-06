<template>
  <div class="explore">
    <Map />
  </div>
</template>

<script>
import Map from "@/components/exploreplace/Map.vue";

export default {
  components: {
    Map,
  },
};
</script>

<style scoped>
.explore {
  width: 100%;
  height: 100vh;
}

#pocket-icon {
  position: absolute;
  width: 15vh;
  height: 15vh;
  right: 66px;
  bottom: 39px;
}
</style>