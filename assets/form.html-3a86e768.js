import{_ as a,p as n,q as s,a1 as t}from"./framework-5866ffd3.js";const e={},p=t(`<h2>表单</h2><p>使用表单目的是为了收集用户信息。</p><p>在 HTML 中，一个完整的表单通常由表单域、表单控件（也称为表单元素）和 提示信息3个部分构成。</p><h3 id="表单域" tabindex="-1"><a class="header-anchor" href="#表单域" aria-hidden="true">#</a> 表单域</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url地址<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>提交方式<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>表单域名称<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	各种表单元素控件
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>

action 指定接收并处理表单数据的服务器的URL地址

method 表单数据的提交方式
	get：地址栏显示表单内容，不安全
	post：地址栏不显示表单内容，安全

name 用于指定表单的名称，以区分同一页面中的多个表单域。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="input输入表单元素" tabindex="-1"><a class="header-anchor" href="#input输入表单元素" aria-hidden="true">#</a> input输入表单元素</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>属性值<span class="token punctuation">&#39;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>名字<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>默认值<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>占位符，起提示作用<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>type属性值</th><th>说明</th></tr></thead><tbody><tr><td>text</td><td>文本框，用于输入单行文本</td></tr><tr><td>password</td><td>密码框，用于输入密码</td></tr><tr><td>radio</td><td>单选框，用于多选一</td></tr><tr><td>checkbox</td><td>多选框，用于多选多</td></tr><tr><td>file</td><td>文件选择，用于上传文件</td></tr><tr><td>submit</td><td>提交按钮，用于提交</td></tr><tr><td>reset</td><td>重置按钮，用于重置</td></tr><tr><td>button</td><td>普通按钮，默认无功能，配合js添加功能</td></tr><tr><td>image</td><td>图片按钮，具有提交功能</td></tr><tr><td>hidden</td><td>定义隐藏的输入字段（页面不显示，但可以后台传值）</td></tr></tbody></table><p>H5新增：number、date、color、range、month、week、time、datetime、datetime-local、email、search、tel、url</p><p><strong>value属性和name属性</strong></p><p>​ value属性：用户输入的内容，提交之后会发给后端服务器</p><p>​ name属性：当前控件的含义，提交之后可以告诉后端发送过去的数据的什么含义</p><p>​ 后端接收到数据的格式是：name的属性值 = value的属性值</p><p><strong>注意：</strong></p><p>​ radio单选框只有设置name属性才会有分组功能，有相同name属性值的单选框为一组，一组中只能同时有一个被选中。</p><h3 id="button标签" tabindex="-1"><a class="header-anchor" href="#button标签" aria-hidden="true">#</a> button标签</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>标签名</th><th>type属性值</th><th>说明</th></tr></thead><tbody><tr><td>button</td><td>submit</td><td>提交按钮。点击之后提交数据会给后端服务器。</td></tr><tr><td>button</td><td>reset</td><td>重置按钮。点击之后恢复表单默认值。</td></tr><tr><td>button</td><td>button</td><td>普通按钮。默认无功能，之后配合添加功能。</td></tr></tbody></table><p><strong>注意：</strong> chrome浏览器中button默认是提交按钮。</p><h3 id="select下拉表单元素" tabindex="-1"><a class="header-anchor" href="#select下拉表单元素" aria-hidden="true">#</a> select下拉表单元素</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optgroup</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>分组标题<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">selected</span><span class="token punctuation">&gt;</span></span>选项1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">&gt;</span></span>选项2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">&gt;</span></span>选项3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optgroup</span><span class="token punctuation">&gt;</span></span>
	...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>

select：下拉菜单的整体
optgroup：分组 html5新标签 
option：下拉菜单的每一项。
selected：默认选中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="预定义下拉菜单" tabindex="-1"><a class="header-anchor" href="#预定义下拉菜单" aria-hidden="true">#</a> 预定义下拉菜单</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>browsers<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>datalist</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>browsers<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>预定义选项1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>预定义选项2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>预定义选项3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>预定义选项4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>预定义选项5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>datalist</span><span class="token punctuation">&gt;</span></span>

注意：
	option在这里是单标签
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="textarea文本域表单元素" tabindex="-1"><a class="header-anchor" href="#textarea文本域表单元素" aria-hidden="true">#</a> textarea文本域表单元素</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">cols</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>列数<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>行数<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>文本内容（默认值）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="label标签" tabindex="-1"><a class="header-anchor" href="#label标签" aria-hidden="true">#</a> label标签</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>gender<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>gender<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>男<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>

目的：扩大点选区域

核心：label 标签的 for 属性应当与相关元素的 id 属性相同。
label 标签为 input 元素定义标注（标签），用于绑定一个表单元素，当点击 label 标签内的文本时，浏览器就会自动将焦点（光标）转到或者选择对应的表单元素上,用来增加用户体验。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="readonly和disabled的区别" tabindex="-1"><a class="header-anchor" href="#readonly和disabled的区别" aria-hidden="true">#</a> readonly和disabled的区别</h3><ul><li><p>readonly 只读，只对可以输入的表单有效，不影响提交</p></li><li><p>disabled 禁用，使input元素无效，表单元素的值无法被提交</p></li></ul>`,29),l=[p];function o(c,u){return n(),s("div",null,l)}const d=a(e,[["render",o],["__file","form.html.vue"]]);export{d as default};
