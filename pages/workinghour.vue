<template>
  <div>
    <div class="a">Kindly fill the information below</div>
    <div class="workingHours-btn">
      <b-button class="defualt" @click="defualt" variant="outline-primary"
        >Defualt</b-button
      >
      <b-button class="custom" @click="custom" variant="outline-primary"
        >Customize</b-button
      >
    </div>
    <div v-if="customValue"><Datepicker /></div>
    <div v-if="defualtValue"><DateDefualtPicker /></div>
  </div>
</template>
<script>
import Datepicker from "../components/workingHours/Datepicker.vue";
import DateDefualtPicker from "../components/workingHours/DateDefualtPicker.vue";

export default {
  data() {
    return {
      value: "",
      customValue:false,
      defualtValue:true,
    };
  },
  methods: {
    defualt() {
      this.customValue=false;
      this.defualtValue=true;
    },
    custom() {
      this.customValue=true;
      this.defualtValue=false;
    },
  },
  props: {},
  components: { Datepicker,DateDefualtPicker },
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
.workingHours-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
.custom {
  background-color: #fff;
  border-radius: 5px;
  border: #fff;
  color: #a09f9f;
  font-weight: bolder;
  border-radius: none;
  width: 15%;
  margin-left: 3px;
}
.defualt {
  background-color: #fff;
  border-radius: 5px;
  border: #fff;
  color: #a09f9f;
  font-weight: bolder;
  border-radius: none;
  width: 15%;
}
#datepicker-full-width {
  background-color: #eceef8;
}
.btn .b-icon.bi,
.nav-link .b-icon.bi,
.dropdown-toggle .b-icon.bi,
.dropdown-item .b-icon.bi,
.input-group-text .b-icon.bi {
  color: #0b5efc;
}
.btn-primary:not([disabled]):not(.disabled).active {
  background-color: #0b5efc;
}
.form-control:focus {
  color: #495057;
  background-color: #fff;
  outline: none;
  box-shadow: none !important;
  border: 1px solid #ced4da;
}
.form-control {
  display: block;
  width: 35%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
.b-calendar-header {
  margin-bottom: 0.25rem;
  width: 285%;
}
.b-calendar .b-calendar-header,
.b-calendar .b-calendar-nav {
  margin-bottom: 0.25rem;
  justify-content: center;
}
.b-calendar .b-calendar-grid {
  padding: 0;
  margin: 0;
  overflow: hidden;
  width: 100%;
}
</style>
