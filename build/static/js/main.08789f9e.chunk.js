(this.webpackJsonpto_do_crash_app=this.webpackJsonpto_do_crash_app||[]).push([[0],{31:function(t,e,n){t.exports=n(60)},36:function(t,e,n){},37:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(29),c=n.n(r),l=n(14),i=n(7),d=n(8),s=n(10),u=n(9),p=(n(36),n(37),function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).getStyle=function(){return{textDecoration:t.props.todo.completed?"line-through":"none",background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted"}},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props.todo.id;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)}),this.props.todo.title,a.a.createElement("button",{style:m,onClick:this.props.deleteItem.bind(this,t)},"X"))}}]),n}(o.Component)),m={background:"#ff0000",color:"#fff",border:"none",padding:"5px 10px",borderRadius:"1px #ccc dotted",cursor:"pointer",float:"right"},f=p,h=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(f,{key:e.id,todo:e,deleteItem:t.props.deleteItem,markComplete:t.props.markComplete})}))}}]),n}(a.a.Component),b=n(13);function g(){return a.a.createElement("header",{style:y},a.a.createElement("h1",null,"ToDo List Dashboard"),a.a.createElement(b.b,{style:v,to:"/"},"Home"),"|",a.a.createElement(b.b,{style:v,to:"/about"},"About"))}var y={background:"#333",color:"#fff",textAlign:"center",margin:"10px"},v={color:"#fff",textDecoration:"none"},E=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.onChange=function(e){return t.setState({title:e.target.value})},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t}return Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}})))}}]),n}(o.Component),j=n(1);function O(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About Page"),a.a.createElement("p",null,"This is a test about page practice"))}var k=n(15),x=n.n(k),C=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).getId=function(){return Math.round(1+99*Math.random())},t.state={todos:[]},t.componentDidMount=function(){x.a.get("http://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))},t.markComplete=function(e){t.setState({todos:Object(l.a)(t.state.todos.filter((function(t){return t.id!==e})))})},t.addTodo=function(e){console.log("in add todo",e);var n={id:t.getId(),title:e,completed:!1};t.setState({todos:[].concat(Object(l.a)(t.state.todos),[n])}),x.a.post("http://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){return t.setState({todos:[].concat(Object(l.a)(t.state.todos),[e.data])})}))},t.deleteItem=function(e){console.log("in delete",{id:e}),x.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(n){return t.setState({todos:Object(l.a)(t.state.todos.filter((function(t){return t.id!==e})))})})),console.log("after",t.state.todos)},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return a.a.createElement(b.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(g,null),a.a.createElement(j.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(E,{addTodo:t.addTodo}),a.a.createElement(h,{todos:t.state.todos,markComplete:t.markComplete,deleteItem:t.deleteItem}))}}),a.a.createElement(j.a,{path:"/about",component:O}))))}}]),n}(a.a.Component);c.a.render(a.a.createElement(C,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.08789f9e.chunk.js.map