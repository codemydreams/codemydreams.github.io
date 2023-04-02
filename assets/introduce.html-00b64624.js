import{_ as a,p as n,q as e,a1 as s}from"./framework-5866ffd3.js";const i={},d=s(`<h2>相关介绍</h2><h3 id="react特点" tabindex="-1"><a class="header-anchor" href="#react特点" aria-hidden="true">#</a> React特点</h3><h4 id="a-声明式设计" tabindex="-1"><a class="header-anchor" href="#a-声明式设计" aria-hidden="true">#</a> A. 声明式设计</h4><p>react是面向数据编程，不需要直接去控制dom，你只要把数据操作好，react自己会去帮你操作dom，可以节省很多操作dom的代码。这就是声明式开发。</p><h4 id="b-jsx语法" tabindex="-1"><a class="header-anchor" href="#b-jsx语法" aria-hidden="true">#</a> B. JSX语法</h4><p>JSX 是 JavaScript 语法的扩展。React 开发大部分使用 JSX 语法（在JSX中可以将HTML于JS混写）。</p><h4 id="c-灵活" tabindex="-1"><a class="header-anchor" href="#c-灵活" aria-hidden="true">#</a> C. 灵活</h4><p>react所控制的dom就是id为root的dom，页面上的其他dom元素你页可以使用jq等其他框架 。可以和其他库并存。</p><h4 id="d-使用虚拟dom、高效" tabindex="-1"><a class="header-anchor" href="#d-使用虚拟dom、高效" aria-hidden="true">#</a> D. 使用虚拟DOM、高效</h4><p>虚拟DOM其实本质就是一个JavaScript对象，当数据和状态发生了变化，都会被自动高效的同步到虚拟DOM中，最后再将仅变化的部分同步到DOM中（不需要整个DOM树重新渲染）</p><h4 id="e-组件化开发" tabindex="-1"><a class="header-anchor" href="#e-组件化开发" aria-hidden="true">#</a> E. 组件化开发</h4><p>通过 React 构建组件，使得代码更加容易得到复用和维护，能够很好的应用在大项目的开发中。</p><h4 id="f-单向数据流" tabindex="-1"><a class="header-anchor" href="#f-单向数据流" aria-hidden="true">#</a> F. 单向数据流</h4><p>react是单向数据流，父组件传递给子组件的数据，子组件能够使用，但是不能直接通过this.props修改。 这样让数据清晰代码容易维护。</p><h3 id="环境搭建" tabindex="-1"><a class="header-anchor" href="#环境搭建" aria-hidden="true">#</a> 环境搭建</h3><h4 id="a-全局安装脚手架-不推荐" tabindex="-1"><a class="header-anchor" href="#a-全局安装脚手架-不推荐" aria-hidden="true">#</a> A . 全局安装脚手架（不推荐）</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> create-react-app <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="b-通过npx搭建项目-官方推荐" tabindex="-1"><a class="header-anchor" href="#b-通过npx搭建项目-官方推荐" aria-hidden="true">#</a> B. 通过npx搭建项目（官方推荐）</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx create-react-app 项目名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><h5 id="关于create-react-app" tabindex="-1"><a class="header-anchor" href="#关于create-react-app" aria-hidden="true">#</a> 关于create-react-app</h5><p><code>create-react-app</code> 是FaceBook的React团队官方出的一个构建React单页面应用的脚手架工具，它本身集成了 <code>webpack</code> ，并配置了一系列内置的 <code>loader</code> 和默认的npm脚本，可以很轻松的实现零配置就可以快速开发React的应用</p><h5 id="关于npx" tabindex="-1"><a class="header-anchor" href="#关于npx" aria-hidden="true">#</a> 关于npx</h5><p>在 npm 的5.2.0版本开始，自动安装了npx</p><p>npx是什么？ npx会帮助你执行依赖包里的二进制文件</p><p>npx会自动查找当前依赖包中的可执行文件，如果找不到，就会去PATH里找。如果依然找不到，就会帮你安装</p><p>该命令建议运行在node的12.13.0版本的基础上</p></blockquote><h4 id="c-清除项目中的默认文件" tabindex="-1"><a class="header-anchor" href="#c-清除项目中的默认文件" aria-hidden="true">#</a> C. 清除项目中的默认文件</h4><p>删除掉新项目中 <code>src/</code> 文件夹下的所有文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1.进入到src目录下</span>
<span class="token builtin class-name">cd</span> 项目名/src

<span class="token comment"># 2.删除src目录下的所有文件</span>
<span class="token comment"># 如果你使用 Mac 或 Linux:</span>
<span class="token function">rm</span> <span class="token parameter variable">-f</span> *
<span class="token comment"># 如果你使用 Windows:</span>
del *

<span class="token comment"># 3.新建一个index.js文件</span>
<span class="token function">touch</span> index.js

<span class="token comment"># 4.然后回到项目文件夹</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>

<span class="token comment"># 5.复制一下代码到index.js</span>
<span class="token function">import</span> React from <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token function">import</span> ReactDOM from <span class="token string">&#39;react-dom/client&#39;</span><span class="token punctuation">;</span>
<span class="token function">import</span> App from <span class="token string">&quot;./App&quot;</span>
const root <span class="token operator">=</span> ReactDOM.createRoot<span class="token punctuation">(</span>document.getElementById<span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">))</span><span class="token punctuation">;</span>
root.render<span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>App /<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 6.运行项目</span>
<span class="token function">npm</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="d-书写第一个组件" tabindex="-1"><a class="header-anchor" href="#d-书写第一个组件" aria-hidden="true">#</a> D. 书写第一个组件</h4><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React from &#39;react&#39;

class App extends React.Component{
  render(){
    return (
    	&lt;div&gt;我的第一个组件&lt;/div&gt;
    )
  }
}

export default App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="e-vscode中jsx的编写优化" tabindex="-1"><a class="header-anchor" href="#e-vscode中jsx的编写优化" aria-hidden="true">#</a> E. VSCode中JSX的编写优化</h4>`,26),c=[d];function r(t,l){return n(),e("div",null,c)}const o=a(i,[["render",r],["__file","introduce.html.vue"]]);export{o as default};
