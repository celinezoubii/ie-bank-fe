<script>
import CreateAccount from './components/CreateAccount.vue';  // Import the form component

export default {
  components: {
    CreateAccount  // Register the form component
  }
};
</script>

<template>
  <div id="app">
    <CreateAccount /> <!-- Display the CreateAccount component here -->
  </div>
</template>

<style>
#app {
  margin-top: 60px;
}
</style>
