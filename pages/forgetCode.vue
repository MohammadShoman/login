<template>
  <div>
    <b-form class="forget2">
      <p class="codeSent">
        The code has been sent to {{ " *******" + getPhoneNumber.slice(7, 10) }}
      </p>
      <p>resend code in {{ timerCount }}</p>
      <b-input-group class="userName">
        <b-form-input
        type="number"
          v-model="code"
          id="inline-form-input-username"
          placeholder="code here"
          
        ></b-form-input>
      </b-input-group>
      
      <b-button :disabled="code.length<6" @click.prevent="forget2" class="btn" variant="primary"
        >Check</b-button
      >
      <b-button class="resnd" @click="hidden" v-if="show || timerCount == 0"
        >resend</b-button
      >
      <p v-if="showMessage" style="color: red">{{ getForgetMessage }}</p>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: this.$store.getters.getPhoneNumber,
      code: "",
      show: false,
      clicked: false,
      timerCount: 60,
      showMessage:false,
    };
  },
  computed: {
    getPhoneNumber() {
      return this.$store.getters.getPhoneNumber;
    },
    getForgetMessage() {
      return this.$store.getters.getPasswordCodeMessage;
    },
  },
  methods: {
    forget2() {
      this.$store
        .dispatch("forget2", {
          code: this.code,
        })
        .then((success) => {
          console.log(success);
          
        })
        .catch((err) => {
          console.log(err);
          this.showMessage=true;
        });
        
      setTimeout(() => {
        this.show = true;
      }, 60000);
      this.clicked = true;
      this.timerCount = 60;
      
    },

    hidden() {
      this.show = false;
      this.timerCount = 60;
      console.log( this.$store.getters.getUsername,"opopopopo");
      this.$store
        .dispatch("forgetPassword", {
          username: this.$store.getters.getUsername,
        })
        .then((success) => {
          console.log(success);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount = this.timerCount - 1;
          }, 2000);
        }
      },
      immediate: true,
    },
  },
};
</script>

<style>
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
  margin-top: 0px;
}
.btn {
  width: 100px;
  margin-top: 25px;
}
.resnd {
  margin-top: 2%;
}
.codeSent{
  margin-top:50px;
}
</style>
