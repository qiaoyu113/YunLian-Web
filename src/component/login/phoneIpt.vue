<template>
  <div class="item">
    <input type="number" class="form-ipt namePwd" placeholder="手机号" v-model="phoneNo" @keyup="iptLength"  @input="iptLength">
    <i class="iconfont icon-Shape hide" @click="reset"></i>
  </div>
</template>
<script type="text/ecmascript-6">
  import {appService} from '../../service/appService'
  import {validate} from '../../assets/js/validate'
  export default {
    props: [],
    data () {
      return {
        phoneNo: ''
      }
    },
    components: {},
    mounted () {},
    methods: {
      iptLength (event) { // 动态监测帐号文本框字符长度
        let that = this,obj = event.currentTarget;
        appService.iptLength(obj);
        that.$store.state.loginStore.phoneNo = that.phoneNo
      },
      reset (event) { // 清空帐号文本框
        let obj = event.currentTarget;
        let parent = obj.parentNode;
        let firstChild = parent.firstChild;
        firstChild.value = '';
        appService.iptLength(firstChild)
      }
    }
  }
</script>
<style></style>