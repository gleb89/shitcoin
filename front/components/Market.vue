<template>
    <div>
        <div v-for="market of exchange" :key="market.id">
            <p>
            <a :href="market.trade_url">{{market.name}}</a>
            </p>
            
            
        </div>
    </div>
</template>


<script>
export default {
    props:['exchange']
}
</script>