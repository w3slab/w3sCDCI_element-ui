<template>
  <div id="app">
    <el-row>
    Choose the project you want to build.
      <el-dropdown>
        <span class="el-dropdown-link">
          Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
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

  </div>
</template>

<script>
import radio from "./components/radio";

export default {
  name: "App",
  components: {
    radio
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
