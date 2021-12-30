<template>
  <div class="allparts">
    <DefualtWorkingHours />
    <div class="savebtn">
      <div><button class="btnSave" @click="workingHours">Save</button></div>
      <div><button class="btnCancel" @click="goTo">Cancel</button></div>
    </div>
  </div>
</template>
<script>
import DefualtWorkingHours from "./DefualtWorkingHours.vue";

export default {
  components: {
    DefualtWorkingHours,
  },
  data() {
    return {
      day1: "",
      timeFrom: "",
      timeTo: "",
      from: "",
      to: "",
      type: "default",
    };
  },
  computed: {
    getDefualtWorkingHours() {
      return this.$store.getters.getDefualtWorkingHours;
    },
  },

  methods: {
    workingHours() {
      this.$store.dispatch("workingHour", {
        type: this.type,
        defaultWorkingHours: this.getDefualtWorkingHours,
        token: this.$store.getters.getToken,
      });
    },
  },
};
</script>
<style>
body {
  font-family: "Roboto", sans-serif;
  background-color: #f7f7f7;
  overflow-x: hidden;
  color: #949191;
}
.duration {
  color: #949191;
  font-size: 17px;
  font-weight: bold;
  width: 93%;
  margin: 20px auto 0px auto;
}

.b-form-btn-label-control.form-control > .form-control {
  display: flex;
}
label {
  display: inline-block;
  margin-bottom: 0.5rem;
}
.b-form-btn-label-control.form-control {
  display: flex;
  align-items: stretch;
  height: 40px;
  padding: 0;
  background-image: none;
  width: 100%;
}
.b-form-btn-label-control.form-control > .form-control {
  display: flex;
  width: 250px !important;
}
.date-picker1 {
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  align-items: center;
  background-color: #ffffff;
  width: 70%;
  margin: 0 auto;
  border-radius: 5px 5px 0 0;
}
.part1 {
  margin: none;
  width: 30%;
}
.part2 {
  width: 30%;
}
.allparts {
  display: flex;
  flex-direction: column;
  margin-top: 25px;
}
.btnSave {
  border-radius: 20px;
  border: 1px solid #0b5efc;
  background-color: #0b5efc;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  font-family: "Montserrat";
  width: 10%;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  align-items: center;
  margin: 0 auto;
}
.savebtn {
  width: 70%;
  background-color: #ffffff;
  border-radius: 0 0 5px 5px;
  margin: 0 auto;
  margin-bottom: 30px;
  height: 75px;
}
</style>
