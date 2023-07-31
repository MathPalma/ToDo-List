<template>

  <div class="container col s8">
  
  <form class="col s14" style="background-color:white; border-radius: 10px;; margin-top: 10%; padding: 5%;">
    <div class="row">
      <div class="input-field hoverable col s6">
        <i class="material-icons prefix">contacts</i>
        <input v-model="request.firstName" id="firstName" type="text" class="validate">
        <label v-if="!request.firstName.trim()" for="firstName">First Name</label>
        <label v-if="validation.firstName.show" style="margin-top: 35px; color: red; font-size: smaller;">{{validation.firstName.message}}</label>
      </div>
      <div class="input-field hoverable col s6">
        <i class="material-icons prefix">contacts</i>
        <input v-model="request.lastName" id="lastName" type="text" class="validate">
        <label v-if="!request.lastName.trim()" for="lastName">Last Name</label>
        <label v-if="validation.lastName.show" style="margin-top: 35px; color: red; font-size: smaller;">{{ validation.lastName.message }}</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field hoverable col s6">
        <i class="material-icons prefix">account_circle</i>
        <input v-model="request.username" id="username" type="text" class="validate">
        <label v-if="!request.username.trim()" for="username">Username</label>
        <label v-if="validation.username.show" style="margin-top: 35px; color: red; font-size: smaller;">{{ validation.username.message }}</label>
      </div>
      <div class="input-field hoverable col s6">
        <i class="material-icons prefix">email</i>
        <input v-model="request.email" id="email" type="email" class="validate">
        <label v-if="!request.email.trim()" for="email">Email</label>
        <label v-if="validation.email.show" style="margin-top: 35px; color: red; font-size: smaller;">{{ validation.email.message }}</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field hoverable col s6">
        <i class="material-icons prefix">vpn_key</i>
        <input v-model="request.password" id="password" type="password" class="validate">
        <label v-if="!request.password.trim()" for="password">Password</label>
        <label v-if="validation.password.show" style="margin-top: 35px; color: red; font-size: smaller;">{{ validation.password.message }}</label>
      </div>
      <div class="input-field hoverable col s6">
        <i class="material-icons prefix">replay</i>
        <input v-model="request.password2" id="password2" type="password" class="validate">
        <label v-if="!request.password2.trim()" for="password2">Retype Password</label>
        <label v-if="validation.password2.show" style="margin-top: 35px; color: red; font-size: smaller;">{{ validation.password2.message }}</label>
      </div>
    </div>
    <a v-on:click="RegisterUser" class="waves-effect waves-light btn right hoverable"><i class="large material-icons right">done</i>register</a>
  </form>

</div>

</template>

<script>
import api from '../services/api';

export default {
  name: "registerPage",
  components: {},
  data() {
    return {
      request: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        password2: ''
      },
      validation: {
        firstName: {
          show: false,
          message: ''
        },
        lastName: {
          show: false,
          message: ''
        },
        username: {
          show: false,
          message: ''
        },
        email: {
          show: false,
          message: ''
        },
        password: {
          show: false,
          message: ''
        },
        password2: {
          show: false,
          message: ''
        }
      }
    }
  },
  mounted() {
  },
  methods: {
    RegisterUser() {
      this.CleanMemory();
      this.ValidateFields();
      api.post('Authentication/', this.request)
      .then((response) =>{
        console.log(response);
      });
      console.log(this.request);
    },
    ValidateFields() {
      if(!this.request.firstName.trim()) {
        this.validation.firstName.message = '*Required field';
        this.validation.firstName.show = true;
      }
      if(!this.request.lastName.trim()) {
        this.validation.lastName.message = '*Required field';
        this.validation.lastName.show = true;
      }
      if(!this.request.username.trim()) {
        this.validation.username.message = '*Required field';
        this.validation.username.show = true;
      }
      if(this.request.username.length < 5 || this.request.username.length > 20) {
        this.validation.username.message = 'username length must be from 5 to 20 characters';
        this.validation.username.show = true;
      }
      if(!this.request.email.trim()) {
        this.validation.email.message = '*Required field';
        this.validation.email.show = true;
      }
      if(!this.request.email
      .toLowerCase()
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ) {
        this.validation.email.message = 'invalid email';
        this.validation.email.show = true;
      }
      if(!this.request.password.trim()) {
        this.validation.password.message = '*Required field';
        this.validation.password.show = true;
      }
      if(!this.request.password2.trim()) {
        this.validation.password2.message = '*Required field';
        this.validation.password2.show = true;
      }
      if(this.request.password != this.request.password2) {
        this.validation.password.message = 'passwords do not match';
        this.validation.password.show = true;
        this.validation.password2.message = 'passwords do not match';
        this.validation.password2.show = true;
      }
    },
    CleanMemory(){
      this.validation = {
        firstName: {
          show: false,
          message: ''
        },
        lastName: {
          show: false,
          message: ''
        },
        username: {
          show: false,
          message: ''
        },
        email: {
          show: false,
          message: ''
        },
        password: {
          show: false,
          message: ''
        },
        password2: {
          show: false,
          message: ''
        }
      };
    }
  }
};
</script>

<style>
label {
  color: white;
}

.labelNav {
  cursor: pointer;
}

.labelNav:hover {
  border: 1px solid #5B4B8A;
  border-radius: 10%;
  margin: -1px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
