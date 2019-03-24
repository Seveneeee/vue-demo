<template>
    <div>
        <p>自我介绍</p>
    </div>
</template>
<script>
import Event from '../../commonApi/bus.js'
export default {
    created(){
        Event.$emit("changeTitle","自我介绍")
    }
}
</script>
<style lang="">
    
</style>