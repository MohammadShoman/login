<template>
  <div class="allparts">
  <div  class="a">Kindly fill the information below</div>
    
    
    
    <WorkingHour />
    <button @click="workingHours">Send</button>
  </div>
</template>
<script>

import WorkingHour from "./WorkingHour.vue";
export default {
  computed: {
    getWorkingHours() {
      return this.$store.getters.getWorkingHours;
    },
  },
  data() {
    return {
      from: "",
      to: "",
      day1: "",
      timeFrom: "",
      timeTo: "",
    };
  },
  components: {
    WorkingHour,
  },
  methods: {
    workingHours() {
      this.$store.dispatch("workingHour", {
        objectOfDays: this.getWorkingHours,
        fromDate: this.from,
        toDate: this.to,
        token: this.$store.getters.getToken,
      });
    },
  },
  props: {},
};
</script>
<style>
.a {
  background-color: #0b5efc;
  text-align: center;
  color: white;
  width: 70%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  border-radius: 5px;
}
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
  height: auto;
  padding: 0;
  background-image: none;
  width: 500px;
}
.b-form-btn-label-control.form-control > .form-control {
  display: flex;
  width: 250px !important;
}

</style>
