(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,n){e.exports={feedback:"Feedback_feedback__1gP6e",heading:"Feedback_heading__1S3zF",counter:"Feedback_counter__s1Xo8",label:"Feedback_label__1M5n_",all_button:"Feedback_all_button__Gy0Vb",button:"Feedback_button__1weJA"}},13:function(e,t,n){},14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),o=n(4),r=n.n(o),s=(n(13),n(14),n(5)),i=n(6),l=n(8),d=n(7),b=n(1),u=n.n(b),j=n(0),h=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,o=e.positivePercentage;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:u.a.counter,children:[Object(j.jsxs)("span",{className:u.a.label,children:["Good: ",t," "]}),Object(j.jsxs)("span",{className:u.a.label,children:["Neutral: ",n," "]}),Object(j.jsxs)("span",{className:u.a.label,children:["Bad: ",a," "]}),Object(j.jsxs)("span",{className:u.a.label,children:["Total: ",c," "]}),Object(j.jsxs)("span",{className:u.a.label,children:["Positive feedback: ",o," %"]})]})})};h.defaultProps={good:0,neutral:0,bad:0,total:0,positivePercentage:0};var g=h,f=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(j.jsx)(j.Fragment,{children:t.map((function(e){return Object(j.jsx)("div",{className:u.a.all_button,children:Object(j.jsx)("button",{className:u.a.button,type:"button",onClick:n,children:e})},e)}))})},v=function(e){var t=e.children,n=e.title;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:n}),t]})},O=function(e){var t=e.children,n=e.message,a=e.show;return Object(j.jsx)(j.Fragment,{children:a?Object(j.jsx)("div",{children:t}):Object(j.jsx)("p",{children:n})})},k=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.show=function(e){return e},e.onLeaveFeedback=function(t){var n=t.target.textContent.toLowerCase();e.setState((function(e){return"good"===n?{good:e[n]+1}:"neutral"===n?{neutral:e[n]+1}:"bad"===n?{bad:e[n]+1}:void 0}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}))},e.countPositiveFeedbackPercentage=function(t){return Math.round(e.state.good/t*100)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.countPositiveFeedbackPercentage(e),n=this.show(e);return Object(j.jsxs)("div",{className:u.a.feedback,children:[Object(j.jsx)(v,{title:"Plese leave feedback",children:Object(j.jsx)(f,{options:["Good","Neutral","Bad"],onLeaveFeedback:this.onLeaveFeedback})}),Object(j.jsx)(v,{title:"Statistics",children:Object(j.jsx)(O,{message:"No feedback given",show:n,children:Object(j.jsx)(g,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:e,positivePercentage:t})})})]})}}]),n}(a.Component);var x=function(){return Object(j.jsx)(k,{})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};n(16);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),p()}},[[17,1,2]]]);
//# sourceMappingURL=main.2729b524.chunk.js.map