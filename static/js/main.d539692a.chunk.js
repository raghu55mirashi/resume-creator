(this["webpackJsonpresume-creator"]=this["webpackJsonpresume-creator"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/user.fd4430f2.JPG"},25:function(e){e.exports=JSON.parse('{"objective":"Being given to understand that you are entertaining candidates for various jobs in your esteemed organization. I offer myself as one of the candidate for a suitable job and furnish the following Curriculum Vitae for favouring of your consideration and early orders.","image":{"enable":true,"source":""},"profile":{"name":"John Doe","date_of_birth":"05-01-1999","gender":"male","father_name":"Michel Doe","marital_status":"unmarried","languages":"English, Hindi"},"address":{"at":"Abcd","post":"Xyz","city":"Pune","district":"Pune","state":"Maharashtra","pin_code":"5824333"},"contact":{"cell":"545454545","email":"demo@gmail.com"},"qualification":{"description":{"qualification-0":"Bachelor of Engineering in Computer Science","qualification-1":"Diploma in Computer Science"}},"skills":{"enable":true,"description":{"description-0":"Computer networking and System Services","description-1":"Windows and Linux Operating Systems"}},"experience":{"enable":true,"description":{"description-0":"1 year as Software Developer in XYZ Pvt Ltd/Pune","description-1":"3 Years as IT-Engineer in ABC /Pune"}},"certification":{"enable":true,"description":{"description-0":"Javascript developer intern certificate"}},"add_section":{"enable":false,"section":{"section_name":"","description":""}},"templates":{"template_name":"Template1"}}')},32:function(e,t,a){e.exports=a.p+"static/media/temp1.69ec3655.JPG"},33:function(e,t,a){e.exports=a.p+"static/media/temp2.5e8d9f95.JPG"},38:function(e,t,a){e.exports=a(55)},48:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),o=a(5),i=a(31),s=a(12),m=(a(47),a(48),a(3)),u=a(4),d=a(7),p=a(6),b=a(8),f=a(1),v=a(2),E="ADD_DATA",h="RESET_DATA",g=function(e){return{type:E,payload:e}},j=function(e){var t=e.type,a=e.section,n=void 0===a?"":a,c=e.label,l=void 0===c?"":c,o=e.name,i=e.placeholder,s=e.value,m=e.onHandleChange,u=e.extraButton,d=void 0!==u&&u,p=e.appendButton,b=e.removeButton,f=i.charAt(0).toUpperCase()+i.slice(1).split("_").join(" ");return r.a.createElement("label",{className:"block pl-1 pr-1"},r.a.createElement("div",{className:"text-gray-500 capitalize block"},l.split("_").join(" ")),r.a.createElement("input",{type:t,style:{width:"".concat(d?"85%":"100%")},className:"form-input mt-1 rounded-sm p-1 mb-2",onChange:m,placeholder:f,name:o,value:s}),d?r.a.createElement("span",null,r.a.createElement("button",{onClick:function(){return p(n)},className:"extrabtn inline border border-white border-solid rounded-sm ml-px hover:text-white hover:bg-black"},"+"),r.a.createElement("button",{onClick:function(e){return b(e,o,n)},className:"extrabtn inline border border-white border-solid rounded-sm bg-red-600 hover:text-white hover:bg-black"},"-")):null)},O=function(e){var t=e.onclick,a=e.label;return r.a.createElement("h2",{className:"hover:bg-gray-200 capitalize p-1 text-base text-black text-center cursor-pointer border-solid border-white border-t-2",onClick:t},a)};function N(e,t){var a=function(a){Object(d.a)(c,a);var n=Object(p.a)(c);function c(){var e;Object(m.a)(this,c);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=n.call.apply(n,[this].concat(r))).state=Object(v.a)({},t,e.props[t]),e.onHandleChange=function(a){var n=a.target,r=n.name,c=n.value;e.setState(Object(v.a)({},t,Object(f.a)(Object(f.a)({},e.state[t]),{},Object(v.a)({},r,c))),(function(){var a=e.state[t];e.props.addData({section:t,value:a})}))},e}return Object(u.a)(c,[{key:"render",value:function(){var a=this,n=this.state[t];return r.a.createElement(e,null,r.a.createElement(O,{label:t,onclick:function(e){return a.props.toggle(e,t)}}),this.props.show==="".concat(t)?r.a.createElement("div",{className:"pt-2 pb-10"},Object.entries(n).map((function(e){var t=Object(b.a)(e,2),n=t[0],c=t[1];return r.a.createElement(j,{type:"text",label:n,name:n,onHandleChange:a.onHandleChange,placeholder:n,value:c,key:n})}))):null)}}]),c}(n.Component);return Object(o.b)((function(e){var a=e.resume;return Object(v.a)({},t,a[t])}),(function(e){return{addData:function(t){return e(g(t))}}}))(a)}var y=N((function(e){var t=e.children;return r.a.createElement("div",null,t)}),"contact"),x=function(e){var t=e.name,a=e.label,n=void 0===a?"":a,c=e.onHandleChange,l=e.value,o=e.placeholder;return r.a.createElement("label",{className:"block pl-2 pr-2"},r.a.createElement("span",{className:"text-gray-500 float-left capitalize"},n),r.a.createElement("textarea",{className:"form-input mt-1 w-full rounded-sm p-1",style:{height:"60vh"},name:t,onChange:c,placeholder:o,defaultValue:l}))},k=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={objective:e.props.objective},e.onHandleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(v.a)({},n,r),(function(){var t=e.state.objective;e.props.addData({section:"objective",value:t})}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state.objective;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{label:"Objective",onclick:function(t){return e.props.toggle(t,"objective")}}),"objective"===this.props.show?r.a.createElement("div",{className:" pt-2 pb-10"},r.a.createElement(x,{name:"objective",onHandleChange:this.onHandleChange,placeholder:"Objective",value:t})):null)}}]),a}(n.Component),w=Object(o.b)((function(e){return{objective:e.resume.objective}}),(function(e){return{addData:function(t){return e(g(t))}}}))(k),_=N((function(e){var t=e.children;return r.a.createElement("div",null,t)}),"address"),C=N((function(e){var t=e.children;return r.a.createElement("div",null,t)}),"profile"),S=a(16),D=a.n(S),A=a(37),T=function(e,t){return 1!==Object.keys(t).length&&((!("section_name"in t)&&!Object.keys(t)[1].startsWith("section")||2!==Object.keys(t).length)&&Object.assign.apply(Object,Object(A.a)(Object.keys(t).filter((function(t){return t!==e})).map((function(e){return Object(v.a)({},e,t[e])})))))},B=function(e){var t=e.onEnable,a=e.enabled;return r.a.createElement("div",{className:"text-center"},r.a.createElement("label",{className:"inline-flex items-center mt-3"},r.a.createElement("input",{type:"checkbox",onChange:t,className:"form-checkbox h-5 w-5 text-indigo-600",defaultChecked:a}),r.a.createElement("span",{className:"ml-2 text-gray-700"},"Enable")))};function H(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=function(n){Object(d.a)(l,n);var c=Object(p.a)(l);function l(){var e;Object(m.a)(this,l);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=c.call.apply(c,[this].concat(n))).state=Object(v.a)({},t,e.props[t]),e.onHandleChange=function(a){var n=a.target,r=n.name,c=n.value;e.setState(Object(v.a)({},t,Object(f.a)(Object(f.a)({},e.state[t]),{},{description:Object(f.a)(Object(f.a)({},e.state[t].description),{},Object(v.a)({},r,c))})),(function(){var a=e.state[t];e.props.addData({section:t,value:a})}))},e.appendButton=function(){var a="description-".concat(D()());e.setState(Object(v.a)({},t,Object(f.a)(Object(f.a)({},e.state[t]),{},{description:Object(f.a)(Object(f.a)({},e.state[t].description),{},Object(v.a)({},a,""))})))},e.removeButton=function(a,n){var r=T(n,e.state[t].description);r?e.setState(Object(v.a)({},t,Object(f.a)(Object(f.a)({},e.state[t]),{},{description:r})),(function(){var a=e.state[t];e.props.addData({section:t,value:a})})):alert("Need to keep atleast one field")},e.onEnable=function(t,a){var n=t.target.checked;e.setState(Object(v.a)({},a,Object(f.a)(Object(f.a)({},e.state[a]),{},{enable:n})),(function(){var t=e.state[a];e.props.addData({section:a,value:t}),n?s.a.success("".concat([a]," added."),{bodyClassName:"text-center text-black-800 py-1"}):s.a.error("".concat([a]," removed."),{bodyClassName:"text-center text-black-800 py-1"})}))},e}return Object(u.a)(l,[{key:"render",value:function(){var n=this,c=this.state[t].description;return r.a.createElement(e,null,r.a.createElement(O,{label:t,onclick:function(e){return n.props.toggle(e,t)}}),this.props.show==="".concat(t)?r.a.createElement("div",{className:" pt-2 pb-10"},Object.entries(c).map((function(e){var a=Object(b.a)(e,2),c=a[0],l=a[1];return r.a.createElement(j,{type:"text",extraButton:"true",appendButton:n.appendButton,name:c,onHandleChange:n.onHandleChange,removeButton:n.removeButton,placeholder:t,value:l,key:c})})),a&&r.a.createElement(B,{onEnable:function(e){return n.onEnable(e,t)},enabled:this.state[t].enable})):null)}}]),l}(n.Component),l=function(e){var a=e.resume;return Object(v.a)({},t,a[t])},i=function(e){return{addData:function(t){return e(g(t))}}};return Object(o.b)(l,i)(c)}var P=H((function(e){var t=e.children;return r.a.createElement("div",null,t)}),"qualification"),I=H((function(e){var t=e.children;return r.a.createElement("div",null,t)}),"skills",!0),R=H((function(e){var t=e.children;return r.a.createElement("div",null,t)}),"experience",!0),z=H((function(e){var t=e.children;return r.a.createElement("div",null,t)}),"certification",!0),L=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={image:e.props.image},e.onHandleChange=function(t){var a=new FileReader;a.addEventListener("load",(function(){e.setState({image:Object(f.a)(Object(f.a)({},e.state.image),{},{source:a.result})},(function(){var t=e.state.image;e.props.addData({section:"image",value:t})}))})),a.readAsDataURL(t.target.files[0])},e.onEnable=function(t){var a=t.target.checked;e.setState({image:Object(f.a)(Object(f.a)({},e.state.image),{},{enable:a})},(function(){var t=e.state.image;e.props.addData({section:"image",value:t})}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{label:"Image",onclick:function(t){return e.props.toggle(t,"image")}}),"image"===this.props.show?r.a.createElement("div",{className:" pt-2 pb-10 text-center"},r.a.createElement("input",{type:"file",style:{width:"104px"},name:"image",onChange:this.onHandleChange}),r.a.createElement(B,{onEnable:function(t){return e.onEnable(t)},enabled:this.state.image.enable})):null)}}]),a}(n.Component),M=Object(o.b)((function(e){return{image:e.resume.image}}),(function(e){return{addData:function(t){return e(g(t))}}}))(L),q=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={add_section:e.props.add_section},e.onChangeAddSection=function(t,a){var n=t.target.value;e.setState({add_section:Object(f.a)(Object(f.a)({},e.state.add_section),{},Object(v.a)({},a,Object(f.a)(Object(f.a)({},e.state.add_section[a]),{},{section_name:n})))},(function(){var t=e.state.add_section;e.props.addData({section:"add_section",value:t})}))},e.onChangeAddDescription=function(t,a,n){var r=t.target.value;e.setState({add_section:Object(f.a)(Object(f.a)({},e.state.add_section),{},Object(v.a)({},a,Object(f.a)(Object(f.a)({},e.state.add_section[a]),{},Object(v.a)({},n,r))))},(function(){var t=e.state.add_section;e.props.addData({section:"add_section",value:t})}))},e.appendSection=function(){var t="section-".concat(D()());e.setState({add_section:Object(f.a)(Object(f.a)({},e.state.add_section),{},Object(v.a)({},t,{section_name:"",description:""}))})},e.appendDescription=function(t){var a="description-".concat(D()());e.setState({add_section:Object(f.a)(Object(f.a)({},e.state.add_section),{},Object(v.a)({},t,Object(f.a)(Object(f.a)({},e.state.add_section[t]),{},Object(v.a)({},a,""))))})},e.removeSection=function(t,a){var n=T(a,e.state.add_section);n?e.setState(Object(f.a)(Object(f.a)({},e.state),{},{add_section:n}),(function(){var t=e.state.add_section;e.props.addData({section:"add_section",value:t})})):alert("Need to keep atleast one field")},e.removeDescription=function(t,a,n){var r=T(a,e.state.add_section[n]);r?e.setState({add_section:Object(f.a)(Object(f.a)({},e.state.add_section),{},Object(v.a)({},n,r))},(function(){var t=e.state.add_section;e.props.addData({section:"add_section",value:t})})):alert("Need to keep atleast one field")},e.onEnable=function(t,a){var n=t.target.checked;e.setState(Object(v.a)({},a,Object(f.a)(Object(f.a)({},e.state[a]),{},{enable:n})),(function(){var t=e.state[a];e.props.addData({section:a,value:t}),n?s.a.success("".concat([a]," added."),{bodyClassName:"text-center text-black-800 py-1"}):s.a.error("".concat([a]," removed."),{bodyClassName:"text-center text-black-800 py-1"})}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state.add_section;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{label:"Add More",onclick:function(t){return e.props.toggle(t,"Add More")}}),"Add More"===this.props.show?r.a.createElement("span",{className:" pb-2 "},Object.entries(t).map((function(a){var n=Object(b.a)(a,2),c=n[0],l=n[1];return"enable"!==c?r.a.createElement("div",{className:" border-b-2 border-white border-solid",key:c},r.a.createElement("h4",{className:"pl-2 text-gray-500"},"Section"),r.a.createElement(j,{type:"text",extraButton:!0,appendButton:e.appendSection,name:c,onHandleChange:function(t){return e.onChangeAddSection(t,c)},removeButton:e.removeSection,placeholder:"Add Section",value:t[c].section_name}),Object.entries(l).map((function(t){var a=Object(b.a)(t,2),n=a[0],l=a[1];return"section_name"!==n?r.a.createElement("span",{key:n},r.a.createElement("h4",{className:"pl-2 text-gray-500"},"Description"),r.a.createElement(j,{type:"text",extraButton:"true",section:c,appendButton:e.appendDescription,name:n,onHandleChange:function(t){return e.onChangeAddDescription(t,c,n)},removeButton:e.removeDescription,placeholder:"Add Description",value:l})):null}))):null})),r.a.createElement(B,{onEnable:function(t){return e.onEnable(t,"add_section")},enabled:this.state.add_section.enable})):null)}}]),a}(n.Component),F=Object(o.b)((function(e){return{add_section:e.resume.add_section}}),(function(e){return{addData:function(t){return e(g(t))}}}))(q),J=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={show:""},e.toggle=function(t,a){e.state.show===a?e.setState({show:""}):e.setState({show:a})},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"left-right-container pt-3 shadow-2xl lg:w-64 xl:w-64 md:w-full"},r.a.createElement("div",{className:"bg-gray-300 rounded shadow flex-wrap sticky top-0"},r.a.createElement(y,{show:this.state.show,toggle:this.toggle}),r.a.createElement(w,{show:this.state.show,toggle:this.toggle}),r.a.createElement(C,{show:this.state.show,toggle:this.toggle}),r.a.createElement(_,{show:this.state.show,toggle:this.toggle}),r.a.createElement(P,{show:this.state.show,toggle:this.toggle}),r.a.createElement(I,{show:this.state.show,toggle:this.toggle}),r.a.createElement(R,{show:this.state.show,toggle:this.toggle}),r.a.createElement(z,{show:this.state.show,toggle:this.toggle}),r.a.createElement(M,{show:this.state.show,toggle:this.toggle}),r.a.createElement(F,{show:this.state.show,toggle:this.toggle})))}}]),a}(n.Component),U=function(e){var t=e.onClickHandle,a=e.children,n=e.color;return r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{onClick:t,className:"mt-2 mb-2 pl-3 pr-3 hover:bg-black hover:text-white bg-".concat(n,"-600 text-gray-800 font-semibold border border-gray-400 rounded shadow")},a))},G=function(e){var t=e.title,a=e.description,n=void 0===a?"":a,c=e.children;return r.a.createElement("div",{className:"bg-white rounded shadow text-center sticky top-0 mb-2"},r.a.createElement("div",{className:"info p-4"},r.a.createElement("h3",{className:"font-bold text-lg"},t),r.a.createElement("span",{className:"text-gray-500 text-sm"},n),c))},W=a(32),V=a.n(W),X=a(33),Y=a.n(X),Z=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={template_name:e.props.template},e.resetResume=function(){!0===window.confirm("Are you sure to reset all data?")&&(e.props.resetData(),localStorage.removeItem("persist:root"),window.location.reload(!0))},e.redirectGithub=function(){window.open("https://github.com/raghu55mirashi/resume-creator","_blank")},e.selectTemplate=function(t){e.setState({template_name:t},(function(){var t=e.state;e.props.selectTemplate({section:"templates",value:t})}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"left-right-container pt-3 shadow-2xl lg:w-64 xl:w-64 md:w-full"},r.a.createElement(G,{title:"Templates"},r.a.createElement("div",{className:"flex pt-2"},r.a.createElement("div",{onClick:function(){return e.selectTemplate("Template1")},className:"".concat("Template1"===this.state.template_name?"border-2":"border","  w-2/4 float-left border-blue-400 border-solid cursor-pointer")},r.a.createElement("img",{src:V.a,alt:""})),r.a.createElement("div",{onClick:function(){return e.selectTemplate("Template2")},className:"".concat("Template2"===this.state.template_name?"border-2":"border"," ml-1 w-2/4 float-right border-blue-400 border-solid cursor-pointer")},r.a.createElement("img",{src:Y.a,alt:""})))),r.a.createElement(G,{title:"Information",description:"Changes you make to your resume are saved automatically \r to your browser's local storage.No data gets out, hence your information \r is completely secure."}),r.a.createElement(G,{title:"Reset Everything!",description:"This action will reset all your data and remove backups made to \r your browser's local storage as well, so please make sure you have exported \r your information before you reset everything."},r.a.createElement(U,{color:"red",onClickHandle:this.resetResume},"Reset")),r.a.createElement(G,{title:"Source Code",description:"Want to run the project from its source? Are you a developer willing\r to contribute to the open-source development of this project? Click the button below."},r.a.createElement(U,{color:"green",onClickHandle:this.redirectGithub},"GitHub Repo")))}}]),a}(n.Component),K=Object(o.b)((function(e){return{template:e.resume.templates.template_name}}),(function(e){return{resetData:function(){return e({type:h})},selectTemplate:function(t){return e(g(t))}}}))(Z),Q=a(34),$=a.n(Q),ee=a(19),te=a.n(ee),ae=function(e){var t=e.objective;return r.a.createElement("div",{className:"flex"},r.a.createElement("div",null,r.a.createElement("div",{className:"title font-bold uppercase pb-1"},"objective:"),r.a.createElement("p",{className:"font-normal"},t)))},ne=function(e){var t=e.profile;return r.a.createElement("div",{className:"flex-1"},r.a.createElement("div",{className:"title font-bold uppercase py-1 pt-4"},"PERSONAL PROFILE:"),r.a.createElement("table",{className:"table-auto"},r.a.createElement("thead",null),r.a.createElement("tbody",null,Object.entries(t).map((function(e){var t=Object(b.a)(e,2),a=t[0],n=t[1];return r.a.createElement("tr",{key:a},r.a.createElement("td",{className:"align-top pt-2 capitalize"},a.split("_").join(" ")),r.a.createElement("td",{className:"pr-2 align-top pt-2"},":"),r.a.createElement("td",{className:"pt-2 align-top capitalize"},n))})))))},re=function(e){var t=e.address;return r.a.createElement("div",{className:"flex-initial min-w-xs pr-0 address"},r.a.createElement("p",{className:"font-bold pt-4"},"Permanent Address:"),r.a.createElement("table",null,r.a.createElement("thead",null),r.a.createElement("tbody",null,Object.entries(t).map((function(e){var t=Object(b.a)(e,2),a=t[0],n=t[1];return r.a.createElement("tr",{key:a},r.a.createElement("td",{className:"align-top pt-2 capitalize"},a.split("_").join(" ")),r.a.createElement("td",{className:"pr-2 align-top pt-2"},":"),r.a.createElement("td",{className:"pt-2 align-top capitalize"},n))})))))},ce=function(e){var t=e.contact,a=e.image,n=a.source?a.source:te.a;return r.a.createElement("div",{className:"flex",id:"sc"},r.a.createElement("div",{className:"flex-1 text-left pt-3"},r.a.createElement("span",{className:"text-xs block"},"Contact No: ",t.cell),r.a.createElement("span",{className:"text-xs block"},t.email)),r.a.createElement("div",{className:"flex-1 py-10 text-center pt-16"},r.a.createElement("span",{className:"curriculum font-bold lg:text-lg"},"CURRICULUM VITAE")),r.a.createElement("div",{className:"flex-1 overflow-hidden"},r.a.createElement("div",{className:"flex justify-center lg:h-40 sm:h-24"},a.enable&&r.a.createElement("img",{src:n,alt:"pic",id:"photo",className:"h-40 w-40  rounded-full object-center"}))))},le=function(e){var t=e.profile,a=e.address;return r.a.createElement("div",{className:"flex"},r.a.createElement(ne,{profile:t}),r.a.createElement(re,{address:a}))},oe=function(e){var t=e.qualification;return r.a.createElement("div",{className:"flex"},r.a.createElement("div",null,r.a.createElement("div",{className:"title font-bold uppercase pb-1 pt-4"},"qualification:"),Object.values(t.description).map((function(e,t){return r.a.createElement("p",{className:"font-semibold pl-8",key:t},e)}))))},ie=function(e){var t=e.skills;return r.a.createElement("div",{className:"flex"},r.a.createElement("div",null,r.a.createElement("div",{className:"title font-bold uppercase pb-1 pt-4"},"additional skills:"),r.a.createElement("ul",{className:"pl-8"},Object.values(t.description).map((function(e,t){return r.a.createElement("li",{className:"list-disc",key:t},r.a.createElement("p",null,e))})))))},se=function(e){var t=e.experience;return r.a.createElement("div",{className:"flex"},r.a.createElement("div",null,r.a.createElement("div",{className:"title font-bold uppercase pb-1 pt-4"},"Work Experience:"),Object.values(t.description).map((function(e,t){return r.a.createElement("p",{className:"pl-8",key:t},e)}))))},me=function(e){var t=e.certification;return r.a.createElement("div",{className:"flex"},r.a.createElement("div",null,r.a.createElement("div",{className:"title font-bold uppercase pb-1 pt-4"},"certification:"),Object.values(t.description).map((function(e,t){return r.a.createElement("p",{className:"pl-8",key:t},e)}))))},ue=function(e){var t=e.add_section;return r.a.createElement("div",{className:"flex"},r.a.createElement("div",null,Object.entries(t).map((function(e){var t=Object(b.a)(e,2),a=t[0],n=t[1];return"enable"!==a?""!==n.section_name&&r.a.createElement("div",{key:a},Object.entries(n).map((function(e){var t=Object(b.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{key:a},"section_name"===a&&r.a.createElement("div",{className:"title font-bold uppercase pb-1 pt-4"},"".concat(n?n+":":"")),"section_name"!==a&&r.a.createElement("p",{className:"pl-8"},n))}))):null}))))},de=function(){return r.a.createElement("div",{className:"flex"},r.a.createElement("div",null,r.a.createElement("div",{className:"title font-bold uppercase pb-1 pt-4"},"declaration:"),r.a.createElement("p",{className:"lg:text-base sm:text-sm"},"I hereby declare that the above mentioned particulars are true and genuine to the best of my knowledge and belief.")))},pe=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.resume,t=e.objective,a=e.profile,n=e.address,c=e.contact,l=e.qualification,o=e.image,i=e.skills,s=e.experience,m=e.certification,u=e.add_section,d=e.declaration;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,{contact:c,image:o}),r.a.createElement(ae,{objective:t}),r.a.createElement(le,{profile:a,address:n}),r.a.createElement(oe,{qualification:l}),i.enable&&r.a.createElement(ie,{skills:i}),s.enable&&r.a.createElement(se,{experience:s}),m.enable&&r.a.createElement(me,{certification:m}),u.enable&&r.a.createElement(ue,{add_section:u}),r.a.createElement(de,{declaration:d}))}}]),a}(r.a.Component),be=Object(o.b)((function(e){return{resume:e.resume}}))(pe),fe=function(e){var t=e.objective;return r.a.createElement("div",{className:"flex"},r.a.createElement("div",null,r.a.createElement("div",{className:"title font-bold uppercase bg-blue-100 block pl-2"},"objective:"),r.a.createElement("p",{className:"font-normal mt-1 pl-2"},t)))},ve=function(e){var t=e.profile;return r.a.createElement("div",{className:"flex-1 pt-4"},r.a.createElement("div",{className:"title font-bold uppercase bg-blue-100 block pl-2"},"PERSONAL PROFILE:"),r.a.createElement("table",{className:"table-auto"},r.a.createElement("thead",null),r.a.createElement("tbody",null,Object.entries(t).map((function(e){var t=Object(b.a)(e,2),a=t[0],n=t[1];return r.a.createElement("tr",{key:a},r.a.createElement("td",{className:"align-top pt-2 pl-2 capitalize"},a.split("_").join(" ")),r.a.createElement("td",{className:"pr-2 align-top pt-2"},":"),r.a.createElement("td",{className:"pt-2 align-top capitalize"},n))})))))},Ee=function(e){var t=e.address;return r.a.createElement("div",{className:"flex-1 min-w-xs pt-4"},r.a.createElement("div",{className:"font-bold bg-blue-100 block"},"Permanent Address:"),r.a.createElement("table",null,r.a.createElement("thead",null),r.a.createElement("tbody",null,Object.entries(t).map((function(e){var t=Object(b.a)(e,2),a=t[0],n=t[1];return r.a.createElement("tr",{key:a},r.a.createElement("td",{className:"align-top pt-2 capitalize"},a.split("_").join(" ")),r.a.createElement("td",{className:"pr-2 align-top pt-2"},":"),r.a.createElement("td",{className:"pt-2 align-top capitalize"},n))})))))},he=function(e){var t=e.contact,a=e.image,n=e.name,c=a.source?a.source:te.a;return r.a.createElement("div",{className:"flex",id:"sc"},r.a.createElement("div",{className:"flex-1"}),r.a.createElement("div",{className:"flex-1 py-10 text-center pt-2"},r.a.createElement("span",{className:"text-base block uppercase"},r.a.createElement("b",null,n)),r.a.createElement("span",{className:"text-xs block"},r.a.createElement("b",null,"Email:")," ",t.email),r.a.createElement("span",{className:"text-xs block pb-8"},r.a.createElement("b",null,"Moblile No:")," ",t.cell),r.a.createElement("span",{className:"curriculum font-bold lg:text-lg"},"CURRICULUM VITAE")),r.a.createElement("div",{className:"flex-1 overflow-hidden"},r.a.createElement("div",{className:"flex justify-center lg:h-40 sm:h-24"},a.enable&&r.a.createElement("img",{src:c,alt:"pic",id:"photo",className:"h-40 w-40  rounded-full object-center"}))))},ge=function(e){var t=e.profile,a=e.address;return r.a.createElement("div",{className:"flex"},r.a.createElement(ve,{profile:t}),r.a.createElement(Ee,{address:a}))},je=function(e){var t=e.qualification;return r.a.createElement("div",{className:"pt-4"},r.a.createElement("div",null,r.a.createElement("div",{className:" font-bold uppercase bg-blue-100 block pl-2"},"qualification:"),Object.values(t.description).map((function(e,t){return r.a.createElement("p",{className:"font-semibold pl-8 mt-1",key:t},e)}))))},Oe=function(e){var t=e.skills;return r.a.createElement("div",{className:"pt-4"},r.a.createElement("div",null,r.a.createElement("div",{className:"title font-bold uppercase bg-blue-100 block pl-2"},"additional skills:"),r.a.createElement("ul",{className:"pl-8"},Object.values(t.description).map((function(e,t){return r.a.createElement("li",{className:"list-disc mt-1",key:t},r.a.createElement("p",null,e))})))))},Ne=function(e){var t=e.experience;return r.a.createElement("div",{className:"pt-4"},r.a.createElement("div",null,r.a.createElement("div",{className:"title font-bold uppercase bg-blue-100 block pl-2"},"Work Experience:"),Object.values(t.description).map((function(e,t){return r.a.createElement("p",{className:"pl-8 mt-1",key:t},e)}))))},ye=function(e){var t=e.certification;return r.a.createElement("div",{className:"pt-4"},r.a.createElement("div",null,r.a.createElement("div",{className:"title font-bold uppercase bg-blue-100 block pl-2"},"certification:"),Object.values(t.description).map((function(e,t){return r.a.createElement("p",{className:"pl-8 mt-1",key:t},e)}))))},xe=function(e){var t=e.add_section;return r.a.createElement("div",{className:""},r.a.createElement("div",null,Object.entries(t).map((function(e){var t=Object(b.a)(e,2),a=t[0],n=t[1];return"enable"!==a?""!==n.section_name&&r.a.createElement("div",{key:a,className:"pt-4"},Object.entries(n).map((function(e){var t=Object(b.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{key:a},"section_name"===a&&r.a.createElement("span",{className:"title font-bold uppercase bg-blue-100 block pl-2"},"".concat(n?n+":":"")),"section_name"!==a&&r.a.createElement("p",{className:"pl-8 mt-1"},n))}))):null}))))},ke=function(){return r.a.createElement("div",{className:"pt-4"},r.a.createElement("div",null,r.a.createElement("div",{className:"title font-bold uppercase bg-blue-100 block pl-2"},"declaration:"),r.a.createElement("p",{className:"lg:text-base sm:text-sm mt-2 pl-2"},"I hereby declare that the above mentioned particulars are true and genuine to the best of my knowledge and belief.")))},we=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.resume,t=e.objective,a=e.profile,n=e.address,c=e.contact,l=e.qualification,o=e.image,i=e.skills,s=e.experience,m=e.certification,u=e.add_section,d=e.declaration;return r.a.createElement(r.a.Fragment,null,r.a.createElement(he,{contact:c,image:o,name:a.name}),r.a.createElement(fe,{objective:t}),r.a.createElement(je,{qualification:l}),s.enable&&r.a.createElement(Ne,{experience:s}),m.enable&&r.a.createElement(ye,{certification:m}),i.enable&&r.a.createElement(Oe,{skills:i}),u.enable&&r.a.createElement(xe,{add_section:u}),r.a.createElement(ge,{profile:a,address:n}),r.a.createElement(ke,{declaration:d}))}}]),a}(r.a.Component),_e=Object(o.b)((function(e){return{resume:e.resume}}))(we),Ce=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={pos:"top"},e.printMe=function(){var e=document.getElementById("page").innerHTML;document.getElementById("print-page").innerHTML=e,window.alert("Select option to save as PDF"),window.print()},e.scrollButton=function(){"top"===e.state.pos?(window.scrollTo({top:2e3,left:0,behavior:"smooth"}),e.setState({pos:"bottom"})):(window.scrollTo({top:0,left:0,behavior:"smooth"}),e.setState({pos:"top"}))},e.renderTemplates=function(e){switch(e){case"Template1":return r.a.createElement(be,null);case"Template2":return r.a.createElement(_e,null);default:return r.a.createElement(be,null)}},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"flex-1 overflow-hidden shadow-inner relative"},r.a.createElement($.a,{handle:".drag",defaultPosition:{x:0,y:0},position:null,grid:[1,1],scale:1},r.a.createElement("div",{className:" lg:w-11/12 lg:h-auto xl:w-11/12  xl:h-auto  drag px-8 py-16 m-3 bg-white shadow-2xl rounded-sm cursor-move",id:"page"},this.renderTemplates(this.props.templates.template_name))),r.a.createElement("div",{className:"bottom-0 fixed z-50"},r.a.createElement(U,{onClickHandle:this.printMe,color:"blue"},"Print or Save")),r.a.createElement("div",{className:"bottom-0 fixed z-50 right-0 lg:hidden sm:block mb-2"},r.a.createElement("button",{className:" bg-gray-400 rounded pl-3 pr-3 text-black",onClick:this.scrollButton},"\u21f3")))}}]),a}(n.Component),Se=Object(o.b)((function(e){return{templates:e.resume.templates}}))(Ce);var De=function(){return r.a.createElement("div",{className:"sm:flex-none md:flex lg:flex xl:flex bg-gray-300"},r.a.createElement(J,null),r.a.createElement(Se,null),r.a.createElement(K,null))},Ae=a(10),Te=a(20),Be=(a(52),a(35)),He=a(36),Pe=a.n(He),Ie=a(25),Re=Ie,ze=Ie,Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(f.a)(Object(f.a)({},e),{},Object(v.a)({},t.payload.section,t.payload.value));case h:return Re;default:return e}},Me={key:"root",storage:Pe.a,whitelist:["resume"]},qe=Object(Ae.c)({resume:Le}),Fe=Object(Te.a)(Me,qe),Je=[Be.a];var Ue=Object(Ae.d)(Fe,Ae.a.apply(void 0,Je)),Ge=Object(Te.b)(Ue);s.a.configure({autoClose:3e3,closeButton:!1,hideProgressBar:!0,position:s.a.POSITION.BOTTOM_LEFT}),l.a.render(r.a.createElement(i.a,{persistor:Ge},r.a.createElement(o.a,{store:Ue},r.a.createElement(De,null))),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.d539692a.chunk.js.map