import{_ as n,p as s,q as a,a1 as t}from"./framework-5866ffd3.js";const e={},i=t(`<h2>动画</h2><p>使用animation添加动画效果，实现多个状态间的变化过程，动画过程可控（重复播放、最终动画、是否暂停）</p><p>动画的本质是快速切换大量图片时在人脑中形成的具有连续性的画面</p><p>构成动画的最小单元：帧或动画帧</p><ul><li><p>定义动画：</p><ul><li><p>两种状态间的变化：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> 动画名称</span> <span class="token punctuation">{</span>
	<span class="token selector">from</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token selector">to</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>多个状态之间的变化：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> 动画名称</span> <span class="token punctuation">{</span>
	<span class="token selector">0%</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token selector">10%</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token selector">15%</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token selector">100%</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

注意：百分比指的是动画总时长的占比
0%～100%称为动画序列
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>使用动画：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">animation</span><span class="token punctuation">:</span> 动画名称 动画花费时长<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>使用动画相关属性控制动画执行过程</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">animation</span><span class="token punctuation">:</span> 动画名称 动画时长 速度曲线 延迟时间 重复次数 动画方向 执行完毕时状态；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>属性</th><th>作用</th><th>取值</th></tr></thead><tbody><tr><td><strong>animation-name</strong></td><td>动画名称</td><td></td></tr><tr><td><strong>animation-duraton</strong></td><td>动画时长</td><td></td></tr><tr><td>animation-timing-function</td><td>设置动画的过渡类型</td><td>linear线性过渡<br>ease 由慢到快再到慢【默认】<br>ease-in由慢到快<br>ease-out由快到慢<br>ease-in-out由慢到快(匀速)再到慢<br>steps(数字) 逐帧动画<br></td></tr><tr><td>animation-delay</td><td>设置动画延迟的时间</td><td>默认是0</td></tr><tr><td>animation-iteration-count</td><td>设置动画的循环次数</td><td>infinite 无限循环，默认值为1</td></tr><tr><td>animation-direction</td><td>动画在循环中是否反向运动</td><td>normal正常方向<br>reverse反方向运行<br>alternate 先正常运行再反向运行，并持续交替<br>alternate-reverse先反向运行再正向运行，并持续交替运行</td></tr><tr><td>animation-fill-mode</td><td>规定动画执行完毕时状态</td><td>none默认值<br>forwards 结束状态 <br>backwards 开始状态<br>both结束或开始的状态</td></tr><tr><td>animation-play-state</td><td>暂停动画，规定动画是否正在运行或暂停</td><td>paused 暂停，通常配合:hover使用，默认是running</td></tr></tbody></table><ul><li>注意： <ul><li>动画名称和动画时长必须赋值</li><li>取值不分先后顺序</li><li>如果有2个时间值，第一个时间表示动画时长，第二个时间表示延迟时间</li></ul></li><li>逐帧动画配合精灵图使用，其他都是补间动画</li></ul></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> move</span> <span class="token punctuation">{</span>
	<span class="token selector">0%</span> <span class="token punctuation">{</span>
		<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">100%</span> <span class="token punctuation">{</span>
		<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>1000px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">div</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
	<span class="token property">animation</span><span class="token punctuation">:</span> move 5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

&lt;div&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>多组动画</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">animation</span><span class="token punctuation">:</span> 动画1<span class="token punctuation">,</span>动画2<span class="token punctuation">,</span>动画N<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul>`,5),l=[i];function p(c,o){return s(),a("div",null,l)}const u=n(e,[["render",p],["__file","animation.html.vue"]]);export{u as default};
