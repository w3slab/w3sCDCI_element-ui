<template>
  <div id="app">
  <router-view></router-view>
  <el-row>
    <el-steps :active="active" finish-status="success">
      <el-step title="Step 1"></el-step>
      <el-step title="Step 2"></el-step>
      <el-step title="Step 3"></el-step>
    </el-steps>
  </el-row>
  <el-row>
    Choose the project you want to build.
      <el-dropdown>
        <span class="el-dropdown-link">
          Choose<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>InfraData</el-dropdown-item>
          <el-dropdown-item>FIPS</el-dropdown-item>
          <el-dropdown-item>ID Wear</el-dropdown-item>
          <el-dropdown-item disabled>Bonusan</el-dropdown-item>
          <el-dropdown-item divided>BplusC</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-row>
    <el-row>
      Do you want a database backup?
      <radio/>
    </el-row>

    <el-row>
      Do you want to clear the cache?
      <radio/>
    </el-row>

    <el-row>
    When do you want to deploy?
    <datetime/>
    </el-row>

    Build progress
    <el-row>
      <el-progress type="circle" :percentage="44"></el-progress>
    </el-row>
    <el-row>
      <el-button style="margin-top: 12px;" @click="next">Next step</el-button>
    </el-row>
  </div>
</template>

<script>
import radio from "./components/radio";
import datetime from "./components/datetime";

export default {
  name: "App",
  components: {
    radio,
    datetime
  },
  data() {
    return {
      active: 0
    };
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 16px;
}
.el-row {
  margin-top: 30px;
}
</style>
