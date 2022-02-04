<template>
    <h3>Child Component</h3>
    <v-btn @click="$emit('close')">close popup</v-btn>
</template>
<script>
export default {
    // name:"roughchild"
    emits:['close']
}
</script>