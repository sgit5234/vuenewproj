<template>
    <!-- <child name="sumanth"  amount = "100000000000"/> -->
    <child  :amount= "amount" />
    <!-- <child amount="10000000"/> -->
</template>

<script>
import child from '../components/child.vue'
export default {
    components:{
        child
    },
    data(){
        return{
            peru:"hanuman",
            amount:"10,00,000,0000"
        }
    }
}
</script>