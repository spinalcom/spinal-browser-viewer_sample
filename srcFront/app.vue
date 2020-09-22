<!--
Copyright 2020 SpinalCom - www.spinalcom.com

This file is part of SpinalCore.

Please read all of the following terms and conditions
of the Free Software license Agreement ("Agreement")
carefully.

This Agreement is a legally binding contract between
the Licensee (as defined below) and SpinalCom that
sets forth the terms and conditions that govern your
use of the Program. By installing and/or using the
Program, you agree to abide by all the terms and
conditions stated or referenced herein.

If you do not agree to abide by these terms and
conditions, do not demonstrate your acceptance and do
not install or use the Program.
You should have received a copy of the license along
with this file. If not, see
<http://resources.spinalcom.com/licenses.pdf>.
-->

<template>
  <el-container v-loading="loading"
                class="body-container">
    <div ref="spinal-viewer"
         class="body-main-container">
    </div>
  </el-container>
</template>

<script lang="ts">
import Vue from "vue";
import BackEnd from './services/Backend';
export default Vue.extend({
  components: {
  },
  data() {
    return {
      loading: true
    };
  },
  async mounted() {
    const backend = BackEnd.getInstance();
    await backend.viewer.start(this.$refs['spinal-viewer']);
    this.loading = false;
  },
  methods: {}
});
</script>

<style scoped>
.body-container {
  height: 100%;
  width: 100%;
  display: flex;
}
.body-main-container {
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
}

</style>
