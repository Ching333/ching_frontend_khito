<template>
  <v-container id="signinup-form" class="fill-height">
    <v-row align="center" justify="center" no-gutters>
      <v-col cols="12" sm="8" md="8" class="">
        <v-card class="evelation-12 card">
          <v-window v-model="step">
            <!--SignIn-->
            <v-window-item :value="1">
              <v-row class="">
                <v-col cols="12" md="8" class="pt-6 pb-6">
                  <v-card-text>
                    <v-form class="signup-form-form" @submit.prevent="signin">
                      <h1
                        class="text-center display-1 mb-10"
                        :class="`${bgColor}--text`"
                      >
                        會員登入
                      </h1>
                      <v-text-field
                        id="email"
                        v-model="login"
                        label="帳號（信箱）"
                        name="email"
                        type="text"
                        :color="bgColor"
                      />
                      <v-text-field
                        id="password"
                        v-model="password"
                        label="密碼"
                        name="Password"
                        type="password"
                        :color="bgColor"
                      />
                      <div class="text-center">
                        <a
                          href="#"
                          class="mt-3 overline no-text-decoration"
                          :class="`${bgColor}--text`"
                          @click="step = 3"
                        >
                          忘記密碼
                        </a>
                      </div>
                      <div class="text-center mt-6">
                        <v-btn type="submit" large :color="bgColor" dark
                          >登入</v-btn
                        >
                      </div>
                    </v-form>
                  </v-card-text>
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                  class="darken-2 vcenter"
                  :class="`${bgColor}`"
                >
                  <div>
                    <v-card-text :class="`${fgColor}--text`">
                      <h1 class="text-center headline mb-3">還不是會員？</h1>
                    </v-card-text>
                    <div class="text-center mb-6">
                      <v-btn dark outlined @click="step = 2">去註冊</v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>

            <!--SignUp-->
            <v-window-item :value="2">
              <v-row class="fill-height">
                <v-col
                  cols="12"
                  md="4"
                  class="darken-2 vcenter"
                  :class="`${bgColor}`"
                >
                  <div>
                    <v-card-text :class="`${fgColor}--text`">
                      <h1 class="text-center headline mb-3">已經是會員？</h1>
                    </v-card-text>
                    <div class="text-center mb-6">
                      <v-btn dark outlined @click="step = 1">我要登入</v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" md="8" class="pt-6 pb-6">
                  <v-card-text>
                    <h1
                      class="text-center display-1 mb-10"
                      :class="`${bgColor}--text`"
                    >
                      註冊會員
                    </h1>
                    <v-form class="signup-form-form" @submit.prevent="signup">
                      <v-text-field
                        id="nickname"
                        v-model="nickname"
                        label="使用者名稱"
                        name="nickname"
                        type="text"
                      />
                      <v-text-field
                        id="email"
                        v-model="email"
                        label="帳號（信箱）"
                        name="email"
                        type="email"
                      />
                      <v-text-field
                        id="password"
                        v-model="password"
                        label="密碼"
                        name="password"
                        type="password"
                      />
                      <div class="text-center mt-6">
                        <v-btn type="submit" large :color="bgColor" dark>
                          註冊</v-btn
                        >
                      </div>
                    </v-form>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>

            <!--PW Rest-->
            <v-window-item :value="3">
              <v-row class="fill-height">
                <v-col
                  cols="12"
                  md="4"
                  class="darken-2 vcenter"
                  :class="`${bgColor}`"
                >
                  <div>
                    <v-card-text :class="`${fgColor}--text`">
                      <h1 class="text-center headline mb-3">已經註冊了？</h1>
                    </v-card-text>
                    <div class="text-center mb-6">
                      <v-btn dark outlined @click="step = 1">登入去</v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" md="8" class="pt-6 pb-6">
                  <v-card-text>
                    <v-form class="signup-form-form">
                      <h1
                        class="text-center display-1 mb-10"
                        :class="`${bgColor}--text`"
                      >
                        重設密碼
                      </h1>
                      <v-text-field
                        id="login"
                        v-model="login"
                        label="帳號（信箱）"
                        name="login"
                        type="text"
                        :color="bgColor"
                        class="v-input__icon--double"
                      />
                      <div class="text-center mt-6">
                        <v-btn large :color="bgColor" dark>重設密碼</v-btn>
                      </div>
                    </v-form>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Signupform",
  components: {},
  props: {
    source: {
      type: String,
      default: "",
    },
    bgColor: {
      type: String,
      default: "grey",
    },
    fgColor: {
      type: String,
      default: "white",
    },
  },
  data() {
    return {
      step: 1,
      nickname: "",
      email: "",
      password: "behkhito",
      login: "editor@khito.co",
      snackbarType: "success",
      snackbarMessage: "",
      snackbar: false,
    };
  },
  methods: {
    signup() {
      this.$store
        .dispatch("auth/register", {
          name: this.nickname,
          email: this.email,
          password: this.password,
        })
        .then((response) => console.log(response))
        .catch((e) => {
          this.error = e + "";
        });
    },
    async signin() {
      try {
        const response = await this.$store
          .dispatch("auth/login", {
            account: this.login,
            password: this.password,
          })
          .then(() => localStorage.setItem("email", this.login));
        this.snackbarType = response.data.type;
        this.snackbarMessage = response.data.message;
        this.snackbar = true;
      } catch (err) {
        this.snackbarType = "error";
        this.snackbarMessage = "Error signing you in";
        this.snackbar = true;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.v-input__icon--double .v-input__icon {
  margin-left: -4.25rem !important;
}
a.no-text-decoration {
  text-decoration: none;
}
#signinup-form {
  max-width: 75rem;
}
.signup-form-form {
  max-width: 23rem;
  margin: 0 auto;
}
.card {
  overflow: hidden;
}
.vcenter {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>