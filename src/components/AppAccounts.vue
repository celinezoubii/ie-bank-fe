<template>
  <div class="account-form">
    <h2>Create New Bank Account</h2>
    <form @submit.prevent="submitAccount">
      <label for="account-name">Account Name:</label>
      <input v-model="accountName" id="account-name" required />

      <label for="account-country">Country:</label>
      <input v-model="accountCountry" id="account-country" required />

      <button type="submit">Create Account</button>
    </form>

    <div v-if="accountCreated">
      <h3>Account Created Successfully:</h3>
      <p><strong>Name:</strong> {{ accountName }}</p>
      <p><strong>Country:</strong> {{ accountCountry }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accountName: '',
      accountCountry: '',
      accountCreated: false
    };
  },
  methods: {
    submitAccount() {
      // Simulating API call to create an account
      const accountData = {
        name: this.accountName,
        country: this.accountCountry
      };

      // Assuming that the backend accepts the accountData object
      console.log('Account created:', accountData);

      // Simulate successful account creation
      this.accountCreated = true;

      // Clear the form fields
      this.accountName = '';
      this.accountCountry = '';
    }
  }
}
</script>

<style scoped>
.account-form {
  max-width: 500px;
  margin: auto;
}
label {
  display: block;
  margin-top: 10px;
}
input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 20px;
}
button {
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
