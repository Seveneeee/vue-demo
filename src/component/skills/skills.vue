<template>
    <div>
        <p>专业技能</p>
    </div>
</template>
<script>
import Event from '../../commonApi/bus.js'
export default {
   created(){
       Event.$emit("changeTitle","专业技能")
   }
}
</script>
<style lang="">
    
</style>