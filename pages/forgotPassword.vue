<template>
  <div>    
    <b-form class="forgetPassword">
      <label class="sr-only" for="inline-form-input-username">Username</label>
      <p class="enterUsername">Enter Your Username</p>
      <b-input-group class="userName">
        <b-form-input
          v-model="username"
          id="inline-form-input-username"
          placeholder="enter username"
        ></b-form-input>
      </b-input-group>

      <b-button @click.prevent="forget" class="btn" variant="primary"
        >Send</b-button
      >
      <p v-if="showMessage" style="color: red">{{ getForgetMessage }}</p>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      showMessage:false,
    };
  },
  computed: {
    getForgetMessage() {
      return this.$store.getters.getForgetMessage;
    },
  },
  methods: {
    forget() {
      console.log(this.username,"username"); 
      this.$store
        .dispatch("forgetPassword", {
          username: this.username,
        })
        .then((success) => {
          console.log(success);
          this.showMessage=true
        })
        .catch((err) => {
          console.log(err);
          this.showMessage=true
        });
        
        this.$store.dispatch("userName", {
        username: this.username,
      });
    },
  },
};
</script>

<style scoped>
.forgetPassword {
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
  width: 300px;
  margin-top: 50px;
}
.btn {
  width: 100px;
  margin-top: 25px;
}
.enterUsername{
  margin-top:50px;
}
</style>
