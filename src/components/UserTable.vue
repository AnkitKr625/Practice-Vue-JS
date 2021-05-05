<template>
  <v-data-table
    :headers="headers"
    :items="userData"
    :items-per-page="10"
    class="elevation-1"
    @click:row="abc"
  >
   <template #item.pic="{item}">
     {{item.picture.thumbnail}}
   </template>
  </v-data-table>

</template>

<script>

import {fetchUsers} from '../dataProvider/functions'
  export default {
    name:"UserTable",
    data () {
      return {
        headers: [
          {
            text: 'Avatar',
            align: 'start',
            sortable: false,
            value: `pic`,
          },
          { text: `Gender`, value: `gender` },
          { text: `Email`, value: `email` },
          { text: `City`, value: `carbs` },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        userData: [],
        id:'Number'
      }
    },
    created(){
      fetchUsers()
       .then(res => {
         this.userData=res.data.results;
         console.log(res.data.results);
      })
    },
    methods:{
      abc(){
        console.log(this.userData);
      }
    }
  }
</script>