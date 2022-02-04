<template>
    <producttwo :passengers="passengers" />
    <productthree  :passengers="passengers" />
</template>


<script>
import producttwo from '../components/producttwo.vue'
import productthree from '../components/productthree.vue'
export default {
    components:{
        producttwo,
        productthree
    },

    data(){
        return{
            passengers:[
            {name:'sumanth',age:20},
            {name:'samatha',age:30},
            {name:'daddy',age:120},
            {name:'mummy',age:120}
            ]
        }
    }
    
}
</script>