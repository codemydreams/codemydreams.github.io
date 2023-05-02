import{_ as o,M as i,p,q as l,R as a,t as s,N as e,V as c,a1 as n}from"./framework-5866ffd3.js";const d={},r=n(`<h2>语法</h2><h3 id="a-介绍" tabindex="-1"><a class="header-anchor" href="#a-介绍" aria-hidden="true">#</a> a.介绍</h3><p><code>JavaScript</code> 是一种运行在<strong>客户端（浏览器）<strong>的脚本编程语言，不需要编译，运行过程中由JS解释器（JS引擎）逐行来进行解释并执行，实现</strong>人机交互效果</strong>。现在也可以基于Node.js技术进行服务器端编程。</p><br><h3 id="b-组成" tabindex="-1"><a class="header-anchor" href="#b-组成" aria-hidden="true">#</a> b.组成</h3><p><strong><code>ECMAScript</code></strong>：简称ES，是JavaScript的语言基础，用来规范JavaScript的基础语法和功能，具有多个版本。</p><p><strong><code>DOM</code></strong>：文档对象模型，是浏览器提供的一套操作元素的API。</p><p><strong><code>BOM</code></strong>：浏览器对象模型，是浏览器提供的一套操作浏览器功能的API。</p><br><h3 id="b-书写方式" tabindex="-1"><a class="header-anchor" href="#b-书写方式" aria-hidden="true">#</a> b.书写方式</h3><h4 id="内嵌式" tabindex="-1"><a class="header-anchor" href="#内嵌式" aria-hidden="true">#</a> 内嵌式</h4><p>可以在html文档中除了 <code>title</code> 标签外的任意位置使用 <code>script</code> 标签嵌入js代码。</p><p><code>script</code> 标签推荐写在 <code>&lt;/body&gt;</code> 上面。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 弹出警示框</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;小苏同学的js笔记&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="外联式" tabindex="-1"><a class="header-anchor" href="#外联式" aria-hidden="true">#</a> 外联式</h4><p>代码写在一个以 <code>.js</code> 结尾的文件里，通过 <code>script</code> 标签的 <code>src</code> 属性引入这个外部的js文件。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>js文件的路径<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>script</code> 标签最强大的一点是可以<strong>引入外部域的js文件</strong>，它的 <code>src</code> 属性可以是一个完整的URL，这个URL指向的资源可以跟HTML页面不在同一个域中。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.xiaosutongxue.com/web.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：<strong>script标签之间无需写代码，否则会被忽略！</strong></p><h4 id="行内式" tabindex="-1"><a class="header-anchor" href="#行内式" aria-hidden="true">#</a> 行内式</h4><p>写在标签的属性里面的，通常都是在 <code>onXXX</code> 这些事件属性里面。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- onclick 点击的时候触发 --&gt;</span>
<span class="token comment">&lt;!-- 
	由于onclick属性是由双引号包裹，为了避免浏览器解析错误，
	通常采用&quot;外双内单&quot;或者&quot;外单内双&quot;的方式，且双引号/单引号必须成对出现 
--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>总结</strong>：</p><ol><li>在3种书写方式中，开发最常用的是外联式。</li><li>由于js代码执行顺序是自上而下的，所以建议将js代码写 <code>body</code> 标签结束之前（原因：用户体验问题，在网络较慢的情况下，可以优先显示网页的结构及样式）</li><li>外联式的script标签内书写代码不会执行</li></ol></blockquote><br><h3 id="d-注释" tabindex="-1"><a class="header-anchor" href="#d-注释" aria-hidden="true">#</a> d.注释</h3><blockquote><p>JS的注释分为两种：单行注释、多行注释。建议多写注释，养成良好的编码习惯。</p></blockquote><h4 id="单行注释" tabindex="-1"><a class="header-anchor" href="#单行注释" aria-hidden="true">#</a> 单行注释</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// js单行注释（vscode快捷键 &quot;command + /&quot; ）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="多行注释" tabindex="-1"><a class="header-anchor" href="#多行注释" aria-hidden="true">#</a> 多行注释</h4>`,30),u=n(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
	js多行注释（vscode快捷键 &quot;option + shift + a&quot; ）
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="e-严格模式" tabindex="-1"><a class="header-anchor" href="#e-严格模式" aria-hidden="true">#</a> e.严格模式</h3><h3 id="f-结束符" tabindex="-1"><a class="header-anchor" href="#f-结束符" aria-hidden="true">#</a> f.结束符</h3>`,4),v=a("li",null,[s("符号："),a("code",null,";")],-1),h=n(`<br><h3 id="g-常用方法" tabindex="-1"><a class="header-anchor" href="#g-常用方法" aria-hidden="true">#</a> g.常用方法</h3><div class="custom-container tip"><p class="custom-container-title">弹出警示框</p><p>用于在浏览器里面弹出警示框，会阻止后续的代码执行，直到点击 &quot;确定&quot; 后才会向下执行。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;用来测试是否执行到该步&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">控制台输出</p><p>在调试代码的时候最常用的，且不会阻止代码的执行。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;这里是控制台输出的信息&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">网页文档输出</p><p>内容会输出到页面的body标签里面，且内容支持使用html标签，但现在很少用了。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;h1&gt;小苏同学&lt;/h1&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">弹出对话确认框</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">&#39;确认删除么？&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">弹出提示输入框</p><p>在浏览器里面弹出一个输入框，让用户输入信息，仅测试使用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&quot;请输入信息：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>`,7);function g(m,k){const t=i("font");return p(),l("div",null,[r,a("p",null,[s("注意："),a("strong",null,[e(t,{color:"red"},{default:c(()=>[s("多行注释不能嵌套多行注释。")]),_:1})])]),u,a("ul",null,[v,a("li",null,[s("注意："),a("strong",null,[e(t,{color:"red"},{default:c(()=>[s("css中必须写，js中可写可不写（换行符会被识别成结束符）。")]),_:1})])])]),h])}const j=o(d,[["render",g],["__file","grammar.html.vue"]]);export{j as default};