<template>
    <div>
        <div v-for="market of exchange" :key="market.id">
            <div>
                <img style="width:20px" :src="market.image" alt=""> 
                <br>
            <a :href="market.trade_url"> {{market.name}}</a>
            </div>
            <p></p>
            
            
        </div>
    </div>
</template>


<script>
export default {
    props:['exchange']
}
</script>