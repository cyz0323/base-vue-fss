(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2140b7"],{aeeb:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{staticClass:"box-card",staticStyle:{height:"100%"}},[a("div",{staticStyle:{border:"1px solid #ffa"},attrs:{id:"mountNode"}})])},i=[],n=a("07cd"),d=a.n(n),l={name:"customTable",data:function(){return{title:"自定义数据表格",activeName:"first-ele",showPagination:!0,tableData:{nodes:[{id:"1",label:"请求回放1（开始）",type:"begin"},{id:"2",label:"交易创建"},{id:"3",label:"请求回放3"},{id:"4",label:"请求回放4"},{id:"5",label:"请求回放5"},{id:"6",label:"请求回放6"},{id:"7",label:"请求回放2（结束）",type:"end"}],edges:[{source:"1",target:"2"},{source:"1",target:"3"},{source:"2",target:"5"},{source:"5",target:"6"},{source:"6",target:"7"},{source:"3",target:"4"},{source:"4",target:"7"}]}}},created:function(){var e=this;this.$nextTick(function(t){var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},r={begin:{fill:"#9FD4FB"},end:{fill:"#C2E999"}};d.a.registerNode("node",{drawShape:function(e,t){var i=t.addShape("rect",{attrs:a({x:-75,y:-25,width:150,height:50,radius:4,fill:"#FFD591",fillOpacity:1},r[e.type])});return i},setState:function(e,t,a){var r=a.getContainer(),i=r.get("children")[0];"selected"===e&&(t?i.attr("fill","#F6C277"):i.attr("fill","#FFD591"))},getAnchorPoints:function(){return[[0,.5],[1,.5]]}},"single-shape"),d.a.registerNode("statusNode",{drawShape:function(e,t){var a=t.addShape("circle",{attrs:{x:0,y:0,r:6,fill:e.active?"#AB83E4":"#ccc"}});return a}},"single-shape"),d.a.registerEdge("line-with-arrow",{itemType:"edge",draw:function(e,t){var a=e.startPoint,r=e.endPoint,i={x:(a.x+r.x)/2,y:(a.y+r.y)/2},n={x:(a.x+i.x)/2,y:a.y},d=t.addShape("path",{attrs:{path:[["M",a.x,a.y],["Q",n.x+8,n.y,i.x,i.y],["T",r.x-8,r.y],["L",r.x,r.y]],stroke:"#ccc",lineWidth:1.6,endArrow:{path:"M 4,0 L -4,-4 L -4,4 Z",d:4}}}),l=e.source,c=e.target;return t.addShape("circle",{attrs:{id:"statusNode"+l+"-"+c,r:6,x:i.x,y:i.y,fill:e.active?"#AB83E4":"#ccc"}}),d}});var i=new d.a.Graph({container:"mountNode",width:1e3,height:800,layout:{type:"dagre",rankdir:"LR"},modes:{default:["drag-canvas","zoom-canvas","drag-node"]},defaultNode:{shape:"node",labelCfg:{style:{fill:"#fff",fontSize:14}}},defaultEdge:{shape:"line-with-arrow",style:{endArrow:!0,lineWidth:2,stroke:"#ccc"}}});i.data(e.tableData),i.render(),i.on("edge:click",function(e){var t=e.target,a=t.get("type");"circle"===a&&alert("你点击的是边上的圆点")})})},methods:{}},c=l,o=a("2877"),s=Object(o["a"])(c,r,i,!1,null,"d3eaffde",null);t["default"]=s.exports}}]);