(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t){},117:function(e,t){},133:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),s=a(20),i=a.n(s),l=(a(72),a(73),a(39)),r=a(2),c=a(4),A=a(5),d=a(7),m=a(6),h=a(8),u=a(17),w=a.n(u);var g=function(e){var t=e.onSearchUpdate;return n.a.createElement("div",null,n.a.createElement("span",null,"Search:"),n.a.createElement("input",{type:"text",className:"SearchInput",onKeyUp:function(e){13===e.keyCode&&w.a.get("https://api.tvmaze.com/search/shows?q="+e.target.value).then(function(e){var a=e.data.map(function(e){return e.show});t(a)})}}))},F=a(27),U=a.n(F);var p=function(e){var t=e.values;return n.a.createElement("div",{className:"TagViewer"},t.length>0&&t.map(function(e){return n.a.createElement("span",{className:"Tag",key:e},e)}))},K=a(62),R=a(21),C=a.n(R),f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).showDetailsModal=function(e){console.log(e)},a}return Object(h.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.props.itemInfo.person;return n.a.createElement("div",{className:"CastInfoCard"},n.a.createElement("img",{className:"CastCardImage",src:e.image?e.image.medium:C.a,alt:e.name}),n.a.createElement("a",{className:"CastCardName",href:"#",onClick:this.showDetailsModal.bind(this,e)},e.name))}}]),t}(o.Component),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this))).showId=e.showId,a.state={castDetails:[]},a}return Object(h.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(e){var t=this;w.a.get("https://api.tvmaze.com/shows/"+this.showId+"/cast").then(function(e){t.setState({castDetails:e.data})})}},{key:"render",value:function(){return n.a.createElement("div",{className:"horizontalList"},this.state.castDetails.map(function(e){return n.a.createElement(f,{key:e.person.id,itemInfo:e})}))}}]),t}(o.Component),b=a(66),E=a.n(b);a(133);var v=function(e){var t=e.open,a=e.closeModal,o=e.details;return n.a.createElement(K.a,{open:t,onClose:a,center:!0},n.a.createElement("h2",null,o.name),n.a.createElement("div",{className:"ShowDetailsModal"},n.a.createElement("div",{className:"DetailsCenter"},n.a.createElement("div",{className:"DetailsImage"},n.a.createElement("img",{src:o.image?o.image.original:null})),n.a.createElement("div",{className:"DetailsInsights"},n.a.createElement("div",null,n.a.createElement(U.a,{rating:parseInt(o.rating.average)>0?o.rating.average/2:0,starRatedColor:"blue",starDimension:"30px",starSpacing:"5px",numberOfStars:5,name:"showRating"}),n.a.createElement(p,{values:o.genres})),n.a.createElement("table",{className:"InsightTable"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{className:"InsightHeader"},"Language"),n.a.createElement("td",null,o.language))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{className:"InsightHeader"},"Official Site"),n.a.createElement("td",null,n.a.createElement("a",{href:o.officialSite},o.officialSite)))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{className:"InsightHeader"},"Status"),n.a.createElement("td",null,n.a.createElement("span",{className:"Ended"===o.status?"EndStatus":"OngoingStatus"},o.status))))),n.a.createElement("div",{className:"CastStrip"},n.a.createElement("h3",null,"Cast"),n.a.createElement(S,{showId:o.id})))),o.summary&&n.a.createElement("div",{className:"ShowSummary"},E()(o.summary))))},M=a(29),B=a.n(M),O={availableStatus:[{statusKey:"Ended",statusValue:"Ended"},{statusKey:"Ongoing",statusValue:"Ongoing"},{statusKey:"To be determined",statusValue:"To be determined"}]};var y=function(e){var t=e.showInfo||{};return n.a.createElement("div",null,n.a.createElement("form",null,n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"showName"},"Name"),n.a.createElement("input",{type:"text",className:"form-control",id:"showName",onChange:function(t){e.handlers.nameChangeHandler(t.target.value)},placeholder:"Name of the show",value:t.name})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"officialSite"},"Official Site"),n.a.createElement("input",{type:"text",className:"form-control",id:"officialSite",onChange:function(t){e.handlers.officialSiteChangeHandler(t.target.value)},value:t.officialSite,placeholder:"http://www.cbs.com/shows/under-the-dome/"})),n.a.createElement("div",{className:"form-row"},n.a.createElement("div",{className:"form-group col-md-6"},n.a.createElement("label",{htmlFor:"language"},"Language"),n.a.createElement("input",{type:"email",className:"form-control",id:"language",onChange:function(t){e.handlers.languageChangeHandler(t.target.value)},value:t.language,placeholder:"Language"})),n.a.createElement("div",{className:"form-group col-md-6"},n.a.createElement("label",{htmlFor:"status"},"Status"),n.a.createElement("select",{id:"status",className:"form-control",onChange:function(t){e.handlers.statusChangeHandler(t.target.value)}},O.availableStatus.map(function(e){return n.a.createElement("option",{key:e.statusKey},e.statusValue)}))))))},H=a(28);a(141);B.a.setAppElement("#root"),B.a.defaultStyles.overlay.backgroundColor="rgba(0, 0, 0, 0.75)";var Q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).nameChangeHandler=function(e){a.setState(Object(r.a)({},a.state,{name:e}))},a.languageChangeHandler=function(e){a.setState(Object(r.a)({},a.state,{language:e}))},a.officialSiteChangeHandler=function(e){a.setState(Object(r.a)({},a.state,{officialSite:e}))},a.statusChangeHandler=function(e){a.setState(Object(r.a)({},a.state,{status:e}))},a.save=function(){var e=Object(r.a)({},a.state);a.props.editMode||(e.id=a.generateId()),a.props.saveHandler(e),a.props.closeModal()},a.state=e.showInfo?e.showInfo:Object(r.a)({},H[0]),a}return Object(h.a)(t,e),Object(A.a)(t,[{key:"generateId",value:function(){return parseInt(1+99*Math.random())}},{key:"render",value:function(){var e=this.props,t=e.modalIsOpen,a=e.afterOpenModal,o=e.closeModal,s={nameChangeHandler:this.nameChangeHandler.bind(this),languageChangeHandler:this.languageChangeHandler.bind(this),officialSiteChangeHandler:this.officialSiteChangeHandler.bind(this),statusChangeHandler:this.statusChangeHandler.bind(this)};return n.a.createElement(B.a,{isOpen:t,onAfterOpen:a,onRequestClose:o,contentLabel:"Add Show"},n.a.createElement("h4",null,this.props.editMode?"Edit Show":"Add Show"),n.a.createElement(y,{handlers:s,showInfo:this.state}),n.a.createElement("div",{className:"Footer"},n.a.createElement("button",{onClick:this.save.bind(this),className:"CancelButton btn btn-primary"},"Save"),n.a.createElement("button",{onClick:o,className:"CancelButton"},"Cancel")))}}]),t}(o.Component),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this))).openEditShowModal=function(e){a.props.eventHandlers.openEditCustomShowModalHandler(e)},a.showDetailsModal=function(e){a.props.eventHandlers.openDetailsModalHandler(e)},a.state={detailsModalVisible:!1,editShowModalVisible:!1},a}return Object(h.a)(t,e),Object(A.a)(t,[{key:"addDefaultImage",value:function(e){e.target.src=C.a}},{key:"render",value:function(){var e=this.props,t=e.readOnly,a=e.showInfo,o=e.deleteCustomShowHandler;e.updateCustomShowHandler;return n.a.createElement("div",{className:"showInfoCard"},n.a.createElement("div",{className:"ImageContainer"},!t&&n.a.createElement("div",{className:"CustomShowButtonPanel"},n.a.createElement("button",{className:"btn",onClick:this.openEditShowModal.bind(this,a)},n.a.createElement("span",{className:"glyphicon glyphicon-pencil"})),n.a.createElement("button",{className:"btn",onClick:function(){return o(a)}},n.a.createElement("span",{className:"glyphicon glyphicon-remove"}))),n.a.createElement("img",{className:"CardImage",src:a.image?a.image.medium:C.a,alt:a.name,onError:this.addDefaultImage})),n.a.createElement("a",{href:"#",onClick:this.showDetailsModal.bind(this,a)},a.name),n.a.createElement(U.a,{rating:parseInt(a.rating?a.rating.average:0)>0?a.rating.average/2:0,starRatedColor:"blue",starDimension:"20px",starSpacing:"5px",numberOfStars:5,name:"showRating"}),n.a.createElement(p,{values:a.genres}))}}]),t}(o.Component);var D=function(e){var t=e.shows,a=e.readOnly,o=e.deleteCustomShowHandler,s=e.updateCustomShowHandler,i=e.eventHandlers;return n.a.createElement("div",{className:"horizontalList"},t.map(function(e){return n.a.createElement(j,{key:e.id,showInfo:e,readOnly:a,eventHandlers:i,deleteCustomShowHandler:o,updateCustomShowHandler:s})}))};var N=function(e){var t=e.showList,a=e.listHeader,o=e.readOnly,s=e.addShowHandler,i=e.deleteCustomShowHandler,l=e.updateCustomShowHandler,r=e.eventHandlers;return n.a.createElement("div",null,n.a.createElement("div",{className:"ListHeader"},n.a.createElement("h2",null,a),!o&&n.a.createElement("div",{className:"ButtonPanel"},n.a.createElement("button",{className:"btn-md btn-primary",onClick:s},n.a.createElement("span",{className:"glyphicon glyphicon-plus AddCustomShowBtn"})))),t.length>0&&n.a.createElement(D,{shows:t,readOnly:o,eventHandlers:r,deleteCustomShowHandler:i,updateCustomShowHandler:l}),0===t.length&&n.a.createElement("div",null,"No items to display"))},I=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).openEditCustomShowModal=function(t){e.setState(Object(r.a)({},e.state,{showToUpdate:t,editModeForCustomShow:!0}))},e.addShowHandler=function(){e.setState(Object(r.a)({},e.state,{newShowModalVisible:!0}))},e.closeDetailsModal=function(){e.setState(Object(r.a)({},e.state,{detailsModalVisible:!1,showToView:{}}))},e.openDetailsModal=function(t){e.setState(Object(r.a)({},e.state,{showToView:t,detailsModalVisible:!0}))},e.closeEditShowModal=function(){e.setState(Object(r.a)({},e.state,{editModeForCustomShow:!1,showToUpdate:{}}))},e.state={newShowModalVisible:!1,detailsModalVisible:!1,showToView:{},editModeForCustomShow:!1,showToUpdate:{}},e}return Object(h.a)(t,e),Object(A.a)(t,[{key:"openModal",value:function(){this.setState(Object(r.a)({},this.state,{newShowModalVisible:!0}))}},{key:"closeModal",value:function(){this.setState(Object(r.a)({},this.state,{newShowModalVisible:!1}))}},{key:"render",value:function(){var e=this.props,t=e.recentSearch,a=e.allShows,o=e.customShows,s=e.saveCustomShowHandler,i=e.deleteCustomShowHandler,l=e.updateCustomShowHandler,r={openDetailsModalHandler:this.openDetailsModal.bind(this),openEditCustomShowModalHandler:this.openEditCustomShowModal.bind(this)};return n.a.createElement("div",{className:"MainContent"},n.a.createElement(N,{listHeader:"Recent Search",showList:t,readOnly:!0,eventHandlers:r}),n.a.createElement(N,{listHeader:"Custom Shows",showList:o,readOnly:!1,eventHandlers:r,addShowHandler:this.addShowHandler,deleteCustomShowHandler:i,updateCustomShowHandler:l}),n.a.createElement(N,{listHeader:"All Shows",showList:a,readOnly:!0,eventHandlers:r}),!this.state.editModeForCustomShow&&n.a.createElement(Q,{modalIsOpen:this.state.newShowModalVisible,saveHandler:s,closeModal:this.closeModal.bind(this)}),this.state.editModeForCustomShow&&n.a.createElement(Q,{editMode:this.state.editModeForCustomShow,showInfo:this.state.showToUpdate,modalIsOpen:this.state.editModeForCustomShow,saveHandler:l,closeModal:this.closeEditShowModal.bind(this)}),this.state.detailsModalVisible&&n.a.createElement(v,{open:this.state.detailsModalVisible,closeModal:this.closeDetailsModal,details:this.state.showToView}))}}]),t}(o.Component),k=(a(142),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state={allShows:[],recentSearch:[],customShows:[]},e}return Object(h.a)(t,e),Object(A.a)(t,[{key:"updateRecentSearch",value:function(e){this.setState(Object(r.a)({},this.state,{recentSearch:e}))}},{key:"saveCustomShow",value:function(e){this.setState(Object(r.a)({},this.state,{customShows:[e].concat(Object(l.a)(this.state.customShows))}))}},{key:"updateCustomShow",value:function(e){var t=Object(l.a)(this.state.customShows),a=t.findIndex(function(t){return t.id===e.id});t.splice(a,1,e),this.setState(Object(r.a)({},this.state,{customShows:t}))}},{key:"deleteCustomShow",value:function(e){var t=this.state.customShows.filter(function(t){return e.id!==t.id});this.setState(Object(r.a)({},this.state,{customShows:t}))}},{key:"componentDidMount",value:function(){var e=this;w.a.get("https://api.tvmaze.com/shows").then(function(t){e.setState(Object(r.a)({},e.state,{allShows:t.data}))}),this.setState(Object(r.a)({},this.state,{customShows:H}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"Header"},n.a.createElement(g,{onSearchUpdate:this.updateRecentSearch.bind(this)})),n.a.createElement(I,{recentSearch:this.state.recentSearch,allShows:this.state.allShows,customShows:this.state.customShows,saveCustomShowHandler:this.saveCustomShow.bind(this),deleteCustomShowHandler:this.deleteCustomShow.bind(this),updateCustomShowHandler:this.updateCustomShow.bind(this)}))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.Fragment,null,n.a.createElement("link",{href:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",rel:"stylesheet"}),n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},21:function(e,t){e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAEnANIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD8K/jr8Zta/aD+LeveMfEFzcXOpa5dNOwluJLj7PH92KBXkZn8uOMLGoJOFRR2rkyxI+nSirFnpz3kM0uVjht13O7fdyfur/vMeAPqegJD1YtEivRRRSGFFFFADo28t1barYPQ9DRLM077mO402ii7tYAooooAKVCA43fd7j1pKKAHSyNLIzN1Y5ptFFABUltbNdzKi9T39KjqSC6ktt3lsV3rtPuKqNr+9sKV7aD76RQ/lx/6uPgH+8e5qCiiiUuZ3CKsrBRRRUjCiiigAooooAKKKKACiiigBxjYIG/hNSf2hMtg1qsjLbs4lZAfldwCAxHcgMwHpk+povLz7TtVUEUaqBtUnBIGCx9zUNPbYPUKKKKQBRRRQAUUUUAFFFFABRRRQAUUUUAA5ooooAKKKKACiiigAooooAKKKKACiiigAop3y+9FOwDTxRRRSAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAopwRj/C35UUBcbRTj8gptUwCiiipAKKKKACiiigAooooAKKKKACiiigAoooAyaACnFl8rG35s5JP8h/n/67aKACiiigAooooAKKdLG0MjKwwynBHoabQAVYitMRLIzbvMB2hTkgj1FV6sWF0trKrMpba6sOfSmmluriZ0Fto3+jx/7oorN/4TK6X7qxBewx0FFY8jGZJO40UUVqAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRQRg0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFXte0KXw7dLb3DQ/adiySJHIJPJ3DIViMjdgjIzlScHDAgADNN1CGwgut1qs1xKgSCVnYfZTuBLgDq2AVGcgBicZ2kVKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACgnJoooAKKKKACiiigAooooAKKKKACiipLW3a7uFjXbuc4yxwo9yewHUnsKAC2s5bwyeVG0nloZHwPuqOpNR1pan4hkksf7PtpGj02NshFXZ57f89H9WPoSQvQVm0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFAOPxoooAKKKKACiiigAooooAKKKKACiiigAoopVIGcjPHHtQAlFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAHrRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUASG2ZYPMb5VPAz36f41HUlxP5rHbu27iRk0W9o9yGK8KoJLHpwM4+ppbblWu7RI6KKKZIUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAoHzVd07V5dPGEb5aqbBSNgVMo82jGnYJX3ys2AMnOB2ptFFUIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKB1oAKCNtLjNDDBo2dh20uJRRQBk0CCiilQgMNw3DuPWgBKKV23OSFC5PQdBSUAFFAGTWlf+Fb7R9Mtr26t2htrvPlEsu5sZ7ZyOncUuZJ2ZXK2rozaKCc0UyQooooAKKKKACiinfdoAbRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAOaJkVWZSFbofWm0E5ooAM1LPdSSxpGzFkjyVGOmcZ/kKiooAKKKKACiiigAooooAKKKKACiiigAooooAKKKdC+yQGgBp4orWMkbc+TGc88rRWftEY+28jJooorQ2CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKdF9+iigDWFtgfe/Siiiuc88/9k="},28:function(e){e.exports=[{id:1,url:"http://www.tvmaze.com/shows/1/under-the-dome",name:"",type:"Scripted",language:"",genres:["Drama","Science-Fiction","Thriller"],status:"",runtime:60,premiered:"2013-06-24",officialSite:"",schedule:{time:"22:00",days:["Thursday"]},rating:{average:6.5},weight:94,network:{id:2,name:"CBS",country:{name:"United States",code:"US",timezone:"America/New_York"}},webChannel:null,externals:{tvrage:25988,thetvdb:264492,imdb:"tt1553656"},image:{medium:"http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",original:"http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"},summary:"<p><b>Dummy Show</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",updated:1549572248,_links:{self:{href:"http://api.tvmaze.com/shows/1"},previousepisode:{href:"http://api.tvmaze.com/episodes/185054"}}}]},67:function(e,t,a){e.exports=a(143)},72:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.dcfc7e8c.chunk.js.map