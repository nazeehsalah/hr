(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{vdNh:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class o{}var i=e("pMnS"),u=e("oBZk"),s=e("SVse"),a=e("ZZ/e"),r=e("mrSG"),c=e("pbSD"),d=e("wHSu"),p=e("2Rin"),g=e("H+bZ"),m=e("l4sT"),f=e("Wzxd");class h{constructor(l,n,e,t,o,i,u){this.dataService=l,this.util=n,this.apiService=e,this.referenceservice=t,this.navCtrl=o,this.events=i,this.modalController=u,this.noData=!1,this.time=0,this.faCalendar=d.b,this.faPaperclip=d.h,this.faComments=d.d,this.faFilter=d.f,this.bgColor="3A57C4",this.pageNumber=1,this.page=!1,this.keywords={},this.role=localStorage.getItem("role"),this.roleId=localStorage.getItem("role_id"),this.color=localStorage.getItem("colorCode"),this.primaryColor=localStorage.getItem("primary_color"),this.secondryColor=localStorage.getItem("secondry_color")}editProject(l){return r.b(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:m.a,componentProps:{project:l},cssClass:"custom-modal"});this.util.isModal="blurPage",yield n.present(),yield n.onWillDismiss().then(l=>{console.log(l),this.util.isModal=""})}))}ngOnInit(){this.page=!1,console.log(this.dataService.project_list),this.projectList=JSON.stringify(this.dataService.project_list),this.projectList=JSON.parse(this.projectList),this.projectList.forEach((l,n)=>{l.time=this.time,this.time=this.time+.2,this.projectList[n].opentasks=l.tasks_open.length,this.projectList[n].completedtasks=l.tasks_completed.length}),this.applyClassBySelection("bounceInRight")}getHeaderStyle(){return{background:this.primaryColor}}openProject(l){this.cssClass="",this.navCtrl.navigateForward("/view-projects",{state:{project:l}})}createProject(){return r.b(this,void 0,void 0,(function*(){const l=yield this.modalController.create({component:f.a,cssClass:"custom-modal"});this.util.isModal="blurPage",yield l.present(),yield l.onWillDismiss().then(l=>{console.log(l),this.util.isModal=""})}))}getFontstyle(){return{color:this.secondryColor}}applyClassBySelection(l){this.cssClass="animated "+l}deleteProject(l){this.cssClass="",this.referenceservice.deleteAlert("Confirm Delete","Do you want to delete this project").then(n=>{console.log(n),this.onDeleteConfirm(l)})}onDeleteConfirm(l){let n=document.getElementById(l);n.classList.add("animated","rollOut","slow"),n.addEventListener("animationend",n=>{this.projectList.splice(l,1),this.util.showAlert("Smart HR","Project Removed successfully")})}getProgresstyle(){return{background:"linear-gradient(to right,"+this.secondryColor+","+this.primaryColor+")",height:"10px"}}}var C=[['.content-div[_ngcontent-%COMP%]{background:#fff;border-radius:50px 50px 0 0;top:-50px;position:relative;width:100%}.empty-div[_ngcontent-%COMP%]{background:#073e89;height:120px}.custom-icon-project-list-icon[_ngcontent-%COMP%]{font-size:25px}.custom-icon-calendar-icon[_ngcontent-%COMP%], .custom-icon-chat-icon-1[_ngcontent-%COMP%]{font-weight:700}.project-list[_ngcontent-%COMP%]{background:0 0;border-radius:50px;padding:0;margin:10px 30px 10px 50px;box-shadow:-7px 10px 18px 7px rgba(0,0,0,.14)}.project-list[_ngcontent-%COMP%]   .project-content[_ngcontent-%COMP%]{padding:10px 20px 10px 30px}.project-name[_ngcontent-%COMP%]{font-size:14px;font-weight:700}.head-title[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:700}.pro-text[_ngcontent-%COMP%]{font-size:12px;font-weight:700}.progress-div[_ngcontent-%COMP%]{width:80%;background:#cbf4db;height:70px}.project-content[_ngcontent-%COMP%]{position:absolute;top:0;width:100%;height:70px}.sort-item[_ngcontent-%COMP%]{width:80px;border-bottom:1.5px solid #fe9c45;margin:10px 0 10px 50px;padding:0;--padding-start:0}.sort-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:20px;font-weight:700}.sort-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px}.fab-add-btn[_ngcontent-%COMP%]{--border-radius:15px!important;--background:#FE9C45}.timeline[_ngcontent-%COMP%]{position:relative;max-width:100%;margin:0 auto;padding-top:20px}.timeline[_ngcontent-%COMP%]::after{content:"";position:absolute;width:2px;background-color:#d2d2d2;top:30px;bottom:0;left:31px}.container[_ngcontent-%COMP%]{position:relative;background-color:inherit;padding:5px 0}.container[_ngcontent-%COMP%]::after{content:"";position:absolute;width:15px;height:15px;top:42px;border-radius:50%;z-index:1;margin-left:9px}.project-content[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden}.container[_ngcontent-%COMP%]:nth-of-type(odd)::after{background-color:#073e89}.container[_ngcontent-%COMP%]:nth-of-type(even)::after{background-color:#ff9f55}.left[_ngcontent-%COMP%]{left:0}.left[_ngcontent-%COMP%]::after, .right[_ngcontent-%COMP%]::after{left:15px}.between.days-btn[_ngcontent-%COMP%]{background:#fe9c45!important}']],b=t["\u0275crt"]({encapsulation:0,styles:C,data:{}});function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,48,"div",[["class","container left"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,47,"ion-list",[["class","project-list"]],[[8,"id",0]],null,null,u.pb,u.y)),t["\u0275prd"](512,null,s["\u0275NgClassImpl"],s["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](3,278528,null,0,s.NgClass,[s["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275prd"](512,null,s["\u0275NgStyleImpl"],s["\u0275NgStyleR2Impl"],[t.ElementRef,t.KeyValueDiffers,t.Renderer2]),t["\u0275did"](5,278528,null,0,s.NgStyle,[s["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),t["\u0275pod"](6,{"animation-delay":0}),t["\u0275did"](7,49152,null,0,a.IonList,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](8,0,null,0,40,"ion-item-sliding",[],null,null,null,u.lb,u.w)),t["\u0275did"](9,49152,null,0,a.IonItemSliding,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](10,0,null,0,30,"ion-item",[["class","slide-item"]],null,null,null,u.mb,u.t)),t["\u0275did"](11,49152,null,0,a.IonItem,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](12,0,null,0,0,"div",[["class","progress-div"]],[[4,"width","%"]],null,null,null,null)),(l()(),t["\u0275eld"](13,0,null,0,27,"div",[["class","project-content"]],null,[[null,"click"]],(function(l,n,e){var t=!0,o=l.component;"click"===n&&(t=!1!==o.openProject(l.context.$implicit)&&t);return t}),null,null)),(l()(),t["\u0275eld"](14,0,null,null,4,"ion-row",[],null,null,null,u.vb,u.F)),t["\u0275did"](15,49152,null,0,a.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](16,0,null,0,2,"ion-label",[["class","project-name"]],null,null,null,u.nb,u.x)),t["\u0275did"](17,49152,null,0,a.IonLabel,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](18,0,["",""])),(l()(),t["\u0275eld"](19,0,null,null,21,"ion-row",[],null,null,null,u.vb,u.F)),t["\u0275did"](20,49152,null,0,a.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](21,0,null,0,6,"ion-col",[["size","6"]],null,null,null,u.X,u.h)),t["\u0275did"](22,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](23,0,null,0,0,"span",[["class","custom-icon-calendar-icon"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,0,[" \xa0"])),(l()(),t["\u0275eld"](25,0,null,0,2,"span",[["class","pro-text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](26,null,["",""])),t["\u0275ppd"](27,2),(l()(),t["\u0275eld"](28,0,null,0,6,"ion-col",[["size","3"]],null,null,null,u.X,u.h)),t["\u0275did"](29,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](30,0,null,0,1,"ion-icon",[["name","attach"],["style","transform: rotate(45deg)"]],null,null,null,u.fb,u.p)),t["\u0275did"](31,49152,null,0,a.IonIcon,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(l()(),t["\u0275ted"](-1,0,[" \xa0"])),(l()(),t["\u0275eld"](33,0,null,0,1,"span",[["class","pro-text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](34,null,["",""])),(l()(),t["\u0275eld"](35,0,null,0,5,"ion-col",[["size","3"]],null,null,null,u.X,u.h)),t["\u0275did"](36,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](37,0,null,0,0,"span",[["class","custom-icon-chat-icon-1"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,0,[" \xa0 "])),(l()(),t["\u0275eld"](39,0,null,0,1,"span",[["class","pro-text"]],null,null,null,null,null)),(l()(),t["\u0275ted"](40,null,["",""])),(l()(),t["\u0275eld"](41,0,null,0,7,"ion-item-options",[["side","end"]],null,null,null,u.kb,u.v)),t["\u0275did"](42,49152,null,0,a.IonItemOptions,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{side:[0,"side"]},null),(l()(),t["\u0275eld"](43,0,null,0,2,"ion-item-option",[["color","success"]],null,[[null,"click"]],(function(l,n,e){var t=!0,o=l.component;"click"===n&&(t=!1!==o.editProject(l.context.$implicit)&&t);return t}),u.jb,u.u)),t["\u0275did"](44,49152,null,0,a.IonItemOption,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275ted"](-1,0,["Edit"])),(l()(),t["\u0275eld"](46,0,null,0,2,"ion-item-option",[["color","danger"]],null,[[null,"click"]],(function(l,n,e){var t=!0,o=l.component;"click"===n&&(t=!1!==o.deleteProject(l.context.index)&&t);return t}),u.jb,u.u)),t["\u0275did"](47,49152,null,0,a.IonItemOption,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275ted"](-1,0,["Delete"]))],(function(l,n){l(n,3,0,"project-list",n.component.cssClass);var e=l(n,6,0,n.context.$implicit.time+"s");l(n,5,0,e);l(n,22,0,"6");l(n,29,0,"3");l(n,31,0,"attach");l(n,36,0,"3");l(n,42,0,"end");l(n,44,0,"success");l(n,47,0,"danger")}),(function(l,n){l(n,1,0,t["\u0275inlineInterpolate"](1,"",n.context.index,"")),l(n,12,0,n.context.$implicit.progress),l(n,18,0,n.context.$implicit.project_title);var e=t["\u0275unv"](n,26,0,l(n,27,0,t["\u0275nov"](n.parent,0),n.context.$implicit.start_date,"d MMM y"));l(n,26,0,e),l(n,34,0,n.context.$implicit.tasks_files_count),l(n,40,0,n.context.$implicit.comment_count)}))}function v(l){return t["\u0275vid"](0,[t["\u0275pid"](0,s.DatePipe,[t.LOCALE_ID]),(l()(),t["\u0275eld"](1,0,null,null,18,"ion-header",[],null,null,null,u.eb,u.o)),t["\u0275prd"](512,null,s["\u0275NgClassImpl"],s["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](3,278528,null,0,s.NgClass,[s["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),t["\u0275did"](4,49152,null,0,a.IonHeader,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](5,0,null,0,14,"ion-toolbar",[["class","blues-nav"]],null,null,null,u.Fb,u.P)),t["\u0275did"](6,49152,null,0,a.IonToolbar,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](7,0,null,0,12,"ion-row",[],null,null,null,u.vb,u.F)),t["\u0275did"](8,49152,null,0,a.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](9,0,null,0,4,"ion-col",[["class","nav-back"],["size","2"]],null,null,null,u.X,u.h)),t["\u0275did"](10,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](11,0,null,0,2,"span",[["class","custom-icon-back-arrow-icon"]],null,[[null,"click"]],(function(l,n,e){var t=!0,o=l.component;"click"===n&&(t=!1!==o.util.popBack()&&t);return t}),null,null)),(l()(),t["\u0275eld"](12,0,null,null,0,"span",[["class","path1"]],null,null,null,null,null)),(l()(),t["\u0275eld"](13,0,null,null,0,"span",[["class","path2"]],null,null,null,null,null)),(l()(),t["\u0275eld"](14,0,null,0,5,"ion-col",[["class","nav-content"],["size","10"]],null,null,null,u.X,u.h)),t["\u0275did"](15,49152,null,0,a.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](16,0,null,0,3,"ion-title",[],null,null,null,u.Db,u.N)),t["\u0275did"](17,49152,null,0,a.IonTitle,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](18,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Projects"])),(l()(),t["\u0275eld"](20,0,null,null,25,"ion-content",[],null,null,null,u.Y,u.i)),t["\u0275prd"](512,null,s["\u0275NgClassImpl"],s["\u0275NgClassR2Impl"],[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](22,278528,null,0,s.NgClass,[s["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),t["\u0275did"](23,49152,null,0,a.IonContent,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](24,0,null,0,5,"div",[["class","empty-div"]],null,null,null,null,null)),(l()(),t["\u0275eld"](25,0,null,null,4,"ion-item",[["lines","none"]],null,null,null,u.mb,u.t)),t["\u0275did"](26,49152,null,0,a.IonItem,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(l()(),t["\u0275eld"](27,0,null,0,1,"span",[["class","head-title"],["slot","start"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Project List"])),(l()(),t["\u0275eld"](29,0,null,0,0,"span",[["class","custom-icon-project-list-icon"],["slot","end"]],null,null,null,null,null)),(l()(),t["\u0275eld"](30,0,null,0,9,"div",[["class","content-div"]],null,null,null,null,null)),(l()(),t["\u0275eld"](31,0,null,null,8,"div",[["class","timeline"]],null,null,null,null,null)),(l()(),t["\u0275eld"](32,0,null,null,5,"ion-item",[["class","sort-item"]],null,null,null,u.mb,u.t)),t["\u0275did"](33,49152,null,0,a.IonItem,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](34,0,null,0,2,"ion-label",[],null,null,null,u.nb,u.x)),t["\u0275did"](35,49152,null,0,a.IonLabel,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,[" Sort "])),(l()(),t["\u0275eld"](37,0,null,0,0,"span",[["class","custom-icon-sort-icon"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,R)),t["\u0275did"](39,278528,null,0,s.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](40,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,u.bb,u.k)),t["\u0275did"](41,49152,null,0,a.IonFab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t["\u0275eld"](42,0,null,0,3,"ion-fab-button",[["class","fab-add-btn"]],null,[[null,"click"]],(function(l,n,e){var t=!0,o=l.component;"click"===n&&(t=!1!==o.createProject()&&t);return t}),u.ab,u.l)),t["\u0275did"](43,49152,null,0,a.IonFabButton,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](44,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,u.fb,u.p)),t["\u0275did"](45,49152,null,0,a.IonIcon,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(l,n){var e=n.component;l(n,3,0,e.util.isModal);l(n,10,0,"2");l(n,15,0,"10"),l(n,22,0,e.util.isModal);l(n,26,0,"none"),l(n,39,0,e.projectList);l(n,41,0,"end","bottom");l(n,45,0,"add")}),null)}var I=t["\u0275ccf"]("app-project-list",h,(function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-project-list",[],null,null,null,v,b)),t["\u0275did"](1,114688,null,0,h,[c.a,p.a,g.a,p.a,a.NavController,a.Events,a.ModalController],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),x=e("fNgX"),_=e("s7LF"),N=e("iInd");class P{}var y=e("Nv++");e.d(n,"ProjectListPageModuleNgFactory",(function(){return M}));var M=t["\u0275cmf"](o,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,I,x.b,x.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,s.NgLocalization,s.NgLocaleLocalization,[t.LOCALE_ID,[2,s["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,_["\u0275angular_packages_forms_forms_o"],_["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,a.AngularDelegate,a.AngularDelegate,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,a.ModalController,a.ModalController,[a.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,a.PopoverController,a.PopoverController,[a.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,s.CommonModule,s.CommonModule,[]),t["\u0275mpd"](1073742336,_["\u0275angular_packages_forms_forms_d"],_["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,_.FormsModule,_.FormsModule,[]),t["\u0275mpd"](1073742336,a.IonicModule,a.IonicModule,[]),t["\u0275mpd"](1073742336,N.o,N.o,[[2,N.t],[2,N.m]]),t["\u0275mpd"](1073742336,P,P,[]),t["\u0275mpd"](1073742336,y.j,y.j,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,N.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);