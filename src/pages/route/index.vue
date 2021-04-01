<template>
  <layout>
    <map 
      id="myMap"
      :latitude="latitude" 
      :longitude="longitude"
      :show-location="true"
      :show-compass="true"
      :show-scale="true">
    </map>
    <div class="page-section page-wrap">
      <div class="form-item">
        <div class="point"><img src="/static/icon/point1.png"></div>
        <div class="text">当前位置</div>
      </div>
      <div class="form-item">
        <div class="point"><img src="/static/icon/point2.png"></div>
        <div class="text" @click="getChooseLocation">{{ location.name }}</div>
      </div>
    </div>
  </layout>
</template>

<script>
import layout from '@/components/layout'
export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      latitude: 23.099994,
      longitude: 113.324520,
      appKey: 'WUOBZ-YB3K3-BBG3E-3VNTE-YFBDK-4CF4V',
      refererName: '接小宝',
      // 地图选点后的数据
      location: {
        name: '请选择学校地址'
      }
    }
  },
  components: {
    layout
  },
  created () {
    this.handleGetLocation()
  },
  methods: {
    // 进入页面获取当前定位位置
    handleGetLocation () {
      wx.getLocation({
        type: 'wgs84',
        isHighAccuracy: true,
        success: resp => {
          console.log(resp)
          this.latitude = resp.latitude
          this.longitude = resp.longitude
        }
      })
    },
    // 获取地图选点
    getChooseLocation () {
      const location = JSON.stringify({
        latitude: this.latitude,
        longitude: this.longitude
      })
      const category = '生活服务,美食,公园,旅游景点,娱乐休闲,酒店宾馆'
      wx.navigateTo({
        url: `plugin://chooseLocation/index?key=${this.appKey}&referer=${this.refererName}&location=${location}&category=${category}&scale=13`
      })
    }
  },
  // 从地图选点插件返回后，在页面的onShow生命周期函数中能够调用插件接口，取得选点结果对象
  onShow () {
    // 获取地图选点后的数据
    const chooseLocation = requirePlugin('chooseLocation')
    const location = chooseLocation.getLocation() // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
    if (location) {
      console.log(location)
      this.latitude = location.latitude
      this.longitude = location.longitude
      this.location = location
    }
  },
  onHide () {
    this.location.name = '深圳北站'
    this.handleGetLocation()
  }
}
</script>

<style scoped>
#myMap {
  height: 100vh;
  width: 100%;
}
.page-wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
.form-item {
  display: flex;
  padding: 10px 0;
  font-size: 14px;
  color: #333;
}
.form-item:first-of-type {
  border-bottom: 1px solid #cccc;
}
.point {
  width: 16px;
  height: 16px;
  margin-right: 10px;
}
.point img {
  display: block;
  width: 100%;
  height: 100%;
}
.form-item .text {
  height: 16px;
  line-height: 16px;
  font-size: 14px;
  width: 100%;
}
</style>
