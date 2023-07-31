<template>
    <div class="container col s8">
        <form class="col s14" style="background-color:white; border-radius: 10px;; margin-top: 10%; padding: 5%;">
            <div class="row">
                <h1>Login</h1>
                <div class="input-field hoverable col s12">
                    <i class="material-icons prefix">account_circle</i>
                    <input v-model="request.username" id="username" type="text" class="validate">
                    <label v-if="!request.username.trim()" for="username">Username</label>
                    <label v-if="validation.username.show" style="margin-top: 35px; color: red; font-size: smaller;">{{
                        validation.username.message }}</label>
                </div>
                <div class="input-field hoverable col s12">
                    <i class="material-icons prefix">vpn_key</i>
                    <input v-model="request.password" id="password" type="password" class="validate">
                    <label v-if="!request.password.trim()" for="password">Password</label>
                    <label v-if="validation.password.show" style="margin-top: 35px; color: red; font-size: smaller;">{{
                        validation.password.message }}</label>
                </div>
            </div>
            <div class="row">
                <div class="col s12">
                    <a v-on:click="AuthUser" class="waves-effect waves-light btn right hoverable">Login</a>
                </div>
            </div>

            <div class="row">
                <div class="col s12">
                    <label>Forgot your password?</label>
                </div>
                <div class="col s12">
                    <a href="/register">Don't you have an account?</a>
                </div>

            </div>

        </form>
    </div>
</template>
  
<script>
import api from '../services/api';

export default {
    name: "loginPage",
    components: {},
    data() {
        return {
            request: {
                username: '',
                password: '',
            },
            validation: {
                username: {
                    show: false,
                    message: ''
                },
                
                password: {
                    show: false,
                    message: ''
                }
            }
        }
    },
    mounted() {
    },
    methods: {
        AuthUser() {
            this.CleanMemory();
            //this.ValidateFields();
            api.post('Authentication/login', this.request)
                .then((response) => {
                    console.log(response);
                });
            console.log(this.request);
        },
        ValidateFields() {
            if (!this.request.username.trim()) {
                this.validation.username.message = '*Required field';
                this.validation.username.show = true;
            }
            if (!this.request.password.trim()) {
                this.validation.password.message = '*Required field';
                this.validation.password.show = true;
            }
        },
        CleanMemory() {
            this.validation = {
                username: {
                    show: false,
                    message: ''
                },
                password: {
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
  