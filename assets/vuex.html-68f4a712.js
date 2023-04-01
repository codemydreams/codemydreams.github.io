import{_ as a,M as s,p as n,q as l,R as e,t,N as c,a1 as r}from"./framework-5866ffd3.js";const i={},u=e("h2",null,"Vuex",-1),p={href:"https://vuex.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},_=r("<p>一个数据只要放在了Vuex中，当前所有的组件都可以直接访问这个数据。</p><p>Vuex有5个核心属性：</p><ul><li>State：相当于data属性，用于存储数据</li><li>Getters：相当于计算属性，当值发生改变时，自动触发</li><li>Mutations：同步修改state中的数据，通过commit()调用mutations中的方法，同步属性不能执行异步操作</li><li>Actions：异步修改state中的数据，通过dispatch()调用actions中的方法</li><li>Modules</li></ul><p>什么时候用Vuex？</p><p>数据需要多组件共享，并且数据量庞大，此时就适合使用Vuex进行状态管理。</p><p>注意：Vuex会随着页面刷新或关闭，将所有数据恢复至最初始的状态，所以它并不能替代localStorage。</p>",6);function x(d,v){const o=s("ExternalLinkIcon");return n(),l("div",null,[u,e("p",null,[e("a",p,[t("vuex"),c(o)]),t("是一个专为vue.js应用程序开发的一种状态管理模式，它主要采用的是集中化管理所有组件中的状态。说的直白一些，vuex就是vue.js中管理数据状态的一个库，也就是我们可以将所有组件中的公共数据在vuex中集中管理。")]),_])}const m=a(i,[["render",x],["__file","vuex.html.vue"]]);export{m as default};