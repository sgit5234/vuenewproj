<template>
   <!-- <h2>Name: {{name}}</h2>  <br><br>
   <h2>Phone: {{phone}}</h2>  -->

   <v-btn @click="showPopup=true">Show popup</v-btn> 
   <roughchild v-show="showPopup" @close="showPopup=false" />
</template>



<script>
import roughchild from '../components/roughchild.vue'
export default {
    components:{
        roughchild
    },  
    data(){
        return {
            // email:"sumanth.com",
            // name:"sumanth",
            // phone :"********",


             showPopup:false,
        }
       
    },
}
</script>