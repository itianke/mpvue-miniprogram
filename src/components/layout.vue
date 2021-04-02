<template>
<div class="layput-content">
    <slot></slot>
</div>
</template>

<script>
export default {
  name: 'layout'
}
</script>

<style lang="scss">
.layput-content {
  height: 100vh;
  width: 100%;
  background-color: #ececec;
  .page-section {
    background: #fff;
    padding: 10px 15px;
  }
} 
</style>
