(this["webpackJsonpakunter-frontend"]=this["webpackJsonpakunter-frontend"]||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/beef-chicken-original.d1172819.png"},32:function(e,t,a){e.exports=a.p+"static/media/beef-chicken-deluxe.0116e277.png"},46:function(e,t,a){e.exports=a.p+"static/media/beef-madness.4a7b77b0.png"},47:function(e,t,a){e.exports=a.p+"static/media/chicken-crispy.fadcddc5.png"},49:function(e,t,a){e.exports=a(82)},58:function(e,t,a){},59:function(e,t,a){e.exports=a.p+"static/media/cashier.4f7d2f07.jpg"},60:function(e,t,a){e.exports=a.p+"static/media/sales.eda963be.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/store.74504c1c.jpg"},82:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),s=a.n(r),c=a(4),i=a(12),m=a(22);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(18),d=a(3),u=a(43),x=a.n(u),p=a(48);a(58);var f=function(){var e={backgroundImage:"url("+a(59)+")",backgroundSize:"cover"},t={backgroundImage:"url("+a(60)+")",backgroundSize:"cover"},n={backgroundImage:"url("+a(61)+")",backgroundSize:"cover"};return l.a.createElement("section",{className:"relative text-gray-700"},l.a.createElement("div",{className:"relative max-w-6xl mx-auto px-4 sm:px-6"},l.a.createElement("div",{className:"py-4 md:py-10"},l.a.createElement("div",{className:"mb-3"},l.a.createElement("h1",{className:"text-3xl font-bold"},"Today"),l.a.createElement("p",{className:"text-sm text-gray-400 uppercase font-bold"},function(){var e=new Date;return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]+" "+e.getDate()+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]}())),l.a.createElement("div",{className:"max-w-sm mx-auto mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none"},l.a.createElement("div",{className:"mb-5"},l.a.createElement(c.b,{to:"/order",className:"block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95",style:e},l.a.createElement("div",{className:"absolute top-0 right-0 -mt-3 mr-3"},l.a.createElement("div",{className:"rounded-full bg-blue-500 text-white text-xs py-1 pl-2 pr-3 leading-none"},l.a.createElement("i",{className:"mdi mdi-cash-register text-base align-middle"})," ",l.a.createElement("span",{className:"align-middle"},"Buy"))),l.a.createElement("div",{className:"h-48"}),l.a.createElement("h2",{className:"text-white text-2xl font-bold leading-tight mb-3 pr-5"},"Order"))),l.a.createElement("div",{className:"mb-5"},l.a.createElement(c.b,{to:"/sales",className:"block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95",style:t},l.a.createElement("div",{className:"absolute top-0 right-0 -mt-3 mr-3"},l.a.createElement("div",{className:"rounded-full bg-green-500 text-white text-xs py-1 pl-2 pr-3 leading-none"},l.a.createElement("i",{className:"mdi mdi-text-box-check-outline text-base align-middle"})," ",l.a.createElement("span",{className:"align-middle"},"Sales"))),l.a.createElement("div",{className:"h-48"}),l.a.createElement("h2",{className:"text-white text-2xl font-bold leading-tight mb-3 pr-5"},"Sales List"))),l.a.createElement("div",{className:"mb-5"},l.a.createElement(c.b,{to:"/store",className:"block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95",style:n},l.a.createElement("div",{className:"absolute top-0 right-0 -mt-3 mr-3"},l.a.createElement("div",{className:"rounded-full bg-yellow-500 text-white text-xs py-1 pl-2 pr-3 leading-none"},l.a.createElement("i",{className:"mdi mdi-store text-base align-middle"})," ",l.a.createElement("span",{className:"align-middle"},"Store"))),l.a.createElement("div",{className:"h-48"}),l.a.createElement("h2",{className:"text-white text-2xl font-bold leading-tight mb-3 pr-5"},"Store Settings")))))))};var g=function(){return l.a.createElement("div",{className:"flex flex-col min-h-screen overflow-hidden"},l.a.createElement("main",{className:"flex-grow"},l.a.createElement(f,null)))},h=a(13),b=a(14),v=a(16),E=a(15),y=function(e){return{type:"REMOVE_ITEM",id:e}},N=function(e){Object(v.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).handleClick=function(t){e.props.addToCart(t)},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this,t=this.props.items.map((function(t){return l.a.createElement("button",{className:t.style,key:t.id,onClick:function(){e.handleClick(t.id)}},l.a.createElement("div",{className:"relative text-white px-4 pb-4 mt-4"},l.a.createElement("img",{src:t.img,alt:t.title+" "+t.desc}),l.a.createElement("span",{className:"block opacity-75 -mb-1 text-left"},t.title),l.a.createElement("div",{className:"md:flex justify-between"},l.a.createElement("span",{className:"block font-semibold text-md md:text-xl text-left"},t.desc),l.a.createElement("span",{className:"block bg-white rounded-full text-purple-500 md:ml-4 mt-2 md:mt-0 text-xs font-bold px-3 py-2 leading-none flex items-center"},"$ ",t.price,"K"))))}));return l.a.createElement("div",{className:"flex flex-col min-h-screen overflow-hidden"},l.a.createElement("main",{className:"flex-grow"},l.a.createElement("div",{className:"p-18 flex flex-wrap items-center justify-center max-w-3xl mx-auto"},t)))}}]),a}(n.Component),w=Object(i.b)((function(e){return{items:e.items}}),(function(e){return{addToCart:function(t){e(function(e){return{type:"ADD_TO_CART",id:e}}(t))}}}))(N),k=a(17),j=a.n(k);var O=Object(i.b)((function(e){return{addedItems:e.addedItems,total:e.total}}),(function(e){return{removeItem:function(t){e(y(t))}}}))((function(e){var t=Object(o.d)(),a=function(t){e.removeItem(t)},n=function(e){var n=new Date,l=[n.getDate(),n.getMonth()+1,n.getFullYear()].join("-")+" "+[n.getHours(),n.getMinutes()].join(":"),r="item: ".concat(e.id,", quantity: ").concat(e.quantity,", time: ").concat(l);t.info(r),a(e.id)};return l.a.createElement("div",{className:"container"},l.a.createElement("button",{className:"text-base mx-auto mt-12 mb-28 bg-blue-500 text-white hover:bg-indigo-500 flex justify-center px-4 py-2 rounded-full font-bold cursor-pointer transform transition-all duration-300 scale-100 hover:scale-95",onClick:function(){return a=e.total,e.addedItems.map(n),t.info("Item data will be saved in the database if DEMO_MODE == false"),void t.success("Success  $ "+a+"K");var a}},"Checkout $ ",e.total,"K"))})),C=function(e){Object(v.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).handleRemove=function(t){e.props.removeItem(t)},e.handleAddQuantity=function(t){e.props.addQuantity(t)},e.handleSubtractQuantity=function(t){e.props.subtractQuantity(t)},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this,t=this.props.items.length?this.props.items.map((function(t){return l.a.createElement("div",{className:"bg-white border w-full px-auto rounded-lg my-2",key:t.id},l.a.createElement("div",{className:"relative text-gray-500 px-2 md:px-6 pb-6 mt-6"},l.a.createElement("div",{className:"flex"},l.a.createElement("div",{className:"p-2 w-16"},l.a.createElement("img",{src:t.img,alt:t.img})),l.a.createElement("div",{className:"flex-auto text-md"},t.title,l.a.createElement("div",{className:"font-bold"},t.desc),l.a.createElement("div",{className:"flex flex-row border h-8 w-24 rounded-xl relative"},l.a.createElement(c.b,{to:"/pay",className:"text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold pt-1 px-4 rounded-l",onClick:function(){e.handleSubtractQuantity(t.id)}},l.a.createElement("span",{className:"m-auto"},"-")),l.a.createElement("input",{className:"text-center font-bold bg-white w-10 text-xs md:text-base flex items-center justify-center cursor-default",readOnly:!0,name:"custom-input-number",value:t.quantity}),l.a.createElement(c.b,{to:"/pay",className:"text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold pt-1 px-4 rounded-r",onClick:function(){e.handleAddQuantity(t.id)}},l.a.createElement("span",{className:"m-auto"},"+")))),l.a.createElement("div",{className:"flex flex-col w-18 font-medium items-center"},l.a.createElement("button",{className:"w-5 h-5 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700",onClick:function(){e.handleRemove(t.id)}},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-trash-2 "},l.a.createElement("polyline",{points:"3 6 5 6 21 6"}),l.a.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),l.a.createElement("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),l.a.createElement("line",{x1:"14",y1:"11",x2:"14",y2:"17"}))),"$ ",t.price,"K"))))})):l.a.createElement("div",{className:"flex h-screen justify-center items-center"},l.a.createElement("div",{className:"text-center text-gray-300"},l.a.createElement("p",{className:"block h-8 text-7xl leading-8 text-center align-middle"},l.a.createElement("i",{className:"mdi mdi-cart-outline"})),l.a.createElement("p",{className:"block text-sm m-6 leading-none text-center align-middle"},"Empty")));return l.a.createElement("div",{className:"container max-w-5xl mx-auto px-4 sm:px-8"},t,this.props.items.length>0&&l.a.createElement(O,null))}}]),a}(n.Component),D=Object(i.b)((function(e){return{items:e.addedItems}}),(function(e){return{removeItem:function(t){e(y(t))},addQuantity:function(t){e(function(e){return{type:"ADD_QUANTITY",id:e}}(t))},subtractQuantity:function(t){e(function(e){return{type:"SUB_QUANTITY",id:e}}(t))}}}))(C),I=a(23),M=a(44),S=a.n(M),L=[],T=[],B=new Date(Date.now()+1728e5),P=[1,1,1,2,2,2,2,2,2,2,3,3,3,4,4,5,6],A=["15:13","15:45","16:24","17:41","18:9","20:18","21:56"];A=function(e,t){for(var a=[],n=0;n<t;[n++].push.apply(a,e));return a}(A,15);for(var q=33;q>1;q--){var F=new Date(B-24*q*60*60*1e3).toISOString().split(":")[0];(F=(F=F.split("T")[0]).split("-").reverse())[0]=parseInt(F[0],10),F[1]=parseInt(F[1],10),F=F.join("-"),L.push(F)}for(var Q=0;Q<32;Q++){var _={};_.id=Q,_.item=P[Math.floor(Math.random()*P.length)],_.time=L[Q]+" "+A[Q],_.quantity=P[Math.floor(Math.random()*P.length)],T.push(_)}var W=T,K=function(e){Object(v.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).handlePageClick=function(e){var t=e.selected,a=t*n.state.perPage;n.setState({currentPage:t,offset:a},(function(){n.receivedData()}))},n.state={offset:0,data:[],perPage:10,currentPage:0},n.handlePageClick=n.handlePageClick.bind(Object(I.a)(n)),n.menus=["Beef Original","Beef Deluxe","Beef Madness","Chicken Original","Chicken Crispy","Chicken Deluxe"],n.prices=[22,32,44,20,28,30],n}return Object(b.a)(a,[{key:"receivedData",value:function(){var e=this,t=W,a=t.slice(this.state.offset,this.state.offset+this.state.perPage).map((function(t){return l.a.createElement("tbody",{key:t.id},l.a.createElement("tr",null,l.a.createElement("td",{className:"px-3 py-3 sm:px-12 border-b border-gray-200 bg-white text-sm"},l.a.createElement("div",{className:"flex items-center"},l.a.createElement("p",{className:"text-gray-600 whitespace-no-wrap"},e.menus[t.item-1].split(" ")[0],l.a.createElement("br",null),l.a.createElement("span",{className:"font-semibold"},e.menus[t.item-1].split(" ")[1])))),l.a.createElement("td",{className:"px-1 py-3 sm:py-0 border-b border-gray-200 bg-white text-sm"},l.a.createElement("span",{className:"relative inline-block px-2 py-1 font-semibold text-blue-900 leading-tight"},l.a.createElement("span",{"aria-hidden":!0,className:"absolute inset-0 bg-blue-200 opacity-50 rounded-full"}),l.a.createElement("span",{className:"relative"},t.quantity))),l.a.createElement("td",{className:"px-1 py-3 sm:px-3 border-b border-gray-200 bg-white text-sm"},l.a.createElement("p",{className:"text-gray-600 whitespace-no-wrap"},e.prices[t.item-1],"K")),l.a.createElement("td",{className:"px-1 py-3 sm:px-1 border-b border-gray-200 bg-white text-sm"},l.a.createElement("span",{className:"relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"},l.a.createElement("span",{"aria-hidden":!0,className:"absolute inset-0 bg-green-200 opacity-50 rounded-full"}),l.a.createElement("span",{className:"relative"},e.prices[t.item-1]*t.quantity,"K"))),l.a.createElement("td",{className:"px-1 py-3 sm:px-2 border-b border-gray-200 bg-white text-sm"},l.a.createElement("p",{className:"text-gray-600 whitespace-no-wrap"},t.time.split(" ")[0].split("-")[0]+"-"+t.time.split(" ")[0].split("-")[1]+"-",t.time.split(" ")[0].split("-")[2][2],t.time.split(" ")[0].split("-")[2][3],l.a.createElement("br",null),l.a.createElement("span",{className:"font-semibold"},t.time.split(" ")[1])))))}));this.setState({pageCount:Math.ceil(t.length/this.state.perPage),postData:a})}},{key:"componentDidMount",value:function(){this.receivedData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"antialiased"},l.a.createElement("div",{className:"container mx-auto sm:px-8"},l.a.createElement("div",{className:"py-0 sm:py-2"},l.a.createElement("div",{className:"sm:px-8 py-2 overflow-x-auto"},l.a.createElement("div",{className:"inline-block min-w-full shadow rounded-lg overflow-hidden"},l.a.createElement("table",{className:"min-w-full leading-normal"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"px-3 py-2 sm:px-12 sm:py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"},"Item"),l.a.createElement("th",{className:"px-3 py-2 sm:px-3 sm:py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"},"Q"),l.a.createElement("th",{className:"px-1 py-2 sm:px-3 sm:py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"},"Price"),l.a.createElement("th",{className:"px-3 py-2 sm:px-3 sm:py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"},"Total"),l.a.createElement("th",{className:"px-2 py-2 sm:px-3 sm:py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"},"Time"))),this.state.postData),l.a.createElement("div",{className:"p-2 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"},l.a.createElement(S.a,{previousLabel:"Prev",nextLabel:"Next",breakLabel:"...",breakClassName:"break-me",pageCount:this.state.pageCount,marginPagesDisplayed:1,pageRangeDisplayed:1,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})))))))}}]),a}(n.Component),R=a(29),Y=a.n(R),$=a(45),z=a(24),U=a(30),V=function(e){Object(v.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).getIncomes=function(){var e=0,t=0;n.state.dataFetch.map((function(a){var l=a.time.split(" ")[0],r=l.split("-")[1]+"-"+l.split("-")[2];if(n.dformat==l){var s=n.state.prices[a.item-1]*a.quantity;e+=s}if(n.mformat==r){var c=n.state.prices[a.item-1]*a.quantity;t+=c}})),n.setState({todayIncomes:e}),n.setState({monthIncomes:t})},n.plotData=function(){for(var e=[],t=new Date(Date.now()+1728e5),a=15;a>1;a--){var l=new Date(t-24*a*60*60*1e3).toISOString().split(":")[0];l=(l=(l=l.split("T")[0]).split("-").reverse()).join("-"),e.push(l)}var r=[];n.state.dataFetch.map((function(t){var a=t.time.split(" ")[0];e.forEach((function(e){a==e&&r.push(e)}))})),r=Object(z.a)(new Set(r));var s=[],c=n.state.prices;r.map((function(e){var t=0;n.state.dataFetch.map((function(a){if(a.time.split(" ")[0]==e){var n=c[a.item-1]*a.quantity;t+=n}return t})),s.push({Date:e.split("-")[0],Income:t})})),n.setState({dataPlot:s})},n.state={dataFetch:[],dataPlot:[],prices:[22,32,44,20,28,30],todayIncomes:0,monthIncomes:0,incomesLast30Days:[]},n.d=new Date,n.dformat=[n.d.getDate(),n.d.getMonth()+1,n.d.getFullYear()].join("-"),n.mformat=[n.d.getMonth()+1,n.d.getFullYear()].join("-"),n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.refreshList()}},{key:"refreshList",value:function(){var e=Object($.a)(Y.a.mark((function e(){var t,a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,W;case 3:t=e.sent,this.setState({dataFetch:t}),e.next=12;break;case 7:return console.log("test"),e.next=10,j.a.get("/api/akunters/");case 10:a=e.sent,this.setState({dataFetch:a.data});case 12:this.getIncomes(),this.plotData();case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",{className:"flex max-w-5xl mx-auto items-center min-h-screen text-gray-800"},l.a.createElement("div",{className:"p-1 w-full"},l.a.createElement("div",{className:"grid grid-cols-12 gap-4"},l.a.createElement("div",{className:"col-span-6"},l.a.createElement("div",{className:"flex flex-row bg-white shadow-sm rounded p-4"},l.a.createElement("div",{className:"flex items-center justify-center flex-shrink-0 h-8 w-8 md:h-12 md:w-12 rounded-xl bg-green-100 text-green-500"},l.a.createElement("i",{className:"mdi mdi-white-balance-sunny align-middle text-lg md:text-2xl"})),l.a.createElement("div",{className:"flex flex-col flex-grow ml-4"},l.a.createElement("div",{className:"text-xs md:text-sm text-gray-500"},"Today"),l.a.createElement("div",{className:"font-bold text-md md:text-lg"},"$ ",this.state.todayIncomes,"K")))),l.a.createElement("div",{className:"col-span-6"},l.a.createElement("div",{className:"flex flex-row bg-white shadow-sm rounded p-4"},l.a.createElement("div",{className:"flex items-center justify-center flex-shrink-0 h-8 w-8 md:h-12 md:w-12 rounded-xl bg-blue-100 text-blue-500"},l.a.createElement("i",{className:"mdi mdi-calendar-month align-middle text-2xl"})),l.a.createElement("div",{className:"flex flex-col flex-grow ml-4"},l.a.createElement("div",{className:"text-xs md:text-sm text-gray-500"},"Month"),l.a.createElement("div",{className:"font-bold text-md md:text-lg"},"$ ",this.state.monthIncomes,"K")))),l.a.createElement("div",{className:"col-span-12 sm:col-span-6"},l.a.createElement("div",{className:"top-0 right-0 mr-3 w-28 py-4 px-2"},l.a.createElement("div",{className:"rounded-full bg-blue-500 text-white text-xs py-1 pl-3 pr-3 leading-none"},l.a.createElement("i",{className:"mdi mdi-chart-box-outline text-base align-middle"})," ",l.a.createElement("span",{className:"align-middle"},"14 Days"))),l.a.createElement("div",{className:"flex flex-row bg-white shadow-md rounded p-4"},l.a.createElement("div",{className:"rounded overflow-hidden w-full md:flex"},l.a.createElement("div",{className:"flex w-full bg-white items-center"},l.a.createElement(U.Chart,{padding:[10,20,50,40],autoFit:!0,height:300,data:this.state.dataPlot},l.a.createElement(U.LineAdvance,{shape:"smooth",point:!0,area:!0,position:"Date*Income"})))))))))}}]),a}(n.Component);var H=Object(i.b)((function(e){return{items:e.addedItems}}))((function(e){var t=Object(d.f)().pathname;return l.a.createElement("div",{className:"bg-white fixed bottom-0 z-20 w-full border-t border-gray-200 flex"},"/"===t?l.a.createElement(c.b,{to:"/",className:"flex flex-grow items-center justify-center p-2 text-blue-500 hover:text-blue-500"},l.a.createElement("div",{className:"text-center"},l.a.createElement("span",{className:"block h-8 text-2xl sm:text-3xl leading-8"},l.a.createElement("i",{className:"mdi mdi-newspaper-variant-outline"})),l.a.createElement("span",{className:"block text-xs leading-none"},"Home"))):l.a.createElement(c.b,{to:"/",className:"flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-blue-500"},l.a.createElement("div",{className:"text-center"},l.a.createElement("span",{className:"block h-8 text-2xl sm:text-3xl leading-8"},l.a.createElement("i",{className:"mdi mdi-newspaper-variant-outline"})),l.a.createElement("span",{className:"block text-xs leading-none"},"Home"))),"/order"===t?l.a.createElement(c.b,{to:"/order",className:"flex flex-grow items-center justify-center p-2 text-blue-500 hover:text-blue-500"},l.a.createElement("div",{className:"text-center"}," ",l.a.createElement("span",{className:"block h-8 text-2xl sm:text-3xl leading-8"},l.a.createElement("i",{className:"mdi mdi-cash-register"})),l.a.createElement("span",{className:"block text-xs leading-none"},"Order"))):l.a.createElement(c.b,{to:"/order",className:"flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-blue-500"},l.a.createElement("div",{className:"text-center"}," ",l.a.createElement("span",{className:"block h-8 text-2xl sm:text-3xl leading-8"},l.a.createElement("i",{className:"mdi mdi-cash-register"})),l.a.createElement("span",{className:"block text-xs leading-none"},"Order"))),"/pay"===t?l.a.createElement(c.b,{to:"/pay",className:"flex flex-grow items-center justify-center p-2 text-blue-500 hover:text-blue-500"},l.a.createElement("div",{className:"text-center"}," ",l.a.createElement("span",{className:"block h-8 text-2xl sm:text-3xl leading-8"},l.a.createElement("i",{className:"mdi mdi-cart-plus"}),e.items.length>0&&l.a.createElement("p",{className:"absolute inline-block px-2 py-1 font-bold text-xs text-white leading-tight"},l.a.createElement("span",{"aria-hidden":!0,className:"absolute inset-0 bg-red-500 opacity-100 rounded-full"}),l.a.createElement("span",{className:"relative"},e.items.length))),l.a.createElement("span",{className:"block text-xs leading-none"},"Pay"))):l.a.createElement(c.b,{to:"/pay",className:"flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-blue-500"},l.a.createElement("div",{className:"text-center"}," ",l.a.createElement("span",{className:"block h-8 text-2xl sm:text-3xl leading-8"},l.a.createElement("i",{className:"mdi mdi-cart-plus"}),e.items.length>0&&l.a.createElement("p",{className:"absolute inline-block px-2 py-1 font-bold text-xs text-white leading-tight"},l.a.createElement("span",{"aria-hidden":!0,className:"absolute inset-0 bg-red-500 opacity-100 rounded-full"}),l.a.createElement("span",{className:"relative"},e.items.length))),l.a.createElement("span",{className:"block text-xs leading-none"},"Pay"))),"/sales"===t?l.a.createElement(c.b,{to:"/sales",className:"flex flex-grow items-center justify-center p-2 text-blue-500 hover:text-blue-500"},l.a.createElement("div",{className:"text-center"},l.a.createElement("span",{className:"block h-8 text-2xl sm:text-3xl leading-8"},l.a.createElement("i",{className:"mdi mdi-text-box-check-outline"})),l.a.createElement("span",{className:"block text-xs leading-none"},"Sales"))):l.a.createElement(c.b,{to:"/sales",className:"flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-blue-500"},l.a.createElement("div",{className:"text-center"},l.a.createElement("span",{className:"block h-8 text-2xl sm:text-3xl leading-8"},l.a.createElement("i",{className:"mdi mdi-text-box-check-outline"})),l.a.createElement("span",{className:"block text-xs leading-none"},"Sales"))),"/store"===t?l.a.createElement(c.b,{to:"/store",className:"flex flex-grow items-center justify-center p-2 text-blue-500 hover:text-blue-500"},l.a.createElement("div",{className:"text-center"},l.a.createElement("span",{className:"block h-8 text-2xl sm:text-3xl leading-8"},l.a.createElement("i",{className:"mdi mdi-store"})),l.a.createElement("span",{className:"block text-xs leading-none"},"Store"))):l.a.createElement(c.b,{to:"/store",className:"flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-blue-500"},l.a.createElement("div",{className:"text-center"},l.a.createElement("span",{className:"block h-8 text-2xl sm:text-3xl leading-8"},l.a.createElement("i",{className:"mdi mdi-store"})),l.a.createElement("span",{className:"block text-xs leading-none"},"Store"))))}));var J=function(){var e=Object(d.f)();return Object(n.useEffect)((function(){x.a.init({once:!0,disable:"phone",duration:700,easing:"ease-out-cubic"})})),Object(n.useEffect)((function(){document.querySelector("html").style.scrollBehavior="auto",window.scroll({top:0}),document.querySelector("html").style.scrollBehavior="",Object(p.a)("outline")}),[e.pathname]),l.a.createElement(l.a.Fragment,null,l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/"},l.a.createElement(g,null),l.a.createElement(H,null)),l.a.createElement(d.a,{path:"/order"},l.a.createElement(w,null),l.a.createElement(H,null)),l.a.createElement(d.a,{path:"/pay"},l.a.createElement(D,{timestamp:(new Date).getTime().toString()}),l.a.createElement(H,null)),l.a.createElement(d.a,{path:"/sales"},l.a.createElement(K,null),l.a.createElement(H,null)),l.a.createElement(d.a,{path:"/store"},l.a.createElement(V,null),l.a.createElement(H,null))))},G=a(9),X=a(31),Z=a.n(X),ee=a(32),te=a.n(ee),ae=a(46),ne=a.n(ae),le=a(47),re=a.n(le),se={items:[{id:1,title:"Beef",desc:"Original",price:22,img:Z.a,style:"bg-yellow-500 md:w-52 w-32 flex-shrink-0 m-2 relative overflow-hidden rounded-lg max-w-xs shadow-lg transform transition-all duration-300 scale-100 hover:scale-95 cursor-pointer"},{id:2,title:"Beef",desc:"Deluxe",price:32,img:te.a,style:"bg-green-500 md:w-52 w-32 flex-shrink-0 m-2 relative overflow-hidden rounded-lg max-w-xs shadow-lg transform transition-all duration-300 scale-100 hover:scale-95 cursor-pointer"},{id:3,title:"Beef",desc:"Madness",price:44,img:ne.a,style:"bg-purple-500 md:w-52 w-32 flex-shrink-0 m-2 relative overflow-hidden rounded-lg max-w-xs shadow-lg transform transition-all duration-300 scale-100 hover:scale-95 cursor-pointer"},{id:4,title:"Chicken",desc:"Original",price:20,img:Z.a,style:"bg-yellow-500 md:w-52 w-32 flex-shrink-0 m-2 relative overflow-hidden rounded-lg max-w-xs shadow-lg transform transition-all duration-300 scale-100 hover:scale-95 cursor-pointer"},{id:5,title:"Chicken",desc:"Crispy",price:28,img:re.a,style:"bg-green-500 md:w-52 w-32 flex-shrink-0 m-2 relative overflow-hidden rounded-lg max-w-xs shadow-lg transform transition-all duration-300 scale-100 hover:scale-95 cursor-pointer"},{id:6,title:"Chicken",desc:"Deluxe",price:30,img:te.a,style:"bg-purple-500 md:w-52 w-32 flex-shrink-0 m-2 relative overflow-hidden rounded-lg max-w-xs shadow-lg transform transition-all duration-300 scale-100 hover:scale-95 cursor-pointer"}],addedItems:[],total:0},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;if("ADD_TO_CART"===t.type){var a=e.items.find((function(e){return e.id===t.id})),n=e.addedItems.find((function(e){return t.id===e.id}));if(n)return a.quantity+=1,Object(G.a)(Object(G.a)({},e),{},{total:e.total+a.price});a.quantity=1;var l=e.total+a.price;return Object(G.a)(Object(G.a)({},e),{},{addedItems:[].concat(Object(z.a)(e.addedItems),[a]),total:l})}if("REMOVE_ITEM"===t.type){var r=e.addedItems.find((function(e){return t.id===e.id})),s=e.addedItems.filter((function(e){return t.id!==e.id})),c=e.total-r.price*r.quantity;return Object(G.a)(Object(G.a)({},e),{},{addedItems:s,total:c})}if("ADD_QUANTITY"===t.type){var i=e.items.find((function(e){return e.id===t.id}));i.quantity+=1;var m=e.total+i.price;return Object(G.a)(Object(G.a)({},e),{},{total:m})}if("SUB_QUANTITY"===t.type){var o=e.items.find((function(e){return e.id===t.id}));if(1===o.quantity){var d=e.addedItems.filter((function(e){return e.id!==t.id})),u=e.total-o.price;return Object(G.a)(Object(G.a)({},e),{},{addedItems:d,total:u})}o.quantity-=1;var x=e.total-o.price;return Object(G.a)(Object(G.a)({},e),{},{total:x})}return e},ie={position:o.b.MIDDLE_TOP,timeout:5e3,offset:"10px",transition:o.c.SCALE},me=Object(m.b)(ce);s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i.a,{store:me},l.a.createElement(c.a,{basename:"/akunter"},l.a.createElement(o.a,Object.assign({template:function(e){var t=e.style,a=e.options,n=e.message,r=e.close;return l.a.createElement("div",{style:t},"info"===a.type&&l.a.createElement("section",{className:"flex items-center justify-center"},l.a.createElement("div",{className:"flex items-center bg-white shadow rounded-md px-2 mx-8",style:{width:"20rem"}},l.a.createElement("div",{className:"mr-6 bg-blue-500 rounded px-4 py-2 text-center -ml-3"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"}))),l.a.createElement("div",{className:"flex items-center"},l.a.createElement("h2",{className:"text-gray-500 text-sm"},n)),l.a.createElement("div",{className:"flex justify-end flex-1 cursor-pointer",onClick:r},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-4 h-4 text-gray-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}))))),"success"===a.type&&l.a.createElement("section",{className:"flex items-center justify-center"},l.a.createElement("div",{className:"flex items-center bg-white shadow rounded-md px-2 mx-8",style:{width:"20rem"}},l.a.createElement("div",{className:"mr-6 bg-green-500 rounded px-4 py-2 text-center -ml-3"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}))),l.a.createElement("div",{className:"flex items-center"},l.a.createElement("h2",{className:"text-gray-500 text-sm"},n)),l.a.createElement("div",{className:"flex justify-end flex-1 cursor-pointer",onClick:r},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-4 h-4 text-gray-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}))))),"error"===a.type&&l.a.createElement("section",{className:"flex items-center justify-center"},l.a.createElement("div",{className:"flex items-center bg-white shadow rounded-md px-2 mx-8",style:{width:"20rem"}},l.a.createElement("div",{className:"mr-6 bg-red-500 rounded px-4 py-2 text-center -ml-3"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))),l.a.createElement("div",{className:"flex items-center"},l.a.createElement("h2",{className:"text-gray-500 text-sm"},n)),l.a.createElement("div",{className:"flex justify-end flex-1 cursor-pointer",onClick:r},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-4 h-4 text-gray-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}))))))}},ie),l.a.createElement(J,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.3e91f098.chunk.js.map