<template>
<div class="page-section">
    <div class="trip-title">同校家长</div>
    <!-- <div class="trip-card" v-for="item in 1" :key="item">
      <div class="trip-column">
        <div class="school-name">赵日天</div>
        <div class="school-item">
          <div class="road-name">国基路</div>
          <div class="road-gap">距您</div>
          <div class="road-dis">2.3 公里</div>
        </div>
        <div class="school-item">
          <div class="road-name">三全路</div>
          <div class="road-gap">距您</div>
          <div class="road-dis">2.3 公里</div>
        </div>
      </div>
      <div class="trip-column">
        <div class="count">2/5 可加入</div>
        <div class="btn">
          <button type="danger" size="mini">路线详情</button>
        </div>
      </div>
    </div> -->
    <no-data></no-data>
</div>
</template>

<script>
import noData from '@/components/no-data'
export default {
  name: 'parent',
  components: {
    noData
  }
}
</script>

<style scoped lang="scss">
.layput-content {
  height: 100vh;
  width: 100%;
  background-color: #ececec;
}
.page-section {
  background: #fff;
  padding: 10px 15px;
  margin-top: 10px;
  .trip-title {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }
  .trip-card {
    border: 1px solid #ececec;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    color: #333;
    font-size: 14px;
    justify-content: space-between;
    margin-bottom: 10px;
    .school-name {
      font-weight: bold;
      font-size: 16px;
      height: 24px;
      line-height: 24px;
      position: relative;
      padding-left: 16px;
      &:before {
        content: "";
        display: block;
        clear: both;
        position: absolute;
        width: 8px;
        height: 8px;
        background: #f00;
        left: 0;
        top: 50%;
        border-radius: 50%;
        margin-top: -4px;
      }
    }
    .school-item {
      height: 24px;
      line-height: 24px;
      position: relative;
      display: flex;
      padding-left: 10px;
      justify-content: space-between;
      &:before {
        content: "";
        display: block;
        clear: both;
        position: absolute;
        width: 5px;
        height: 5px;
        background: green;
        left: 0;
        top: 50%;
        border-radius: 50%;
        margin-top: -2.5px;
      }
      .road-name {
        width: 100px;
        color: #333;
        overflow: hidden;
      }
      .road-gap {
        width: 36px;
        color: #999;
        font-size: 12px;
      }
      .road-dis {
        color: #999;
        font-size: 12px;
      }
    }
    .trip-column:last-of-type {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .count {
      margin-top: 10px;
      margin-bottom: 5px;
      color: #999;
    }
  }
}
</style>
