<template lang='pug'>
v-app
  v-navigation-drawer(
    app,
    mobile-breakpoint="760",
    width="300px",
    color="#4d89a5"
  )
    Menu.h-100

  v-app-bar(app, :value="isVisible", color="#4d89a5")

  v-main
    router-view
</template>

<script>
import Menu from "@/components/menu/Menu.vue";

export default {
  name: "App",
  data() {
    return {
      isVisible: false,
    };
  },
  components: {
    Menu,
  },
  mounted() {
    const matchMedia = window.matchMedia("(min-width: 760px)");
    const visible = () => {
      if (matchMedia.matches) {
        this.isVisible = false;
      } else {
        this.isVisible = true;
      }
    };
    visible();
    matchMedia.addListener(visible);
  },
};
</script>

<style lang="sass">


.v-application 
  a
    text-decoration: none
.w-100
  width: 100%
.h-100
  height: 100%
.vh-100
  height: 100vh
</style>
