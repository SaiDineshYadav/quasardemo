<template>
    <div>
         <q-btn
        color="primary"
        flat
        dense
        icon="arrow_back"
      />

        <h5 class="text-center text-weight-bold textColor">Create an Account </h5>
        <q-form @submit.prevent.stop="createAccount()" class="text-center">
            <q-input
              square
              outlined
              ref="name"
              v-model="loginForm.name"
              type="email"
              label="Your Email *"
              placeholder="Enter Email Address"
              lazy-rules
              :rules="[ 
                val => val && val.length > 0 || 'Email is required',
                val => val && emailPattern.test(val) || 'Enter valid Email',
              ]"
              />
              <q-input
                square
                outlined
                ref="password"
                v-model="loginForm.password"
                :type="isPwd ? 'password' : 'text'"
                label="Strong Password *"
                placeholder="Enter Password"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Password is required']">
                <template v-slot:append>
                <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                />
                </template>
            </q-input>
            <q-input
                square
                outlined
                ref="confirmPassword"
                v-model="loginForm.confirmPassword"
                :type="isPwd1 ? 'password' : 'text'"
                label="Confirm Password *"
                placeholder="Enter Confirm Password"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Confirm Password is required']">
                <template v-slot:append>
                <q-icon
                    :name="isPwd1 ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd1 = !isPwd1"
                />
                </template>
            </q-input>
            <q-btn label="Create an account" @click="createAccount()" type="submit" color="primary"/>
       
        </q-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                name: '',
                password: '',
                confirmPassword: '',
            },
            emailPattern: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
            isPwd: true,
            isPwd1: true,

        }
    },
    methods: {
        createAccount() {
            console.log(this.loginForm)
            this.$refs.name.validate();
            this.$refs.password.validate();
            this.$refs.confirmPassword.validate();
            console.log(this.$refs.name.hasError)

        }
    }
}
</script>

<style scoped>
 .textColor{
     color: blue;
 }
</style>