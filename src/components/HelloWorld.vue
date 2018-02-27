<template>
  <div>
    <el-radio v-model="radio" label="1" border>Option A</el-radio>
    <el-radio v-model="radio" label="2" border>Option B</el-radio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
