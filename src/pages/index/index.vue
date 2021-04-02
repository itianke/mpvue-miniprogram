<template>
  <div>
    <div class="userinfo">
      <img
        class="userinfo-avatar"
        :src="userInfo.avatarUrl"
        background-size="cover"
      />
      <div class="apply">申请获取以下权限</div>
      <div class="info">获取您的公开信息(昵称，头像，手机号码等)</div>
      <button class="btn" type="primary" size="small" @click="handleAuth">授权登陆</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        avatarUrl:
          'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=122497079,3170063030&fm=26&gp=0.jpg'
      }
    }
  },
  methods: {
    handleAuth () {
      wx.getUserProfile({
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: resp => {
          console.log(resp)
          console.log('---------------')
          wx.setStorage({
            key: 'userInfo',
            data: JSON.stringify(resp.userInfo)
          })
          wx.switchTab({ url: '/pages/main/main' })
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  .userinfo-avatar {
    width: 60px;
    height: 60px;
    margin: 20px;
    border-radius: 50%;
    background-color: #ccc;
  }
  .btn {
    width: 60%;
    margin-top: 20px;
  } 
  .apply {
    color: #333;
    font-size: 18px;
  }
  .info {
    color: #616161;
    margin: 10px;
    font-size: 14px;
  }
}

</style>
