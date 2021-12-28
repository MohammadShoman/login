import axios from "axios";
var jwt = require("jsonwebtoken");
const Login = {
  namespace: true,
  state: {
    message: "",
    forgetMessage: "",
    phoneNumber: "",   
    token: "",
    workingHours: {},
    resetMessage: "",
    codeMessage: "",
    username: "",
  },
  mutations: {
    setWorkingHour(state, payload) {
      return (state.workingHours = payload.workingHours);
    },
    getResetMessage(state, payload) {
      return (state.resetMessage = payload.resetMessage);
    },
    getCodeMessage(state, payload) {
      return (state.codeMessage = payload.codeMessage);
    },
    setUsername(state, payload) {
      return (state.username = payload.username);
    },
  },
  actions: {
    changeWorkingHours(context, payload) {
      console.log(payload, "hhhhuuuhuhuhuh");
      context.commit("setWorkingHour", {
        workingHours: payload.workingHours,
      });
    },
    async LOGIN(context, payload) {
      try {
        const result = await axios.post(
          "https://services.agentsoncloud.com/login",
          payload
        );
        if (result.data.firstTime) {
          this.$router.push("/workinghour");
        } else {
          this.$router.push("/weeklyappointments");
        }
        document.cookie = `token=${result.data.token}`;
        console.log(result);
        context.state.tokenId = result.data.token;
      } catch (err) {
        console.log(err);
        // console.log(error.response.status);
        context.state.message = err.response.data.message;
        // context.state.message = error;
      }
    },
    async forgetPassword(context, payload) {
      try {
        const result = await axios.post(
          "https://services.agentsoncloud.com/forgot",
          payload
        );
        console.log(result.data);
        document.cookie = 'token=' + result.data.token;
        // console.log(result.data.token);
        // const decoded = jwt.verify(token, "change this key later on 00");
        context.state.phoneNumber = result.data.phone;
        // console.log(context.state.phoneNumber);
        this.$router.push("/forgetCode");
      } catch (err) {
        console.log("error in catch");
        console.log(err.response.data.message);
        console.log(err.response.status);
        context.state.forgetMessage = err.response.data.message;
      }
    },
    async forget2(context, payload) {
      const cookie = document.cookie.split(";");
      let token = "";
      cookie.forEach((value) => {
        if (value.includes("token")) {
          token = value.slice(value.indexOf("=") + 1);
        }
      });
      console.log("Bearer " + token);
      try {
        const result = await axios.post(
          "https://services.agentsoncloud.com/forgot/verify",
          payload,
          {
            headers: {
              authorization: "Bearer " + token,
            },
          }
        );
        console.log(result);
        this.$router.push("/restPassword");
      } catch (err) {
        context.commit("getCodeMessage", {
          codeMessage: err.response.data.message,
        });
        console.log(err.response.data.message);
        console.log(err.response.status);
      }
    },
    async restPassword(context, payload) {
      const cookie = document.cookie.split(";");
      let token = "";
      cookie.forEach((value) => {
        if (value.includes("token")) {
          token = value.slice(value.indexOf("=") + 1);
        }
      });
      try {
        const result = await axios.post(
          "https://services.agentsoncloud.com/forgot/password",
          payload,
          {
            headers: {
              authorization: "Bearer " + token,
            },
          }
        );

        console.log(result);
       
        this.$router.push("/login");
      } catch (err) {
        context.commit("getResetMessage", {
          resetMessage: err.response.data.message,
        });
        // context.state.resetMessage = err.response.data.message;

        console.log(err.response.data.message);
        console.log(err.response.status);
      }
    },
    userName(context,payload){
      context.commit("setUsername",{
        username:payload.username
      })
    }
  },
  getters: {
    getMessage(state) {
      return state.message;
    },
    getForgetMessage(state) {
      return state.forgetMessage;
    },
    getPhoneNumber(state) {
      return state.phoneNumber;
    },
    getToken(state) {
      return state.token;
    },
    getWorkingHours(state) {
      return state.workingHours;
    },
    getResetPsswordMessage(state) {
      return state.resetMessage;
    },
    getPasswordCodeMessage(state) {
      return state.codeMessage;
    },
    getUsername(state) {
      return state.username;
    },
  },
};
export default Login;
