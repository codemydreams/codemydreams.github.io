import{_ as n,p as s,q as a,a1 as t}from"./framework-5866ffd3.js";const e={},p=t(`<h1 id="小程序" tabindex="-1"><a class="header-anchor" href="#小程序" aria-hidden="true">#</a> 小程序</h1><h2 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍" aria-hidden="true">#</a> 1. 介绍</h2><h3 id="运行机制" tabindex="-1"><a class="header-anchor" href="#运行机制" aria-hidden="true">#</a> 运行机制</h3><h4 id="小程序启动的过程" tabindex="-1"><a class="header-anchor" href="#小程序启动的过程" aria-hidden="true">#</a> 小程序启动的过程</h4><ol><li>把小程序的代码下载到本地</li><li>解析app.json全局配置文件</li><li>执行app.js小程序入口文件，调用App()创建小程序实例</li><li>渲染小程序首页</li><li>小程序启动完成</li></ol><h4 id="小程序渲染的过程" tabindex="-1"><a class="header-anchor" href="#小程序渲染的过程" aria-hidden="true">#</a> 小程序渲染的过程</h4><ol><li>加载解析页面的.json配置文件</li><li>加载页面的.wxml模版和.wxss样式</li><li>执行页面的.js文件，调用Page()创建页面实例</li><li>页面渲染完成</li></ol><h3 id="标签" tabindex="-1"><a class="header-anchor" href="#标签" aria-hidden="true">#</a> 标签</h3><h4 id="常用的视图容器" tabindex="-1"><a class="header-anchor" href="#常用的视图容器" aria-hidden="true">#</a> 常用的视图容器</h4><p><strong>view</strong></p><ul><li><p>普通视图区域</p></li><li><p>类似于HTML中的div，是一个块级元素</p></li><li><p>常用来实现页面的布局效果</p></li></ul><p><strong>scroll-view</strong></p><ul><li>可滚动的视图区域</li><li>常用来实现滚动列表效果</li></ul><p><strong>swiper</strong> 和 <strong>swiper-item</strong></p><ul><li>轮播图容器组件 和 轮播图item组件</li></ul><h4 id="常用基础组件" tabindex="-1"><a class="header-anchor" href="#常用基础组件" aria-hidden="true">#</a> 常用基础组件</h4><p><strong>text</strong></p><ul><li><p>文本组件</p></li><li><p>类似于HTML中的span标签，是一个行内元素</p></li><li><p>通过text组件的 <code>selectable</code> 属性，实现长按选中文本内容的效果</p><blockquote><p>&lt;text selectable&gt;192966603&lt;/text&gt;</p></blockquote></li></ul><p><strong>rich-text</strong></p><ul><li><p>富文本组件</p></li><li><p>支持把HTML字符串渲染为WXML结构</p><blockquote><p>&lt;rich-text nodes=&quot;&lt;h1&gt;小苏同学&lt;/h1&gt;&quot;&gt;&lt;/rich-text&gt;</p></blockquote></li></ul><h4 id="其他常用组件" tabindex="-1"><a class="header-anchor" href="#其他常用组件" aria-hidden="true">#</a> 其他常用组件</h4><p><strong>button</strong></p><ul><li>按钮组件</li><li>功能比HTML中的button按钮丰富</li><li>通过 <code>open-type</code> 属性可以调用微信提供的各种功能（客服、转发、获取用户授权、获取用户信息等）</li></ul><p><strong>image</strong></p><ul><li>图片组件</li><li>image组件默认宽度约为300px，高度约为240px</li></ul><p><strong>navigator</strong></p><ul><li>页面导航组件</li><li>类似于HTML中的a链接</li></ul><h3 id="页面" tabindex="-1"><a class="header-anchor" href="#页面" aria-hidden="true">#</a> 页面</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span> 组件，作用和div一样
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span> 文本标签，作用和span一样
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>block</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>block</span><span class="token punctuation">&gt;</span></span> 包裹性质的容器，不会在页面中做任何渲染，常用于条件渲染
	user-select 用户是否可以选中当前文本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单位" tabindex="-1"><a class="header-anchor" href="#单位" aria-hidden="true">#</a> 单位</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpx 宽度自适应
默认所有宽度都是 750 rpx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wx.getUserProfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-数据绑定" tabindex="-1"><a class="header-anchor" href="#_2-数据绑定" aria-hidden="true">#</a> 2. 数据绑定</h2><p>整个页面的数据来源，都是在js文件中的</p><p>数据绑定的基本原则</p><ul><li><p>在data中定义数据</p></li><li><p>在WXML中使用数据</p></li></ul><h3 id="在wxml页面获取data的数据" tabindex="-1"><a class="header-anchor" href="#在wxml页面获取data的数据" aria-hidden="true">#</a> 在wxml页面获取data的数据</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;view&gt; {{ name }} &lt;/view&gt;

Page({
	data:{
		name:&quot;苏东旭&quot;
	}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在方法中获取data的数据" tabindex="-1"><a class="header-anchor" href="#在方法中获取data的数据" aria-hidden="true">#</a> 在方法中获取data的数据</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;狗蛋&#39;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token comment">//页面加载完成【生命周期函数】</span>
	<span class="token function">onload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//在js的方法中获取data和设置data中的值</span>
		<span class="token comment">//1.获取data的数据</span>
		<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>name
		
		<span class="token comment">//2.设置</span>
		<span class="token comment">//2.1逻辑层数据发生了改变，页面没有重新渲染</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;翠花&#39;</span>
		
		<span class="token comment">//2.2即改变了逻辑层，又改变了视图层</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;翠花&#39;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mustache语法的应用场景" tabindex="-1"><a class="header-anchor" href="#mustache语法的应用场景" aria-hidden="true">#</a> Mustache语法的应用场景</h3><ol><li><p>动态绑定内容</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> {{ info }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>

Page({
	data:{
		info:&quot;init data&quot;
	}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>动态绑定属性</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ imgSrc }}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>widthFix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>image</span><span class="token punctuation">&gt;</span></span>

Page({
	data:{
		imgSrc:&quot;http://www.xiaosutongxue.com/images/logo.png&quot;
	}
})

mode=&quot;widthFix&quot;	宽度不变,高度自适应
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运算（三元运算、算术运算等）</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 三元运算 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>{{ randomNumber &gt;= 5 ? &quot;随机数字大于或等于5&quot;:&quot;随机数字小于5&quot;}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>

Page({
	data:{
		randomNum:Math.random()*10	//生成一个10以内的随机数
	}
})

<span class="token comment">&lt;!-- 算数运算 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>{{randomNum * 100}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>

Page({
	data:{
		randomNum:Math.random().toFixed(2)	//生成一个带两位小数的随机数，例如：0.34
	}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="事件系统" tabindex="-1"><a class="header-anchor" href="#事件系统" aria-hidden="true">#</a> 事件系统</h2><p>https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html</p><p>事件是视图层到逻辑层的通讯方式</p><p>事件可以将用户的行为反馈到逻辑层进行处理</p><p>事件可以绑定在组件上，当达到触发事件，就会执行逻辑层中对应的事件处理函数</p><p>事件对象可以携带额外信息，如 <code>id</code> 、<code>dataset</code> 、<code>touches</code></p><h3 id="常用的事件" tabindex="-1"><a class="header-anchor" href="#常用的事件" aria-hidden="true">#</a> 常用的事件</h3><table><thead><tr><th>类型</th><th>绑定方式</th><th>事件描述</th></tr></thead><tbody><tr><td>tap</td><td>bindtap 或 bind:tap</td><td>手指触摸后马上离开，类似于HTML中的click事件</td></tr><tr><td>input</td><td>bindinput 或 bind:input</td><td>文本框的输入事件</td></tr><tr><td>change</td><td>bindchange 或 bind:change</td><td>状态改变时触发</td></tr></tbody></table><h3 id="事件对象的属性列表" tabindex="-1"><a class="header-anchor" href="#事件对象的属性列表" aria-hidden="true">#</a> 事件对象的属性列表</h3><table><thead><tr><th>属性</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>事件类型</td></tr><tr><td>timeStamp</td><td>Integer</td><td>页面打开到触发事件所经过的毫秒数。</td></tr><tr><td><strong>target</strong></td><td>Object</td><td>触发事件的源组件的一些属性值</td></tr><tr><td><strong>currentTarget</strong></td><td>Object</td><td>事件绑定的当前组件的一些属性值</td></tr><tr><td><strong>detail</strong></td><td>Object</td><td>额外的信息</td></tr><tr><td>touches</td><td>Array</td><td>触摸事件，当前停留在屏幕中的触摸点信息的数组</td></tr><tr><td>changedTouches</td><td>Array</td><td>触摸事件，当前变化的触摸点信息的数组</td></tr></tbody></table><h4 id="target和currenttarget的区别" tabindex="-1"><a class="header-anchor" href="#target和currenttarget的区别" aria-hidden="true">#</a> target和currentTarget的区别</h4><p>target是触发该事件的源头组件，而currentTarget则是当前正在触发事件的那个组件</p><h3 id="事件绑定" tabindex="-1"><a class="header-anchor" href="#事件绑定" aria-hidden="true">#</a> 事件绑定</h3><blockquote><p>bind 允许事件冒泡 catch 不允许事件冒泡</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleTap1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	Click here!
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">catchtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleTap2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	Click here!
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>

注意：函数名不允许加()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件传参" tabindex="-1"><a class="header-anchor" href="#事件传参" aria-hidden="true">#</a> 事件传参</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>//传参：data-* ，*代表参数的名字
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">data-name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>旺财<span class="token punctuation">&quot;</span></span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>click<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点击<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件接参" tabindex="-1"><a class="header-anchor" href="#事件接参" aria-hidden="true">#</a> 事件接参</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//获取事件参数，使用事件对象进行接参</span>
<span class="token function">click</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 获取事件参数，使用事件对象进行接参</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">;</span> <span class="token comment">//事件源上的参数</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.target   获取事件源上的参数
2.currentTraget  获取当前事件组件上的参数
3.detail  组件私有事件传递的参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="双向数据绑定" tabindex="-1"><a class="header-anchor" href="#双向数据绑定" aria-hidden="true">#</a> 双向数据绑定</h2><ul><li><p>简单类型的数据绑定 model:value=&quot;&quot;</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{val}}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">&gt;</span></span>{{val}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>

Page({
  data: {
    val:&#39;init data&#39;
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>引用类型的数据绑定</p><p>通过value配合事件实现</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{val}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">bindinput</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inp<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">&gt;</span></span>{{val}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>

Page({
  data: {
    val:&#39;init data&#39;
  },
  inp(e){
    this.setData({
      val:e.detail.value
    })
  }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>form表单提交</p><ul><li>给表单组件加 <code>name</code></li><li>给button按钮加 <code>form-type</code></li><li>给form组件加 <code>bindsubmit</code></li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">bindsubmit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>login<span class="token punctuation">&quot;</span></span> <span class="token attr-name">bindreset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>reset<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        账号：
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>账号<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        密码：
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pwd<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">password</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>密码<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">form-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>登录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warn<span class="token punctuation">&quot;</span></span> <span class="token attr-name">form-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>reset<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>重置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="数组渲染" tabindex="-1"><a class="header-anchor" href="#数组渲染" aria-hidden="true">#</a> 数组渲染</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{要循环的数据}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*this / id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  *this:如果item是string或者是number类型，并且是唯一的值，那此时用*this
  唯一属性:如果item不是string或者number类型，使用item中的唯一的一个属性
  {{item}}
  {{index}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>

默认：item，index
改变默认值：wx:for-item=&quot;xxx&quot;  wx:for-index=&quot;xxx&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染" aria-hidden="true">#</a> 条件渲染</h2><blockquote><p>wx:if=&quot;&quot;</p><p>wx:elif=&quot;&quot;</p><p>wx:else</p><p>hidden</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code> <span class="token comment">&lt;!-- 单分支 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ age &gt;= 18 }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>成年<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 双分支 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ age &gt;= 18 }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>成年<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>else</span><span class="token punctuation">&gt;</span></span>未成年<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!--多分支 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ age&gt;=0 &amp;&amp;  age&lt;14 }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>未成年<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>elif</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ age&gt;=14 &amp;&amp;  age&lt;18 }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>青少年<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>elif</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ age&gt;=18 &amp;&amp;  age&lt;35 }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>青年<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>elif</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ age&gt;=35 &amp;&amp;  age&lt;=120  }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>中年<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>else</span><span class="token punctuation">&gt;</span></span>年龄不合法<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- hidden本身是隐藏的意思，跟我们以前的v-show逻辑是相反的 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{false}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>这个是显示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{true}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>这个是隐藏<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>wx:if与hidden的对比</p><ul><li><p>运行方式不同</p><ul><li>wx:if以动态创建和移除元素的方式，控制元素的展示与隐藏</li><li>hidden以切换样式的方式（display:none / block），控制元素的显示与隐藏</li></ul></li><li><p>使用建议</p><ul><li>频繁切换时，建议使用hidden</li><li>控制条件复杂时，建议使用wx:if搭配wx:elif、wx:else进行展示与隐藏的切换</li></ul></li></ul><h2 id="_2-1-template模版" tabindex="-1"><a class="header-anchor" href="#_2-1-template模版" aria-hidden="true">#</a> 2.1 template模版</h2><p>模块：针对js文件</p><p>组件：针对 html css js</p><p>模版：针对html页面结构</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//定义模版
&lt;template name=&quot;模版名&quot;&gt;&lt;/template&gt;

//引入模版
&lt;import src=&quot;../../xxxx&quot;&gt;&lt;/import&gt;

//使用模版 以及 传参 
&lt;template is=&quot;模版名&quot; data=&quot;{{ 数据 }}&quot;&gt;&lt;template&gt;

//WXSS样式引入
@import &quot;../xxx.wxss&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-wxs脚本" tabindex="-1"><a class="header-anchor" href="#_2-2-wxs脚本" aria-hidden="true">#</a> 2.2 WXS脚本</h2><p>在小程序的wxml页面，不能直接写一些js默认的一些方法，如果想要在wxml中写一些类似于js的代码，那么需要引入wxs脚本</p><h3 id="wxs第一种写法" tabindex="-1"><a class="header-anchor" href="#wxs第一种写法" aria-hidden="true">#</a> WXS第一种写法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//第一种写法 内嵌</span>
<span class="token operator">&lt;</span>wxs module<span class="token operator">=</span><span class="token string">&quot;脚本名&quot;</span><span class="token operator">&gt;</span>
	<span class="token comment">//写类似于js的代码，不支持ES6语法，支持commonjs语法</span>
	val name<span class="token operator">=</span><span class="token string">&quot;狗蛋&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">function</span> <span class="token function">_toFixed</span><span class="token punctuation">(</span><span class="token parameter">price<span class="token punctuation">,</span>len</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> price<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//开放出去</span>
	module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span>name<span class="token punctuation">,</span>
		<span class="token literal-property property">_toFixed</span><span class="token operator">:</span>_toFixed
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>wxs<span class="token operator">&gt;</span>

使用：<span class="token punctuation">{</span><span class="token punctuation">{</span> 脚本名<span class="token punctuation">.</span>name <span class="token punctuation">}</span><span class="token punctuation">}</span>
使用：<span class="token punctuation">{</span><span class="token punctuation">{</span> 脚本名<span class="token punctuation">.</span><span class="token function">_toFixed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wxs第二种写法-【推荐】" tabindex="-1"><a class="header-anchor" href="#wxs第二种写法-【推荐】" aria-hidden="true">#</a> WXS第二种写法 【推荐】</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//单独的common.wxs文件</span>
<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&quot;狗蛋&quot;</span>

module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span>name
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>//wxml使用
//引入
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wxs</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../common.wxs<span class="token punctuation">&quot;</span></span> <span class="token attr-name">module</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>脚本名<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  //使用
	{{ 脚本名.name }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wxs</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模块的导出与引入" tabindex="-1"><a class="header-anchor" href="#模块的导出与引入" aria-hidden="true">#</a> 模块的导出与引入</h3><table><thead><tr><th></th><th>导出</th><th>导入</th></tr></thead><tbody><tr><td>ES6</td><td>export default</td><td>import</td></tr><tr><td>commonjs</td><td>model.exports</td><td>require</td></tr></tbody></table><h2 id="_2-3-生命周期" tabindex="-1"><a class="header-anchor" href="#_2-3-生命周期" aria-hidden="true">#</a> 2.3 生命周期</h2><h3 id="应用的生命周期" tabindex="-1"><a class="header-anchor" href="#应用的生命周期" aria-hidden="true">#</a> 应用的生命周期</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onLaunch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;小程序初始化&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;进入小程序，切前台&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;退出小程序，切后台&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="监听函数" tabindex="-1"><a class="header-anchor" href="#监听函数" aria-hidden="true">#</a> 监听函数</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onError</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;全局监听错误函数&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onPageNotFound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;404&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="页面生命周期" tabindex="-1"><a class="header-anchor" href="#页面生命周期" aria-hidden="true">#</a> 页面生命周期</h3><p>一般页面有5个生命周期</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;监听页面加载,只能触发一次&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;页面显示&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;页面隐藏&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;监听用户下拉动作&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onReachBottom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;页面上拉触底事件的处理函数&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重定向就是卸载</p><h3 id="组件生命周期" tabindex="-1"><a class="header-anchor" href="#组件生命周期" aria-hidden="true">#</a> 组件生命周期</h3><p>最重要的生命周期：<code>created</code> <code>attached</code> <code>detached</code></p><ul><li><p>组件实例刚刚被创建好时，<code>created</code> 生命周期被触发，此时还不能调用 <code>setData</code></p></li><li><p>组件完全初始化完毕、进入页面节点树后，<code>attached</code> 生命周期被触发</p></li><li><p>组件离开页面节点树后，<code>detached</code> 生命周期被触发。</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Component({
	lifetimes:{
		created(){
			console.log(&#39;组件刚创建好时触发&#39;)
		},
		attached(){
			console.log(&#39;组件进入页面时触发&#39;)
		},
		detached(){
			console.log(&#39;组件离开页面时触发&#39;)
		}
	}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-4-全局变量" tabindex="-1"><a class="header-anchor" href="#_2-4-全局变量" aria-hidden="true">#</a> 2.4 全局变量</h2><p>在app.js中，有一个globalData，可以添加全局数据：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">globalData</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">userInfo</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span><span class="token string">&quot;123456&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在任意页面中就可以通过以下代码来获取</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span>username<span class="token punctuation">,</span>password<span class="token punctuation">}</span> <span class="token operator">=</span> app<span class="token punctuation">.</span>globalData<span class="token punctuation">.</span>userInfo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-5-路由导航" tabindex="-1"><a class="header-anchor" href="#_2-5-路由导航" aria-hidden="true">#</a> 2.5 路由导航</h2><h3 id="声明式导航" tabindex="-1"><a class="header-anchor" href="#声明式导航" aria-hidden="true">#</a> 声明式导航</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>navigator
	target:
	open-type:跳转方式
		navigate：跳转普通页面，保留当前页面，不能跳转tab页面，最多跳10层【页面栈10层】
		redirect：重定向，跳转普通页面，但是关闭当前页面，不能跳转tab页面，
		switchTab：专门跳转tab页面，不能跳转普通页面，关闭其他非tab页面
		reLaunch：跳转所有页面，关闭其他页面【支付页面-添加购物车，支付】
		navigate-back：配合delta属性
		

&lt;navigator open-type=&quot;navigate&quot; url=&quot;../../xxx&quot; &gt;
	&lt;button&gt;跳转&lt;/botton&gt;
&lt;/navigator&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编程式导航" tabindex="-1"><a class="header-anchor" href="#编程式导航" aria-hidden="true">#</a> 编程式导航</h3><p>wxml</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toPage<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>跳转页面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">toPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//1.跳转到普通页面，保留当前页面</span>
    wx<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">//2.跳转普通页面，关闭当前页面</span>
    wx<span class="token punctuation">.</span><span class="token function">redirectTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">//3.跳转tab页面</span>
    wx<span class="token punctuation">.</span><span class="token function">switchTab</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">//4.跳转所有页面</span>
    wx<span class="token punctuation">.</span><span class="token function">reLaunch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    wx<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">delta</span><span class="token operator">:</span><span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由传参接参" tabindex="-1"><a class="header-anchor" href="#路由传参接参" aria-hidden="true">#</a> 路由传参接参</h3><p>传递参数</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigator</span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>navigate<span class="token punctuation">&quot;</span></span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../xxx?id=100&amp;name=lisi<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>跳转到普通页面-navigate<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>navigator</span><span class="token punctuation">&gt;</span></span>

wx.navigateTo({
  url:&#39;../xxx?id=100&amp;name=lisi&#39;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接收参数：目标页面的onload生命周期函数中</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-6-自定义组件" tabindex="-1"><a class="header-anchor" href="#_2-6-自定义组件" aria-hidden="true">#</a> 2.6 自定义组件</h2><h3 id="定义子组件" tabindex="-1"><a class="header-anchor" href="#定义子组件" aria-hidden="true">#</a> 定义子组件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.在项目的根目录下，右键创建一个components目录；
2.再去创建组件目录（每一个目录代表单独的一个组件）
3.右键选择创建component选择，组件创建成功
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调用子组件" tabindex="-1"><a class="header-anchor" href="#调用子组件" aria-hidden="true">#</a> 调用子组件</h3><h4 id="全局注册" tabindex="-1"><a class="header-anchor" href="#全局注册" aria-hidden="true">#</a> 全局注册</h4><ul><li>app.json</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//&quot;自定义组件名&quot;:&quot;/组件路径&quot;</span>
    <span class="token string-property property">&quot;my-comp1&quot;</span><span class="token operator">:</span><span class="token string">&quot;/components/comp1/comp1&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>任意的wxml文件中使用</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-comp1</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-comp1</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="局部注册" tabindex="-1"><a class="header-anchor" href="#局部注册" aria-hidden="true">#</a> 局部注册</h4><ul><li>对应页面的json文件</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//&quot;自定义组件名&quot;:&quot;/组件路径&quot;</span>
    <span class="token string-property property">&quot;my-comp1&quot;</span><span class="token operator">:</span><span class="token string">&quot;/components/comp1/comp1&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对应的wxml文件</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-comp1</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-comp1</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="组件的属性和方法" tabindex="-1"><a class="header-anchor" href="#组件的属性和方法" aria-hidden="true">#</a> 组件的属性和方法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">//组件的属性列表 -- 对外开放属性，类似vue的props</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span><span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//组件的初始数据 -- 当前组件私有的属性</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//组件的方法</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-7-父子组件通信" tabindex="-1"><a class="header-anchor" href="#_2-7-父子组件通信" aria-hidden="true">#</a> 2.7 父子组件通信</h2><h3 id="父传子-属性的传递" tabindex="-1"><a class="header-anchor" href="#父传子-属性的传递" aria-hidden="true">#</a> 父传子 -- 属性的传递</h3><ol><li><p>子组件标签中设置自定义属性接收父组件的数据，</p></li><li><p>然后在子组件的properties中声明该自定义属性，</p></li><li><p>然后在子组件中直接使用该自定义属性就相当于使用父组件的数据</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Component({
	properties:{
		自定义属性:{
			type:String,
			value:&quot;默认值&quot;
		}
	}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子传父-方法的传递" tabindex="-1"><a class="header-anchor" href="#子传父-方法的传递" aria-hidden="true">#</a> 子传父 -- 方法的传递</h3><ol><li>在子组件内部做点击事件，通过 <code>this.triggerEven</code> 来触发这个事件函数</li><li>在父组件中调用子组件的地方传入自定义事件函数</li></ol><h2 id="_3-1-小程序的请求" tabindex="-1"><a class="header-anchor" href="#_3-1-小程序的请求" aria-hidden="true">#</a> 3.1 小程序的请求</h2><h3 id="wx-request" tabindex="-1"><a class="header-anchor" href="#wx-request" aria-hidden="true">#</a> wx.request</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wx.request({
	url:请求路径,
	data:{参数},
	header:{请求头信息},
	timeout:延迟时间,
	method:请求方式【默认get】,
	dataType:返回值类型【默认json】,
	success:(res)=&gt;{
		成功的回调
	},
	fail:(err)=&gt;{
		失败的回调
	}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>小程序的请求：没有跨域问题，但是只有配置在白名单中的域名才能请求</p></blockquote><p>如何配置白名单？</p><ul><li><p>小程序公众平台 ==&gt; 开发管理 ==&gt; 开发设置</p></li><li><p>白名单 只能设置https协议的</p><ul><li>如果小程序上线接口，地址必须是https，否则无法上线</li><li>开发阶段，如果没有https的域名可以进行以下设置：【只适用开发阶段】 <ul><li>详情 ==&gt; 本地设置 ==&gt; 不校验盒饭域名、web-view....</li></ul></li></ul></li></ul><h3 id="封装请求" tabindex="-1"><a class="header-anchor" href="#封装请求" aria-hidden="true">#</a> 封装请求</h3><ul><li>request.js</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let {BASE_URL} = require(&#39;./global&#39;)

function request(url,params={}){

 // 判断token是否存在（是否登录）
 var  token = wx.getStorageSync(&#39;token&#39;) || null;
 wx.showLoading();
 if(token){
     params.header =  params.header || {}
     params.header = {
         &quot;X-Nideshop-Token&quot;:token
     }
 }

  return new Promise(function(resolve,reject){
    wx.request({
        url: BASE_URL+url,
        data:params.data || {},
        header:params.header || {},
        timeout:params.timeout || 6000,
        method:params.method || &quot;GET&quot;,
        success(res){
          wx.hideLoading();
            resolve(res)
        },fail(err){
            reject(err)
        } 
    })
  })
}

module.exports = request;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>global.js</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const BASE_URL = &quot;http://kumanxuan1.f3322.net:8001&quot;
module.exports = {
    BASE_URL
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>api.js</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//封装后端所有接口对应的方法</span>
<span class="token keyword">var</span> request <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./request&#39;</span><span class="token punctuation">)</span>

<span class="token comment">//get请求 无参</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">_getXxxx</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token string">&#39;接口地址&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//get请求 有参</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">_getXxxx</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">params<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token string">&#39;接口地址&#39;</span><span class="token punctuation">,</span>params<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//post请求 无参</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">_postXxxx</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token string">&#39;接口地址&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//post请求 有参</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">_postXxxx</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">params<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token string">&#39;接口地址&#39;</span><span class="token punctuation">,</span>params<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-1-常用基础组件" tabindex="-1"><a class="header-anchor" href="#_5-1-常用基础组件" aria-hidden="true">#</a> 5.1 常用基础组件</h2><h3 id="scrollview" tabindex="-1"><a class="header-anchor" href="#scrollview" aria-hidden="true">#</a> scrollview</h3><h3 id="rich-text" tabindex="-1"><a class="header-anchor" href="#rich-text" aria-hidden="true">#</a> Rich-text</h3><h3 id="picker" tabindex="-1"><a class="header-anchor" href="#picker" aria-hidden="true">#</a> picker</h3><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h3><h2 id="_5-2-分包" tabindex="-1"><a class="header-anchor" href="#_5-2-分包" aria-hidden="true">#</a> 5.2 分包</h2><h2 id="_5-3-计算属性" tabindex="-1"><a class="header-anchor" href="#_5-3-计算属性" aria-hidden="true">#</a> 5.3 计算属性</h2><h2 id="_5-4-获取用户信息" tabindex="-1"><a class="header-anchor" href="#_5-4-获取用户信息" aria-hidden="true">#</a> 5.4 获取用户信息</h2><p>api ==&gt; 开放接口 ==&gt; 用户信息</p><h2 id="_5-5-获取手机号" tabindex="-1"><a class="header-anchor" href="#_5-5-获取手机号" aria-hidden="true">#</a> 5.5 获取手机号</h2><h1 id="云开发" tabindex="-1"><a class="header-anchor" href="#云开发" aria-hidden="true">#</a> 云开发</h1><p><code>云开发必须 appId</code></p><p>工单：不在线的客服</p><h3 id="云数据库" tabindex="-1"><a class="header-anchor" href="#云数据库" aria-hidden="true">#</a> 云数据库</h3><p>CRUD增删改查</p><p>Create创建</p><p>Retrieve查询</p><p>Update修改</p><p>Delete删除</p><h4 id="创建数据的三种方式" tabindex="-1"><a class="header-anchor" href="#创建数据的三种方式" aria-hidden="true">#</a> 创建数据的三种方式</h4><ul><li>手动添加</li><li>导入 json 文件</li><li></li></ul><h3 id="查询数据" tabindex="-1"><a class="header-anchor" href="#查询数据" aria-hidden="true">#</a> 查询数据</h3><h4 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h4><ul><li>app.js</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wx.cloud.init()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>*.js</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//操作前先引入数据库</span>
<span class="token keyword">const</span> db <span class="token operator">=</span> wx<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span><span class="token function">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="插入数据" tabindex="-1"><a class="header-anchor" href="#插入数据" aria-hidden="true">#</a> 插入数据</h4><ul><li>Promise风格</li><li>【客户端添加的数据会多一个 <code>_openId</code> 】</li><li>插入单条数据</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">&#39;todos&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// data 字段表示需新增的 JSON 数据</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">&quot;小苏&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>插入多条数据</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//公用的插入数据的方法</span>
<span class="token function">insertTotal</span><span class="token punctuation">(</span><span class="token parameter">username<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
		db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">&#39;todos&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  	<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    	<span class="token literal-property property">username</span><span class="token operator">:</span>username<span class="token punctuation">,</span>
    	<span class="token literal-property property">age</span><span class="token operator">:</span>age
  	<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">addMoreData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> _this <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token comment">//通过async与await来异步添加数据</span>
  <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">addData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">await</span> _this<span class="token punctuation">.</span><span class="token function">insertTotal</span><span class="token punctuation">(</span><span class="token string">&#39;李白&#39;</span><span class="token punctuation">,</span><span class="token number">38</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> _this<span class="token punctuation">.</span><span class="token function">insertTotal</span><span class="token punctuation">(</span><span class="token string">&#39;李白&#39;</span><span class="token punctuation">,</span><span class="token number">38</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//执行异步函数</span>
  <span class="token function">addData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查询数据-1" tabindex="-1"><a class="header-anchor" href="#查询数据-1" aria-hidden="true">#</a> 查询数据</h4><ul><li>Promise风格</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">searchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">//db是database数据库</span>
  <span class="token comment">//collection集合</span>
  <span class="token comment">//doc是_id检索 里面填写数据的id</span>
  <span class="token comment">//where是条件检索 where({username:&quot;星星&quot;})</span>
  db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">&#39;todos&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doc</span><span class="token punctuation">(</span><span class="token string">&#39;todo-identifiant-aleatoire&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// res.data 包含该记录的数据</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除数据" tabindex="-1"><a class="header-anchor" href="#删除数据" aria-hidden="true">#</a> 删除数据</h4><ul><li>删除单条数据</li><li>客户端只能删除带 <code>openId</code> 的</li><li>可以使用doc和where</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 普通方法
doDel(){
	db.collection(&#39;test&#39;).where({
		username:&#39;李白&#39;
	}).remove({
			success(res){
				console.log(res);
			}
	})
}

// promise方法
doDel(){
  db.collection(&#39;test&#39;).where({
    username:&#39;李白&#39;
  }).remove().then(res=&gt;{
    console.log(res)
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改数据" tabindex="-1"><a class="header-anchor" href="#修改数据" aria-hidden="true">#</a> 修改数据</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token function">doUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     <span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">&#39;苏东旭&#39;</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
       <span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">&quot;小苏同学&quot;</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="上传文件" tabindex="-1"><a class="header-anchor" href="#上传文件" aria-hidden="true">#</a> 上传文件</h3><ul><li>wx.cloud.uploadFile</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">doUpload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">chooseMedia</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// console.log(res);</span>
      <span class="token keyword">const</span> tempFilePaths <span class="token operator">=</span> res<span class="token punctuation">.</span>tempFiles<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>tempFilePath
      wx<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span><span class="token function">uploadFile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">cloudPath</span><span class="token operator">:</span> <span class="token string">&#39;example.png&#39;</span><span class="token punctuation">,</span>	<span class="token comment">//云存储路径</span>
        <span class="token literal-property property">filePath</span><span class="token operator">:</span> tempFilePaths		<span class="token comment">//要上传文件资源的路径</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>fileID<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//文件id</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="云函数" tabindex="-1"><a class="header-anchor" href="#云函数" aria-hidden="true">#</a> 云函数</h3><ul><li><p>主要操作数据库、云存储</p></li><li><p>可以突破权限设置，获取仅创建者可读取的数据</p></li></ul><p>project.config.json</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
	&quot;cloudfunctionRoot&quot;:&quot;云函数的目录名&quot;
}

设置后 原文件夹 变为有云朵☁️的文件夹
右键文件夹，新建node.js云函数
写完的云函数必须右键文件夹 ==&gt; 上传并部署
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>index.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 云函数入口文件</span>
<span class="token keyword">const</span> cloud <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;wx-server-sdk&#39;</span><span class="token punctuation">)</span>

cloud<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 云函数入口函数</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">main</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> wxContext <span class="token operator">=</span> cloud<span class="token punctuation">.</span><span class="token function">getWXContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token comment">//在任何一个云函数中，必须返回一个东西</span>
    <span class="token comment">//在云函数中console.log()是没有意义的</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        event<span class="token punctuation">,</span>
        <span class="token literal-property property">openid</span><span class="token operator">:</span> wxContext<span class="token punctuation">.</span><span class="token constant">OPENID</span><span class="token punctuation">,</span>
        <span class="token literal-property property">appid</span><span class="token operator">:</span> wxContext<span class="token punctuation">.</span><span class="token constant">APPID</span><span class="token punctuation">,</span>
        <span class="token literal-property property">unionid</span><span class="token operator">:</span> wxContext<span class="token punctuation">.</span><span class="token constant">UNIONID</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="云函数查询语句" tabindex="-1"><a class="header-anchor" href="#云函数查询语句" aria-hidden="true">#</a> 云函数查询语句</h4><ul><li>书写云函数</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> cloud <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;wx-server-sdk&#39;</span><span class="token punctuation">)</span>
<span class="token comment">//init要在db之前</span>
cloud<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//客户端获取db要加wx.  云函数端获取则不能加</span>
<span class="token keyword">const</span> db <span class="token operator">=</span> cloud<span class="token punctuation">.</span><span class="token function">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

exports<span class="token punctuation">.</span><span class="token function-variable function">main</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span>context</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>调用云函数</li><li>wx.cloud.callFunction()</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//为按钮添加自定义方法</span>
<span class="token function">cloudSearch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	wx<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span><span class="token function">callFunction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;云函数名（文件夹名）&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="云函数传参" tabindex="-1"><a class="header-anchor" href="#云函数传参" aria-hidden="true">#</a> 云函数传参</h4><ul><li>云函数端返回的任何东西都等于客户端看到的result</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">cloudSearch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	wx<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span><span class="token function">callFunction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;云函数名（文件夹名）&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//通过 data传参</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据请求" tabindex="-1"><a class="header-anchor" href="#数据请求" aria-hidden="true">#</a> 数据请求</h3><ul><li>小程序不用解决跨域</li></ul><h4 id="普通请求" tabindex="-1"><a class="header-anchor" href="#普通请求" aria-hidden="true">#</a> 普通请求</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wx.request({
	url:&quot;接口地址&quot;,
	method:&quot;请求方式&quot;,
	data:{
		请求体
	},
	success(){
		成功的回调
	},
	fail(){
		失败的回调
	}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="封装请求-1" tabindex="-1"><a class="header-anchor" href="#封装请求-1" aria-hidden="true">#</a> 封装请求</h4><blockquote><p>request.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//封装网络请求的代码</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span>params<span class="token punctuation">.</span>url<span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span>params<span class="token punctuation">.</span>data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">header</span><span class="token operator">:</span>params<span class="token punctuation">.</span>header <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span>params<span class="token punctuation">.</span>method <span class="token operator">||</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dataType</span><span class="token operator">:</span><span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">success</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">fail</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        wx<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span>err <span class="token operator">||</span> <span class="token string">&quot;请求错误!&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">requestApi</span><span class="token operator">:</span>request
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>api.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> baseUrl <span class="token operator">=</span> <span class="token string">&quot;请求地址&quot;</span>

<span class="token keyword">var</span> homeApi <span class="token operator">=</span> baseUrl <span class="token operator">+</span> <span class="token string">&#39;/xm/home&#39;</span>
<span class="token keyword">var</span> loginApi <span class="token operator">=</span> baseUrl <span class="token operator">+</span> <span class="token string">&#39;/wx/login&#39;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">homeApi</span><span class="token operator">:</span>homeApi<span class="token punctuation">,</span>
  <span class="token literal-property property">loginApi</span><span class="token operator">:</span>loginApi
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>fetch.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> api <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./api.js&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> request <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./request.js&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">getHome</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">requestApi</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span>api<span class="token punctuation">.</span>homeApi
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">postLogin</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">requestApi</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span>api<span class="token punctuation">.</span>loginApi<span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span>params<span class="token punctuation">,</span>
    <span class="token literal-property property">header</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token string-property property">&#39;content-type&#39;</span><span class="token operator">:</span><span class="token string">&#39;application/x-www-form-urlencoded&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token string">&#39;POST&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">getHome</span><span class="token operator">:</span>getHome<span class="token punctuation">,</span>
  <span class="token literal-property property">postLogin</span><span class="token operator">:</span>postLogin
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const fetch = require(&#39;../../request/fetch&#39;)

fn(){
	fetch.getHome({
		page:1,
		size:10
	}).then(res=&gt;{
		console.log(res)
	})
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="面试" tabindex="-1"><a class="header-anchor" href="#面试" aria-hidden="true">#</a> 面试</h1><h3 id="你怎么解决小程序上传资源只有两兆的问题" tabindex="-1"><a class="header-anchor" href="#你怎么解决小程序上传资源只有两兆的问题" aria-hidden="true">#</a> 你怎么解决小程序上传资源只有两兆的问题</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	关于图片、视频、音频这些媒体资源，我会考虑云存储的方式
	如果是后端返回过来的那就直接拿链接
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,227),i=[p];function l(c,o){return s(),a("div",null,i)}const r=n(e,[["render",l],["__file","weapp.html.vue"]]);export{r as default};
