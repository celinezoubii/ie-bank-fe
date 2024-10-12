<template>
    <div class="home">
      <h1>Welcome to IE Bank</h1>
      <button @click="goToAccounts">Go to Accounts</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToAccounts() {
        this.$router.push('/accounts');
      }
    }
  }
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    margin-top: 50px;
  }
  button {
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
  