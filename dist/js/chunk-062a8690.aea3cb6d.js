(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-062a8690"],{"0f77":function(t,e,a){},"2cb0":function(t,e,a){},"311d":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"G6-box",attrs:{id:"G6"}},[a("g-menu",{staticClass:"G6-menu"}),t.isShowEdit?a("g-editor",{staticClass:"G6-editer",on:{toBack:t.handleCloseEdit}}):t._e(),t.isShow?a("g-draw",{staticClass:"mountNode",attrs:{width:t.G6_width}}):t._e()],1)},n=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.menu_list,function(e,i){return a("ul",{staticClass:"G6-menu-list"},[a("li",{staticClass:"G6-menu-list-item"},[a("el-tooltip",3==i?{staticClass:"item",attrs:{effect:"dark",content:e.label,placement:"right"}}:{staticClass:"item",staticStyle:{"border-bottom":"2px solid #fff"},attrs:{effect:"dark",content:e.label,placement:"right"}},[a("a",{class:e.icon,on:{click:function(a){return t.handleItemClick(e.type)}}},[t._v(t._s(e.label))])])],1)])}),0)},s=[],o=a("07cd"),r=a.n(o),c=a("2b0e"),d=new c["default"],u={name:"customTable",data:function(){return{menu_list:[{label:"选择",icon:"",type:"pointer"},{label:"四边形",icon:"",type:"polygon"},{label:"椭圆",icon:"",type:"pie"},{label:"连线",icon:"",type:"line"}]}},methods:{handleItemClick:function(t){d.$emit("menuClick",t)}}},h=u,f=(a("b169"),a("2877")),m=Object(f["a"])(h,l,s,!1,null,"5134261b",null),g=m.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"G6-editor-box"},[a("div",{staticClass:"editor-title"},[a("span",{staticClass:"title-bar"},[t._v("项目内容：")]),a("span",{staticClass:"close-btn",on:{click:t.handleToBack}},[t._v("❌")])]),a("el-form",{ref:"form",staticClass:"editor-form",attrs:{model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"项目名称"}},[a("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"项目类型"}},[a("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[a("el-option",{attrs:{label:"类型一",value:"shanghai"}}),a("el-option",{attrs:{label:"类型二",value:"beijing"}})],1)],1),a("el-form-item",{attrs:{label:"是否启用"}},[a("el-switch",{model:{value:t.form.isLoading,callback:function(e){t.$set(t.form,"isLoading",e)},expression:"form.isLoading"}})],1),a("el-form-item",{attrs:{label:"项目描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.form.note,callback:function(e){t.$set(t.form,"note",e)},expression:"form.note"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"success"},on:{click:t.onSubmit}},[t._v("保存")]),a("el-button",{attrs:{type:"default"},on:{click:t.onReset}},[t._v("重置")])],1)],1)],1)},b=[],v=(a("456d"),a("ac6a"),{name:"customTable",data:function(){return{form:{name:null,type:null,isLoading:null,note:null}}},methods:{onSubmit:function(){var t=JSON.stringify(this.form);this.$my.confrirm(this,{message:"提交参数为： "+t})},onReset:function(){var t=this;Object.keys(this.form).forEach(function(e){t.form[e]=null})},handleToBack:function(){this.$emit("toBack",null)}}}),y=v,k=(a("bbdb"),Object(f["a"])(y,p,b,!1,null,"ad3cb3e0",null)),w=k.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"mountNode"}})},x=[],G={name:"G6_draw",props:["width"],data:function(){return{G6_InitData:{G6_width:this.width,tableData:{},group:null}}},created:function(){var t=this;this.$nextTick(function(e){t.handleInitG6Data(),d.$on("menuClick",function(e){t.handleMenuClick(e)})})},methods:{handleMenuClick:function(t){switch(t){case"pointer":this.G6_InitData.graph.setMode("default");break;case"pie":this.G6_InitData.graph.setMode(t);break;case"polygon":this.$my.successMsg(this,"四边形点击事件的触发");break;case"line":this.G6_InitData.graph.setMode("addEdge");break}},handleInitG6Data:function(){var t=this;this.$my.getSource(this,this.$my.g6_data).then(function(e){var a=e.data;t.G6_InitData.tableData=a.data1,t.handleInitG6View()})},handleInitG6View:function(){var t=this,e={shape:"node",labelCfg:{style:{fill:"#fff",fontSize:14}}},a={shape:"line-with-arrow",style:{endArrow:!0,lineWidth:2,stroke:"#ccc"}},i={default:["drag-canvas","zoom-canvas","drag-node"],pie:["click-add-node","click-select"],addEdge:["click-add-edge","click-select"]};this.handleCustomNode(),this.G6_InitData.graph=new r.a.Graph({container:"mountNode",width:t.G6_InitData.G6_width,height:800,fitView:!0,fitViewPadding:[150,150,150,150],layout:{type:"dagre",rankdir:"LR"},modes:i,defaultNode:e,defaultEdge:a}),this.G6_InitData.graph.data(this.G6_InitData.tableData),this.G6_InitData.graph.render(),this.G6_InitData.graph.on("edge:click",function(t){var e=t.target,a=e.get("type");"circle"===a&&alert("你点击的是边上的圆点")})},handleCustomNode:function(){var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},e={begin:{fill:"#9FD4FB"},end:{fill:"#C2E999"}};r.a.registerNode("node",{drawShape:function(a,i){var n=i.addShape("rect",{attrs:t({x:-75,y:-25,width:150,height:50,radius:4,fill:"#FFD591",fillOpacity:1},e[a.type])});return n},setState:function(t,e,a){var i=a.getContainer(),n=i.get("children")[0];"selected"===t&&(e?n.attr("fill","#F6C277"):n.attr("fill","#FFD591"))},getAnchorPoints:function(){return[[0,.5],[1,.5]]}},"single-shape"),r.a.registerNode("statusNode",{drawShape:function(t,e){var a=e.addShape("circle",{attrs:{x:0,y:0,r:6,fill:t.active?"#AB83E4":"#ccc"}});return a}},"single-shape"),r.a.registerEdge("line-with-arrow",{itemType:"edge",draw:function(t,e){var a=t.startPoint,i=t.endPoint,n={x:(a.x+i.x)/2,y:(a.y+i.y)/2},l={x:(a.x+n.x)/2,y:a.y},s=e.addShape("path",{attrs:{path:[["M",a.x,a.y],["Q",l.x+8,l.y,n.x,n.y],["T",i.x-8,i.y],["L",i.x,i.y]],stroke:"#ccc",lineWidth:1.6,endArrow:{path:"M 4,0 L -4,-4 L -4,4 Z",d:4}}}),o=t.source,r=t.target;return e.addShape("circle",{attrs:{id:"statusNode"+o+"-"+r,r:6,x:n.x,y:n.y,fill:t.active?"#AB83E4":"#ccc"}}),s}}),r.a.registerBehavior("click-add-node",{getEvents:function(){return{"canvas:click":"onClick"}},onClick:function(t){var e=this.graph;e.addItem("node",{x:t.x,y:t.y,id:r.a.Util.uniqueId()})}}),r.a.registerBehavior("click-add-edge",{getEvents:function(){return{"node:click":"onClick",mousemove:"onMousemove","edge:click":"onEdgeClick"}},onClick:function(t){var e=t.item,a=this.graph,i={x:t.x,y:t.y},n=e.getModel();this.addingEdge&&this.edge?(a.updateItem(this.edge,{target:n.id}),this.edge=null,this.addingEdge=!1):(this.edge=a.addItem("edge",{source:n.id,target:i}),this.addingEdge=!0)},onMousemove:function(t){var e={x:t.x,y:t.y};this.addingEdge&&this.edge&&this.graph.updateItem(this.edge,{target:e})},onEdgeClick:function(){var t=ev.item;this.addingEdge&&this.edge==t&&(graph.removeItem(this.edge),this.edge=null,this.addingEdge=!1)}})}}},C=G,E=Object(f["a"])(C,_,x,!1,null,"2eaa6da6",null),I=E.exports,D={name:"G6_table",components:{GMenu:g,GEditor:w,GDraw:I},data:function(){return{G6_width:null,isShow:!1,isShowEdit:!0}},created:function(){var t=this;this.$nextTick(function(e){t.handleInitParam()})},methods:{handleInitParam:function(){var t=document.getElementById("G6");this.G6_width=t.offsetWidth,this.isShow=!0},handleCloseEdit:function(){this.isShowEdit=!1}}},S=D,$=(a("7b27"),Object(f["a"])(S,i,n,!1,null,"534a5c50",null));e["default"]=$.exports},"4b07":function(t,e,a){},"7b27":function(t,e,a){"use strict";var i=a("0f77"),n=a.n(i);n.a},b169:function(t,e,a){"use strict";var i=a("2cb0"),n=a.n(i);n.a},bbdb:function(t,e,a){"use strict";var i=a("4b07"),n=a.n(i);n.a}}]);