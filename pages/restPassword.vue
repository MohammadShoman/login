<template>
  <div>
    <b-form class="forget2">
      <p class="newPass">Enter New Password</p>
      <b-input-group class="userName">
        <b-form-input
          type="password"
          v-model="password"
          id="inline-form-input-username"
          placeholder="password"
          maxlength="20"
        ></b-form-input>
      </b-input-group>

      <b-input-group class="userName">
        <b-form-input
          type="password"
          v-model="confirm"
          id="inline-form-input-username"
          placeholder="confirm password"
          maxlength="20"
        ></b-form-input>
      </b-input-group>

      <b-button
        @click.prevent="checkPass(password, confirm)"
        class="btn"
        variant="primary"
        :disabled="disabledSave(password, confirm)"
        >save</b-button
      >
      <p style="color: red">{{ m }}</p>
      <!-- <p v-else-if="!m" style="color: green">{{ t }}</p> -->
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      confirm: "",
      m: "",
      t: "",
    };
  },
  methods: {
    restPassword() {
      this.$store
        .dispatch("restPassword", {
          password: this.password,
          confirmPassword: this.confirm,
          phone: this.$store.getters.getPhoneNumber,
        })
        .then((success) => {
          console.log(success);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    checkPass(a, b) {
      console.log("aaaaaaa", a, b);
      if (a === b) {
        this.restPassword();
        this.m = this.$store.getters.getResetPsswordMessage;

        console.log(
          this.m,
          "mmmmm",
          this.$store.getters.getResetPsswordMessage
        );
      } else if (a === b && this.m == "password is week") {
        this.m = "password is week";
      } else {
        this.m = "passwords dont match";
        console.log(this.m);
      }
    },
    disabledSave(password, confirm){
      if(password.length>8 && confirm.length>8){
        return false
      }else{
        return true
      }
    }
  },
};
</script>

<style scoped>
.forget2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20% auto;
  width: 45%;
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: #fff;
}
.userName {
  width: 200px;
  margin-top: 15px;
}
.btn {
  width: 100px;
  margin-top: 25px;
}
.newPass{
  margin-top:30px;
}
</style>
