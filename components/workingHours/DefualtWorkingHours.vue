<template>
  <div class="wokring-hours">
    <div class="body-working-hours">
      <div class="apply">
        <InputDay day="Sunday" :value.sync="fromSun" :unit.sync="toSun" />
        <div class="dayBox">
          <b-button class="applyAll" @click="clicked" variant="outline-primary"
        > Apply to all</b-button
      >
        </div>
      </div>
      <InputDay
        day="Monday"
        :value.sync="fromMon"
        :bool="bool"
        :unit.sync="toMon"
      />
      <InputDay
        day="Tuesday"
        :value.sync="fromTue"
        :bool="bool"
        :unit.sync="toTue"
      />
      <InputDay
        day="wednesday"
        :value.sync="fromWed"
        :bool="bool"
        :unit.sync="toWed"
      />
      <InputDay
        day="Thursday"
        :value.sync="fromThu"
        :bool="bool"
        :unit.sync="toThu"
      />
      <InputDay
        day="Friday"
        :value.sync="fromFri"
        :bool="bool"
        :unit.sync="toFri"
      />
      <InputDay
        day="Saturday"
        :value.sync="fromSat"
        :bool="bool"
        :unit.sync="toSat"
      />
    </div>
  </div>
</template>
<script>
import InputDay from "./InputDay.vue";

export default {
  components: {
    InputDay,
  },
  updated() {
    this.editAllValue();
    this.$store.dispatch("changeDefaultWorkingHours", {
      defaultWorkingHours: [
        { day: "sun", start_time: this.fromSun, end_time: this.toSun },
        { day: "mon", start_time: this.fromMon, end_time: this.toMon },
        { day: "tue", start_time: this.fromTue, end_time: this.toTue },
        { day: "wed", start_time: this.fromWed, end_time: this.toWed },
        { day: "thu", start_time: this.fromThu, end_time: this.toThu },
        { day: "fri", start_time: this.fromFri, end_time: this.toFri },
        { day: "sat", start_time: this.fromSat, end_time: this.toSat },
      ],
    });
  },

  methods: {
    clicked() {
      if (this.bool) {
        this.bool = false;
        (this.fromMon = ""), (this.toMon = "");
        (this.fromTue = ""), (this.toTue = "");
        (this.fromWed = ""), (this.toWed = "");
        (this.fromThu = ""), (this.toThu = "");
        (this.fromFri = ""), (this.toFri = "");
        (this.fromSat = ""), (this.toSat = "");
      } else {
        this.bool = true;
        (this.fromMon = this.fromSun), (this.toMon = this.toSun);
        (this.fromTue = this.fromSun), (this.toTue = this.toSun);
        (this.fromWed = this.fromSun), (this.toWed = this.toSun);
        (this.fromThu = this.fromSun), (this.toThu = this.toSun);
        (this.fromFri = this.fromSun), (this.toFri = this.toSun);
        (this.fromSat = this.fromSun), (this.toSat = this.toSun);
      }
    },
    editValue(from, to) {
      if (from && to) {
        from = from;
        to = to;
      } else if (this.bool) {
        from = this.fromSun;
        to = this.toSun;
      } else {
        from = "";
        to = "";
      }
    },
    editAllValue() {
      this.editValue(this.fromMon, this.toMon);
      this.editValue(this.fromTue, this.toThu);
      this.editValue(this.fromWed, this.toWed);
      this.editValue(this.fromThu, this.toThu);
      this.editValue(this.fromFri, this.toFri);
      this.editValue(this.fromSat, this.toSat);
    },
  },

  data() {
    return {
      fromSun: "",
      toSun: "",
      fromMon: "",
      toMon: "",
      fromTue: "",
      toTue: "",
      fromWed: "",
      toWed: "",
      fromThu: "",
      toThu: "",
      fromFri: "",
      toFri: "",
      fromSat: "",
      toSat: "",

      bool: false,
    };
  },
};
</script>
<style>
.wokring-hours {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  align-items: center;
}
.body-working-hours {
  margin: auto;
  width: 70%;
  height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffff;
  padding: 5%;
}
body {
  font-family: "roboto", sans-serif;
  background-color: #f7f7f7;
  overflow-x: hidden;
  margin: 0 auto;
}
.apply {
  display: flex;
  margin: 0 0 0 20%;
}
.header-cont {
  display: flex;
  justify-content: center;
}
.user-info {
  width: 55%;
  background: rgb(11, 94, 252);
  height: 35px;
  display: flex;
  border-radius: 5px;
  box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
  color: #fff;
  justify-content: center;
  padding-top: 10px;
  font-size: 15px;
  font-weight: 500;
}
.employee-details {
  display: flex;
  padding-left: 60px;
}
.second-list {
  display: flex;
  justify-content: center;
}
.days-list {
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 1% 10%;
  background-color: #fff;
  box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
  border-radius: 5px;
  color: #949191;
}
.working-days {
  padding-left: 25px;
  color: #949191;
}
.days-container input {
  cursor: pointer;
}
.time {
  width: 110;
  height: 25px;
  font-size: 14px;
  font-family: sans-serif;
  margin: 0px 20px;
  border: none !important;
  background: border-box;
}
.from-to {
  display: flex;
}
.date-picker1 {
  width: 100%;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
}
.part1 .part2 {
  display: flex;
}
.date-picker1 {
  display: flex;
  width: 100%;
}
.dayBox {
  display: flex;
  width: 80%;
}
.dayBox input {
  margin: 5% 0 0 5%;
}
.dayBox p {
  width: 60px;
}
.applyAll{
    width: 110px;
    height: 40px;
}
</style>
