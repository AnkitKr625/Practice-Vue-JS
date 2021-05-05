<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
       <h3>User Data</h3>
      </div>

      <v-spacer></v-spacer>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
    </v-app-bar>

    <v-main>
      <UserTable/>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import UserTable from './components/UserTable';

export default {
  name: 'App',

  components: {
    //HelloWorld,
    UserTable
  },

  data: () => ({
    //
  }),
};
</script>
