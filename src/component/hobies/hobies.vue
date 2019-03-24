<template>
    <div>
        <p>兴趣爱好</p>
    </div>
</template>
<script>
import Event from '../../commonApi/bus.js'
export default {
    created(){
        Event.$emit("changeTitle",'兴趣爱好')
    }
}
</script>
<style lang="">
    
</style>