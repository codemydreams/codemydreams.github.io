import{_ as n,p as s,q as a,a1 as t}from"./framework-5866ffd3.js";const p={},e=t(`<h1 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js" aria-hidden="true">#</a> Node.js</h1><p>Node.js是一个javascript的运行环境，不是一个框架或者一个库，是一个软件。</p><h2 id="_1-全局对象" tabindex="-1"><a class="header-anchor" href="#_1-全局对象" aria-hidden="true">#</a> 1. 全局对象</h2><p>node下的全局对象global</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//console.log(global) ==&gt; node引擎下的全局对象</span>

<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>global<span class="token punctuation">.</span>a<span class="token punctuation">)</span>

<span class="token comment">//解释文件（js文件）的模式下，a不会被挂载到全局对象上。</span>
<span class="token comment">//交互模式（黑窗口的命令行）下，定义的变量会被挂载到global上。</span>


global<span class="token punctuation">.</span>b<span class="token operator">=</span><span class="token number">20</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>  <span class="token comment">//挂载在global上的变量可以直接访问</span>


console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>global <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false  解释文件模式下，this不指向global，而是指向本模块（该js文件）；但是在交互模式下，this指向global。</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-模块的使用" tabindex="-1"><a class="header-anchor" href="#_2-模块的使用" aria-hidden="true">#</a> 2. 模块的使用</h2><h3 id="使用模块的好处-了解" tabindex="-1"><a class="header-anchor" href="#使用模块的好处-了解" aria-hidden="true">#</a> 使用模块的好处（了解）</h3><ul><li>最大的好处就是大大提高了代码的可维护性。其次，编写代码不必从零开始。当一个模块编写完毕，就可以被其他地方引用。</li><li>使用模块可以避免函数名和变量名冲突。相同名字的函数和变量完全可以分别存在不同的模块中，因此，我们自己编写模块时，不必考虑名字会与其他模块冲突。</li></ul><h3 id="模块规范的定义-了解" tabindex="-1"><a class="header-anchor" href="#模块规范的定义-了解" aria-hidden="true">#</a> 模块规范的定义（了解）</h3><ul><li>一个js文件就是一个模块，模块的作用域时私有的，内部定义的变量或者函数，只在当前的文件（模块）可以使用。</li><li>如果别人使用我们模块里面的的东西，那么有两点要做：（以commonJS的Modules规范：Node.js为例） <ul><li>自己编写的模块，由于模块作用域是私有的，默认情况下，外部是没有办法使用的。可以导出exports或者modules.exports。导出的时候以对象的方式导出。</li><li>别人要使用，则需要先引入该模块，使用require引入，并设置一个变量来接收导入的对象。</li></ul></li></ul><p>对书写格式和交互规则的详细描述，就是模块定义规范。</p><ul><li>AMD规范：Require.js 【模块化规范的鼻祖，旧规范，已经退出历史舞台了】</li><li>CMD规范：Sea.js 【模块化规范的鼻祖，旧模范，已经退出历史舞台了】</li><li><strong>CommonJS的Modules规范：Nodejs</strong>【现在正在使用的】</li><li><strong>ES6模块化规范 import ... from ...</strong>【现在正在使用的】</li></ul><h3 id="模块化使用" tabindex="-1"><a class="header-anchor" href="#模块化使用" aria-hidden="true">#</a> 模块化使用</h3><h4 id="commonjs的使用" tabindex="-1"><a class="header-anchor" href="#commonjs的使用" aria-hidden="true">#</a> commonJS的使用</h4><p>CommonJS的Modules规范，也是Nodejs自带的规范，就是规范了导出该怎么写，导入该怎么写</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//CommonJS模块规范</span>
<span class="token keyword">let</span> a<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我是模块中的函数fn&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token operator">=</span><span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">//CommonJS导出的第一种格式</span>
exports<span class="token punctuation">.</span>a<span class="token operator">=</span>a
exports<span class="token punctuation">.</span>fn<span class="token operator">=</span>fn
exports<span class="token punctuation">.</span>Animal<span class="token operator">=</span>Animal
<span class="token comment">//CommonJS导出的第二种格式</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  a<span class="token punctuation">,</span>
  fn<span class="token punctuation">,</span>
  Animal
<span class="token punctuation">}</span>

<span class="token comment">//引入模块</span>
<span class="token keyword">const</span> <span class="token function">xxx</span><span class="token punctuation">(</span>跟模块文件名一致<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./modules/xxx.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//使用</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xxx<span class="token punctuation">.</span>a<span class="token punctuation">)</span>  	<span class="token comment">//10</span>
xxx<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	<span class="token comment">//我是模块中的函数fn</span>
<span class="token keyword">let</span> ani <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">xxx<span class="token punctuation">.</span>Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>an1<span class="token punctuation">.</span>age<span class="token punctuation">)</span>




<span class="token comment">/*
	注意：
		1.require() 是commonJS引入模块的一个方法
		2.引入模块之后，被一个常量接收，常量名一般跟模块名一致（不是必须，但大家都这么做）
		3.当导入的是js文件时，后缀名可以不写
		4.如果文件名是index.js，则整个文件名都可以不写

*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模块中的this指向" tabindex="-1"><a class="header-anchor" href="#模块中的this指向" aria-hidden="true">#</a> 模块中的this指向</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//模块中的this指向本模块</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>exports<span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">//{}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>exports<span class="token punctuation">)</span>		<span class="token comment">//{}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>exports<span class="token operator">===</span>module<span class="token punctuation">.</span>exports<span class="token punctuation">)</span>		<span class="token comment">//true</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>exports<span class="token operator">===</span><span class="token keyword">this</span><span class="token punctuation">)</span>		<span class="token comment">//true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>		<span class="token comment">//{}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>global<span class="token operator">===</span><span class="token keyword">this</span><span class="token punctuation">)</span>		<span class="token comment">//false</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-node常用内置模块" tabindex="-1"><a class="header-anchor" href="#_3-node常用内置模块" aria-hidden="true">#</a> 3. node常用内置模块</h2><p>一般项目中模块分为3种：</p><ul><li>node内置模块</li><li>自己书写的模块</li><li>第三方模块（使用一个专门的工具npm进行统一管理）</li></ul><p>常见的内置模块</p><ul><li>fs ：操作文件</li><li>http ：网络操作</li><li>path ：路径操作</li><li>querystring ：查询参数解析</li><li>url ：url解析</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> qs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;querystring&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nodejs内置模块的文档网址：http://nodejs.cn/api/</p><h2 id="_4-path内置模块" tabindex="-1"><a class="header-anchor" href="#_4-path内置模块" aria-hidden="true">#</a> 4. path内置模块</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//引入path模块</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">//跟path无关，但使用path时会用到</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span>	<span class="token comment">//可以获取到该js文件所在的路径</span>

<span class="token comment">//通过拼接的方式：获取当前文件的确完整路径</span>
<span class="token keyword">let</span> filepath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;文件名&#39;</span><span class="token punctuation">)</span>
	<span class="token comment">//第一个参数：获取当前文件所在位置</span>
	<span class="token comment">//当前文件的文件名</span>


<span class="token comment">//获取同级其他目录下的文件路径</span>
<span class="token keyword">let</span> filepath2 <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;文件夹名&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;文件名&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-fs文件模块" tabindex="-1"><a class="header-anchor" href="#_5-fs文件模块" aria-hidden="true">#</a> 5. fs文件模块</h2><h3 id="同步读取" tabindex="-1"><a class="header-anchor" href="#同步读取" aria-hidden="true">#</a> 同步读取</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//同步读取</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//获取被读取文件的路径</span>
<span class="token keyword">let</span> filepath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;demo02.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> ret <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>filepath<span class="token punctuation">,</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//&lt;Buffer e8 8b 8f e4 b8 9c e6 97 ad&gt;  是node引擎存储文件数据的一种格式，以十六进制的方式存储</span>

<span class="token comment">//通过toString()转成字符串就是我们能看懂的信息了</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//苏东旭</span>


<span class="token comment">//同步sync：任务按顺序执行，执行完一个任务后再去执行另外一个任务</span>
<span class="token comment">//异步async：有回调函数的几乎都是异步。如ajax请求、事件、定时器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异步读取" tabindex="-1"><a class="header-anchor" href="#异步读取" aria-hidden="true">#</a> 异步读取</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//异步读取</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//获取被读取文件的路径</span>
<span class="token keyword">let</span> filepath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;demo02.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>filepath<span class="token punctuation">,</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token comment">//err 错误</span>
  <span class="token comment">//data 读取到的数据</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异步写入" tabindex="-1"><a class="header-anchor" href="#异步写入" aria-hidden="true">#</a> 异步写入</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//会覆盖原来的内容，追加appendFile</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> filepath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;demo02.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>filepath<span class="token punctuation">,</span><span class="token string">&#39;hello world!&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">,</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;写完了！&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="服务器搭建" tabindex="-1"><a class="header-anchor" href="#服务器搭建" aria-hidden="true">#</a> 服务器搭建</h2><p>使用 http 模块 搭建服务器</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//1.引入http模块</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//2.使用http模块搭建一个http服务器</span>
<span class="token keyword">let</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">//req:请求报文，所有和请求有关的都在req中</span>
    <span class="token comment">//res:响应报文，所有和响应有关的都在res中</span>
    
    <span class="token comment">//获取请求方式</span>
    <span class="token keyword">let</span> method <span class="token operator">=</span> req<span class="token punctuation">.</span>method<span class="token punctuation">;</span>
    <span class="token comment">//获取请求路径（端口号后面的）</span>
    <span class="token keyword">let</span> reqUrl <span class="token operator">=</span> req<span class="token punctuation">.</span>url；
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this is server&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//告诉客户端，服务端的响应结束了</span>
  	<span class="token comment">//设置响应体</span>
    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;h1&gt;this is server title &lt;/h1&gt;&quot;</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//3.设置监听端口</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8090</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//简写</span>
<span class="token keyword">let</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">)</span>        
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="url模块" tabindex="-1"><a class="header-anchor" href="#url模块" aria-hidden="true">#</a> url模块</h2><p>解析路径中的参数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//引入url模块</span>
<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//url模块的parse()方法可以解析请求路径中的参数【写在服务器的箭头函数中】</span>
<span class="token keyword">let</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> param <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&#39;请求路径&#39;</span><span class="token punctuation">,</span>布尔类型<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> 变量 <span class="token operator">=</span> param<span class="token punctuation">.</span>query<span class="token punctuation">.</span>属性名<span class="token punctuation">;</span>                          
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/*
  参数
    请求路径：req.url
    布尔类型:true    解析后的结果中query就是对象格式
            false   解析后的结果中query就是字符串格式
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件系统模块" tabindex="-1"><a class="header-anchor" href="#文件系统模块" aria-hidden="true">#</a> 文件系统模块</h2><p>加载静态资源</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//引入fs模块</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span>url <span class="token operator">==</span> <span class="token string">&quot;/路径&quot;</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&quot;请求方式&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//fs模块的readFile()方法可以异步读取文件【写在服务器的箭头函数中】</span>
    fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&#39;要加载的静态资源名&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token comment">//err:错误优先机制，回调函数的第一个参数为错误信息</span>
        <span class="token comment">//data:已经加载的静态资源，如果data获得的是文件内容的二进制数据，若想获得原字符串内容要加toString()方法</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;404&#39;</span><span class="token punctuation">)</span>   
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
            <span class="token comment">//res.write(data.toString())</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> u <span class="token operator">=</span> <span class="token string">&#39;.&#39;</span><span class="token operator">+</span>url<span class="token punctuation">;</span>
    fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>u<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用addListener监听表单中的数据</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span>url <span class="token operator">==</span> <span class="token string">&quot;/路径&quot;</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> 变量 <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token comment">//监听表单数据</span>
  req<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">,</span><span class="token parameter">chunk</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">//chunk存储的就是每一次监听到的数据</span>
 
    <span class="token comment">//我们需要把每一次监听到的内容存储起来</span>
    变量<span class="token operator">+=</span>chunk<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">//返回监听结果</span>
  req<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">&quot;end&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">//处理我们监听到的数据 ,得到的就是查询字符串</span>
    <span class="token comment">//xxx=xxx&amp;xxx=xxx</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用解析查询字符串模块 ==&gt; 就是把查询字符串转换成对象格式</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//引入querystring模块</span>
<span class="token keyword">const</span> qs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;querystring&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> param <span class="token operator">=</span> qs<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>要解析的字符串<span class="token punctuation">)</span>

<span class="token comment">//username=admin&amp;pass=123123  =&gt;  {usernme:admin,pass:123123}  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="formidable模块" tabindex="-1"><a class="header-anchor" href="#formidable模块" aria-hidden="true">#</a> formidable模块</h2><p>接收表单数据</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//该模块不是nodejs内置模块，需要手动下载</span>
<span class="token keyword">const</span> form <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;formidable&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//判断表单提交</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>url <span class="token operator">==</span> <span class="token string">&quot;/路径&quot;</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//1.实例化</span>
    <span class="token keyword">let</span> 变量 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">form<span class="token punctuation">.</span>IncomingForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//2.设置文件上传路径（将本地文件上传到服务器的哪个文件夹）</span>
    变量<span class="token punctuation">.</span>uploadDir<span class="token operator">=</span><span class="token string">&#39;./xxxx&#39;</span><span class="token punctuation">;</span>
    <span class="token comment">//3.设置是否保留文件的扩展名，默认是false</span>
    变量<span class="token punctuation">.</span>keepExtensions <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token comment">//4.解析</span>
    变量<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span>fields<span class="token punctuation">,</span>files<span class="token punctuation">)</span><span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token comment">// err 错误信息</span>
        <span class="token comment">// fields 普通字段信息（接收表单中的信息）</span>
        <span class="token comment">// files 上传文件的详细信息</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fields<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//如果是上传文件，需要在html的form标签中添加属性：enctype=&#39;multipart/form&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h2><h3 id="数据库的使用" tabindex="-1"><a class="header-anchor" href="#数据库的使用" aria-hidden="true">#</a> 数据库的使用</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//引入mysql模块</span>
<span class="token keyword">const</span> mysql <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mysql&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//配置数据库</span>
<span class="token keyword">let</span> connection <span class="token operator">=</span> mysql<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span><span class="token string">&#39;rootroot&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">database</span><span class="token operator">:</span><span class="token string">&#39;数据库名&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//连接数据库</span>
connection<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> url <span class="token operator">=</span> req<span class="token punctuation">.</span>url<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>url <span class="token operator">==</span> <span class="token string">&#39;/路径&#39;</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> sql <span class="token operator">=</span> <span class="token string">&#39;sql语句&#39;</span><span class="token punctuation">;</span>
        connection<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span>results</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            <span class="token comment">//query(参数1,参数2)</span>
            <span class="token comment">//参数1:sql语句</span>
            <span class="token comment">//参数2:回调函数 ==&gt; error错误信息，results返回结果</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span><span class="token punctuation">;</span>
                res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>            
            <span class="token punctuation">}</span>        
        <span class="token punctuation">}</span><span class="token punctuation">)</span>    
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8090</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据库预解析" tabindex="-1"><a class="header-anchor" href="#数据库预解析" aria-hidden="true">#</a> 数据库预解析</h3><p>防止sql注入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//引入mysql模块</span>
<span class="token keyword">const</span> mysql <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mysql&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//配置数据库</span>
<span class="token keyword">let</span> connection <span class="token operator">=</span> mysql<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span><span class="token string">&#39;rootroot&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">database</span><span class="token operator">:</span><span class="token string">&#39;数据库名&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//连接数据库</span>
connection<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> url <span class="token operator">=</span> req<span class="token punctuation">.</span>url<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>url <span class="token operator">==</span> <span class="token string">&#39;/路径&#39;</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//准备sql</span>
        <span class="token keyword">let</span> sql <span class="token operator">=</span> <span class="token string">&#39;select * from sql where id = ?&#39;</span><span class="token punctuation">;</span>
        <span class="token comment">//绑定值【必须是数组!!!】</span>
        <span class="token keyword">let</span> val <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//返回预处理</span>
        <span class="token keyword">let</span> newSql <span class="token operator">=</span> mysql<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        connection<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>newSql<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span>results</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">////affectedRows: 1, 受影响行数</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span><span class="token punctuation">;</span>
                res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>            
            <span class="token punctuation">}</span>        
        <span class="token punctuation">}</span><span class="token punctuation">)</span>    
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8090</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="express框架" tabindex="-1"><a class="header-anchor" href="#express框架" aria-hidden="true">#</a> Express框架</h2><p>是Node.js官方推荐的唯一一个Web开发框架。</p><ul><li>静态文件服务</li><li>路由控制</li><li>模版解析支持</li><li>动态视图</li><li>用户会话</li><li>错误控制器</li><li>插件支持</li></ul><p>官网：http://www.expressjs.com.cn</p><p>express是一个基于内置核心http模块的，一个第三方的包，专注于web服务器的构建。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//Express不是内置模块需要下载</span>

<span class="token comment">// 1. 引入express模块</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. 创建应用</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3. 设置静态资源路径</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 4. 设置模版引擎</span>
<span class="token comment">//ejs需要安装，ejs直接书写业务逻辑，注意注意：不能写注释，写注释直接报错</span>
app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;view engine&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;ejs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 5. 设置视图路径</span>
app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;views&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;./views&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 6. 设置路由</span>
app<span class="token punctuation">.</span>get<span class="token operator">|</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;hello world!&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">//加载视图:将第二个参数的变量data传递给当前的index.ejs</span>
   res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&#39;index&#39;</span>，<span class="token punctuation">{</span><span class="token literal-property property">变量</span><span class="token operator">:</span>数组对象<span class="token punctuation">}</span><span class="token punctuation">)</span>
   res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 7. 设置监听端口</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;服务器在3000端口启动&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cookie的使用" tabindex="-1"><a class="header-anchor" href="#cookie的使用" aria-hidden="true">#</a> Cookie的使用</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//cookie需要手动安装    &#39;cookie-parser&#39;</span>
<span class="token comment">//1.引入cookie</span>
<span class="token keyword">const</span> cookie <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cookie-parser&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//2.应用cookie</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cookie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">//cookie(&#39;dssfsdadasda&#39;)  可以设置签名密钥（3的第三个参数要设置是否签名）</span>
                     <span class="token comment">//使用签名的cookie通过  req.signedCookies 获取</span>
<span class="token comment">//3.设置cookie</span>
res<span class="token punctuation">.</span><span class="token function">cookie</span><span class="token punctuation">(</span><span class="token string">&#39;cookie名&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;要存储的数据&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">maxAge</span><span class="token operator">:</span>xxxxx<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">//第一个参数：cookie名称</span>
    <span class="token comment">//第二个参数：cookie值</span>
    <span class="token comment">//第三个参数：cookie的配置选项</span>
        <span class="token comment">//domain 域名</span>
        <span class="token comment">//path 路径</span>
        <span class="token comment">//expires 过期时间</span>
        <span class="token comment">//maxAge 有效时间</span>
        <span class="token comment">//httpOnly 只能由web服务器访问</span>
        <span class="token comment">//secure 是否与https一起使用</span>
        <span class="token comment">//signed 是否签名</span>
<span class="token comment">//4.获取cookie</span>
req<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span>cookie名
<span class="token comment">//5.删除cookie</span>
res<span class="token punctuation">.</span><span class="token function">clearCookie</span><span class="token punctuation">(</span><span class="token string">&#39;cookie名&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="session的使用" tabindex="-1"><a class="header-anchor" href="#session的使用" aria-hidden="true">#</a> Session的使用</h2><p>特点：</p><p>1.session数据保存在服务器端</p><p>2.session是以键和值的形式进行存储</p><p>3.session依赖于cookie，每个session信息对应的客户端的标识保存在cookie中</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//express-session</span>
<span class="token comment">//1.引入session模块</span>
<span class="token keyword">const</span> session <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express-session&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//2.注册session</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">session</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">secret</span><span class="token operator">:</span><span class="token string">&#39;sudongxu&#39;</span><span class="token punctuation">,</span><span class="token comment">//secret属性的值可以为任意字符串，负责进行加密</span>
    <span class="token literal-property property">resave</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>    <span class="token comment">//固定写法，强制保存</span>
    <span class="token literal-property property">saveUninitialized</span><span class="token operator">:</span><span class="token boolean">true</span>    <span class="token comment">//固定写法，保存未初始化</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//3.设置session</span>
req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>自定义属性 <span class="token operator">=</span> 值

<span class="token comment">//4.获取session</span>
req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>自定义属性

<span class="token comment">//5.清空session</span>
req<span class="token punctuation">.</span>session<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="socket-io" tabindex="-1"><a class="header-anchor" href="#socket-io" aria-hidden="true">#</a> Socket.io</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//环境搭建</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Server</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> io <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;socket.io&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;view engine&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;ejs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;views&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;./views&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&#39;xxx页面&#39;</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>端口号<span class="token punctuation">)</span>

<span class="token comment">//服务器端</span>
<span class="token comment">//连接socket服务器</span>
io<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;connection&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">socket</span><span class="token punctuation">)</span><span class="token punctuation">{</span>    <span class="token comment">//形参是一个对象，该对象有两个函数</span>
    <span class="token comment">//服务器端发送给客户端的信息</span>
    socket<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;频道号&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>要发送的信息<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//服务器端接收客户端的信息</span>
    socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;频道号&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//广播</span>
        socket<span class="token punctuation">.</span>broadcast<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;频道号&#39;</span><span class="token punctuation">,</span>res<span class="token punctuation">)</span>                        
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//客户端</span>
引入文件
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;/socket.io/socket.io.js&quot;</span><span class="token operator">&gt;</span>

<span class="token comment">//使用</span>
<span class="token keyword">let</span> socket <span class="token operator">=</span> io<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token comment">//客户端发送给服务器端的信息</span>
socket<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;频道号&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>要发送的信息<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//客户端接收服务器端的信息</span>
socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;频道号&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,72),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","node.html.vue"]]);export{r as default};
