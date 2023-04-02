import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const i={},l=e(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> git</h1><p>Git是一个免费的开源的分布式版本控制系统，它可以快速高效地处理从小型到大型的项目。</p><p>简单点说就是：git分布式版本控制工具（管理代码版本）</p><h3 id="ssh" tabindex="-1"><a class="header-anchor" href="#ssh" aria-hidden="true">#</a> SSH</h3><ol><li>我的 ==&gt; 设置 ==&gt; 安全设置(ssh公钥)</li><li>怎样生成公钥(https://gitee.com/help/articles/4181#article-header0) ==&gt; ssh-keygen -t ed25519 -C &quot;192966603@qq.com&quot;</li></ol><h4 id="ssh和https的区别" tabindex="-1"><a class="header-anchor" href="#ssh和https的区别" aria-hidden="true">#</a> ssh和https的区别</h4><ul><li><p>ssh属于项目的管理者，之后提交不需要验证身份，因为只有管理者才能操作</p></li><li><p>https谁都可以下载，每次需要输入用户名和密码</p></li></ul><h2 id="git使用" tabindex="-1"><a class="header-anchor" href="#git使用" aria-hidden="true">#</a> git使用</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>.我们需要自报家门，告诉它你是谁？什么联系你
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name	用户名
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email 邮箱

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="git相关命令" tabindex="-1"><a class="header-anchor" href="#git相关命令" aria-hidden="true">#</a> git相关命令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>初次运行 Git 前的配置
https://gitee.com/help/articles/4107

如何通过 git clone 克隆仓库/项目
https://gitee.com/help/articles/4111#article-header0

Git 仓库基础操作
https://gitee.com/help/articles/4114#article-header0


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="git上传项目的命令" tabindex="-1"><a class="header-anchor" href="#git上传项目的命令" aria-hidden="true">#</a> git上传项目的命令</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 本地项目 =&gt; 暂存区 =&gt; 本地仓库 =&gt; 远程仓库</span>

<span class="token comment"># 1.初始化git,初始化之后会出现一个目录名为 .git/的目录</span>
<span class="token function">git</span> init       

<span class="token comment"># 2.将本地目录上传到暂存区</span>
	<span class="token function">git</span> <span class="token function">add</span> 文件
	<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 3.查看暂存区状态（红色文件名，代表还没上传至暂存区，绿色代表已上传）</span>
	<span class="token function">git</span> status

<span class="token comment"># 4.将暂存区的项目上传本地仓库</span>
	<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;本次上传的说明&quot;</span>

<span class="token comment"># 5.查看版本</span>
	<span class="token function">git</span> log

<span class="token comment"># 6.版本退回</span>
	<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> 前8位
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建与查看分支" tabindex="-1"><a class="header-anchor" href="#创建与查看分支" aria-hidden="true">#</a> 创建与查看分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看分支</span>
<span class="token function">git</span> branch

<span class="token comment"># 创建分支</span>
<span class="token function">git</span> brance 分支名

<span class="token comment"># 创建分支并直接切换到该分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> 分支名

<span class="token comment"># 切换分支</span>
<span class="token function">git</span> checkout 分支名

<span class="token comment"># 合并分支（合并分支需要切换到主分支）</span>
<span class="token function">git</span> merge 分支名

<span class="token comment"># 删除分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> 分支名【分支合并后才能删除】
<span class="token function">git</span> branch <span class="token parameter variable">-D</span> 分支名【强制删除】
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="连接远程仓库" tabindex="-1"><a class="header-anchor" href="#连接远程仓库" aria-hidden="true">#</a> 连接远程仓库</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1.连接远程仓库地址</span>
	<span class="token function">git</span> remote <span class="token function">add</span> origin git远程仓库的地址

<span class="token comment"># 2.克隆远程仓库项目</span>
	<span class="token function">git</span> clone 远程地址

<span class="token comment"># 3.将本地仓库项目推送远程仓库</span>
	<span class="token function">git</span> push origin 分支

<span class="token comment"># 4.更新仓库（同步远程仓库）只有克隆过项目才可以更新</span>
	<span class="token function">git</span> pull origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日常操作" tabindex="-1"><a class="header-anchor" href="#日常操作" aria-hidden="true">#</a> 日常操作</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1.下拉或克隆远程仓库代码</span>
<span class="token function">git</span> clone 远程仓库地址
<span class="token comment"># 2.切换到项目文件夹</span>
<span class="token function">ls</span>
<span class="token builtin class-name">cd</span> 项目文件夹/
<span class="token comment"># 3.写代码</span>
code <span class="token builtin class-name">.</span>
<span class="token comment"># 查看仓库状态</span>
<span class="token function">git</span> status
<span class="token comment"># 4.将代码从工作区推送到暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token comment"># 5.将代码从暂存区推送到本地仓库</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;本次提交的信息描述&#39;</span>
<span class="token comment"># 查看版本</span>
<span class="token function">git</span> log 或者查看精简版 <span class="token function">git</span> reflog
<span class="token comment"># 6.将代码从本地仓库推送到远程仓库</span>
<span class="token function">git</span> push origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="code-打开编辑器" tabindex="-1"><a class="header-anchor" href="#code-打开编辑器" aria-hidden="true">#</a> code . 打开编辑器</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.手动打开编辑器
2.按 shift commind p
3.键入shell
4.找到Shell Command: install &#39;code&#39; command in PATH&quot;, 对其点击
5.提示安装成功
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),t=[l];function c(d,r){return s(),a("div",null,t)}const v=n(i,[["render",c],["__file","git.html.vue"]]);export{v as default};
