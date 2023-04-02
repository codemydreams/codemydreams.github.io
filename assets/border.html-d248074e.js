import{_ as n,p as s,q as e,a1 as a}from"./framework-5866ffd3.js";const i={},d=a(`<h2>边框属性</h2><h3 id="边框" tabindex="-1"><a class="header-anchor" href="#边框" aria-hidden="true">#</a> 边框</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">border</span><span class="token punctuation">:</span> border-width border-style border-color<span class="token punctuation">;</span> 

border-width 边框粗细 
border-style 边框形状  
border-color 边框颜色

border-top 上边框
border-bottom 下边框
border-left 左边框  
border-right 右边框
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>border-style属性值</th><th>描述</th></tr></thead><tbody><tr><td>none</td><td>没有边框（默认值）</td></tr><tr><td>solid</td><td>边框为单实线（最为常用的）</td></tr><tr><td>dashed</td><td>边框为虚线</td></tr><tr><td>dotted</td><td>边框为点状线</td></tr><tr><td>double</td><td>边框为双线</td></tr></tbody></table><ul><li>边框会额外增加盒子的实际大小。因此我们有两种方案解决： <ul><li>测量盒子大小的时候，不量边框。</li><li>如果测量的时候包含了边框，则需要 width | height 减去边框宽度。</li></ul></li></ul><h3 id="边框折叠" tabindex="-1"><a class="header-anchor" href="#边框折叠" aria-hidden="true">#</a> 边框折叠</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span>

它控制相邻单元格的边框，表示相邻边框合并在一起
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="圆角边框" tabindex="-1"><a class="header-anchor" href="#圆角边框" aria-hidden="true">#</a> 圆角边框</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">border-radius</span><span class="token punctuation">:</span> num px<span class="token punctuation">;</span>

1个值：应用于4个角
2个值：第一个值 应用于左上、右下 （对角）
			第二个值 应用于右上、左下
3个值：第一个值 应用于 左上
			第二个值 应用于 右上、左下
			第三个值 应用于 右下
4个值：左上 右上 右下 左下

<span class="token property">border-top-left-radius</span><span class="token punctuation">:</span> num px<span class="token punctuation">;</span>
<span class="token property">border-top-right-radius</span><span class="token punctuation">:</span> num px<span class="token punctuation">;</span>
<span class="token property">border-bottom-right-radius</span><span class="token punctuation">:</span> num px<span class="token punctuation">;</span>
<span class="token property">border-bottom-left-radius</span><span class="token punctuation">:</span> num px<span class="token punctuation">;</span>

圆角属性特殊值
	圆形 <span class="token property">盒子宽高相同，border-radius</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
	椭圆形 <span class="token property">盒子宽高不同，border-radius</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
	胶囊型 <span class="token property">盒子宽高不同，border-radius</span><span class="token punctuation">:</span>宽度或高度的一半<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="盒子阴影" tabindex="-1"><a class="header-anchor" href="#盒子阴影" aria-hidden="true">#</a> 盒子阴影</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">box-shadow</span><span class="token punctuation">:</span> h-shadow v-shadow blur spread color inset<span class="token punctuation">;</span>

h-shadow：必需。水平偏移量。允许负值。负值向左
v-shadow：必需。垂直偏移量。允许负值。负值向上
	水平垂直偏移量设置为0px，就相当于在正上方向下照射，四周都会有阴影
blur：可选。模糊度，外延值
spread：可选。阴影扩大。
color：可选。阴影颜色。
inset：可选。将外部阴影（outset）改为内部阴影。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文字阴影" tabindex="-1"><a class="header-anchor" href="#文字阴影" aria-hidden="true">#</a> 文字阴影</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">text-shadow</span><span class="token punctuation">:</span> h-shadow v-shadow blur color<span class="token punctuation">;</span>

h-shadow	必需。水平偏移量。允许负值。
v-shadow	必需。垂直偏移量。允许负值。
blur	可选。模糊度。
color	可选。阴影颜色。

注意：
	阴影可以叠加设置，每组阴影取值之间以逗号隔开。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="透明度属性" tabindex="-1"><a class="header-anchor" href="#透明度属性" aria-hidden="true">#</a> 透明度属性</h3><p>opacity</p><ul><li><code>0</code> ～ <code>1</code> 0完全透明 1不透明</li><li>特点 <ul><li>给盒子设置透明度，盒子及里面的所有内容都会带有透明度。</li></ul></li></ul>`,16),t=[d];function l(r,c){return s(),e("div",null,t)}const u=n(i,[["render",l],["__file","border.html.vue"]]);export{u as default};
