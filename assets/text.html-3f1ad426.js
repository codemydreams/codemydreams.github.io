import{_ as n,p as a,q as s,a1 as e}from"./framework-5866ffd3.js";const i={},t=e(`<h2>文本属性</h2><h3 id="文本颜色" tabindex="-1"><a class="header-anchor" href="#文本颜色" aria-hidden="true">#</a> 文本颜色</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">color</span><span class="token punctuation">:</span> 预定义的颜色值 | 16进制 | RGB代码<span class="token punctuation">;</span>

预定义的颜色值：red green blue purple pink yellow ...

十六进制：0-9a-f组成，一共16位（开发中常用）
	#000000-#ffffff
	#红绿蓝
	前两个值表示红色 中间两个值表示绿色 后面两个值表示蓝色
	#000000  黑色
	#ffffff  白色
	#abc  =&gt; #aabbcc

RGB：
	<span class="token function">rgb</span><span class="token punctuation">(</span>0~255<span class="token punctuation">,</span>0~255<span class="token punctuation">,</span>0~255<span class="token punctuation">)</span>
	red green blue 三种颜色混合 形成一个新的颜色
	光学 三原色
	黑色 <span class="token function">rgb</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">)</span>
	白色 <span class="token function">rgb</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span>255<span class="token punctuation">,</span>255<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文本对齐" tabindex="-1"><a class="header-anchor" href="#文本对齐" aria-hidden="true">#</a> 文本对齐</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">text-align</span><span class="token punctuation">:</span> left | right | center | justify<span class="token punctuation">;</span>

left 靠左（默认值）
right 靠右
center 居中
justify 两端对齐
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修饰文本" tabindex="-1"><a class="header-anchor" href="#修饰文本" aria-hidden="true">#</a> 修饰文本</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">text-decoration</span><span class="token punctuation">:</span> none | underline | overline | line-through<span class="token punctuation">;</span>

none 没有装饰线 去除下划线<span class="token punctuation">(</span>默认值<span class="token punctuation">)</span>
underline 下划线 链接a自带下划线
overline 上划线                
line-through 删除线                
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文本缩进" tabindex="-1"><a class="header-anchor" href="#文本缩进" aria-hidden="true">#</a> 文本缩进</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">text-indent</span><span class="token punctuation">:</span> num px | num em<span class="token punctuation">;</span>

注意：
	可以使用px单位 也可以使用em单位
	em 是一个相对单位，就是当前元素（font-size<span class="token punctuation">)</span> 1 个文字的大小<span class="token punctuation">,</span> 如果当前元素没有设置大小，则会按照父元素的 1 个文字大小。
	有正负值 正值向右缩进 负值向左缩进 <span class="token punctuation">(</span>正负值通常都是和方向有关<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="行间距" tabindex="-1"><a class="header-anchor" href="#行间距" aria-hidden="true">#</a> 行间距</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">line-height</span><span class="token punctuation">:</span> num px<span class="token punctuation">;</span>

注意：
	行高 文字所在这一行的高度<span class="token punctuation">(</span>用空白撑开<span class="token punctuation">)</span>，可以控制文字行与行之间的距离
	行间距=上间距+文本高度+下间距
	<span class="token property">让单行文本垂直居中可以设置line-height</span><span class="token punctuation">:</span> 文字父元素高度<span class="token punctuation">;</span>
	<span class="token property">网页精准布局时，会设置line-height</span><span class="token punctuation">:</span> 1可以取消上下间距。
	行高小于盒子高度，文字向上
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文字间距" tabindex="-1"><a class="header-anchor" href="#文字间距" aria-hidden="true">#</a> 文字间距</h3><ul><li><p>单词间距 （靠识别空格设置间距）</p><p>word-spacing</p></li><li><p>字母间距（文字间距）</p><p>letter-spacing</p></li></ul><h3 id="垂直对齐方式" tabindex="-1"><a class="header-anchor" href="#垂直对齐方式" aria-hidden="true">#</a> 垂直对齐方式</h3><ul><li><p>基线：浏览器文字类型元素排版中存在用于对齐的基线。</p></li><li><p>垂直对齐</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">vertical-align</span><span class="token punctuation">:</span> baseline | top | middle | bottom<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>属性值</th><th>说明</th></tr></thead><tbody><tr><td>baseline</td><td>默认值，基线对齐（文字底部）</td></tr><tr><td>top</td><td>顶部对齐</td></tr><tr><td>middle</td><td>中部对齐</td></tr><tr><td>bottom</td><td>底部对齐</td></tr></tbody></table><ul><li>浏览器处理行内元素和行内块元素时，默认按照文字的特点去解析，基于基线对齐。</li><li>vertical-align用于处理<strong>行内块</strong>和文字对齐，或者行内块和行内块对齐，或转为块元素。</li><li>多数用于图片和文字对齐。</li></ul></li><li><p>vertical-align解决的问题：</p><ol><li>文本框和表单按钮无法对齐 <ul><li>vertical-align或者浮动（浮动元素顶部对齐）</li></ul></li><li>input和img无法对齐 <ul><li>img设置vertical-align</li></ul></li><li>div中的文本框，文本框无法贴顶问题</li><li>div不设高度由img标签撑开，此时img标签下面会存在额外间隙问题 <ul><li>img设置vertical-align或者转为块元素</li></ul></li><li>使用line-height让img标签垂直居中问题 <ul><li>父元素设置line-height，子元素img设置vertical-align</li></ul></li></ol></li></ul><h3 id="居中方法总结" tabindex="-1"><a class="header-anchor" href="#居中方法总结" aria-hidden="true">#</a> 居中方法总结</h3><h4 id="水平居中" tabindex="-1"><a class="header-anchor" href="#水平居中" aria-hidden="true">#</a> 水平居中</h4><table border="1" style="font-size:12px;"><tr><td rowspan="3">text-aligh: center;</td><td>文本</td><td rowspan="3">如果需要让以上元素水平居中，直接给以上元素的父级元素设置即可</td></tr><tr><td>行内元素，如span、a</td></tr><tr><td>行内块元素，如input、img</td></tr><tr><td>margin:0 auto;</td><td>块级元素</td><td>直接给当前元素设置</td></tr></table><h4 id="垂直居中" tabindex="-1"><a class="header-anchor" href="#垂直居中" aria-hidden="true">#</a> 垂直居中</h4><ul><li>单行文本垂直居中：line-height</li></ul>`,20),l=[t];function d(c,r){return a(),s("div",null,l)}const p=n(i,[["render",d],["__file","text.html.vue"]]);export{p as default};
