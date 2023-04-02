import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const i={},d=e(`<h2>字体属性</h2><h3 id="复合写法" tabindex="-1"><a class="header-anchor" href="#复合写法" aria-hidden="true">#</a> 复合写法</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">font</span><span class="token punctuation">:</span> 字体样式 字体粗细 字体大小/行高 字体族科<span class="token punctuation">;</span>

注意：
	字体连写是有顺序的，不能随意换位置，其中字体大小和字体系列必须同时出现。 
	复合属性不推荐使用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字体样式" tabindex="-1"><a class="header-anchor" href="#字体样式" aria-hidden="true">#</a> 字体样式</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">font-style</span><span class="token punctuation">:</span> normal | italic | oblique<span class="token punctuation">;</span>

normal：正常的字体（默认值）
italic：斜体
oblique：倾斜的字体
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字体异体" tabindex="-1"><a class="header-anchor" href="#字体异体" aria-hidden="true">#</a> 字体异体</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">font-variant</span><span class="token punctuation">:</span> normal | small-caps<span class="token punctuation">;</span>

normal：正常的字体
small-caps：小型的大写字母字体
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字体粗细" tabindex="-1"><a class="header-anchor" href="#字体粗细" aria-hidden="true">#</a> 字体粗细</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">font-weight</span><span class="token punctuation">:</span> <span class="token function">normal</span><span class="token punctuation">(</span>400<span class="token punctuation">)</span> | <span class="token function">bold</span><span class="token punctuation">(</span>700<span class="token punctuation">)</span> | 100-900<span class="token punctuation">;</span>

注意：
	normal是默认值
	学会让加粗标签（比如 h 和 strong 等<span class="token punctuation">)</span> 不加粗，或者其他标签加粗
	实际开发时，我们更喜欢用数字表示粗细
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字体大小" tabindex="-1"><a class="header-anchor" href="#字体大小" aria-hidden="true">#</a> 字体大小</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">font-size</span><span class="token punctuation">:</span> num px<span class="token punctuation">;</span>

注意：
	单位px像素
	em等于一个字体的大小 相对单位
	谷歌浏览器默认的一个字体大小是16px 1em=16px
	可以给 body 指定整个页面文字的大小
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字体族科" tabindex="-1"><a class="header-anchor" href="#字体族科" aria-hidden="true">#</a> 字体族科</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">font-family</span><span class="token punctuation">:</span> 字体名称<span class="token punctuation">;</span>

默认是微软雅黑
后面可以写多个字体族科，按顺序执行，有谁就执行谁。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[d];function c(t,r){return s(),a("div",null,l)}const o=n(i,[["render",c],["__file","font.html.vue"]]);export{o as default};
