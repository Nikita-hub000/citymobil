(this.webpackJsonpcitymobil=this.webpackJsonpcitymobil||[]).push([[0],[,,,,,,,,,,,,,function(t,e,s){},,function(t,e,s){},function(t,e,s){},,function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var i=s(1),n=s.n(i),r=s(4),a=s.n(r),c=(s(13),s(14),s(15),s(16),s(0));var o=function(){return Object(c.jsx)("header",{children:Object(c.jsx)("h1",{children:"header"})})};s(18);var h=function(){return Object(c.jsx)("div",{className:"sidebar",children:Object(c.jsx)("h1",{children:"sidebar"})})},u=s(5),l=s(6),d=s(2),j=s(8),f=s(7),b=(s(19),function(t){Object(j.a)(s,t);var e=Object(f.a)(s);function s(){var t;return Object(u.a)(this,s),(t=e.call(this)).componentDidMount=function(){fetch("https://city-mobil.ru/api/cars").then((function(t){return t.json()})).then((function(e){t.setState({items:e.cars,items2:e.cars})}),(function(e){t.setState({error:e})}))},t.state={error:null,items:[],current:"\u041f\u043e\u043a\u0430 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e",isSorted:!0,items2:[],value:"",results:[]},t.find=t.find.bind(Object(d.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(d.a)(t)),t}return Object(l.a)(s,[{key:"text",value:function(t){this.setState({current:"\u0412\u044b\u0431\u0440\u0430\u043d \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c ".concat(t.mark," ").concat(t.model," ").concat(t.tariffs["\u042d\u043a\u043e\u043d\u043e\u043c"]?t.tariffs["\u042d\u043a\u043e\u043d\u043e\u043c"].year:t.tariffs["\u041a\u043e\u043c\u0444\u043e\u0440\u0442"]?t.tariffs["\u041a\u043e\u043c\u0444\u043e\u0440\u0442"].year:t.tariffs["\u041a\u043e\u043c\u0444\u043e\u0440\u0442+"]?t.tariffs["\u041a\u043e\u043c\u0444\u043e\u0440\u0442+"].year:t.tariffs["\u041c\u0438\u043d\u0438\u0432\u0435\u043d"]?t.tariffs["\u041c\u0438\u043d\u0438\u0432\u0435\u043d"].year:t.tariffs["\u0411\u0438\u0437\u043d\u0435\u0441"]?t.tariffs["\u0411\u0438\u0437\u043d\u0435\u0441"].year:"\u0431\u0435\u0437","  \u0433\u043e\u0434\u0430 \u0432\u044b\u043f\u0443\u0441\u043a\u0430")})}},{key:"sorted",value:function(){this.setState({isSorted:!this.state.isSorted})}},{key:"find",value:function(t){var e=this;console.log(t.target.value),this.setState({results:this.state.items}),0===t.target.value.length?document.querySelector(".main__input").classList.add("main__input-find"):document.querySelector(".main__input").classList.remove("main__input-find"),this.setState({value:t.target.value});var s=[];this.state.items.forEach((function(t){(t.mark.toLowerCase().includes(e.state.value.toLowerCase())||t.model.toLowerCase().includes(e.state.value.toLowerCase()))&&s.push(t)})),this.setState({results:s})}},{key:"handleSubmit",value:function(t){t.preventDefault(),0===this.state.value.length?this.setState({items:this.state.items2}):this.setState({items:this.state.results})}},{key:"render",value:function(){var t=this;return Object(c.jsxs)("main",{children:[Object(c.jsxs)("form",{className:"main__box",onSubmit:this.handleSubmit,children:[Object(c.jsx)("input",{placeholder:"\u041f\u043e\u0438\u0441\u043a",className:"main__input main__input-find",type:"text",onChange:this.find}),Object(c.jsx)("button",{type:"submit",className:"main__button",children:"\u041d\u0430\u0439\u0442\u0438"})]}),Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsxs)("th",{children:["\u041c\u0430\u0440\u043a\u0430 \u0438 \u043c\u043e\u0434\u0435\u043b\u044c"," ",Object(c.jsx)("button",{className:"main__sorted",onClick:function(){return t.sorted()},children:this.state.isSorted?"\u041f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e":"\u041f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e"})]}),Object(c.jsx)("th",{children:"\u042d\u043a\u043e\u043d\u043e\u043c"}),Object(c.jsx)("th",{children:"\u041a\u043e\u043c\u0444\u043e\u0440\u0442"}),Object(c.jsx)("th",{children:"\u041a\u043e\u043c\u0444\u043e\u0440\u0442 +"}),Object(c.jsx)("th",{children:"\u041c\u0438\u043d\u0438\u0432\u0435\u043d"}),Object(c.jsx)("th",{children:"\u0411\u0438\u0437\u043d\u0435\u0441"})]})}),Object(c.jsx)("tbody",{children:(this.state.isSorted?this.state.items:this.state.items.reverse()).map((function(e,s){return Object(c.jsxs)("tr",{onClick:function(){return t.text(e)},children:[Object(c.jsxs)("td",{children:[e.mark," ",e.model]}),Object(c.jsx)("td",{children:e.tariffs.hasOwnProperty("\u042d\u043a\u043e\u043d\u043e\u043c")?e.tariffs["\u042d\u043a\u043e\u043d\u043e\u043c"].year:"-"}),Object(c.jsx)("td",{children:e.tariffs.hasOwnProperty("\u041a\u043e\u043c\u0444\u043e\u0440\u0442")?e.tariffs["\u041a\u043e\u043c\u0444\u043e\u0440\u0442"].year:"-"}),Object(c.jsx)("td",{children:e.tariffs.hasOwnProperty("\u041a\u043e\u043c\u0444\u043e\u0440\u0442+")?e.tariffs["\u041a\u043e\u043c\u0444\u043e\u0440\u0442+"].year:"-"}),Object(c.jsx)("td",{children:e.tariffs.hasOwnProperty("\u041c\u0438\u043d\u0438\u0432\u0435\u043d")?e.tariffs["\u041c\u0438\u043d\u0438\u0432\u0435\u043d"].year:"-"}),Object(c.jsx)("td",{children:e.tariffs.hasOwnProperty("\u0411\u0438\u0437\u043d\u0435\u0441")?e.tariffs["\u0411\u0438\u0437\u043d\u0435\u0441"].year:"-"})]})}))})]}),Object(c.jsx)("p",{className:"main__current",children:this.state.current})]})}}]),s}(n.a.Component));s(20);var m=function(){return Object(c.jsx)("footer",{children:Object(c.jsx)("h1",{children:"footer"})})};var O=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(o,{}),Object(c.jsxs)("div",{className:"App__box",children:[Object(c.jsx)(h,{}),Object(c.jsx)(b,{})]}),Object(c.jsx)(m,{})]})};a.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.f390d45a.chunk.js.map