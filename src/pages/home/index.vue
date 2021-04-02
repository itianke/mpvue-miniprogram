<template>
<layout>
  <div class="page-section top-header" v-if="userInfo">
    <div class="avatar"><img :src="userInfo.avatarUrl" /></div>
    <div class="user-name">{{ userInfo.nickName }}</div>
    <div class="arrow"><img src="/static/icon/arrow.png"></div>
  </div>
  <div class="page-section main-section">
    <div class="form-item">
      <div class="point"><img src="/static/icon/user_history.png"></div>
      <div class="text">我的行程</div>
      <div class="arrow"><img src="/static/icon/arrow.png"></div>
    </div>
    <div class="form-item">
      <div class="point"><img src="/static/icon/user_order.png"></div>
      <div class="text">我的订单</div>
      <div class="arrow"><img src="/static/icon/arrow.png"></div>
    </div>
    <div class="form-item">
      <div class="point"><img src="/static/icon/user_wallect.png"></div>
      <div class="text">我的钱包</div>
      <div class="arrow"><img src="/static/icon/arrow.png"></div>
    </div>
  </div>

  <div class="page-section main-section">
    <div class="form-item">
      <div class="point"><img src="/static/icon/user_ask.png"></div>
      <div class="text">联系客服</div>
      <div class="arrow"><img src="/static/icon/arrow.png"></div>
    </div>
    <div class="form-item">
      <div class="point"><img src="/static/icon/user_setting.png"></div>
      <div class="text">设置</div>
      <div class="arrow"><img src="/static/icon/arrow.png"></div>
    </div>
    <div class="form-item">
      <div class="point"><img src="/static/icon/user_question.png"></div>
      <div class="text">常见问题</div>
      <div class="arrow"><img src="/static/icon/arrow.png"></div>
    </div>
  </div>
</layout>
</template>

<script>
// Use Vuex
import store from './store'
import layout from '@/components/layout'

export default {
  components: {
    layout
  },
  data () {
    return {
      latitude: 23.099994,
      longitude: 113.324520,
      markers: [{
        id: 1,
        latitude: 23.099994,
        longitude: 113.324520,
        name: '腾讯'
      }],
      userInfo: {
        avatarUrl: '',
        nickName: '未登录'
      },
      appKey: 'WUOBZ-YB3K3-BBG3E-3VNTE-YFBDK-4CF4V',
      refererName: '接小宝',
      location: null // 地图选点后的数据
    }
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      wx.getStorage({
        key: 'userInfo',
        success: resp => {
          this.userInfo = resp ? JSON.parse(resp.data) : {}
        }
      })
    },

    // 初始化路线规划页面
    getPositionService () {
      let endPoint = JSON.stringify({
        name: '深圳北站',
        latitude: 22.60939,
        longitude: 114.029381
      })
      wx.navigateTo({
        url: `plugin://routePlan/index?key=${this.appKey}&referer=${this.refererName}&endPoint=${endPoint}`
      })
    },

    // 获取地铁图
    getSubwayPositionService () {
      wx.navigateTo({
        url: `plugin://subway/index?key=${this.appKey}&referer=${this.refererName}`
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
      this.latitude = location.latitude
      this.longitude = location.longitude
      this.location = location
    }
  }
}
</script>

<style scoped lang="scss">
.top-header {
  position: relative;
  height: 30px;
  .avatar {
    width: 30px;
    height: 30px;
    margin-right: 5px;
    float: left;
    img {
      display: block;
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 50%;
    }
  }
  .arrow {
    height: 30px;
    width: 30px;
    float: right;
    position: relative;
    img {
      display: block;
      width: 16px;
      height: 16px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -8px 0 0 -8px;
    }
  }
  .user-name {
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    font-weight: bold;
    float: left;
  }
}
.form-item {
  height: 16px;
  padding: 15px 0;
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid #ececec;
  .text {
    width: 200px;
    height: 16px;
    line-height: 16px;
    font-size: 14px;
    float: left;
  }
  .point {
    width: 16px;
    height: 16px;
    margin-right: 10px;
    float: left;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  &:last-of-type {
    border-bottom: none;
  }
}
.main-section {
  margin-top: 10px;
  padding: 0 15px!important;
  .arrow {
    height: 16px;
    width: 16px;
    float: right;
    img {
      display: block;
      width: 100%;
      height: 100%;
      transform: scale(0.8);
    }
  }
}
</style>
