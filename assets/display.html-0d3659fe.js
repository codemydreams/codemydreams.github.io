import{_ as i,p as e,q as d,a1 as l}from"./framework-5866ffd3.js";const a={},n=l(`<h2>元素显示模式</h2><h3 id="元素显示模式的转换" tabindex="-1"><a class="header-anchor" href="#元素显示模式的转换" aria-hidden="true">#</a> 元素显示模式的转换</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">display</span><span class="token punctuation">:</span> block | inline | inline-block<span class="token punctuation">;</span>

block 块级元素：独占一行，可设宽高。
inline 行内元素：可在同行显示，宽高无效。
inline-block 行内块元素：可在同行显示，宽高有效。行内块元素对齐是指内容对齐。

目的：
	改变元素的默认显示特点，让元素符合布局要求。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常见块元素" tabindex="-1"><a class="header-anchor" href="#常见块元素" aria-hidden="true">#</a> 常见块元素</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>h系列、div、p、ul、ol、li、dl、dt、dd、form、header、nav、footer等

特点：
	独占一行，可设宽高，宽度默认是父元素宽度，高度默认由内容撑开。
	块级元素是一个容器及盒子，里面可以嵌套文本、块级元素、行内元素或者行内块元素等等。

注意：
	p标签主要用于存放文字，因此里面不能放div、p、h等块级元素。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常见的行内元素-内联元素" tabindex="-1"><a class="header-anchor" href="#常见的行内元素-内联元素" aria-hidden="true">#</a> 常见的行内元素（内联元素）</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>a、span、b、u、i、s、strong、ins、em、del、code等

特点：
	一行可显多个，宽高由内容撑开，不可设置宽高。
	行内元素只能容纳文本或其他行内元素。

注意：
	a标签内可以嵌套除a标签外的任意元素。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常见的行内块元素" tabindex="-1"><a class="header-anchor" href="#常见的行内块元素" aria-hidden="true">#</a> 常见的行内块元素</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>img、input、textarea、button、select、td等

特点：
	一行可显多个，彼此间有空隙。宽高可设，宽度默认由内容撑开。
	浏览器解析行内元素和行内块元素，如果标签换行书写会产生一个空格的距离。

注意：
	img标签有行内块元素特点，但是chrome调试工具显示结果为行内元素。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>元素模式</th><th>元素排放</th><th>设置样式</th><th>默认宽度</th><th>包含</th></tr></thead><tbody><tr><td>块级元素</td><td>一行只能放一个</td><td>可设宽高</td><td>容器的100%</td><td>容器里可以包含任何标签</td></tr><tr><td>行内元素</td><td>一行可以放多个</td><td>不可设宽高</td><td>本身内容的宽度</td><td>容纳文本或其他行内元素</td></tr><tr><td>行内块元素</td><td>一行放多个</td><td>可设宽高</td><td>本身内容的宽度</td><td></td></tr></tbody></table><h3 id="元素的显示与隐藏" tabindex="-1"><a class="header-anchor" href="#元素的显示与隐藏" aria-hidden="true">#</a> 元素的显示与隐藏</h3><h4 id="display-显示-重点" tabindex="-1"><a class="header-anchor" href="#display-显示-重点" aria-hidden="true">#</a> display 显示（重点）</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">display</span><span class="token punctuation">:</span> none 隐藏对象
<span class="token property">display</span><span class="token punctuation">:</span> block 除了转换为块级元素之外，同时还有显示元素的意思。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>display 设置或检索对象是否及如何显示。</li><li>特点： <ul><li>display 隐藏元素后，<strong>不再占有原来的位置</strong>。</li></ul></li></ul><h4 id="visibility-可见性-了解" tabindex="-1"><a class="header-anchor" href="#visibility-可见性-了解" aria-hidden="true">#</a> visibility 可见性 （了解）</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>visibility：visible <span class="token punctuation">;</span> 元素可视
visibility：hidden<span class="token punctuation">;</span> 元素隐藏
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>visibility 属性用于指定一个元素应可见还是隐藏。</p></li><li><p>特点：</p><ul><li>visibility 隐藏元素后，<strong>继续占有原来的位置</strong>。</li></ul></li><li><p>display: none和visibility: hidden的区别</p><ul><li>如果隐藏元素想要原来位置，就用 visibility：hidden;</li><li>如果隐藏元素不想要原来位置，就用 display：none;</li></ul></li></ul><h4 id="overflow-溢出、超出部分-重点" tabindex="-1"><a class="header-anchor" href="#overflow-溢出、超出部分-重点" aria-hidden="true">#</a> overflow 溢出、超出部分（重点）</h4><ul><li><p>overflow 属性指定了如果内容溢出一个元素的框（超过其指定高度及宽度） 时，会发生什么。</p><table><thead><tr><th>属性值</th><th>描述</th></tr></thead><tbody><tr><td>visible</td><td>默认值，溢出部分可见。</td></tr><tr><td>hidden</td><td>溢出部分隐藏。</td></tr><tr><td>scroll</td><td>无论是否溢出，都显示滚动条。</td></tr><tr><td>auto</td><td>根据是否溢出，自动显示或隐藏滚动条。</td></tr></tbody></table></li><li><p>一般情况下，我们都不想让溢出的内容显示出来，因为溢出的部分会影响布局。</p></li><li><p>但是如果有定位的盒子，请慎用overflow:hidden 因为它会隐藏多余的部分。</p><ul><li>overflow-x属性用于指定元素水平方向上的内容溢出时的处理方式</li><li>overflow-y属性用于指定元素垂直方向上的内容溢出时的处理方式。 <ul><li>当overflow-x,overflow-y中任意一个属性值的定义为非 visible时，另一个属性会自动将默认值visible计算为auto。</li></ul></li></ul></li></ul><h4 id="限制文字同行显示超出部分用-代替" tabindex="-1"><a class="header-anchor" href="#限制文字同行显示超出部分用-代替" aria-hidden="true">#</a> 限制文字同行显示超出部分用...代替</h4><ol><li><p>强制文字同行显示</p><h4 id="white-space" tabindex="-1"><a class="header-anchor" href="#white-space" aria-hidden="true">#</a> white-space</h4><ul><li>normal：默认处理方式。会将序列的空格合并为一个，内部是否换行由换行规则决定。</li><li>pre：原封不动的保留你输入时的状态，空格、换行都会保留，并且当文字超出边界时不换行。等同 pre 元素效果</li><li>nowrap：与normal值一致，不同的是会强制所有文本在同一行内显示。</li><li>pre-wrap：与pre值一致，不同的是文字超出边界时将自动换行。</li><li>pre-line：与normal值一致，但是会保留文本输入时的换行。</li></ul></li><li><p>超出部分隐藏</p><p>overflow: hidden;</p></li><li><p>超出部分用省略号...代替</p><h4 id="text-overflow" tabindex="-1"><a class="header-anchor" href="#text-overflow" aria-hidden="true">#</a> text-overflow</h4><ul><li>clip：当内联内容溢出块容器时，将溢出部分裁切掉。</li><li>ellipsis：当内联内容溢出块容器时，将溢出部分替换为（...）。</li><li>当块容器 &lt;&#39; overflow &#39;&gt; 为非默认时，定义内联内容溢出其块容器是否截断或者添加(...)及自定义字符 要使得 &lt;&#39; text-overflow &#39;&gt; 属性生效，块容器必须显式定义 <code>overflow</code> 为非默认值，同时显式或者隐式的定义 <code>width</code> 为非auto值， <code>white-space</code> 为nowrap值。</li></ul></li></ol>`,21),s=[n];function t(r,c){return e(),d("div",null,s)}const v=i(a,[["render",t],["__file","display.html.vue"]]);export{v as default};
