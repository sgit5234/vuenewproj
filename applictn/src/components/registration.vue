
<template>
    <v-container class="cont">
        <v-row>
            <v-col >
                <h2 style="text-align:center;color:blue">Registration Form</h2>
                <v-form  v-model="valid">
                    <v-text-field
                    v-model="username"
                     :rules="namerules"
                     label="username"
                     :counter="10"
                     required>
                     </v-text-field>
                    <v-text-field 
                    label="password"
                    :counter="10"
                    required>
                    </v-text-field>
                </v-form>

            </v-col>
        </v-row>
    </v-container>

</template>





<script>
export default {
     components:{
        // login,
        // about
    } ,

    data(){
        return{
             valid: false,
             username: '',
             namerules:[
                    v => !!v || 'Name is required',
                    v => v.length <= 10 || 'Name must be less than 10 characters',
             ]
            
        }
    }
}
</script>

<style>
    
.card{
    padding-top: 100px;
}
.cont{
    padding-left:300px;
    padding-right:300px;
    padding-top:200px;
}
</style>