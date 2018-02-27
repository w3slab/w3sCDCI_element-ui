<template>
  <div>
    <el-radio v-model="radio" label="1" v-on:change="foo" border>Yes</el-radio>
    <el-radio v-model="radio" label="2" v-on:change="foo" border>No</el-radio>

    {{ product }}

  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      product: "hoi"
    };
  },
  methods: {
    foo: function() {
      this.product = "doei";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
