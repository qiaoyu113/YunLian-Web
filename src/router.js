/**
 * Created by zhong on 2017/10/24.
 *
 * (resolve) =>{require(['../components/test.vue'],resolve)}
 *
 */
import Vue from 'vue'
import store from './vuex'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 定义全局组件
import navbar from './component/common/navBar.vue'
import zmodal from './component/common/modal.vue'
import zbanner from './component/common/banner.vue'
import zfooter from './component/common/footer-pc.vue'
import zhistory from './component/common/goback.vue'
import backhome from './component/common/back-home.vue'
import zlogo from './component/common/logo.vue'
import loadMore from './component/common/load-more.vue'

Vue.component('navbar', navbar)
Vue.component('z-modal', zmodal)
Vue.component('z-banner', zbanner)
Vue.component('z-footer', zfooter)
Vue.component('z-history', zhistory)
Vue.component('z-home', backhome)
Vue.component('z-logo', zlogo)
Vue.component('loadMore', loadMore)


// 定义组件
const short = (resolve) => {require(['./pages/short.vue'],resolve)}
const home = (resolve) => {require(['./pages/home/home.vue'],resolve)}
// 登录注册
const login = (resolve) => {require(['./pages/login/loginhome.vue'],resolve)} //密码登录页面
const phone = (resolve) => {require(['./pages/login/loginPhoneHome.vue'],resolve)} //手机号验证码登录页面
const register = (resolve) => {require(['./pages/login/registerHome.vue'],resolve)} //注册页面
const find = (resolve) => {require(['./pages/login/findHome.vue'],resolve)} //找回密码页
const bind = (resolve) => {require(['./pages/login/bindHome.vue'],resolve)} //绑定手机号
const qrcode = (resolve) => {require(['./pages/login/qrcode.vue'],resolve)} // 二维码登录
const modifyPass = (resolve) => {require(['./pages/login/modifyPass.vue'],resolve)} // 修改密码登
// const loginPhoneNo = (resolve) => {require(['./pages/login/loginPhoneNo.vue'],resolve)} //动态验证码登录页
// const register = (resolve) => {require(['./pages/login/register.vue'],resolve)} //用户注册页
const wxlogin = (resolve) => {require(['./pages/login/wxlogin.vue'],resolve)} //第三方授权微信跳转页
const bindQrcode = (resolve) => {require(['./pages/login/bindQrcode.vue'],resolve)}
const bindwxlogin = (resolve) => {require(['./pages/login/bindwxlogin.vue'],resolve)}
// 404错误页面
const error = (resolve) => {require(['./pages/error.vue'],resolve)}

// 创建路由器实例，配置路由规则
const routers = [
    {path: '/d/:shortId', component: short},
    {name: 'home',path:'/',component: home, meta: {keepAlive: true}},
    // {name: 'search',path:'/search',component: search},
    {name: 'err',path:'/s/404',component: error}, //错误跳到404页面
    
    // 登录注册模块
    {name: 'login', path:'/login',component: login}, // 密码登录页
    {name: 'phone', path:'/phone',component: phone}, // 手机号验证码登录页面
    {name: 'register', path:'/register',component: register}, // 注册页面
    {name: 'find', path:'/find',component: find}, // 找回密码页面
    {name: 'bind', path:'/bind',component: bind}, // 绑定手机号
    {name: 'qrcode', path:'/qrcode',component: qrcode}, // pc
    {name: 'modifyPass',path:'/modifyPass',component: modifyPass}, // 修改密码
    // {name: 'password', path:'passlogin/password',component: login}, // 密码登录页
    // {name: 'find', path:'passwords/phone',component: forgotPwd}, // 密码找回页
    // {name: 'login', path:'login',component: login}, // 密码登陆
    // {name: 'register', path:'register',component: register}, // 注册页面
    {name: 'wxlogin', path:'/wxlogin',component: wxlogin}, // 微信跳转页
    {name: 'bindQrcode', path:'/bindQrcode',component: bindQrcode}, // 绑定微信二维码页面
    {name: 'bindwxlogin', path:'/bindwxlogin',component: bindwxlogin}, // 绑定微信页面
]

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes:routers
})

/*let isClient = typeof window != 'undefined' ? true : false
router.beforeEach((to, from, next) => {

    next()
})
router.afterEach((to, from, next) => {

});*/

export default router