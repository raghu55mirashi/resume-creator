(this["webpackJsonpresume-creator"]=this["webpackJsonpresume-creator"]||[]).push([[0],{23:function(e){e.exports=JSON.parse('{"objective":"Being given to understand that you are entertaining candidates for various jobs in your esteemed organization. I offer myself as one of the candidate for a suitable job and furnish the following Curriculum Vitae for favoring of your consideration and early orders.","image":{"enable":true,"source":""},"profile":{"name":"John Doe","date_of_birth":"05-01-1999","gender":"male","father_name":"Michel Doe","marital_status":"unmarried","languages":"English, Hindi"},"address":{"at":"XYZ","post":"XYX","city":"ABCC","district":"XBXN","state":"CSCCCCC","pin_code":"5824333"},"contact":{"cell":"545454545","email":"demo@gmail.com"},"qualification":{"description":{"qualification-0":"Bachelor of Engineering in Computer Science","qualification-1":"Diploma in Computer Science"}},"skills":{"enable":true,"description":{"description-0":"Computer networking and System Services","description-1":"Windows and Linux Operating Systems"}},"experience":{"enable":true,"description":{"description-0":"1 year as Software Developer in XYZ Pvt Ltd/Mumbai","description-1":"3 Years as IT-Engineer in ABC /Mumbai"}},"certification":{"enable":true,"description":{"description-0":"Javascript developer intern certificate"}}}')},32:function(e,t,a){e.exports=a.p+"static/media/user.fd4430f2.JPG"},36:function(e,t,a){e.exports=a(53)},46:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),o=a(5),i=a(29),s=a(13),u=(a(45),a(46),a(3)),m=a(4),d=a(7),p=a(6),b=a(11),f=a(1),h=a(2),v="ADD_DATA",g="RESET_DATA",E=function(e){return{type:v,payload:e}},j=function(e){var t=e.type,a=e.label,n=void 0===a?"":a,l=e.name,c=e.placeholder,o=e.value,i=e.onHandleChange,s=e.extraButton,u=void 0!==s&&s,m=e.appendButton,d=e.removeButton,p=c.charAt(0).toUpperCase()+c.slice(1).split("_").join(" ");return r.a.createElement("label",{className:"block pl-1 pr-1"},r.a.createElement("div",{className:"text-gray-500 capitalize block"},n.split("_").join(" ")),r.a.createElement("input",{type:t,style:{width:"".concat(u?"85%":"100%")},className:"form-input mt-1 rounded-sm p-1 mb-2",onChange:i,placeholder:p,name:l,value:o}),u?r.a.createElement("span",null,r.a.createElement("button",{onClick:m,className:"p-1 inline border border-white border-solid rounded-sm ml-px hover:text-white hover:bg-black"},"+"),r.a.createElement("button",{onClick:function(e){return d(e,l)},className:"p-1 inline border border-white border-solid rounded-sm bg-red-600 hover:text-white hover:bg-black"},"-")):null)},O=function(e){var t=e.onclick,a=e.label;return r.a.createElement("h2",{className:"capitalize p-1 text-base text-black text-center cursor-pointer border-solid border-white border-t-2",onClick:t},a)};function y(e,t){var a=function(a){Object(d.a)(l,a);var n=Object(p.a)(l);function l(){var e;Object(u.a)(this,l);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state=Object(h.a)({},t,e.props[t]),e.onHandleChange=function(a){var n=a.target,r=n.name,l=n.value;e.setState(Object(h.a)({},t,Object(f.a)(Object(f.a)({},e.state[t]),{},Object(h.a)({},r,l))),(function(){var a=e.state[t];e.props.addData({section:t,value:a})}))},e}return Object(m.a)(l,[{key:"render",value:function(){var a=this,n=this.state[t];return r.a.createElement(e,null,r.a.createElement(O,{label:t,onclick:function(e){return a.props.toggle(e,t)}}),this.props.show==="".concat(t)?r.a.createElement("div",{className:" pt-2 pb-10"},Object.entries(n).map((function(e){var t=Object(b.a)(e,2),n=t[0],l=t[1];return r.a.createElement(j,{type:"text",label:n,name:n,onHandleChange:a.onHandleChange,placeholder:n,value:l,key:n})}))):null)}}]),l}(n.Component);return Object(o.b)((function(e){var a=e.resume;return Object(h.a)({},t,a[t])}),(function(e){return{addData:function(t){return e(E(t))}}}))(a)}var w=y((function(e){var t=e.children;return r.a.createElement("div",null,t)}),"contact"),x=function(e){var t=e.name,a=e.label,n=void 0===a?"":a,l=e.onHandleChange,c=e.value,o=e.placeholder;return r.a.createElement("label",{className:"block pl-2 pr-2"},r.a.createElement("span",{className:"text-gray-500 float-left capitalize"},n),r.a.createElement("textarea",{className:"form-input mt-1 w-full rounded-sm p-1",style:{height:"60vh"},name:t,onChange:l,placeholder:o,defaultValue:c}))},N=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={objective:e.props.objective},e.onHandleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(h.a)({},n,r),(function(){var t=e.state.objective;e.props.addData({section:"objective",value:t})}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state.objective;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{label:"Objective",onclick:function(t){return e.props.toggle(t,"objective")}}),"objective"===this.props.show?r.a.createElement("div",{className:" pt-2 pb-10"},r.a.createElement(x,{name:"objective",onHandleChange:this.onHandleChange,placeholder:"Objective",value:t})):null)}}]),a}(n.Component),k=Object(o.b)((function(e){return{objective:e.resume.objective}}),(function(e){return{addData:function(t){return e(E(t))}}}))(N),C=y((function(e){var t=e.children;return r.a.createElement("div",null,t)}),"address"),S=y((function(e){var t=e.children;return r.a.createElement("div",null,t)}),"profile"),D=a(30),B=a.n(D),H=a(35),A=function(e,t){return 1!==Object.keys(t).length&&Object.assign.apply(Object,Object(H.a)(Object.keys(t).filter((function(t){return t!==e})).map((function(e){return Object(h.a)({},e,t[e])}))))},I=function(e){var t=e.onEnable,a=e.enabled;return r.a.createElement("div",{className:"text-center"},r.a.createElement("label",{className:"inline-flex items-center mt-3"},r.a.createElement("input",{type:"checkbox",onChange:t,className:"form-checkbox h-5 w-5 text-indigo-600",defaultChecked:a}),r.a.createElement("span",{className:"ml-2 text-gray-700"},"Enable")))};function _(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=function(n){Object(d.a)(c,n);var l=Object(p.a)(c);function c(){var e;Object(u.a)(this,c);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=l.call.apply(l,[this].concat(n))).state=Object(h.a)({},t,e.props[t]),e.onHandleChange=function(a){var n=a.target,r=n.name,l=n.value;e.setState(Object(h.a)({},t,Object(f.a)(Object(f.a)({},e.state[t]),{},{description:Object(f.a)(Object(f.a)({},e.state[t].description),{},Object(h.a)({},r,l))})),(function(){var a=e.state[t];e.props.addData({section:t,value:a})}))},e.appendButton=function(){var a="description-".concat(B()());e.setState(Object(h.a)({},t,Object(f.a)(Object(f.a)({},e.state[t]),{},{description:Object(f.a)(Object(f.a)({},e.state[t].description),{},Object(h.a)({},a,""))})))},e.removeButton=function(a,n){var r=A(n,e.state[t].description);r?e.setState(Object(h.a)({},t,Object(f.a)(Object(f.a)({},e.state[t]),{},{description:r})),(function(){var a=e.state[t];e.props.addData({section:t,value:a})})):alert("Need to keep atleast one field")},e.onEnable=function(t,a){var n=t.target.checked;e.setState(Object(h.a)({},a,Object(f.a)(Object(f.a)({},e.state[a]),{},{enable:n})),(function(){var t=e.state[a];e.props.addData({section:a,value:t}),n?s.a.success("".concat([a]," added."),{bodyClassName:"text-center text-black-800 py-1"}):s.a.error("".concat([a]," removed."),{bodyClassName:"text-center text-black-800 py-1"})}))},e}return Object(m.a)(c,[{key:"render",value:function(){var n=this,l=this.state[t].description;return r.a.createElement(e,null,r.a.createElement(O,{label:t,onclick:function(e){return n.props.toggle(e,t)}}),this.props.show==="".concat(t)?r.a.createElement("div",{className:" pt-2 pb-10"},Object.entries(l).map((function(e){var a=Object(b.a)(e,2),l=a[0],c=a[1];return r.a.createElement(j,{type:"text",extraButton:"true",appendButton:n.appendButton,name:l,onHandleChange:n.onHandleChange,removeButton:n.removeButton,placeholder:t,value:c,key:l})})),a&&r.a.createElement(I,{onEnable:function(e){return n.onEnable(e,t)},enabled:this.state[t].enable})):null)}}]),c}(n.Component),c=function(e){var a=e.resume;return Object(h.a)({},t,a[t])},i=function(e){return{addData:function(t){return e(E(t))}}};return Object(o.b)(c,i)(l)}var R=_((function(e){var t=e.children;return r.a.createElement("div",null,t)}),"qualification"),T=_((function(e){var t=e.children;return r.a.createElement("div",null,t)}),"skills",!0),L=_((function(e){var t=e.children;return r.a.createElement("div",null,t)}),"experience",!0),P=_((function(e){var t=e.children;return r.a.createElement("div",null,t)}),"certification",!0),z=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={image:e.props.image},e.onHandleChange=function(t){var a=new FileReader;a.addEventListener("load",(function(){e.setState({image:Object(f.a)(Object(f.a)({},e.state.image),{},{source:a.result})},(function(){var t=e.state.image;e.props.addData({section:"image",value:t})}))})),a.readAsDataURL(t.target.files[0])},e.onEnable=function(t){var a=t.target.checked;e.setState({image:Object(f.a)(Object(f.a)({},e.state.image),{},{enable:a})},(function(){var t=e.state.image;e.props.addData({section:"image",value:t})}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{label:"Image",onclick:function(t){return e.props.toggle(t,"image")}}),"image"===this.props.show?r.a.createElement("div",{className:" pt-2 pb-10 text-center"},r.a.createElement("input",{type:"file",style:{width:"105px"},name:"image",onChange:this.onHandleChange}),r.a.createElement(I,{onEnable:function(t){return e.onEnable(t)},enabled:this.state.image.enable})):null)}}]),a}(n.Component),q=Object(o.b)((function(e){return{image:e.resume.image}}),(function(e){return{addData:function(t){return e(E(t))}}}))(z),F=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={show:""},e.toggle=function(t,a){e.state.show===a?e.setState({show:""}):e.setState({show:a})},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"left-right-container pt-3 shadow-2xl lg:w-64 xl:w-64 md:w-full"},r.a.createElement("div",{className:"bg-gray-300 rounded shadow flex-wrap sticky top-0"},r.a.createElement(w,{show:this.state.show,toggle:this.toggle}),r.a.createElement(k,{show:this.state.show,toggle:this.toggle}),r.a.createElement(S,{show:this.state.show,toggle:this.toggle}),r.a.createElement(C,{show:this.state.show,toggle:this.toggle}),r.a.createElement(R,{show:this.state.show,toggle:this.toggle}),r.a.createElement(T,{show:this.state.show,toggle:this.toggle}),r.a.createElement(L,{show:this.state.show,toggle:this.toggle}),r.a.createElement(P,{show:this.state.show,toggle:this.toggle}),r.a.createElement(q,{show:this.state.show,toggle:this.toggle})))}}]),a}(n.Component),M=function(e){var t=e.onClickHandle,a=e.children,n=e.color;return r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{onClick:t,className:"mt-2 mb-2 pl-3 pr-3 hover:bg-black hover:text-white bg-".concat(n,"-600 text-gray-800 font-semibold border border-gray-400 rounded shadow")},a))},J=function(e){var t=e.title,a=e.description,n=e.children;return r.a.createElement("div",{className:"bg-white rounded shadow text-center sticky top-0 mb-2"},r.a.createElement("div",{className:"info p-4"},r.a.createElement("h3",{className:"font-bold text-lg"},t),r.a.createElement("p",{className:"text-gray-500 text-sm"},a),n))},X=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).resetResume=function(){!0===window.confirm("Are you sure to reset all data?")&&(e.props.resetData(),localStorage.removeItem("persist:root"),window.location.reload(!0))},e.redirectGithub=function(){window.open("https://github.com/raghu55mirashi/resume-creator","_blank")},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"left-right-container pt-3 shadow-2xl lg:w-64 xl:w-64 md:w-full"},r.a.createElement(J,{title:"Information",description:"Changes you make to your resume are saved automatically \r to your browser's local storage.No data gets out, hence your information \r is completely secure."}),r.a.createElement(J,{title:"Reset Everything!",description:"This action will reset all your data and remove backups made to \r your browser's local storage as well, so please make sure you have exported \r your information before you reset everything."},r.a.createElement(M,{color:"red",onClickHandle:this.resetResume},"Reset")),r.a.createElement(J,{title:"Source Code",description:"Want to run the project from its source? Are you a developer willing\r to contribute to the open-source development of this project? Click the button below."},r.a.createElement(M,{color:"green",onClickHandle:this.redirectGithub},"GitHub Repo")))}}]),a}(n.Component),U=Object(o.b)(null,(function(e){return{resetData:function(){return e({type:g})}}}))(X),G=a(31),Y=a.n(G),V=a(32),W=a.n(V),Z=function(e){var t=e.objective;return r.a.createElement("div",{className:"flex"},r.a.createElement("div",null,r.a.createElement("h1",{className:"font-bold uppercase pb-1"},"objective:"),r.a.createElement("p",{className:"text-base font-semibold"},t)))},K=function(e){var t=e.profile;return r.a.createElement("div",{className:"flex-1"},r.a.createElement("h1",{className:"font-bold uppercase py-1 pt-4"},"PERSONAL PROFILE:"),r.a.createElement("table",{className:"table-auto"},r.a.createElement("thead",null),r.a.createElement("tbody",null,Object.entries(t).map((function(e){var t=Object(b.a)(e,2),a=t[0],n=t[1];return r.a.createElement("tr",{key:a},r.a.createElement("td",{className:"align-top pt-2 capitalize"},a.split("_").join(" ")),r.a.createElement("td",{className:"pr-2 align-top pt-2"},":"),r.a.createElement("td",{className:"pt-2 align-top capitalize"},n))})))))},Q=function(e){var t=e.address;return r.a.createElement("div",{className:"flex-initial max-w-xs"},r.a.createElement("p",{className:"font-bold pr-10 pt-4"},"Permanent Address:"),r.a.createElement("table",null,r.a.createElement("thead",null),r.a.createElement("tbody",null,Object.entries(t).map((function(e){var t=Object(b.a)(e,2),a=t[0],n=t[1];return r.a.createElement("tr",{key:a},r.a.createElement("td",{className:"align-top pt-2 capitalize"},a.split("_").join(" ")),r.a.createElement("td",{className:"pr-2 align-top pt-2"},":"),r.a.createElement("td",{className:"pt-2 align-top capitalize"},n))})))))},$=function(e){var t=e.contact,a=e.image,n=a.source?a.source:W.a;return r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"flex-1 text-left"},r.a.createElement("span",{className:"text-xs block"},"Contact No: ",t.cell),r.a.createElement("span",{className:"text-xs block"},t.email)),r.a.createElement("div",{className:"flex-1 py-10 text-center pt-16"},r.a.createElement("span",{className:"font-bold text-lg"},"CURRICULUM VITAE")),r.a.createElement("div",{className:"flex-1 overflow-hidden"},r.a.createElement("div",{className:"flex justify-center h-40"},a.enable&&r.a.createElement("img",{src:n,alt:"pic",id:"photo",className:"h-40 w-40  rounded-full object-center"}))))},ee=function(e){var t=e.profile,a=e.address;return r.a.createElement("div",{className:"flex"},r.a.createElement(K,{profile:t}),r.a.createElement(Q,{address:a}))},te=function(e){var t=e.qualification;return r.a.createElement("div",{className:"flex"},r.a.createElement("div",null,r.a.createElement("h1",{className:"font-bold uppercase pb-1 pt-4"},"qualification:"),Object.values(t.description).map((function(e,t){return r.a.createElement("p",{className:"text-base font-semibold pl-8",key:t},e)}))))},ae=function(e){var t=e.skills;return r.a.createElement("div",{className:"flex"},r.a.createElement("div",null,r.a.createElement("h1",{className:"font-bold uppercase pb-1 pt-4"},"additional skills:"),r.a.createElement("ul",{className:"pl-8"},Object.values(t.description).map((function(e,t){return r.a.createElement("li",{className:"list-disc text-base",key:t},e)})))))},ne=function(e){var t=e.experience;return r.a.createElement("div",{className:"flex"},r.a.createElement("div",null,r.a.createElement("h1",{className:"font-bold uppercase pb-1 pt-4"},"Work Experience:"),Object.values(t.description).map((function(e,t){return r.a.createElement("p",{className:"text-base pl-8",key:t},e)}))))},re=function(e){var t=e.certification;return r.a.createElement("div",{className:"flex"},r.a.createElement("div",null,r.a.createElement("h1",{className:"font-bold uppercase pb-1 pt-4"},"certification:"),Object.values(t.description).map((function(e,t){return r.a.createElement("p",{className:"text-base pl-8",key:t},e)}))))},le=function(){return r.a.createElement("div",{className:"flex"},r.a.createElement("div",null,r.a.createElement("h1",{className:"font-bold uppercase pb-1 pt-4"},"declaration:"),r.a.createElement("p",{className:"text-base"},"I hereby declare that the above mentioned particulars are true and genuine to the best of my knowledge and belief.")))},ce=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.resume,t=e.objective,a=e.profile,n=e.address,l=e.contact,c=e.qualification,o=e.image,i=e.skills,s=e.experience,u=e.certification,m=e.declaration;return r.a.createElement(r.a.Fragment,null,r.a.createElement($,{contact:l,image:o}),r.a.createElement(Z,{objective:t}),r.a.createElement(ee,{profile:a,address:n}),r.a.createElement(te,{qualification:c}),i.enable&&r.a.createElement(ae,{skills:i}),s.enable&&r.a.createElement(ne,{experience:s}),u.enable&&r.a.createElement(re,{certification:u}),r.a.createElement(le,{declaration:m}))}}]),a}(r.a.Component),oe=Object(o.b)((function(e){return{resume:e.resume}}))(ce),ie=function(){return r.a.createElement("div",{className:"flex-1 overflow-hidden shadow-inner relative w-full h-full"},r.a.createElement(Y.a,{handle:".drag",defaultPosition:{x:0,y:0},position:null,grid:[1,1],scale:1},r.a.createElement("div",{className:"drag px-8 py-16 m-3 bg-white shadow-2xl rounded-sm cursor-move",id:"page"},r.a.createElement(oe,null))),r.a.createElement("div",{className:"bottom-0 fixed z-50"},r.a.createElement(M,{onClickHandle:function(){var e=document.getElementById("page").innerHTML;document.getElementById("print-page").innerHTML=e,window.alert("Select option to save as PDF"),window.print()},color:"blue"},"Print or Save")))};var se=function(){return r.a.createElement("div",{className:"sm:flex-none md:flex lg:flex xl:flex bg-gray-300"},r.a.createElement(F,null),r.a.createElement(ie,null),r.a.createElement(U,null))},ue=a(9),me=a(18),de=(a(50),a(33)),pe=a(34),be=a.n(pe),fe=a(23),he=fe,ve=fe,ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(f.a)(Object(f.a)({},e),{},Object(h.a)({},t.payload.section,t.payload.value));case g:return he;default:return e}},Ee={key:"root",storage:be.a,whitelist:["resume"]},je=Object(ue.c)({resume:ge}),Oe=Object(me.a)(Ee,je),ye=[de.a];var we=Object(ue.d)(Oe,ue.a.apply(void 0,ye)),xe=Object(me.b)(we);s.a.configure({autoClose:3e3,closeButton:!1,hideProgressBar:!0,position:s.a.POSITION.BOTTOM_LEFT}),c.a.render(r.a.createElement(i.a,{persistor:xe},r.a.createElement(o.a,{store:we},r.a.createElement(se,null))),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.881fc2f9.chunk.js.map