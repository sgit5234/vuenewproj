<template>
    <h2>Producthree component</h2>
    <ul>
        <li v-for="customer in passengers"   :key="customer">
            <span class="name">{{customer.name}}</span>
            <span class="age">{{customer.age}}</span>
        </li>
    </ul>
</template>
<script>
export default {
    props:['passengers'],
}
</script>
