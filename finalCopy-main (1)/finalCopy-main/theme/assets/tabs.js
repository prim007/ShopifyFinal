(()=>{var F,d,Q,re,C,z,X,H,$,I,O,ie,P={},Y=[],le=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,B=Array.isArray;function w(t,e){for(var _ in e)t[_]=e[_];return t}function Z(t){var e=t.parentNode;e&&e.removeChild(t)}function se(t,e,_){var i,o,r,s={};for(r in e)r=="key"?i=e[r]:r=="ref"?o=e[r]:s[r]=e[r];if(arguments.length>2&&(s.children=arguments.length>3?F.call(arguments,2):_),typeof t=="function"&&t.defaultProps!=null)for(r in t.defaultProps)s[r]===void 0&&(s[r]=t.defaultProps[r]);return D(t,s,i,o,null)}function D(t,e,_,i,o){var r={type:t,props:e,key:_,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Q,__i:-1,__u:0};return o==null&&d.vnode!=null&&d.vnode(r),r}function W(t){return t.children}function L(t,e){this.props=t,this.context=e}function x(t,e){if(e==null)return t.__?x(t.__,t.__i+1):null;for(var _;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null)return _.__e;return typeof t.type=="function"?x(t):null}function ee(t){var e,_;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null){t.__e=t.__c.base=_.__e;break}return ee(t)}}function J(t){(!t.__d&&(t.__d=!0)&&C.push(t)&&!N.__r++||z!==d.debounceRendering)&&((z=d.debounceRendering)||X)(N)}function N(){var t,e,_,i,o,r,s,u;for(C.sort(H);t=C.shift();)t.__d&&(e=C.length,i=void 0,r=(o=(_=t).__v).__e,s=[],u=[],_.__P&&((i=w({},o)).__v=o.__v+1,d.vnode&&d.vnode(i),V(_.__P,i,o,_.__n,_.__P.namespaceURI,32&o.__u?[r]:null,s,r??x(o),!!(32&o.__u),u),i.__v=o.__v,i.__.__k[i.__i]=i,ne(s,i,u),i.__e!=r&&ee(i)),C.length>e&&C.sort(H));N.__r=0}function te(t,e,_,i,o,r,s,u,f,l,p){var n,m,c,h,b,v=i&&i.__k||Y,a=e.length;for(_.__d=f,ce(_,e,v),f=_.__d,n=0;n<a;n++)(c=_.__k[n])!=null&&typeof c!="boolean"&&typeof c!="function"&&(m=c.__i===-1?P:v[c.__i]||P,c.__i=n,V(t,c,m,o,r,s,u,f,l,p),h=c.__e,c.ref&&m.ref!=c.ref&&(m.ref&&j(m.ref,null,c),p.push(c.ref,c.__c||h,c)),b==null&&h!=null&&(b=h),65536&c.__u||m.__k===c.__k?(f&&!f.isConnected&&(f=x(m)),f=_e(c,f,t)):typeof c.type=="function"&&c.__d!==void 0?f=c.__d:h&&(f=h.nextSibling),c.__d=void 0,c.__u&=-196609);_.__d=f,_.__e=b}function ce(t,e,_){var i,o,r,s,u,f=e.length,l=_.length,p=l,n=0;for(t.__k=[],i=0;i<f;i++)s=i+n,(o=t.__k[i]=(o=e[i])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?D(null,o,null,null,null):B(o)?D(W,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?D(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=t,o.__b=t.__b+1,u=ue(o,_,s,p),o.__i=u,r=null,u!==-1&&(p--,(r=_[u])&&(r.__u|=131072)),r==null||r.__v===null?(u==-1&&n--,typeof o.type!="function"&&(o.__u|=65536)):u!==s&&(u===s+1?n++:u>s?p>f-s?n+=u-s:n--:u<s?u==s-1&&(n=u-s):n=0,u!==i+n&&(o.__u|=65536))):(r=_[s])&&r.key==null&&r.__e&&!(131072&r.__u)&&(r.__e==t.__d&&(t.__d=x(r)),R(r,r,!1),_[s]=null,p--);if(p)for(i=0;i<l;i++)(r=_[i])!=null&&!(131072&r.__u)&&(r.__e==t.__d&&(t.__d=x(r)),R(r,r))}function _e(t,e,_){var i,o;if(typeof t.type=="function"){for(i=t.__k,o=0;i&&o<i.length;o++)i[o]&&(i[o].__=t,e=_e(i[o],e,_));return e}t.__e!=e&&(_.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function ue(t,e,_,i){var o=t.key,r=t.type,s=_-1,u=_+1,f=e[_];if(f===null||f&&o==f.key&&r===f.type&&!(131072&f.__u))return _;if(i>(f!=null&&!(131072&f.__u)?1:0))for(;s>=0||u<e.length;){if(s>=0){if((f=e[s])&&!(131072&f.__u)&&o==f.key&&r===f.type)return s;s--}if(u<e.length){if((f=e[u])&&!(131072&f.__u)&&o==f.key&&r===f.type)return u;u++}}return-1}function G(t,e,_){e[0]==="-"?t.setProperty(e,_??""):t[e]=_==null?"":typeof _!="number"||le.test(e)?_:_+"px"}function M(t,e,_,i,o){var r;e:if(e==="style")if(typeof _=="string")t.style.cssText=_;else{if(typeof i=="string"&&(t.style.cssText=i=""),i)for(e in i)_&&e in _||G(t.style,e,"");if(_)for(e in _)i&&_[e]===i[e]||G(t.style,e,_[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=_,_?i?_.u=i.u:(_.u=$,t.addEventListener(e,r?O:I,r)):t.removeEventListener(e,r?O:I,r);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e in t)try{t[e]=_??"";break e}catch{}typeof _=="function"||(_==null||_===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,_))}}function K(t){return function(e){if(this.l){var _=this.l[e.type+t];if(e.t==null)e.t=$++;else if(e.t<_.u)return;return _(d.event?d.event(e):e)}}}function V(t,e,_,i,o,r,s,u,f,l){var p,n,m,c,h,b,v,a,y,k,T,S,q,U,A,g=e.type;if(e.constructor!==void 0)return null;128&_.__u&&(f=!!(32&_.__u),r=[u=e.__e=_.__e]),(p=d.__b)&&p(e);e:if(typeof g=="function")try{if(a=e.props,y=(p=g.contextType)&&i[p.__c],k=p?y?y.props.value:p.__:i,_.__c?v=(n=e.__c=_.__c).__=n.__E:("prototype"in g&&g.prototype.render?e.__c=n=new g(a,k):(e.__c=n=new L(a,k),n.constructor=g,n.render=pe),y&&y.sub(n),n.props=a,n.state||(n.state={}),n.context=k,n.__n=i,m=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),g.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=w({},n.__s)),w(n.__s,g.getDerivedStateFromProps(a,n.__s))),c=n.props,h=n.state,n.__v=e,m)g.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(g.getDerivedStateFromProps==null&&a!==c&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(a,k),!n.__e&&(n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(a,n.__s,k)===!1||e.__v===_.__v)){for(e.__v!==_.__v&&(n.props=a,n.state=n.__s,n.__d=!1),e.__e=_.__e,e.__k=_.__k,e.__k.forEach(function(E){E&&(E.__=e)}),T=0;T<n._sb.length;T++)n.__h.push(n._sb[T]);n._sb=[],n.__h.length&&s.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(a,n.__s,k),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(c,h,b)})}if(n.context=k,n.props=a,n.__P=t,n.__e=!1,S=d.__r,q=0,"prototype"in g&&g.prototype.render){for(n.state=n.__s,n.__d=!1,S&&S(e),p=n.render(n.props,n.state,n.context),U=0;U<n._sb.length;U++)n.__h.push(n._sb[U]);n._sb=[]}else do n.__d=!1,S&&S(e),p=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++q<25);n.state=n.__s,n.getChildContext!=null&&(i=w(w({},i),n.getChildContext())),m||n.getSnapshotBeforeUpdate==null||(b=n.getSnapshotBeforeUpdate(c,h)),te(t,B(A=p!=null&&p.type===W&&p.key==null?p.props.children:p)?A:[A],e,_,i,o,r,s,u,f,l),n.base=e.__e,e.__u&=-161,n.__h.length&&s.push(n),v&&(n.__E=n.__=null)}catch(E){e.__v=null,f||r!=null?(e.__e=u,e.__u|=f?160:32,r[r.indexOf(u)]=null):(e.__e=_.__e,e.__k=_.__k),d.__e(E,e,_)}else r==null&&e.__v===_.__v?(e.__k=_.__k,e.__e=_.__e):e.__e=fe(_.__e,e,_,i,o,r,s,f,l);(p=d.diffed)&&p(e)}function ne(t,e,_){e.__d=void 0;for(var i=0;i<_.length;i++)j(_[i],_[++i],_[++i]);d.__c&&d.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(r){r.call(o)})}catch(r){d.__e(r,o.__v)}})}function fe(t,e,_,i,o,r,s,u,f){var l,p,n,m,c,h,b,v=_.props,a=e.props,y=e.type;if(y==="svg"?o="http://www.w3.org/2000/svg":y==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),r!=null){for(l=0;l<r.length;l++)if((c=r[l])&&"setAttribute"in c==!!y&&(y?c.localName===y:c.nodeType===3)){t=c,r[l]=null;break}}if(t==null){if(y===null)return document.createTextNode(a);t=document.createElementNS(o,y,a.is&&a),r=null,u=!1}if(y===null)v===a||u&&t.data===a||(t.data=a);else{if(r=r&&F.call(t.childNodes),v=_.props||P,!u&&r!=null)for(v={},l=0;l<t.attributes.length;l++)v[(c=t.attributes[l]).name]=c.value;for(l in v)if(c=v[l],l!="children"){if(l=="dangerouslySetInnerHTML")n=c;else if(l!=="key"&&!(l in a)){if(l=="value"&&"defaultValue"in a||l=="checked"&&"defaultChecked"in a)continue;M(t,l,null,c,o)}}for(l in a)c=a[l],l=="children"?m=c:l=="dangerouslySetInnerHTML"?p=c:l=="value"?h=c:l=="checked"?b=c:l==="key"||u&&typeof c!="function"||v[l]===c||M(t,l,c,v[l],o);if(p)u||n&&(p.__html===n.__html||p.__html===t.innerHTML)||(t.innerHTML=p.__html),e.__k=[];else if(n&&(t.innerHTML=""),te(t,B(m)?m:[m],e,_,i,y==="foreignObject"?"http://www.w3.org/1999/xhtml":o,r,s,r?r[0]:_.__k&&x(_,0),u,f),r!=null)for(l=r.length;l--;)r[l]!=null&&Z(r[l]);u||(l="value",h!==void 0&&(h!==t[l]||y==="progress"&&!h||y==="option"&&h!==v[l])&&M(t,l,h,v[l],o),l="checked",b!==void 0&&b!==t[l]&&M(t,l,b,v[l],o))}return t}function j(t,e,_){try{typeof t=="function"?t(e):t.current=e}catch(i){d.__e(i,_)}}function R(t,e,_){var i,o;if(d.unmount&&d.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||j(i,null,e)),(i=t.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(r){d.__e(r,e)}i.base=i.__P=null}if(i=t.__k)for(o=0;o<i.length;o++)i[o]&&R(i[o],e,_||typeof t.type!="function");_||t.__e==null||Z(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function pe(t,e,_){return this.constructor(t,_)}function oe(t,e,_){var i,o,r,s;d.__&&d.__(t,e),o=(i=typeof _=="function")?null:_&&_.__k||e.__k,r=[],s=[],V(e,t=(!i&&_||e).__k=se(W,null,[t]),o||P,P,e.namespaceURI,!i&&_?[_]:o?null:e.firstChild?F.call(e.childNodes):null,r,!i&&_?_:o?o.__e:e.firstChild,i,s),ne(r,t,s)}F=Y.slice,d={__e:function(t,e,_,i){for(var o,r,s;e=e.__;)if((o=e.__c)&&!o.__)try{if((r=o.constructor)&&r.getDerivedStateFromError!=null&&(o.setState(r.getDerivedStateFromError(t)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,i||{}),s=o.__d),s)return o.__E=o}catch(u){t=u}throw t}},Q=0,re=function(t){return t!=null&&t.constructor==null},L.prototype.setState=function(t,e){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof t=="function"&&(t=t(w({},_),this.props)),t&&w(_,t),t!=null&&this.__v&&(e&&this._sb.push(e),J(this))},L.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),J(this))},L.prototype.render=W,C=[],X=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,H=function(t,e){return t.__v.__b-e.__v.__b},N.__r=0,$=0,I=K(!1),O=K(!0),ie=0;var ae=({settings:t,blocks:e})=>React.createElement("div",{className:"tabs-section"}),de=()=>{let t=document.querySelector(".tabs-section");if(t){let e=JSON.parse(t.getAttribute("data-settings")||"[]"),_=JSON.parse(t.getAttribute("data-blocks")||"[]");oe(React.createElement(ae,{settings:e,blocks:_}),t)}};document.addEventListener("DOMContentLoaded",de);})();
//# sourceMappingURL=tabs.js.map
