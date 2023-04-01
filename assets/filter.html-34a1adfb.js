import{_ as l,p as e,q as i,a1 as t}from"./framework-5866ffd3.js";const r={},c=t("<h2>过滤器</h2><ul><li><p>过滤器的主要作用就是过滤数据，让数据按照我们规定的格式来做展示</p></li><li><p>过滤器要先定义后使用</p></li><li><p>过滤器中的方法必须要有return，如果没有，页面什么都不会渲染。</p></li><li><p>return返回的数据就是过滤后的数据，经过返回后，就会在页面上渲染过滤后的数据</p></li><li><p>过滤方法的形参用于接收要过滤的数据，过滤器方法在调用时不需要加()</p><ul><li>例如：<code>{{ price | RMBFormat}}</code></li><li>｜前面是数据，后面是过滤器名称</li></ul></li></ul>",2),o=[c];function p(_,n){return e(),i("div",null,o)}const a=l(r,[["render",p],["__file","filter.html.vue"]]);export{a as default};