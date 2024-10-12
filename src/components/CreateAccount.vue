<template>
    <div>
      <h2>Create New Bank Account</h2>
      <form @submit.prevent="createAccount">
        <div>
          <label for="name">Account Name:</label>
          <input type="text" v-model="account.name" required />
        </div>
        <div>
          <label for="country">Country:</label>
          <input type="text" v-model="account.country" required />
        </div>
        <div>
          <label for="currency">Currency:</label>
          <input type="text" v-model="account.currency" value="€" readonly />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        account: {
          name: "",
          country: "",
          currency: "€" // default value
        }
      };
    },
    methods: {
      async createAccount() {
        try {
          const response = await fetch("http://127.0.0.1:5002/accounts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.account),
          });
          const data = await response.json();
          if (response.ok) {
            alert("Account created successfully!");
            console.log(data);
          } else {
            alert("Error creating account: " + data.error);
          }
        } catch (error) {
          alert("Request failed: " + error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles for the form */
  </style>
  