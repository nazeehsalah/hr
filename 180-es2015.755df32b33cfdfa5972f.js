(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{IwaN:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class o{}var u=e("pMnS"),i=e("oBZk"),r=e("ZZ/e"),a=e("SVse"),s=e("Fonl"),c=e("AsPb"),d=e("O98o"),g=e("s7LF"),p=e("mrSG"),m=e("2Rin"),f=e("z/ck");class v{constructor(l,n,e,t,o){this.router=l,this.navCtrl=n,this.modalController=e,this.referenceservice=t,this.activeRoute=o,this.bgColor="3A57C4",this.pageNumber=1,this.page=!1,this.project="overview",this.task=!1,this.noData=!1,this.keywords={},this.events=[],this.taskEvent={},this.dateRange={from:new Date("2019-01-02"),to:new Date("2019-01-10")},this.option={pickMode:"range",title:"RANGE",defaultDateRange:this.dateRange,defaultScrollTo:new Date("2019-01-02"),from:new Date("2019-01-02")},this.role=localStorage.getItem("role"),this.roleId=localStorage.getItem("role_id"),this.color=localStorage.getItem("primary_color"),this.primaryColor=localStorage.getItem("primary_color"),this.secondryColor=localStorage.getItem("secondry_color"),this.referenceservice.getParams("project").then(l=>{this.pro=l,console.log(this.pro),this.dateRange.from=new Date(this.pro.start_date),this.dateRange.to=new Date(this.pro.overviews.deadline),this.option.defaultDateRange=this.dateRange,this.option.defaultScrollTo=new Date(this.pro.start_date),this.opentasks=this.pro.tasks_open.length,this.completedtasks=this.pro.tasks_completed.length,0==this.pro.tasks.length&&(this.task=!0)}),this.keywords=JSON.parse(localStorage.getItem("keywords"))}ngOnInit(){}ionViewDidEnter(){this.pro.tasks.forEach(l=>{var n=l.task_detail.due_date.split("-"),e={};e.year=n[0],e.month=parseInt(n[1])-1,e.date=n[2],e.detail=l.task_detail,this.events.push(e)})}getProgresstyle(){return{background:"linear-gradient(to right,"+this.secondryColor+","+this.primaryColor+")"}}getHeaderStyle(){return{background:this.primaryColor}}getFontstyle(){return{color:this.secondryColor}}setDefaultPic(){this.pro.overviews.project_lead_photo="assets/imgs/user.jpg"}setDefaultUserPic(l){l.avatar="assets/imgs/user.jpg"}openTask(l){let n=JSON.stringify({task:l,project:this.pro});this.navCtrl.navigateForward("task-details/"+n)}add(){return p.b(this,void 0,void 0,(function*(){const l=yield this.modalController.create({component:f.a,cssClass:"custom-modal"});this.referenceservice.isModal="blurPage",yield l.present(),yield l.onWillDismiss().then(l=>{console.log(l),this.referenceservice.isModal=""})}))}onDaySelect(l){var n=l.month+1,e=l.date;e<10&&(e="0"+e);var t={},o=l.year+"-"+n+"-"+e;if(this.pro.tasks.forEach(l=>{l.task_detail.due_date==o&&(t=l)}),"{}"!=JSON.stringify(t)){let l=JSON.stringify({event:t});this.navCtrl.navigateForward("/Calendar-modal/"+l)}else this.referenceservice.showAlert("SMART HRMS","No Events on this day")}onMonthSelect(l){}createTask(){let l=JSON.stringify({project:this.pro.overviews.project_id,type:"task"});this.navCtrl.navigateForward("/create-task/"+l)}}var C=e("iInd"),h=[['.project-content-div[_ngcontent-%COMP%]{background:#fff;border-radius:50px 50px 0 0;top:-45px;position:relative;width:100%}.project-empty-div[_ngcontent-%COMP%]{background:#073e89;height:120px}.head-title[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:700}.estimates[_ngcontent-%COMP%]   .custom-icon-project-list-icon[_ngcontent-%COMP%]{font-size:40px;color:#fff}.project-segment[_ngcontent-%COMP%]{border-radius:50px;margin:auto auto 20px;width:calc(100% - 10%);top:-20px;position:relative;background:#fff;box-shadow:-7px 10px 18px 7px rgba(0,0,0,.14);--background-checked:none;--indicator-color-checked:none}.project-segment[_ngcontent-%COMP%]   .segment-button-checked[_ngcontent-%COMP%]   .seg-btn[_ngcontent-%COMP%]{width:50px;height:50px;margin:0 auto;background:#fe9c45;border-radius:50px;padding-top:10px}.project-segment[_ngcontent-%COMP%]   .segment-button-checked[_ngcontent-%COMP%]   .selected-icon[_ngcontent-%COMP%]{color:#fff!important}.project-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{margin:10px;--border-color:#fff0}.project-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   .custom-icon-projects-calendar-icon[_ngcontent-%COMP%], .project-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   .custom-icon-projects-overview-icon[_ngcontent-%COMP%], .project-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   .custom-icon-projects-tasks-icon[_ngcontent-%COMP%]{font-size:30px;color:#000}.project-item[_ngcontent-%COMP%]{--padding-start:0;--detail-icon-color:rgb(254, 156, 69);--detail-icon-opacity:1;--inner-padding-end:0;padding:4px 8px 4px 0}.seg-title[_ngcontent-%COMP%]{font-size:20px;font-family:Poppins-Medium}.border[_ngcontent-%COMP%]{border-top:2px solid #fe9c45;width:80px}.seg-content[_ngcontent-%COMP%]{padding:0 20px 0 0}.project-overview-timeline[_ngcontent-%COMP%]{position:relative;max-width:1200px;margin:0 auto}.project-overview-list[_ngcontent-%COMP%]{margin-left:50px}.project-overview-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{padding-left:0}.project-overview-list[_ngcontent-%COMP%]   .task-name[_ngcontent-%COMP%]{font-size:14px}.project-overview-list[_ngcontent-%COMP%]   .list-header[_ngcontent-%COMP%]{font-family:Poppins-Medium!important;font-size:18px;text-transform:capitalize}.project-overview-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-start:0}.project-overview-list[_ngcontent-%COMP%]   .custom-icon-calendar-icon[_ngcontent-%COMP%]{color:#fe9c45}.project-overview-list[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]{text-align:end;color:#fe9c45;white-space:nowrap;margin:auto}.project-overview-list[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{color:#000}.project-overview-list[_ngcontent-%COMP%]   .progress-full-div[_ngcontent-%COMP%]{width:calc(100% - 44px);margin:0 auto}.project-overview-list[_ngcontent-%COMP%]   .project-progress-div[_ngcontent-%COMP%]{background:#073e89;height:10px;z-index:1;border-radius:10px;margin-top:40px}.project-overview-list[_ngcontent-%COMP%]   .project-div[_ngcontent-%COMP%]{width:calc(100% - 44px);background:#fe9c45;height:10px;position:absolute;bottom:8px;z-index:-1;border-radius:10px}.project-overview-list[_ngcontent-%COMP%]   .owner-icon[_ngcontent-%COMP%]{padding-top:20px}.project-overview-list[_ngcontent-%COMP%]   .owner-icon[_ngcontent-%COMP%]   .custom-icon-user-placeholder-img[_ngcontent-%COMP%]{border-radius:50px;background:#d2d2d2;padding:10px;font-size:30px}.project-overview-list[_ngcontent-%COMP%]   .team-icon[_ngcontent-%COMP%]   .custom-icon-user-placeholder-img[_ngcontent-%COMP%]{border-radius:50px;background:#d2d2d2;padding:10px;font-size:20px}.project-overview-list[_ngcontent-%COMP%]   .custom-icon-user-placeholder-img[_ngcontent-%COMP%]:before{color:#fff!important}.project-overview-timeline[_ngcontent-%COMP%]::after{content:"";position:absolute;width:2px;background-color:#d2d2d2;top:0;bottom:0;left:31px}.project-overview-container[_ngcontent-%COMP%]{position:relative;background-color:inherit}.project-overview-container[_ngcontent-%COMP%]::after{content:"";position:absolute;width:15px;height:15px;top:24px;border-radius:50%;z-index:1;margin-left:9px}.ios[_ngcontent-%COMP%]   .project-overview-container[_ngcontent-%COMP%]::after{top:12px!important}.ios[_ngcontent-%COMP%]   .project-div[_ngcontent-%COMP%]{bottom:0!important}.ios[_ngcontent-%COMP%]   .owner-icon[_ngcontent-%COMP%]{margin-bottom:7px}.project-overview-container[_ngcontent-%COMP%]:nth-of-type(odd)::after{background-color:#073e89}.project-overview-container[_ngcontent-%COMP%]:nth-of-type(even)::after{background-color:#ff9f55}.left[_ngcontent-%COMP%]{left:0}.left[_ngcontent-%COMP%]::after, .right[_ngcontent-%COMP%]::after{left:15px}.fab-add-btn[_ngcontent-%COMP%]{--border-radius:15px!important;--background:#FE9C45}.tooltip[_ngcontent-%COMP%]{position:relative;border-bottom:1px dotted #000}.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]{visibility:visible;width:50px;background-color:#22d165;color:#fff;text-align:center;border-radius:20px;padding:5px;position:absolute;z-index:1;bottom:175%;left:calc(100% - 28px);opacity:1}.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]::after{content:"";position:absolute;top:100%;left:50%;margin-left:-6px;border-width:6px;border-style:solid;border-color:#22d165 transparent transparent}.completed-tasks[_ngcontent-%COMP%]::before, .open-tasks[_ngcontent-%COMP%]::before{content:"";position:absolute;width:10px;height:10px;top:13px;z-index:1;left:-10px}.completed-tasks[_ngcontent-%COMP%], .open-tasks[_ngcontent-%COMP%]{font-size:12px;margin:auto}.completed-tasks[_ngcontent-%COMP%]::before{background:#22d165}.open-tasks[_ngcontent-%COMP%]::before{background:#fe9c45}.report[_ngcontent-%COMP%]{margin-left:10px}.summary-user-icon[_ngcontent-%COMP%]   .custom-icon-user-placeholder-img[_ngcontent-%COMP%]{border-radius:50px;background:#d2d2d2;padding:5px;font-size:15px}.custom-icon-tasks-tick-icon[_ngcontent-%COMP%]{font-size:25px;font-weight:700;margin-right:15px}.custom-icon-tasks-tick-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:newhrms}.custom-icon-tasks-tick-icon[_ngcontent-%COMP%]   .path1[_ngcontent-%COMP%]::before{color:#adabab!important}.custom-icon-tasks-tick-icon[_ngcontent-%COMP%]   .path2[_ngcontent-%COMP%]::before{color:#fff!important}.custom-icon-verified-icon[_ngcontent-%COMP%]{font-size:25px;font-weight:700;position:unset;margin-left:unset;margin-right:15px}.custom-icon-verified-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:newhrms}']],_=t["\u0275crt"]({encapsulation:0,styles:h,data:{}});function w(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"ion-col",[["size","3"]],null,null,null,i.X,i.h)),t["\u0275did"](1,49152,null,0,r.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](2,0,null,0,1,"div",[["class","team-icon"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,0,"span",[["class","custom-icon-user-placeholder-img"]],null,null,null,null,null))],(function(l,n){l(n,1,0,"3")}),null)}function M(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,62,"div",[["class","seg-content"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,61,"div",[["class","project-overview-timeline"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"h4",[["class","seg-title project-overview-list"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Overview"])),(l()(),t["\u0275eld"](4,0,null,null,0,"div",[["class","border project-overview-list"]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,9,"div",[["class","project-overview-container left"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,8,"ion-list",[["class","project-overview-list"]],null,null,null,i.pb,i.y)),t["\u0275did"](7,49152,null,0,r.IonList,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](8,0,null,0,3,"ion-list-header",[],null,null,null,i.ob,i.z)),t["\u0275did"](9,49152,null,0,r.IonListHeader,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](10,0,null,0,1,"div",[["class","list-header"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Descriptions"])),(l()(),t["\u0275eld"](12,0,null,0,2,"ion-item",[["lines","none"]],null,null,null,i.mb,i.t)),t["\u0275did"](13,49152,null,0,r.IonItem,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(l()(),t["\u0275ted"](14,0,["",""])),(l()(),t["\u0275eld"](15,0,null,null,27,"div",[["class","project-overview-container left"]],null,null,null,null,null)),(l()(),t["\u0275eld"](16,0,null,null,26,"ion-list",[["class","project-overview-list"]],null,null,null,i.pb,i.y)),t["\u0275did"](17,49152,null,0,r.IonList,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](18,0,null,0,3,"ion-list-header",[],null,null,null,i.ob,i.z)),t["\u0275did"](19,49152,null,0,r.IonListHeader,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](20,0,null,0,1,"div",[["class","list-header"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Timeline"])),(l()(),t["\u0275eld"](22,0,null,0,15,"ion-row",[],null,null,null,i.vb,i.F)),t["\u0275did"](23,49152,null,0,r.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](24,0,null,0,6,"ion-col",[["size","6"]],null,null,null,i.X,i.h)),t["\u0275did"](25,49152,null,0,r.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](26,0,null,0,0,"span",[["class","custom-icon-calendar-icon"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,0,["\xa0"])),(l()(),t["\u0275eld"](28,0,null,0,2,"span",[["class","date"]],null,null,null,null,null)),(l()(),t["\u0275ted"](29,null,["",""])),t["\u0275ppd"](30,2),(l()(),t["\u0275eld"](31,0,null,0,6,"ion-col",[["class","end"],["size","6"]],null,null,null,i.X,i.h)),t["\u0275did"](32,49152,null,0,r.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](33,0,null,0,0,"span",[["class","custom-icon-calendar-icon"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,0,["\xa0 "])),(l()(),t["\u0275eld"](35,0,null,0,2,"span",[["class","date"]],null,null,null,null,null)),(l()(),t["\u0275ted"](36,null,["",""])),t["\u0275ppd"](37,2),(l()(),t["\u0275eld"](38,0,null,0,4,"div",[["class","progress-full-div"]],null,null,null,null,null)),(l()(),t["\u0275eld"](39,0,null,null,2,"div",[["class","project-progress-div tooltip"]],[[4,"width","%"]],null,null,null,null)),(l()(),t["\u0275eld"](40,0,null,null,1,"span",[["class","tooltiptext"]],[[4,"left",null]],null,null,null,null)),(l()(),t["\u0275ted"](41,null,["","%"])),(l()(),t["\u0275eld"](42,0,null,null,0,"div",[["class","project-div"]],null,null,null,null,null)),(l()(),t["\u0275eld"](43,0,null,null,8,"div",[["class","project-overview-container left"]],null,null,null,null,null)),(l()(),t["\u0275eld"](44,0,null,null,7,"ion-list",[["class","project-overview-list"]],null,null,null,i.pb,i.y)),t["\u0275did"](45,49152,null,0,r.IonList,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](46,0,null,0,3,"ion-list-header",[],null,null,null,i.ob,i.z)),t["\u0275did"](47,49152,null,0,r.IonListHeader,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](48,0,null,0,1,"div",[["class","list-header"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Project Owner"])),(l()(),t["\u0275eld"](50,0,null,0,1,"div",[["class","owner-icon"]],null,null,null,null,null)),(l()(),t["\u0275eld"](51,0,null,null,0,"span",[["class","custom-icon-user-placeholder-img"]],null,null,null,null,null)),(l()(),t["\u0275eld"](52,0,null,null,10,"div",[["class","project-overview-container left"]],null,null,null,null,null)),(l()(),t["\u0275eld"](53,0,null,null,9,"ion-list",[["class","project-overview-list"]],null,null,null,i.pb,i.y)),t["\u0275did"](54,49152,null,0,r.IonList,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](55,0,null,0,3,"ion-list-header",[],null,null,null,i.ob,i.z)),t["\u0275did"](56,49152,null,0,r.IonListHeader,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](57,0,null,0,1,"div",[["class","list-header"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Team"])),(l()(),t["\u0275eld"](59,0,null,0,3,"ion-row",[],null,null,null,i.vb,i.F)),t["\u0275did"](60,49152,null,0,r.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,w)),t["\u0275did"](62,278528,null,0,a.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component;l(n,13,0,"none");l(n,25,0,"6");l(n,32,0,"6"),l(n,62,0,e.pro.overviews.project_team_members)}),(function(l,n){var e=n.component;l(n,14,0,e.pro.overviews.description);var o=t["\u0275unv"](n,29,0,l(n,30,0,t["\u0275nov"](n.parent.parent,0),e.pro.start_date,"d MMM y"));l(n,29,0,o);var u=t["\u0275unv"](n,36,0,l(n,37,0,t["\u0275nov"](n.parent.parent,0),e.pro.overviews.deadline,"d MMM y"));l(n,36,0,u),l(n,39,0,e.pro.overviews.progress),l(n,40,0,e.pro.overviews.progress),l(n,41,0,e.pro.overviews.progress)}))}function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"span",[["class","custom-icon-tasks-tick-icon"],["slot","start"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,0,"span",[["class","path1"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,0,"span",[["class","path2"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,0,"span",[["class","path3"]],null,null,null,null,null))],null,null)}function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"span",[["class","custom-icon-verified-icon"],["slot","start"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,0,"span",[["class","path1"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,0,"span",[["class","path2"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,0,"span",[["class","path3"]],null,null,null,null,null))],null,null)}function O(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,10,"ion-item",[["class","project-item"],["detail",""]],null,null,null,i.mb,i.t)),t["\u0275did"](1,49152,null,0,r.IonItem,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{detail:[0,"detail"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,b)),t["\u0275did"](3,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,R)),t["\u0275did"](5,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](6,0,null,0,2,"ion-label",[["class","task-name"]],null,null,null,i.nb,i.x)),t["\u0275did"](7,49152,null,0,r.IonLabel,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](8,0,[" "," "])),(l()(),t["\u0275eld"](9,0,null,0,1,"div",[["class","summary-user-icon"]],null,null,null,null,null)),(l()(),t["\u0275eld"](10,0,null,null,0,"span",[["class","custom-icon-user-placeholder-img"]],null,null,null,null,null))],(function(l,n){l(n,1,0,""),l(n,3,0,100!=n.context.$implicit.task_detail.task_progress),l(n,5,0,100==n.context.$implicit.task_detail.task_progress)}),(function(l,n){l(n,8,0,n.context.$implicit.task_detail.task_name)}))}function P(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,36,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,29,"div",[["class","project-overview-timeline"]],null,null,null,null,null)),(l()(),t["\u0275eld"](2,0,null,null,1,"h4",[["class","seg-title project-overview-list"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Tasks"])),(l()(),t["\u0275eld"](4,0,null,null,0,"div",[["class","border project-overview-list"]],null,null,null,null,null)),(l()(),t["\u0275eld"](5,0,null,null,16,"div",[["class","project-overview-container left"]],null,null,null,null,null)),(l()(),t["\u0275eld"](6,0,null,null,15,"ion-list",[["class","project-overview-list"]],null,null,null,i.pb,i.y)),t["\u0275did"](7,49152,null,0,r.IonList,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](8,0,null,0,3,"ion-list-header",[],null,null,null,i.ob,i.z)),t["\u0275did"](9,49152,null,0,r.IonListHeader,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](10,0,null,0,1,"div",[["class","list-header"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Report"])),(l()(),t["\u0275eld"](12,0,null,0,9,"ion-row",[["class","report"]],null,null,null,i.vb,i.F)),t["\u0275did"](13,49152,null,0,r.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](14,0,null,0,3,"ion-col",[["size","6"]],null,null,null,i.X,i.h)),t["\u0275did"](15,49152,null,0,r.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](16,0,null,0,1,"span",[["class","open-tasks"]],null,null,null,null,null)),(l()(),t["\u0275ted"](17,null,["","\xa0open tasks,"])),(l()(),t["\u0275eld"](18,0,null,0,3,"ion-col",[["size","6"]],null,null,null,i.X,i.h)),t["\u0275did"](19,49152,null,0,r.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](20,0,null,0,1,"span",[["class","completed-tasks"]],null,null,null,null,null)),(l()(),t["\u0275ted"](21,null,["","\xa0completed tasks"])),(l()(),t["\u0275eld"](22,0,null,null,8,"div",[["class","project-overview-container left"]],null,null,null,null,null)),(l()(),t["\u0275eld"](23,0,null,null,7,"ion-list",[["class","project-overview-list"]],null,null,null,i.pb,i.y)),t["\u0275did"](24,49152,null,0,r.IonList,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](25,0,null,0,3,"ion-list-header",[],null,null,null,i.ob,i.z)),t["\u0275did"](26,49152,null,0,r.IonListHeader,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](27,0,null,0,1,"div",[["class","list-header"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Summary"])),(l()(),t["\u0275and"](16777216,null,0,1,null,O)),t["\u0275did"](30,278528,null,0,a.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](31,0,null,null,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,i.bb,i.k)),t["\u0275did"](32,49152,null,0,r.IonFab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t["\u0275eld"](33,0,null,0,3,"ion-fab-button",[["class","fab-add-btn"]],null,[[null,"click"]],(function(l,n,e){var t=!0,o=l.component;"click"===n&&(t=!1!==o.add()&&t);return t}),i.ab,i.l)),t["\u0275did"](34,49152,null,0,r.IonFabButton,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](35,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,i.fb,i.p)),t["\u0275did"](36,49152,null,0,r.IonIcon,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(l,n){var e=n.component;l(n,15,0,"6");l(n,19,0,"6"),l(n,30,0,e.pro.tasks);l(n,32,0,"end","bottom");l(n,36,0,"add")}),(function(l,n){var e=n.component;l(n,17,0,e.opentasks),l(n,21,0,e.completedtasks)}))}function k(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,5,"ion-calendar",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],(function(l,n,e){var t=!0,o=l.component;"ngModelChange"===n&&(t=!1!==(o.dateRange=e)&&t);return t}),s.c,s.b)),t["\u0275did"](2,114688,null,0,c.CalendarComponent,[d.CalendarService],{format:[0,"format"],type:[1,"type"],options:[2,"options"]},null),t["\u0275prd"](1024,null,g.NG_VALUE_ACCESSOR,(function(l){return[l]}),[c.CalendarComponent]),t["\u0275did"](4,671744,null,0,g.NgModel,[[8,null],[8,null],[8,null],[6,g.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,g.NgControl,null,[g.NgModel]),t["\u0275did"](6,16384,null,0,g.NgControlStatus,[[4,g.NgControl]],null,null)],(function(l,n){var e=n.component;l(n,2,0,"YYYY-MM-DD",e.type,e.option),l(n,4,0,e.dateRange)}),(function(l,n){l(n,1,0,t["\u0275nov"](n,6).ngClassUntouched,t["\u0275nov"](n,6).ngClassTouched,t["\u0275nov"](n,6).ngClassPristine,t["\u0275nov"](n,6).ngClassDirty,t["\u0275nov"](n,6).ngClassValid,t["\u0275nov"](n,6).ngClassInvalid,t["\u0275nov"](n,6).ngClassPending)}))}function x(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,35,"ion-content",[],null,null,null,i.Y,i.i)),t["\u0275did"](1,49152,null,0,r.IonContent,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](2,0,null,0,5,"div",[["class","project-empty-div"]],null,null,null,null,null)),(l()(),t["\u0275eld"](3,0,null,null,4,"ion-item",[["class","project-view"],["lines","none"]],null,null,null,i.mb,i.t)),t["\u0275did"](4,49152,null,0,r.IonItem,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{lines:[0,"lines"]},null),(l()(),t["\u0275eld"](5,0,null,0,1,"span",[["class","head-title"],["slot","start"]],null,null,null,null,null)),(l()(),t["\u0275ted"](6,null,["",""])),(l()(),t["\u0275eld"](7,0,null,0,0,"span",[["class","custom-icon-project-list-icon"],["slot","end"]],null,null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,0,27,"div",[["class","project-content-div"]],null,null,null,null,null)),(l()(),t["\u0275eld"](9,0,null,null,18,"ion-segment",[["class","project-segment"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var o=!0,u=l.component;"ionBlur"===n&&(o=!1!==t["\u0275nov"](l,10)._handleBlurEvent(e.target)&&o);"ionChange"===n&&(o=!1!==t["\u0275nov"](l,10)._handleChangeEvent(e.target)&&o);"ngModelChange"===n&&(o=!1!==(u.project=e)&&o);return o}),i.xb,i.G)),t["\u0275did"](10,16384,null,0,r.SelectValueAccessor,[t.ElementRef],null,null),t["\u0275prd"](1024,null,g.NG_VALUE_ACCESSOR,(function(l){return[l]}),[r.SelectValueAccessor]),t["\u0275did"](12,671744,null,0,g.NgModel,[[8,null],[8,null],[8,null],[6,g.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,g.NgControl,null,[g.NgModel]),t["\u0275did"](14,16384,null,0,g.NgControlStatus,[[4,g.NgControl]],null,null),t["\u0275did"](15,49152,null,0,r.IonSegment,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](16,0,null,0,3,"ion-segment-button",[["checked","true"],["value","overview"]],null,null,null,i.wb,i.H)),t["\u0275did"](17,49152,null,0,r.IonSegmentButton,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{checked:[0,"checked"],value:[1,"value"]},null),(l()(),t["\u0275eld"](18,0,null,0,1,"div",[["class","seg-btn"]],null,null,null,null,null)),(l()(),t["\u0275eld"](19,0,null,null,0,"span",[["class","custom-icon-projects-overview-icon selected-icon"]],null,null,null,null,null)),(l()(),t["\u0275eld"](20,0,null,0,3,"ion-segment-button",[["value","summary"]],null,null,null,i.wb,i.H)),t["\u0275did"](21,49152,null,0,r.IonSegmentButton,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{value:[0,"value"]},null),(l()(),t["\u0275eld"](22,0,null,0,1,"div",[["class","seg-btn"]],null,null,null,null,null)),(l()(),t["\u0275eld"](23,0,null,null,0,"span",[["class","custom-icon-projects-tasks-icon selected-icon"]],null,null,null,null,null)),(l()(),t["\u0275eld"](24,0,null,0,3,"ion-segment-button",[["value","events"]],null,null,null,i.wb,i.H)),t["\u0275did"](25,49152,null,0,r.IonSegmentButton,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{value:[0,"value"]},null),(l()(),t["\u0275eld"](26,0,null,0,1,"div",[["class","seg-btn"]],null,null,null,null,null)),(l()(),t["\u0275eld"](27,0,null,null,0,"span",[["class","custom-icon-projects-calendar-icon selected-icon"]],null,null,null,null,null)),(l()(),t["\u0275eld"](28,0,null,null,7,"div",[],null,null,null,null,null)),t["\u0275did"](29,16384,null,0,a.NgSwitch,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,M)),t["\u0275did"](31,278528,null,0,a.NgSwitchCase,[t.ViewContainerRef,t.TemplateRef,a.NgSwitch],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,P)),t["\u0275did"](33,278528,null,0,a.NgSwitchCase,[t.ViewContainerRef,t.TemplateRef,a.NgSwitch],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,k)),t["\u0275did"](35,278528,null,0,a.NgSwitchCase,[t.ViewContainerRef,t.TemplateRef,a.NgSwitch],{ngSwitchCase:[0,"ngSwitchCase"]},null)],(function(l,n){var e=n.component;l(n,4,0,"none"),l(n,12,0,e.project);l(n,17,0,"true","overview");l(n,21,0,"summary");l(n,25,0,"events"),l(n,29,0,e.project);l(n,31,0,"overview");l(n,33,0,"summary");l(n,35,0,"events")}),(function(l,n){l(n,6,0,n.component.pro.project_title),l(n,9,0,t["\u0275nov"](n,14).ngClassUntouched,t["\u0275nov"](n,14).ngClassTouched,t["\u0275nov"](n,14).ngClassPristine,t["\u0275nov"](n,14).ngClassDirty,t["\u0275nov"](n,14).ngClassValid,t["\u0275nov"](n,14).ngClassInvalid,t["\u0275nov"](n,14).ngClassPending)}))}function j(l){return t["\u0275vid"](0,[t["\u0275pid"](0,a.DatePipe,[t.LOCALE_ID]),(l()(),t["\u0275eld"](1,0,null,null,16,"ion-header",[],null,null,null,i.eb,i.o)),t["\u0275did"](2,49152,null,0,r.IonHeader,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](3,0,null,0,14,"ion-toolbar",[["class","blues-nav"]],null,null,null,i.Fb,i.P)),t["\u0275did"](4,49152,null,0,r.IonToolbar,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](5,0,null,0,12,"ion-row",[],null,null,null,i.vb,i.F)),t["\u0275did"](6,49152,null,0,r.IonRow,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](7,0,null,0,4,"ion-col",[["class","nav-back"],["size","2"]],null,null,null,i.X,i.h)),t["\u0275did"](8,49152,null,0,r.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](9,0,null,0,2,"span",[["class","custom-icon-back-arrow-icon"]],null,[[null,"click"]],(function(l,n,e){var t=!0,o=l.component;"click"===n&&(t=!1!==o.referenceservice.popBack()&&t);return t}),null,null)),(l()(),t["\u0275eld"](10,0,null,null,0,"span",[["class","path1"]],null,null,null,null,null)),(l()(),t["\u0275eld"](11,0,null,null,0,"span",[["class","path2"]],null,null,null,null,null)),(l()(),t["\u0275eld"](12,0,null,0,5,"ion-col",[["class","nav-content"],["size","10"]],null,null,null,i.X,i.h)),t["\u0275did"](13,49152,null,0,r.IonCol,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{size:[0,"size"]},null),(l()(),t["\u0275eld"](14,0,null,0,3,"ion-title",[],null,null,null,i.Db,i.N)),t["\u0275did"](15,49152,null,0,r.IonTitle,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](16,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Projects"])),(l()(),t["\u0275and"](16777216,null,null,1,null,x)),t["\u0275did"](19,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,8,0,"2");l(n,13,0,"10"),l(n,19,0,e.pro)}),null)}var N=t["\u0275ccf"]("app-view-projects",v,(function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-view-projects",[],null,null,null,j,_)),t["\u0275did"](1,114688,null,0,v,[C.m,r.NavController,r.ModalController,m.a,C.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),I=e("CRiZ"),D=e("AJmV"),y=e("MpeO"),E=e("c/o1"),S=e("d61L"),z=e("zS2m");class Z{}e.d(n,"ViewProjectsPageModuleNgFactory",(function(){return F}));var F=t["\u0275cmf"](o,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,N,I.a,D.a,y.a,s.a,E.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[t.LOCALE_ID,[2,a["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,g["\u0275angular_packages_forms_forms_o"],g["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,r.AngularDelegate,r.AngularDelegate,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,r.ModalController,r.ModalController,[r.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,r.PopoverController,r.PopoverController,[r.AngularDelegate,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,d.CalendarService,d.CalendarService,[]),t["\u0275mpd"](5120,S.CalendarController,z.calendarController,[r.ModalController,d.CalendarService]),t["\u0275mpd"](1073742336,a.CommonModule,a.CommonModule,[]),t["\u0275mpd"](1073742336,g["\u0275angular_packages_forms_forms_d"],g["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,g.FormsModule,g.FormsModule,[]),t["\u0275mpd"](1073742336,r.IonicModule,r.IonicModule,[]),t["\u0275mpd"](1073742336,C.o,C.o,[[2,C.t],[2,C.m]]),t["\u0275mpd"](1073742336,Z,Z,[]),t["\u0275mpd"](1073742336,z.CalendarModule,z.CalendarModule,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,C.k,(function(){return[[{path:"",component:v}]]}),[])])}))}}]);