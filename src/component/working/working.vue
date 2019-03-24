<template>
    <div>
        <p>职业规划</p>
    </div>
</template>
<script>
import Event from '../../commonApi/bus.js'
export default {
    created(){
       Event.$emit("changeTitle","职业规划")
   }
}
</script>
<style lang="">
    
</style>