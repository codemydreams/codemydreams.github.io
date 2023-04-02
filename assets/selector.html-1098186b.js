import{_ as n,p as s,q as t,a1 as a}from"./framework-5866ffd3.js";const e={},d=a(`<h2>选择器</h2><p>目的：减少类名的使用。</p><p>作用：选择器就是根据不同需求把不同的标签选出来。</p><h3 id="基础选择器" tabindex="-1"><a class="header-anchor" href="#基础选择器" aria-hidden="true">#</a> 基础选择器</h3><ul><li><p>标签选择器：通过标签名，找到页面中所有这类标签，设置样式。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">标签</span> <span class="token punctuation">{</span> 
	样式声明 
<span class="token punctuation">}</span>

注意：
	标签选择器选择的是一类标签，而不是单独某一个。
	类名可以由数字、字母、下划线、中划线组成，且不能由数字和中划线开头。
	标签选择器无论嵌套关系有多深，都能找到对应的标签。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>类选择器：通过类名，找到页面中所有带这个类名的标签，设置样式。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.类名</span> <span class="token punctuation">{</span> 
	样式声明 
<span class="token punctuation">}</span>

<span class="token selector">[class~=类名]</span><span class="token punctuation">{</span>
	样式声明	
<span class="token punctuation">}</span>

注意：
	所有标签上都有class属性，class属性的属性值称为类名。
	一个标签可以有多个类名，类名之间以空格隔开。
	不同的标签可以起相同的类名。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>id选择器：通过id属性值，找到页面中带有这个id属性值的标签，设置样式。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#id名</span> <span class="token punctuation">{</span> 
	样式声明 
<span class="token punctuation">}</span>

<span class="token selector">[id=id名]</span><span class="token punctuation">{</span>
	样式声明
<span class="token punctuation">}</span>

注意：
	id属性值在一个页面中是唯一的，不可重复的。
	一个标签上只能有一个id属性值。
	一个id选择器只能选中一个标签。
	id选择器通常配合js使用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通配符选择器：选择页面的所有标签。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span><span class="token punctuation">{</span> 
	样式声明 
<span class="token punctuation">}</span>

通配符选择器不需要调用， 自动就给所有的元素使用样式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><table><thead><tr><th>基础选择器</th><th>作用</th><th>特点</th><th>使用情况</th></tr></thead><tbody><tr><td>标签选择器</td><td>可选所有相同的标签</td><td>不能差异化选择</td><td>较多</td></tr><tr><td>类选择器</td><td>可选1个或多个标签</td><td>可以根据需求选择</td><td>非常多</td></tr><tr><td>id选择器</td><td>一次只能选1个标签</td><td>ID属性只能在每个HTML文档中出现一次</td><td>一般和js搭配</td></tr><tr><td>通配符选择器</td><td>选择所有标签</td><td>选择的太多，有部分不需要</td><td>特殊情况使用</td></tr></tbody></table><p>​</p><h3 id="复合选择器" tabindex="-1"><a class="header-anchor" href="#复合选择器" aria-hidden="true">#</a> 复合选择器</h3><ul><li><p>后代选择器（包含选择器）：根据html标签的嵌套关系，选择父元素后代中满足条件的元素。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">父级 后代</span><span class="token punctuation">{</span>
	<span class="token property">属性</span><span class="token punctuation">:</span> 属性值<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>子选择器：根据html标签的嵌套关系，选择父元素子代中满足条件的元素。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">父级&gt;子级</span> <span class="token punctuation">{</span>
	<span class="token property">属性</span><span class="token punctuation">:</span> 属性值<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>相邻兄弟选择器：相邻兄弟选择器匹配所有作为指定元素的相邻同级的元素。（只选紧随其后的一个）。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">元素1+元素2</span><span class="token punctuation">{</span>
	<span class="token property">属性</span><span class="token punctuation">:</span> 属性值<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通用兄弟选择器：通用兄弟选择器匹配属于指定元素的同级元素的所有元素。（选择身后的所有）。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">元素1~元素2</span><span class="token punctuation">{</span>
	<span class="token property">属性</span><span class="token punctuation">:</span> 属性值<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>组合选择器（并集选择器）：同时选择多个选择器，中间用 <code>,</code> 间隔，设置相同的样式。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">元素1,元素2</span> <span class="token punctuation">{</span>
	<span class="token property">属性</span><span class="token punctuation">:</span> 属性值<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>指定选择器（交集选择器）：选中页面中同时满足多个选择器的标签。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">元素1元素2</span> <span class="token punctuation">{</span>
	<span class="token property">属性</span><span class="token punctuation">:</span> 属性值<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

注意：
	交集选择器中如果有标签选择器，标签选择器必须写在最前面。
	找到页面中既能被元素1选中，又能被元素2选中的标签设置样式。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>链接伪类选择器：常用于选中超链接的不同状态。</p><ul><li><p>:link 未点击（未访问）的链接状态</p></li><li><p>:visited 已点击（已访问）的链接状态</p></li><li><p>:hover 鼠标悬停在元素上的状态</p></li><li><p>:active 鼠标在元素上按下还未弹起的状态</p><p>注意：如果同时使用四个伪类选择器，必须按照以上顺序依次书写 <code>lvha</code></p></li></ul></li></ul><p>​</p><ul><li><p>焦点伪类选择器：用于选中元素获取焦点时状态，常用于表单控件。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">input:focus</span> <span class="token punctuation">{</span>
      	<span class="token property">属性</span><span class="token punctuation">:</span> 属性值<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

注意：
	表单控件获取焦点时默认会显示外部轮廓线
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><table><thead><tr><th>复合选择器</th><th>作用</th><th>特点</th><th>使用情况</th></tr></thead><tbody><tr><td>后代选择器</td><td>用来选择后代元素</td><td>可以是子孙后代</td><td>较多</td></tr><tr><td>子选择器</td><td>选择最近一级元素</td><td>只选亲儿子</td><td>较少</td></tr><tr><td>并集选择器</td><td>选择某些相同样式的元素</td><td>可以用于集体声明</td><td>较多</td></tr><tr><td>链接伪类选择器</td><td>选择不同状态的链接</td><td>跟链接相关</td><td>较多</td></tr><tr><td>:focus选择器</td><td>选择获得光标的表单</td><td>跟表单相关</td><td>较少</td></tr></tbody></table><h3 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器" aria-hidden="true">#</a> 属性选择器</h3><p>属性选择器可以根据元素特定属性来选择元素，这样就可以不用借助于类或者id选择器。</p><table><thead><tr><th>选择符</th><th>简介</th></tr></thead><tbody><tr><td>E[att]</td><td>选择具有att属性的E元素</td></tr><tr><td>E[att=&quot;val&quot;]</td><td>选择具有att属性且属性值等于val的E元素</td></tr><tr><td>E[att^=&quot;val&quot;]</td><td>选择具有att属性且值以val开头的E元素</td></tr><tr><td>E[att$=&quot;val&quot;]</td><td>选择具有att属性且值以val结尾的E元素</td></tr><tr><td>E[att*=&quot;val&quot;]</td><td>选择具有att属性且值中含有val的E元素</td></tr></tbody></table><p>​</p><h3 id="子元素选择器" tabindex="-1"><a class="header-anchor" href="#子元素选择器" aria-hidden="true">#</a> 子元素选择器</h3><ul><li>又称为结构伪类选择器</li><li>作用： <ul><li>结构伪类选择器主要根据元素在HTML中的结构关系查找元素</li></ul></li><li>优势： <ul><li>减少对HTML中类的依赖，有利于保持代码整洁</li></ul></li><li>使用场景： <ul><li>常用于查找父级选择器里面的子元素</li></ul></li></ul><table><thead><tr><th>选择符</th><th>简介</th></tr></thead><tbody><tr><td>E:first-child</td><td>匹配父元素中的第一个子元素，并且是E类型。</td></tr><tr><td>E:last-child</td><td>匹配父元素中最后一个子元素，并且是E类型。</td></tr><tr><td>E:nth-child(n)</td><td>匹配父元素中的第n个子元素，并且是E类型。</td></tr><tr><td>E:nth-last-child(n)</td><td>匹配父元素中的倒数第n个子元素，并且是E类型。</td></tr><tr><td>E:first-of-type</td><td>匹配父元素中的第一个E类型的子元素</td></tr><tr><td>E:last-of-type</td><td>匹配父元素中的最后一个E类型的子元素</td></tr><tr><td>E:nth-of-type(n)</td><td>匹配父元素中的第n个E类型的子元素</td></tr><tr><td>E:nth-last-of-type(n)</td><td>匹配父元素中的倒数第n个E类型的子元素</td></tr></tbody></table><ul><li><p>E:nth-child(n)</p><ul><li>n可以是数字，关键字和公式</li><li>n如果是数字，就是选择第n个子元素，里面数字从1开始</li><li>n可以是关键字：even偶数，odd奇数</li><li>n可以是公式：常见的公式如下（如果n是公式，则从0开始计算，但是第0个元素或者超出了元素的个数会被忽略）</li></ul><table><thead><tr><th>公式</th><th>取值</th></tr></thead><tbody><tr><td>2n、even</td><td>偶数</td></tr><tr><td>2n+1、2n-1、odd</td><td>奇数</td></tr><tr><td>5n</td><td>5 10 15 ……</td></tr><tr><td>n+5</td><td>从第5个开始（包含第5个）到最后</td></tr><tr><td>-n+5</td><td>前5个（包含第5个）</td></tr></tbody></table></li><li><p>E:nth-child 与 E:nth-of-type 的区别</p><ul><li><p>E:nth-child(n) 匹配父元素的第n个子元素E，也就是说，nth-child 对父元素里面所有孩子排序选择（序号是固定的） 先找到第n个孩子，然后看看是否和E匹配</p></li><li><p>E:nth-of-type(n) 匹配同类型中的第n个同级兄弟元素E，也就是说，对父元素里面指定子元素进行排序选择。 先去匹配E ，然后再根据E 找第n个孩子</p></li></ul></li></ul><h3 id="伪元素选择器" tabindex="-1"><a class="header-anchor" href="#伪元素选择器" aria-hidden="true">#</a> 伪元素选择器</h3><ul><li>伪元素：假的元素 假标签 能够实现标签的功能，但是不是真正的标签，通过css样式对结构进行内容的添加</li><li>伪元素选择器可以帮助我们利用CSS创建新标签元素，而不需要HTML标签，从而简化HTML结构。</li></ul><table><thead><tr><th><strong>选择符</strong></th><th><strong>简介</strong></th></tr></thead><tbody><tr><td>::before</td><td>在父元素内容的最前面添加一个伪元素</td></tr><tr><td>::after</td><td>在父元素内容的最后面添加一个伪元素</td></tr></tbody></table><ul><li>注意： <ul><li>伪元素必须设置content属性才能生效，有文字就写在引号中，没有文字就写空引号。</li><li>伪元素相当于行内元素span，能对span设置的样式，对伪元素都好使。</li><li>伪元素在文档树中是不显示的</li><li>伪元素选择器和标签选择器一样，权重为 1</li></ul></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box::after</span><span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),i=[d];function l(c,r){return s(),t("div",null,i)}const u=n(e,[["render",l],["__file","selector.html.vue"]]);export{u as default};
