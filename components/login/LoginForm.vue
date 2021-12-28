<template>
  <div class="form-container sign-in-container">
    <form action="#">
      <h1>Sign in</h1>
      <div class="social-container">
        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
      </div>
      <input   
        type="username"
        v-model="username"
        placeholder="username"
        maxlength="20"
        required
      />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        maxlength="20"
        required
      />
      <a href="/forgotPassword">Forgot your password?</a>
      <button
        @click.prevent="login"
        :disabled="disabledBtn()"
        class="second-button"
      >
        Sign In
      </button>
      <p v-if="showMessage" style="color: red">{{ getMessage }}</p>
    </form>
  </div>
</template>
<script>
export default {
  name: "LoginForm",
  data() {
    return {
      fullName: "",
      username: "",
      password: "",
      showMessage: false,
    };
  },
  methods: {
    disabledBtn() {
      if (this.username && this.password) {
        return false;
      } else {
        return true;
      }
    },
    login() {
      this.$store
        .dispatch("LOGIN", {
          username: this.username,
          password: this.password,
        })
        .then((success) => {
          console.log(success);
          this.showMessage = true;
        })
        .catch((err) => {
          console.log(err);
          this.showMessage = true;
        });
    },
  },
  computed: {
    getMessage() {
      return this.$store.getters.getMessage;
    },
  },
};
</script>
<style scoped>
.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}
.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}
.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
  
}
h1 {
  font-weight: bold;
  margin: 0;
}
button:disabled,
button[disabled]{
  border: 1px solid #999999;
  background-color: #4DDFFF;
  color: #ffffff;
  cursor:auto;
}
</style>
