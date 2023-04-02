import{_ as e,p as i,q as n,a1 as d}from"./framework-5866ffd3.js";const s={},a=d(`<h2>Redux状态管理</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i redux react-redux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用redux" tabindex="-1"><a class="header-anchor" href="#使用redux" aria-hidden="true">#</a> 使用redux</h3><p>redux只有两种属性</p><ul><li>数据（自定义起名：baseState）</li><li>修改（自定义起名：reducer）</li></ul><h4 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h4><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import {createStore} from &quot;redux&quot;

// 初始值
const baseState = {
  const:10,
  name:&quot;张三&quot;
}

// 设置数据和修改  state初始数据 action修改方法
const reducer = (state=baseState,action)=&gt;{
  // 必须先深拷贝
  let nstate = JSON.parse(JSON.stringify(state))
  //============================
  	【把修改的方法写这里】
    console.log(action)
  	if(action.type === &#39;type值&#39;){
      //业务逻辑
    }else if(action.type === &#39;type值&#39;){
      //业务逻辑
    }
  //============================
  return nstate
}


// 创建仓库
const store = createStore(reducer)
// 开放出去
export default store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="传值" tabindex="-1"><a class="header-anchor" href="#传值" aria-hidden="true">#</a> 传值</h4><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>//引入仓库
import store from &quot;../../store&quot;
//引入发送数据的组件
import {Provider} from &quot;react-redux&quot;;


//希望哪些后代能共用 redux的值就可以使用Provider进行包裹
&lt;Provider store={store}&gt;

&lt;/Provider&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="接取" tabindex="-1"><a class="header-anchor" href="#接取" aria-hidden="true">#</a> 接取</h4><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import {useSelector} from &#39;react-redux&#39;

const data = useSelector(state=&gt;state)
console.log(data.键)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改" tabindex="-1"><a class="header-anchor" href="#修改" aria-hidden="true">#</a> 修改</h4><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import {useDispatch} from &#39;react-redux&#39;;

const dispatch = useDispatch()
const fn = () =&gt;{
  // dispatch() 可以直接调用 store/index.js的reducer方法
  dispatch({
    type:&quot;&quot;,  //必须有type，其他的随意
    //数据直接发给reducer的action
  })
}

&lt;button onClick={fn}&gt;&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结</p><p>传值 Provider</p><p>接值 useSelector</p><p>修改 useDispatch</p></blockquote>`,15),r=[a];function l(t,c){return i(),n("div",null,r)}const u=e(s,[["render",l],["__file","redux.html.vue"]]);export{u as default};
