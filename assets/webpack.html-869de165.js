import{_ as e,p as i,q as n,a1 as d}from"./framework-5866ffd3.js";const a={},s=d(`<h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h1><h2 id="webpack的定义" tabindex="-1"><a class="header-anchor" href="#webpack的定义" aria-hidden="true">#</a> webpack的定义</h2><blockquote><p>定义:webpack是一个静态资源打包工具(html css js)</p></blockquote><h2 id="webpack的使用" tabindex="-1"><a class="header-anchor" href="#webpack的使用" aria-hidden="true">#</a> webpack的使用</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.我们需要安装webpack,必须保证我们的电脑中需要提前安装 node.js,我们安装webpack需要使用到node 中的npm命令
2.node.js的安装
	自己安装
3.node安装完成后,需要切换淘宝镜像,使用npm i 进行安装对应的模块
4.关于安装命令
	npm init --yes
	会生成一个package.json的文件
	 npm i 软件名@版本号 -g  
      npm install 软件名  
      -D  
      -S
      
      
     如果在安装的时候,使用-g参数,表示全局安装
     
     如果在安装的时候,使用了-D参数,安装的程序会在devDependencies中,在项目打包上线之后就删除该模块,在开发阶段,辅助开发的程序,我们可以使用-D参数
     
     如果在安装的时候,使用了-S参数,安装的的程序会在dependencies中,上线之后依然保留
     
     但是需要注意的是,默认不指定-S,也是默人保留
5.如果我们需要使用wabpack打包工具,需要先安装 webpack 和 webpack-cli 模块
	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用webpack打包" tabindex="-1"><a class="header-anchor" href="#使用webpack打包" aria-hidden="true">#</a> 使用webpack打包</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.创建一个html文件
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;ul&gt;
      &lt;li&gt;aaaaaaa&lt;/li&gt;
      &lt;li&gt;aaaaaaa&lt;/li&gt;
      &lt;li&gt;aaaaaaa&lt;/li&gt;
      &lt;li&gt;aaaaaaa&lt;/li&gt;
      &lt;li&gt;aaaaaaa&lt;/li&gt;
      &lt;li&gt;aaaaaaa&lt;/li&gt;
    &lt;/ul&gt;
&lt;/body&gt;
&lt;script src=&quot;./index.js&quot;&gt;&lt;/script&gt;
&lt;/html&gt;
2.创建一个js文件
//在js文件中使用ES6语法进行导入jquery模块
import $ from &quot;jquery&quot;;
$(&quot;ul li:even&quot;).css({&#39;background&#39;:&#39;pink&#39;});
$(&quot;ul li:odd&quot;).css({&#39;background&#39;:&#39;blue&#39;});

3.控制html文件中无序列表的背景颜色,要求各行换色
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="以上写法-出现报错" tabindex="-1"><a class="header-anchor" href="#以上写法-出现报错" aria-hidden="true">#</a> 以上写法.出现报错</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>index.js:2 Uncaught SyntaxError: Cannot use import statement outside a module
这个错误就是说,我不认识你这个import的语法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="我们需要对index-js文件进行打包" tabindex="-1"><a class="header-anchor" href="#我们需要对index-js文件进行打包" aria-hidden="true">#</a> 我们需要对index.js文件进行打包</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在cmd中.使用webpack命令进行对index.js文件打包
webpack ./index.js -o dist
-o 参数 表示的就是输出
解释上边的命令
使用webpack 对 ./index.js 文件进行打包 打包后输入到 dist目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输入上边的命令后会出现如下错误" tabindex="-1"><a class="header-anchor" href="#输入上边的命令后会出现如下错误" aria-hidden="true">#</a> 输入上边的命令后会出现如下错误</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>C:\\Users\\duan\\Desktop\\h5-69\\vue\\day06\\web&gt;webpack ./index.js -o dist
&#39;webpack&#39; 不是内部或外部命令，也不是可运行的程序
或批处理文件。

导致这个问题的主要原因就是你的webpack没有全局安装,但是webpack不建议全局安装

我们采用的方式就是找打内部关系(package.json)
在这个json文件中找到 scripts的这个键,在这个里边去完成创建自定义指令
如下:
&quot;scripts&quot;: {
    &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;,
    &quot;start&quot; : &quot;webpack ./index.js -o dist&quot;
  },
如何执行自定义指令:
	npm run 自定义指令名
	
打包完成之后,会出现一个警告
WARNING in configuration
The &#39;mode&#39; option has not been set, webpack will fallback to &#39;production&#39; for th
is value.
Set &#39;mode&#39; option to &#39;development&#39; or &#39;production&#39; to enable defaults for each e
nvironment.

这个警告就是说你需要设置一个模式
development 开发模式
production  生产模式
我们在打包的时候需要使用生产模式

设置模式后:
&quot;start&quot; : &quot;webpack ./index.js -o dist --mode production&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第二种打包的方式" tabindex="-1"><a class="header-anchor" href="#第二种打包的方式" aria-hidden="true">#</a> 第二种打包的方式</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.我们需要创建一个配置文件,这个配置文件就是完成打包的工作
1-1创建的配置文件 名字为  webpack.config.js
1-2在配置文件中写打包js的代码
//1.引入路径模块
const path = require(&quot;path&quot;);
module.exports = {
  //进入   找到你要打包的文件
  entry:path.join(__dirname,&quot;./index.js&quot;),
  //输出 将打包后的文件输入到哪里
  output:{
    path:path.join(__dirname,&quot;./dist&quot;),
    filename:&quot;index.js&quot;
  }
}

json文件中在写一个自定义指令
使用webpack进行打包,打包的文件及输入配置去执行配置文件
&quot;nstart&quot; : &quot;webpack --config webpack.config.js --mode production&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="热重载" tabindex="-1"><a class="header-anchor" href="#热重载" aria-hidden="true">#</a> 热重载</h2><blockquote><p>热重载其实是一个服务,我们需要安装这个服务,这个服务只要就是为了完成对项目的运行,不需要</p><p>每一次修改代码都需要重新打包才能看到项目预览,它在启动项目之后,代码如果发生改变,会自动更新项目,看到最新的项目预览</p></blockquote><p>1.安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i webpack-dev-server  这就是热重载服务的安装模块
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.修改package.json文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>修改配置文件 
&quot;hotstart&quot;:&quot;webpack-dev-server --config webpack.config.js --port 8091 --hot --mode development&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="html打包" tabindex="-1"><a class="header-anchor" href="#html打包" aria-hidden="true">#</a> HTML打包</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.我们需要安装 打包html的模块
	npm i html-webpack-plugin
2.修改webpack.config.js
  //用于打包html
  plugins:[
    new HtmlWebpackPlugin({
      template:path.join(__dirname,&quot;./public/index.html&quot;),
      filename:&quot;index.html&quot;
    })
  ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css打包" tabindex="-1"><a class="header-anchor" href="#css打包" aria-hidden="true">#</a> CSS打包</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.我们需要安装 
css-loader    为了让js认识这个css
style-loader  为了让html认识这个css

 //打包css
  module:{
    rules:[{
      test:/.css$/,
      use:[&#39;style-loader&#39;,&#39;css-loader&#39;]
    }]
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),l=[s];function t(v,c){return i(),n("div",null,l)}const u=e(a,[["render",t],["__file","webpack.html.vue"]]);export{u as default};
