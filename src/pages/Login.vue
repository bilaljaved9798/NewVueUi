<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" v-model="username" id="username" required>
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  
  import api from '../interceptor/api';

  export default {
    name: 'HelloWorld',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          
              //let response = await api.post(`https://localhost:44352/Token?Username=${this.username}&Password=${this.password}`);
              let response = await api.post(`http://78.110.160.52:7070/Token?Username=${this.username}&Password=${this.password}`);
              const { token, User } = response.data;
              localStorage.setItem('token', token);
              localStorage.setItem('userInfo', JSON.stringify(User));
              localStorage.setItem('user', JSON.stringify(response.data));
              this.$router.push({ name: 'dashboard' }); // Corrected route name
            } catch (error) {
              console.error(error);
             }
         }
  }
}
  </script>
  