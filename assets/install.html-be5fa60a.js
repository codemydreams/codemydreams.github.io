import{_ as i,M as r,p as o,q as l,R as n,t as e,N as a,a1 as t}from"./framework-5866ffd3.js";const d={},c=n("h2",{id:"软件篇",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#软件篇","aria-hidden":"true"},"#"),e(" 软件篇")],-1),p={href:"https://www.google.cn/intl/zh-CN/chrome/",target:"_blank",rel:"noopener noreferrer"},m=n("h3",{id:"vscode",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vscode","aria-hidden":"true"},"#"),e(" VSCode")],-1),v={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},h=t('<table><thead><tr><th>插件名</th><th></th></tr></thead><tbody><tr><td>chinese</td><td>汉化包</td></tr><tr><td>open in browser</td><td></td></tr><tr><td>Live Server</td><td></td></tr><tr><td>Volar</td><td></td></tr><tr><td>GitLengs</td><td></td></tr></tbody></table><h3 id="网易有道词典" tabindex="-1"><a class="header-anchor" href="#网易有道词典" aria-hidden="true">#</a> 网易有道词典</h3><h2 id="环境配置篇" tabindex="-1"><a class="header-anchor" href="#环境配置篇" aria-hidden="true">#</a> 环境配置篇</h2><h3 id="homebrew" tabindex="-1"><a class="header-anchor" href="#homebrew" aria-hidden="true">#</a> homebrew</h3>',4),u={href:"https://brew.sh/index_zh-cn",target:"_blank",rel:"noopener noreferrer"},b={href:"https://zhuanlan.zhihu.com/p/111014448/",target:"_blank",rel:"noopener noreferrer"},k=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 配置brew</span>
brew <span class="token parameter variable">-v</span>

<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--add</span> safe.directory /opt/homebrew/Library/Taps/homebrew/homebrew-core

<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--add</span> safe.directory /opt/homebrew/Library/Taps/homebrew/homebrew-cask
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nvm" tabindex="-1"><a class="header-anchor" href="#nvm" aria-hidden="true">#</a> nvm</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装nvm</span>
brew <span class="token function">install</span> nvm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># </span>
<span class="token function">vim</span> ~/.zshrc

<span class="token comment"># 按 i 进入编辑模式</span>
i

<span class="token comment"># 将以下内容粘贴进去</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NVM_DIR</span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$HOME</span>/.nvm&quot;</span>
  <span class="token punctuation">[</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;/opt/homebrew/opt/nvm/nvm.sh&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>. <span class="token string">&quot;/opt/homebrew/opt/nvm/nvm.sh&quot;</span>  <span class="token comment"># This loads nvm</span>
  <span class="token punctuation">[</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>. <span class="token string">&quot;/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm&quot;</span>  <span class="token comment"># This loads nvm bash_completion</span>
  

<span class="token comment"># 按 esc 退出编辑模式</span>
esc

:wq

<span class="token builtin class-name">source</span> ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装node</span>
nvm <span class="token function">install</span> v14.21.3

<span class="token comment"># 切换源</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> mysql</h3><p>下载地址：https://dev.mysql.com/downloads/mysql/</p>`,7);function g(_,f){const s=r("ExternalLinkIcon");return o(),l("div",null,[c,n("p",null,[n("a",p,[e("谷歌浏览器下载地址"),a(s)])]),m,n("p",null,[n("a",v,[e("下载地址"),a(s)])]),h,n("p",null,[n("a",u,[e("下载地址"),a(s)])]),n("p",null,[n("a",b,[e("Homebrew国内如何自动安装（国内地址）（Mac & Linux）"),a(s)])]),k])}const x=i(d,[["render",g],["__file","install.html.vue"]]);export{x as default};
