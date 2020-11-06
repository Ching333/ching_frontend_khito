<template lang="pug">
v-container
  Login(v-if="!loggedIn")
  v-container.pa-12(v-if="loggedIn")
    v-row.mt-12.ml-8
      span.maintitle 會員資料
    v-row.mt-12.ml-12
      span.subtitle 帳號 / 電子信箱
    v-row.mt-5.ml-12
      .input-wrapper.rounded-sm.d-flex.align-center 
        span.subtitle.ml-5 khitoisthebest@gmail.com
    v-row.mt-12.ml-12
      span.subtitle 使用者名稱
    v-row.mt-5.ml-12
      .input-wrapper.rounded-sm.d-flex.align-center 
        span.subtitle.ml-5 Mutlululover

    svg.logout(@click="logout")
      use(xlink:href="#logout")
</template>

<script>
import Login from "@/components/common/Login";
import { mapGetters, mapState } from "vuex";

export default {
  components: {
    Login,
  },
  computed: {
    ...mapGetters("auth", ["loggedIn"]),
    ...mapState("auth", ["user"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    },
  },
};
</script>

<style scoped lang="sass">
.maintitle
  width: 335px
  height: 42px
  font-family: TaipeiSansTCBeta
  font-size: 30px
  line-height: 1.33
  letter-spacing: 3.31px
  color: #757677

.subtitle
  width: 140px
  height: 28px
  font-family: NotoSansHant
  font-size: 18px
  font-weight: 500
  letter-spacing: 1.13px
  color: #777777

.input-wrapper
  width: 417px
  height: 50px
  border-radius: 6px
  box-shadow: 0 1px 2px 0 rgba(212, 212, 212, 0.5)
  background-color: #f5f5f5

.logout
  position: absolute
  right: 200px
  bottom: 150px
  height: 80px
  width: 80px
  cursor: pointer
</style>