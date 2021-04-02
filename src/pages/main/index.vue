<template>
  <layout>
    <view class="page-section">
      <div class="page-section-spacing sw-wrap">
        <swiper :indicator-dots="indicatorDots" :indicator-color="indicatorColor" :indicator-active-color="indicatorActiveColor"
          :autoplay="autoplay" :interval="interval" :duration="duration">
          <swiper-item v-for="item in swImgList" :key="item">
              <view class="swiper-item"><img :src="item.url"></view>
          </swiper-item>
        </swiper>
      </div>
      <div class="nav-wrap">
          <div class="nav-item" v-for="item in navList" :key="item" :class="{active: item.isChecked}" @click="handleNavItem(item)">
            <div class="icon"><img :src="item.url"></div>
            <div class="text">{{ item.text }}</div>
          </div>
      </div>
    </view>

    <today-trip v-if="currentItemId === 1"></today-trip>
    <school-line v-if="currentItemId === 2"></school-line>
    <parent v-if="currentItemId === 3"></parent>
    <pick-up v-if="currentItemId === 4"></pick-up>
  </layout>
</template>

<script>
import layout from '@/components/layout'
import todayTrip from '@/components/today-trip'
import schoolLine from '@/components/school-line'
import pickUp from '@/components/pick-up'
import parent from '@/components/parent'
export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      indicatorDots: true,
      indicatorColor: '#fff',
      indicatorActiveColor: '#ccc',
      vertical: false,
      autoplay: false,
      interval: 5000,
      duration: 500,
      swImgList: [
        {
          name: 1,
          url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2595840833,1698919929&fm=15&gp=0.jpg'
        },
        {
          name: 2,
          url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2595840833,1698919929&fm=15&gp=0.jpg'
        }
      ],
      navList: [
        {
          id: 1,
          text: '今日行程',
          isChecked: true,
          url: '/static/icon/icon2.png'
        },
        {
          id: 2,
          text: '同校路线',
          isChecked: false,
          url: '/static/icon/icon4.png'
        },
        {
          id: 3,
          text: '同校家长',
          isChecked: false,
          url: '/static/icon/icon1.png'
        },
        {
          id: 4,
          text: '接送员',
          isChecked: false,
          url: '/static/icon/icon3.png'
        }
      ],
      currentItemId: 1
    }
  },
  components: {
    layout,
    todayTrip,
    schoolLine,
    pickUp,
    parent
  },
  methods: {
    handleNavItem (item) {
      this.currentItemId = item.id
      this.navList.forEach(v => {
        v.isChecked = item.id === v.id
      })
    }
  }
}
</script>

<style scoped lang="scss">
.sw-wrap {
  border-radius: 5px;
  overflow: hidden;
}
.swiper-item {
  height: 200px;
  width: 100%;
}
.swiper-item img {
  display: block;
  text-align: center;
  height: 100%;
  width: 100%;
}
.nav-wrap {
  display: flex;
  margin-top: 10px;
}
.nav-wrap .nav-item{
  flex: 1;
  text-align: center;
}
.nav-item .icon {
  width: 40px;
  height: 40px;
  background-size: contain;
  margin: 0 auto;
  text-align: center;
}
.nav-item .icon img {
  display: block;
  max-width: 100%;
  height: 100%;
}
.nav-item .text {
  font-size: 14px;
  position: relative;
  padding: 4px 0 8px;
  color: #717171;
}
.nav-item.active .text::after{
  content: "";
  display: block;
  clear: both;
  position: absolute;
  width: 30%;
  height: 2px;
  background: #f00;
  left: 50%;
  margin-left: -15%;
  border-radius: 2px;
  bottom: 0;
}
</style>
