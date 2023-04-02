import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const i={},d=e(`<h2>背景属性</h2><h3 id="综合写法" tabindex="-1"><a class="header-anchor" href="#综合写法" aria-hidden="true">#</a> 综合写法</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span> color image repeat attachment position<span class="token punctuation">;</span>

注意：
	如果需要单独的样式和连写：要么把单独的样式写在连写的下面，要么把单独的样式写在连写的里面。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="背景颜色" tabindex="-1"><a class="header-anchor" href="#背景颜色" aria-hidden="true">#</a> 背景颜色</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-color</span><span class="token punctuation">:</span> transparent | 颜色值<span class="token punctuation">;</span>

背景颜色默认值是 transparent（透明）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="背景图片" tabindex="-1"><a class="header-anchor" href="#背景图片" aria-hidden="true">#</a> 背景图片</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> none | <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span> <span class="token punctuation">)</span></span><span class="token punctuation">;</span>

注意：
	背景图片默认是水平或垂直方向平铺的。
	背景图片仅仅是指给盒子起到装饰效果，类似于背景色，是不能撑开盒子的。
	背景图片后面的地址，千万不要忘记加url，同时里面路径的引号可以省略。 

img标签和背景图片的区别：
	img标签是一个标签，不设置宽高默认会以原尺寸显示
	背景图片需要盒子设置宽高，它只是装饰盒子用的，是不能撑开盒子的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="背景平铺" tabindex="-1"><a class="header-anchor" href="#背景平铺" aria-hidden="true">#</a> 背景平铺</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat | no-repeat | repeat-x | repeat-y<span class="token punctuation">;</span>

repeat：默认值。水平和垂直方向都平铺。
no-repeat：背景图像不平铺。
repeat-x：背景图像水平平铺。
repeat-y：背景图像垂直平铺。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="背景位置" tabindex="-1"><a class="header-anchor" href="#背景位置" aria-hidden="true">#</a> 背景位置</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-position</span><span class="token punctuation">:</span> 水平方向位置 垂直方向位置<span class="token punctuation">;</span>

background-position-x 水平方向位置
background-position-y 垂直方向位置

精确单位px
	第一个值 水平位置 正值向右 负值向左
	第二个值 垂直位置 正值向下 负值向上
方位词
	top center bottom left right

注意：
	参数是方位名词
		如果指定的两个值都是方位名词，则两个值前后顺序无关，比如 left top 和 top left 效果一致
		如果只指定了一个方位名词，另一个值省略，则第二个值默认居中对齐
	参数是精确单位
		如果参数值是精确坐标，那么第一个肯定是 x 坐标，第二个一定是 y 坐标
		如果只指定一个数值，那该数值一定是 x 坐标，另一个默认垂直居中
	参数是混合单位
		如果指定的两个值是精确单位和方位名词混合使用，则第一个值是 x 坐标，第二个值是 y 坐标
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="背景固定" tabindex="-1"><a class="header-anchor" href="#背景固定" aria-hidden="true">#</a> 背景固定</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-attachment</span><span class="token punctuation">:</span> scroll | fixed<span class="token punctuation">;</span>

scroll：背景图像是随对象内容滚动
fixed：背景图像固定
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="背景图片大小" tabindex="-1"><a class="header-anchor" href="#背景图片大小" aria-hidden="true">#</a> 背景图片大小</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-size</span><span class="token punctuation">:</span> 宽度 高度<span class="token punctuation">;</span>

数字+px：简单方便，常用
百分比：相当于当前盒子自身的宽高百分比
可以使用宽度高度可以用autoß
contain：包含，将背景图片等比例缩放，直到一条边到达盒子的边缘停止
cover：覆盖，将背景图片等比例缩放，直到刚好填满整个盒子没有空白
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="背景色透明度" tabindex="-1"><a class="header-anchor" href="#背景色透明度" aria-hidden="true">#</a> 背景色透明度</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token property">注意</span><span class="token punctuation">:</span>
	背景半透明是指盒子背景半透明，盒子里面的内容不受影响
	CSS3 新增属性，是 IE9+ 版本浏览器才支持的，但是现在实际开发，我们不太关注兼容性写法了，可以放心使用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),l=[d];function c(t,r){return s(),a("div",null,l)}const p=n(i,[["render",c],["__file","background.html.vue"]]);export{p as default};
