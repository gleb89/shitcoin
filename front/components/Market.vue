<template>
    <div>
        <p v-for="market of exchange" :key="market.id">
            {{market.name}}
        </p>
    </div>
</template>


<script>
export default {
    props:['exchange']
}
</script>