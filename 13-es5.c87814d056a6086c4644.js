(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{cQc6:function(n,e){n.exports=function(n,e){for(var l=n[0],t=n[1],o=!1,i=0,a=e.length-1;i<e.length;a=i++){var u=e[i][0],c=e[i][1],r=e[a][0],d=e[a][1];c>t!=d>t&&l<(r-u)*(t-c)/(d-c)+u&&(o=!o)}return o}},tSEX:function(n,e,l){"use strict";l.r(e);var t=l("CcnG"),o=function(){},i=l("pMnS"),a=l("oBZk"),u=l("ZZ/e"),c=l("fNgX"),r=l("Hf/j"),d=l("ZYjt"),s=l("gIcY"),g=l("Ip0R"),p=l("mrSG"),f=l("LAMn"),h=l("2Rin"),m=l("wHSu"),C=l("zuHl"),M=l("wojB"),_=l("cQc6"),v=l("xoVG"),O=l("0azT"),x=function(){function n(n,e,l,t,o,i,a){this.util=n,this.shared=e,this.odooApi=l,this.finger=t,this.platform=o,this.wifiWizard2=i,this.network=a,this.faUser=m.i,this.firstOpen=!0,this.attendanceList=[];var u=[[1,1],[1,2],[4,2],[4,1],[4.5,1.5]];console.dir([_([3,1.5],u),_([5,5],u)]);this.date=new Date("28 Nov 2018"),this.day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][this.date.getDay()+1]}return n.prototype.ngOnInit=function(){this.attendanceDate=(new Date).getFullYear()+"-"+(1==((new Date).getMonth()+1).toString().length?"0"+((new Date).getMonth()+1):(new Date).getMonth()+1),this.getAttendanceList(this.attendanceDate)},n.prototype.punchIn=function(){var n=this;this.odooApi.checkIn(this.formatDate(new Date),this.shared.user_id).then((function(e){console.log("checkIn",e),alert("you clock in"),n.getAttendanceList("2020-12")}))},n.prototype.punchOut=function(){var n=this;this.odooApi.checkOut(this.formatDate(new Date),this.shared.user_id).then((function(e){console.log("checkOut",e),alert("you clock out"),n.getAttendanceList("2020-12")}))},n.prototype.authAttendance=function(n){return p.b(this,void 0,void 0,(function(){return p.e(this,(function(n){return this.util.loading(),[2]}))}))},n.prototype.getAttendanceList=function(n){return p.b(this,void 0,void 0,(function(){var e=this;return p.e(this,(function(l){switch(l.label){case 0:return this.util.loading(),[4,this.odooApi.getAttendanceList(n,this.shared.user_id).then((function(n){e.util.dismissLoading(),console.log("attendance List",n),e.attendanceList=JSON.parse(JSON.stringify(n)).data})).catch((function(n){e.util.dismissLoading(),console.log("Error",n)}))];case 1:return l.sent(),[2]}}))}))},n.prototype.formatDate=function(n){var e=new Date(n),l=""+(e.getMonth()+1),t=""+e.getDate(),o=e.getFullYear(),i=""+e.getHours(),a=""+e.getMinutes(),u=""+e.getSeconds();return i.length<2&&(i="0"+i),a.length<2&&(a="0"+a),u.length<2&&(u="0"+u),l.length<2&&(l="0"+l),t.length<2&&(t="0"+t),[o,l,t].join("-")+" "+[i,a,u].join(":")},n.prototype.ChangeDate=function(n){this.attendanceDate=n.detail.value,console.log("ChangeDate",this.firstOpen,this.attendanceDate),console.log("attendance"+new Date(this.attendanceDate).getFullYear()+"-"+(new Date(this.attendanceDate).getMonth()+1));var e=new Date(this.attendanceDate).getFullYear(),l=""+(new Date(this.attendanceDate).getMonth()+1);l.length<2&&(l="0"+l),this.getAttendanceList(e+"-"+l)},n}(),P=[['.attendance-list[_ngcontent-%COMP%]{background:0 0;border-radius:50px;padding:0;margin:15px 30px 10px 50px;box-shadow:-7px 10px 18px 7px rgba(0,0,0,.09)}.attendance-list[_ngcontent-%COMP%]   .attendance-content[_ngcontent-%COMP%]{padding:10px 20px}.attendance-content[_ngcontent-%COMP%]{top:0;width:100%}.attendance-timeline[_ngcontent-%COMP%]   .sort-item[_ngcontent-%COMP%]{border-bottom:1.5px solid #fe9c45;margin:10px 0 10px 50px;padding:0;--padding-start:0}.attendance-timeline[_ngcontent-%COMP%]   .sort-item[_ngcontent-%COMP%]:first-child{border-bottom:none}.attendance-timeline[_ngcontent-%COMP%]   .sort-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:.8em;font-weight:700}.attendance-timeline[_ngcontent-%COMP%]   .sort-item[_ngcontent-%COMP%]:first-child   ion-label[_ngcontent-%COMP%]{font-size:.8em;font-weight:400}.attendance-timeline[_ngcontent-%COMP%]{position:relative;max-width:1200px;margin:0 auto}.attendance-timeline[_ngcontent-%COMP%]::after{content:"";position:absolute;width:2px;background-color:#d2d2d2;top:0;bottom:0;left:31px}.attendance-container[_ngcontent-%COMP%]{position:relative;background-color:inherit}.attendance-container[_ngcontent-%COMP%]::after{content:"";position:absolute;width:15px;height:15px;top:20px;border-radius:50%;z-index:1;margin-left:9px}.attendance-container[_ngcontent-%COMP%]:nth-of-type(odd)::after{background-color:#073e89}.attendance-container[_ngcontent-%COMP%]:nth-of-type(even)::after{background-color:#ff9f55}.left[_ngcontent-%COMP%]{left:0}.left[_ngcontent-%COMP%]::after, .right[_ngcontent-%COMP%]::after{left:15px}.attendance-content[_ngcontent-%COMP%]   .activity[_ngcontent-%COMP%]{font-family:Poppins-Regular;font-size:.7em}.attendance-content[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{font-family:Poppins-Regular;font-weight:700;text-align:end;white-space:break-spaces;font-size:.7em}.attendance-date[_ngcontent-%COMP%]{font-family:Poppins-Medium;font-weight:700;font-size:1em;color:#fff;text-align:center}.punch-card[_ngcontent-%COMP%]{border-radius:40px;background:#fff;height:190px;box-shadow:-7px 10px 18px 7px rgba(0,0,0,.14)}.punch-card[_ngcontent-%COMP%]   .activity[_ngcontent-%COMP%]{font-weight:700;font-size:16px;text-align:center;font-family:Poppins-Regular;color:#000;white-space:nowrap}.punch-card[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{font-size:14px;color:#000;font-family:Poppins-Regular;text-align:center}.punchout-card[_ngcontent-%COMP%]{margin-top:50px}.punchCards-row[_ngcontent-%COMP%]{padding:0 10px;position:relative}.punch-content-div[_ngcontent-%COMP%]{background:#fff;border-radius:50px 50px 0 0;position:relative;width:100%}.punch-empty-div[_ngcontent-%COMP%]{background:#073e89;height:200px}.attendance-hours[_ngcontent-%COMP%]{border-radius:30px;border:1px solid #ff9f55;color:#ff9f55;font-weight:600;font-size:20px;text-align:center;margin:25px 30px;padding:10px}.custom-icon-punch-fingerprint-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .custom-icon-verified-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:newhrms}.finger-print-icon[_ngcontent-%COMP%]{margin:15px 0;text-align:center;min-width:75px}.custom-icon-verified-icon[_ngcontent-%COMP%]{font-size:20px;position:absolute;margin-left:-20px}.custom-icon-punch-fingerprint-icon[_ngcontent-%COMP%]{font-size:75px}.custom-icon-punch-fingerprint-icon[_ngcontent-%COMP%]   .path1[_ngcontent-%COMP%]{font-weight:700;color:#fe9c45}.custom-icon-punch-fingerprint-icon[_ngcontent-%COMP%]   .path2[_ngcontent-%COMP%]{color:#fff}.empty[_ngcontent-%COMP%]{text-align:center;margin-top:50px}.empty[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:3em;color:#073e89}.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}ion-item[_ngcontent-%COMP%]{font-size:.8em}']],R=t["\u0275crt"]({encapsulation:0,styles:P,data:{}});function D(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,22,"div",[],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,21,"div",[["class","attendance-container left"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,20,"ion-list",[["class","attendance-list"]],null,null,null,a.pb,a.y)),t["\u0275did"](3,49152,null,0,u.IonList,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](4,0,null,0,18,"div",[["class","attendance-content"]],null,null,null,null,null)),(n()(),t["\u0275eld"](5,0,null,null,17,"ion-row",[],null,null,null,a.vb,a.F)),t["\u0275did"](6,49152,null,0,u.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](7,0,null,0,3,"ion-col",[["size","4"]],null,null,null,a.X,a.h)),t["\u0275did"](8,49152,null,0,u.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](9,0,null,0,1,"div",[["class","activity"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Check In"])),(n()(),t["\u0275eld"](11,0,null,0,3,"ion-col",[["size","8"]],null,null,null,a.X,a.h)),t["\u0275did"](12,49152,null,0,u.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](13,0,null,0,1,"div",[["class","time"]],null,null,null,null,null)),(n()(),t["\u0275ted"](14,null,["",""])),(n()(),t["\u0275eld"](15,0,null,0,3,"ion-col",[["size","4"]],null,null,null,a.X,a.h)),t["\u0275did"](16,49152,null,0,u.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](17,0,null,0,1,"div",[["class","activity"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Check out"])),(n()(),t["\u0275eld"](19,0,null,0,3,"ion-col",[["size","8"]],null,null,null,a.X,a.h)),t["\u0275did"](20,49152,null,0,u.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](21,0,null,0,1,"div",[["class","time"]],null,null,null,null,null)),(n()(),t["\u0275ted"](22,null,["",""]))],(function(n,e){n(e,8,0,"4");n(e,12,0,"8");n(e,16,0,"4");n(e,20,0,"8")}),(function(n,e){n(e,14,0,e.context.$implicit.check_in),n(e,22,0,e.context.$implicit.check_out)}))}function w(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"div",[["class","empty"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,2,"fa-icon",[["class","ng-fa-icon"],["slot","end"]],[[1,"title",0],[8,"innerHTML",1]],null,null,c.d,c.c)),t["\u0275did"](2,573440,null,0,r.c,[d.b,r.a,r.d,[2,r.i]],{icon:[0,"icon"]},null),t["\u0275pad"](3,2),(n()(),t["\u0275eld"](4,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["No Attendance Log"]))],(function(n,e){var l=n(e,3,0,"fad","frown");n(e,2,0,l)}),(function(n,e){n(e,1,0,t["\u0275nov"](e,2).title,t["\u0275nov"](e,2).renderedIconHTML)}))}function b(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,16,"ion-header",[],null,null,null,a.eb,a.o)),t["\u0275did"](1,49152,null,0,u.IonHeader,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,14,"ion-toolbar",[["class","blues-nav"]],null,null,null,a.Fb,a.P)),t["\u0275did"](3,49152,null,0,u.IonToolbar,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](4,0,null,0,12,"ion-row",[],null,null,null,a.vb,a.F)),t["\u0275did"](5,49152,null,0,u.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](6,0,null,0,4,"ion-col",[["class","nav-back"],["size","2"],["size-md","1"]],null,null,null,a.X,a.h)),t["\u0275did"](7,49152,null,0,u.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](8,0,null,0,2,"span",[["class","custom-icon-back-arrow-icon"]],null,[[null,"click"]],(function(n,e,l){var t=!0,o=n.component;"click"===e&&(t=!1!==o.util.popBack()&&t);return t}),null,null)),(n()(),t["\u0275eld"](9,0,null,null,0,"span",[["class","path1"]],null,null,null,null,null)),(n()(),t["\u0275eld"](10,0,null,null,0,"span",[["class","path2"]],null,null,null,null,null)),(n()(),t["\u0275eld"](11,0,null,0,5,"ion-col",[["class","nav-content"],["size","10"],["size-md","11"]],null,null,null,a.X,a.h)),t["\u0275did"](12,49152,null,0,u.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(n()(),t["\u0275eld"](13,0,null,0,3,"ion-title",[],null,null,null,a.Db,a.N)),t["\u0275did"](14,49152,null,0,u.IonTitle,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](15,0,null,0,1,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Attendance List"])),(n()(),t["\u0275eld"](17,0,null,null,20,"ion-content",[],null,null,null,a.Y,a.i)),t["\u0275did"](18,49152,null,0,u.IonContent,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](19,0,null,0,18,"div",[["class","punch-content-div"]],null,null,null,null,null)),(n()(),t["\u0275eld"](20,0,null,null,12,"ion-row",[["class","punchCards-row"]],null,null,null,a.vb,a.F)),t["\u0275did"](21,49152,null,0,u.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](22,0,null,0,10,"ion-col",[],null,null,null,a.X,a.h)),t["\u0275did"](23,49152,null,0,u.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](24,0,null,0,8,"ion-item",[["class","sort-item"]],null,null,null,a.mb,a.t)),t["\u0275did"](25,49152,null,0,u.IonItem,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](26,0,null,0,2,"ion-label",[["fixed",""]],null,null,null,a.nb,a.x)),t["\u0275did"](27,49152,null,0,u.IonLabel,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Select Date"])),(n()(),t["\u0275eld"](29,0,null,0,3,"ion-datetime",[["displayFormat","YYYY-MM"],["pickerFormat","MMMM YYYY"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(n,e,l){var o=!0,i=n.component;"ionBlur"===e&&(o=!1!==t["\u0275nov"](n,32)._handleBlurEvent(l.target)&&o);"ionChange"===e&&(o=!1!==t["\u0275nov"](n,32)._handleChangeEvent(l.target)&&o);"ionChange"===e&&(o=!1!==i.ChangeDate(l)&&o);return o}),a.Z,a.j)),t["\u0275prd"](5120,null,s.NG_VALUE_ACCESSOR,(function(n){return[n]}),[u.SelectValueAccessor]),t["\u0275did"](31,49152,null,0,u.IonDatetime,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{displayFormat:[0,"displayFormat"],pickerFormat:[1,"pickerFormat"],value:[2,"value"]},null),t["\u0275did"](32,16384,null,0,u.SelectValueAccessor,[t.ElementRef],null,null),(n()(),t["\u0275eld"](33,0,null,null,4,"div",[["class","attendance-timeline"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,D)),t["\u0275did"](35,278528,null,0,g.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,w)),t["\u0275did"](37,16384,null,0,g.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,e){var l=e.component;n(e,7,0,"2");n(e,12,0,"10");n(e,31,0,"YYYY-MM","MMMM YYYY",l.attendanceDate),n(e,35,0,l.attendanceList),n(e,37,0,0==l.attendanceList.length)}),null)}var y=t["\u0275ccf"]("app-attendance",x,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-attendance",[],null,null,null,b,R)),t["\u0275did"](1,114688,null,0,x,[h.a,C.a,M.a,f.a,u.Platform,O.a,v.a],null,null)],(function(n,e){n(e,1,0)}),null)}),{},{},[]),z=l("ZYCi"),k=function(){};l.d(e,"AttendancePageModuleNgFactory",(function(){return I}));var I=t["\u0275cmf"](o,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,y,c.b,c.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,g.NgLocalization,g.NgLocaleLocalization,[t.LOCALE_ID,[2,g["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,s["\u0275angular_packages_forms_forms_o"],s["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,u.AngularDelegate,u.AngularDelegate,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,u.ModalController,u.ModalController,[u.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,u.PopoverController,u.PopoverController,[u.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,g.CommonModule,g.CommonModule,[]),t["\u0275mpd"](1073742336,s["\u0275angular_packages_forms_forms_d"],s["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,s.FormsModule,s.FormsModule,[]),t["\u0275mpd"](1073742336,u.IonicModule,u.IonicModule,[]),t["\u0275mpd"](1073742336,z.o,z.o,[[2,z.t],[2,z.m]]),t["\u0275mpd"](1073742336,k,k,[]),t["\u0275mpd"](1073742336,r.j,r.j,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,z.k,(function(){return[[{path:"",component:x}]]}),[])])}))}}]);