import{_ as n,p as s,q as a,a1 as t}from"./framework-5866ffd3.js";const e={},p=t(`<h2>变换</h2><h3 id="平面转换" tabindex="-1"><a class="header-anchor" href="#平面转换" aria-hidden="true">#</a> 平面转换</h3><p>改变盒子在平面内的形态（位移、旋转、缩放）</p><p>2D转换</p><p>注意：注意层叠性</p><ul><li><p>位移</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>水平移动距离<span class="token punctuation">,</span>垂直移动距离<span class="token punctuation">)</span><span class="token punctuation">;</span>

取值：
	像素单位数值
	百分比（参照物为盒子自身尺寸）

注意：
	X轴正向为右，Y轴正向为下
	配合transition过渡属性使用
	移动后，保留原位置
	正常情况下，百分比是参照父元素的大小，但是在位移属性中设置百分比是参照自身大小。

技巧：
	<span class="token function">translate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>如果只给出一个值，表示X轴方向移动
	单独设置某个方向的移动距离：<span class="token function">translateX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 或<span class="token function">translateY</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>扩展:</p><ul><li><p>实现translate快速实现绝对定位的元素居中效果</p><ul><li><p>方法一：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token property">margin-left</span><span class="token punctuation">:</span> -100px<span class="token punctuation">;</span>
<span class="token property">margin-top</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>方法二：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>		
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul></li></ul></li><li><p>旋转</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>角度<span class="token punctuation">)</span><span class="token punctuation">;</span>

取值：
	正值：顺时针旋转
	负值：逆时针旋转

左手法则判断旋转方向：左手握住旋转轴，大拇指指向正值方向，其余四指的弯曲方向为旋转正值方向，反之为旋转负值方向。

注意：
	角度单位是deg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>扩展：</p><ul><li><p>旋转中心：使用transform-origin属性改变转换原点，默认原点是盒子中心点。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">transform-origin</span><span class="token punctuation">:</span> 原点水平位置 原点垂直位置<span class="token punctuation">;</span>

由横纵坐标两个值确定
	0 0 左上角

对谁设置就写在谁本身

取值：
	方位词（top、bottom、left、right、center）
	像素单位数值
	百分比（参照盒子自身尺寸计算）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>旋转坐标轴（表示方向）</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token function">rotateX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 沿着横轴
<span class="token function">rotateY</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 沿着纵轴
<span class="token function">rotateZ</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 沿着Z轴（默认）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>旋转轴（沿着哪个边旋转）</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">transform-origin</span><span class="token punctuation">:</span> top<span class="token punctuation">;</span>
<span class="token property">transform-origin</span><span class="token punctuation">:</span> bottom<span class="token punctuation">;</span>
<span class="token property">transform-origin</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token property">transform-origin</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>

注意：旋转轴和旋转中心和过渡属性一样，都是写在变换元素本身
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>多重转换</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

注意：
	先旋转再位移，旋转时坐标轴跟着旋转。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul></li><li><p>缩放</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>X轴缩放倍数<span class="token punctuation">,</span>Y轴缩放倍数<span class="token punctuation">)</span><span class="token punctuation">;</span>

注意：
	一般情况下，只为scale设置一个值，表示X轴和Y轴等比例缩放
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>缩放倍数<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="渐变" tabindex="-1"><a class="header-anchor" href="#渐变" aria-hidden="true">#</a> 渐变</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> linear-gradient <span class="token punctuation">(</span>
	颜色1<span class="token punctuation">,</span>
	颜色2	
<span class="token punctuation">)</span><span class="token punctuation">;</span>

实际应用：linear-gradient <span class="token punctuation">(</span>transparent<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> .6<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

使用background-image属性实现渐变背景效果
	渐变是多个颜色逐渐变化的视觉效果
	一般用于设置盒子的背景
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="空间转换" tabindex="-1"><a class="header-anchor" href="#空间转换" aria-hidden="true">#</a> 空间转换</h3><p>空间转换也叫3D转换</p><p>使用transform属性实现元素在空间内的位移、旋转、缩放等效果。</p><ul><li><p>位移</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>值<span class="token punctuation">)</span><span class="token punctuation">;</span>  //右正左负
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>值<span class="token punctuation">)</span><span class="token punctuation">;</span>  //下正上负
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>值<span class="token punctuation">)</span><span class="token punctuation">;</span>  //前正后负

取值（正负均可）：
	像素单位数值
	百分比
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>透视</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">perspective</span><span class="token punctuation">:</span> 值<span class="token punctuation">;</span>

取值：
	像素单位数值，数值一般在800-1200。

注意：
	属性（添加给变换元素的父级）
	透视距离也称为视距，所谓的视距就是人的眼睛到屏幕的距离。
	使用perspective属性实现透视效果，近大远小。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>旋转</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate3d</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>z<span class="token punctuation">,</span>角度度数<span class="token punctuation">)</span>

<span class="token property">注意</span><span class="token punctuation">:</span>
	用于设置自定义旋转轴的位置及旋转的角度
	x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>z取值为0-1之间的数字

<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateZ</span><span class="token punctuation">(</span>角度<span class="token punctuation">)</span><span class="token punctuation">;</span>  //沿中心点转，正顺负逆
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateX</span><span class="token punctuation">(</span>角度<span class="token punctuation">)</span><span class="token punctuation">;</span>  //沿x轴转，正顺负逆
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>角度<span class="token punctuation">)</span><span class="token punctuation">;</span>  //沿y轴转。正逆负顺

注意：
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateZ</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token property">围绕中心点旋转，效果和transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>一样。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>3D立体呈现</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">transform-style</span><span class="token punctuation">:</span> flat | preserve-3d<span class="token punctuation">;</span>

flat （默认值）子元素不开启3D立体空间
preserve-3d 子元素开启3d立体空间

控制子元素是否开启三维立体环境
代码写给父级，但是影响的是子盒子

实现：
	搭配透视使用
	
	使子集元素处于真正的3d空间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>缩放</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>使用scale实现空间缩放效果
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale3d</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>倍数<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>倍数<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleZ</span><span class="token punctuation">(</span>倍数<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,12),i=[p];function c(l,o){return s(),a("div",null,i)}const d=n(e,[["render",c],["__file","transform.html.vue"]]);export{d as default};
