<template>
  
  <v-app style="background-color: lightgray; padding: 3% 7% 3% 7%">  
      
    <core-drawer />  
    <core-app-bar/>
    <core-view />
  </v-app> 
</template>

<script> 
import CoreDrawer from "@/components/core/CoreDrawer.vue"
import CoreView from "@/components/core/CoreView.vue"
import CoreAppBar from "@/components/core/CoreAppBar.vue"
  export default {
    components: { 
      CoreDrawer, 
      CoreView,
      CoreAppBar
    },

    data: () => ({

    }),

  }
</script>