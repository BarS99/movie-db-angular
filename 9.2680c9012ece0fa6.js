"use strict";(self.webpackChunkmovie_db=self.webpackChunkmovie_db||[]).push([[9],{2009:(Je,N,m)=>{m.r(N),m.d(N,{CardViewModule:()=>Ye});var l=m(9808),g=m(3477),d=m(801),b=m(9300),F=m(7957),h=m(2340),r=m(5620);const $=(0,r.PH)("[Card View Page -> Comments Section] Destroy Comments"),x=(0,r.PH)("[Card View Page -> Comments Section] Load Comments",(0,r.Ky)()),Y=(0,r.PH)("[Card View Page -> Comments Section] Load Comments Success",(0,r.Ky)()),J=(0,r.PH)("[Card View Page -> Comments Section] Load Comments Failure"),y=(0,r.PH)("[Card View Page -> Comments Section] Reload Comments",(0,r.Ky)()),Q=(0,r.PH)("[Card View Page -> Comments Section] Reload Comments Success",(0,r.Ky)()),D=(0,r.PH)("[Card View Page -> Comments Section] Reload Comments Failure"),Z=(0,r.PH)("[Card View Page -> Comments Section] Post Comment",(0,r.Ky)()),w=(0,r.PH)("[Card View Page -> Comments Section] Post Comment Success",(0,r.Ky)()),T=(0,r.PH)("[Card View Page -> Comments Section] Post Comment Failure");var e=m(5e3),E=m(8537),I=m(520),M=m(7933);let L=(()=>{class t{constructor(n,o){this.http=n,this.favoriteService=o}getMovie(n){return this.http.get(`${h.V0.url}/3/movie/${n}?api_key=${h.V0.key}`).pipe((0,E.g)(300))}getDetailsList(n){const o=[];return null===n||(null!=(null==n?void 0:n.genres)&&(null==n?void 0:n.genres.length)&&o.push({icon:d.Psp,field:"Genres",value:null==n?void 0:n.genres.map(s=>s.name).join(", ")}),null!=(null==n?void 0:n.revenue)&&o.push({icon:d.n7u,field:"Box office",value:`${null==n?void 0:n.revenue.toLocaleString()}$`}),null!=(null==n?void 0:n.adult)&&o.push({icon:d.caW,field:"For adults",value:(null==n?void 0:n.adult)?"Yes":"No"}),null!=(null==n?void 0:n.homepage)&&(null==n?void 0:n.homepage.length)&&o.push({icon:d.nNP,field:"Website",value:null==n?void 0:n.homepage})),o}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(I.eN),e.LFG(M.e))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var C=m(9444);let q=(()=>{class t{constructor(){this.rating=0}ngOnInit(){}get Rating(){return Math.floor(this.rating)/10*100+"%"}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-rating"]],inputs:{rating:"rating"},decls:4,vars:3,consts:[[1,"progress","position-relative","mb-4"],[1,"progress-bar","progress-bar-striped"],[1,"position-absolute","top-0","end-0","bottom-0","start-0","text-center","d-flex","align-items-center","justify-content-center","fw-bold","p-1"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3),e.qZA()()()),2&n&&(e.xp6(1),e.Udp("width",o.Rating),e.xp6(2),e.hij(" Community rating: ",o.Rating," "))},styles:[".progress[_ngcontent-%COMP%]{height:2rem;text-shadow:2px 2px 2px rgba(0,0,0,.4)}.progress-bar[_ngcontent-%COMP%]{height:inherit}"]}),t})();const S=(0,r.ZF)("comment"),k=(0,r.P1)(S,t=>t.comments),R=(0,r.P1)(S,t=>t.postSuccess),G=(0,r.P1)(S,t=>t.postFailure);var u=m(6642),B=m(7579),H=m(2722),c=m(3075),z=m(1135);let j=(()=>{class t{constructor(){this.isFormDirty$=new z.X(!1),this.formConfig={commentName:new c.NI("",c.kI.required),commentEmail:new c.NI("",[c.kI.required,c.kI.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")]),commentPhone:new c.NI("",[c.kI.pattern("^([+]?[s0-9]+)?(d{3}|[(]?[0-9]+[)])?([-]?[s]?[0-9])+$")]),commentValue:new c.NI("",[c.kI.required,this.commentValueValidation])}}commentValueValidation(n){var o,s;return 0===(null===(o=n.value)||void 0===o?void 0:o.trim().length)?null:(null===(s=n.value)||void 0===s?void 0:s.length)<10?{minLength:"Your comment should have at least 10 characters!"}:null}getFormConfig(){return this.formConfig}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var _=m(3139);const K=["formWrapper"];function W(t,i){1&t&&(e.TgZ(0,"ngb-alert",26),e._uU(1," Your comment has been posted! "),e.qZA()),2&t&&e.Q6J("dismissible",!1)}function X(t,i){1&t&&(e.TgZ(0,"ngb-alert",27),e._uU(1," Failed to post the comment! "),e.qZA()),2&t&&e.Q6J("dismissible",!1)}function ee(t,i){1&t&&e._UZ(0,"fa-icon",28)}function te(t,i){1&t&&e._UZ(0,"fa-icon",29)}function ne(t,i){1&t&&(e.TgZ(0,"span",30),e._uU(1,"This field is required"),e.qZA())}function oe(t,i){1&t&&(e.TgZ(0,"span",30),e._uU(1,"This field is required"),e.qZA())}function ie(t,i){1&t&&(e.TgZ(0,"span",30),e._uU(1,"This e-mail address is incorrect"),e.qZA())}function re(t,i){1&t&&(e.TgZ(0,"span",30),e._uU(1,"Error phone"),e.qZA())}function se(t,i){1&t&&(e.TgZ(0,"span",30),e._uU(1,"This field is required"),e.qZA())}function me(t,i){if(1&t&&(e.TgZ(0,"span",30),e._uU(1),e.qZA()),2&t){const n=i.ngIf;e.xp6(1),e.hij(" ",n," ")}}const ce=function(t){return{"form--collapsed":t}};let ae=(()=>{class t{constructor(n,o,s,a,p,v){this.library=n,this.formBuilder=o,this.commentFormService=s,this.store=a,this.actions$=p,this.router=v,this.formDisplayErrors=!1,this.isFormCollapsed=!0,this.formDisplaySuccess$=this.store.select(R),this.formDisplayFailure$=this.store.select(G),this.callbackDestroyed$=new B.x,this.library.addIcons(d.Kl4,d.r8p),this.form=this.formBuilder.group(this.commentFormService.getFormConfig()),this.formChanges$=this.form.valueChanges.subscribe(f=>{this.commentFormService.isFormDirty$.next(this.form.dirty)}),this.navigationStart$=this.router.events.pipe((0,b.h)(f=>f instanceof g.OD)).subscribe(()=>{this.form.reset(void 0,{emitEvent:!1})}),this.navigationEnd$=this.router.events.pipe((0,b.h)(f=>f instanceof g.m2)).subscribe(()=>{this.commentFormService.isFormDirty$.next(!1)})}ngOnInit(){this.form.reset(),this.commentFormService.isFormDirty$.next(!1),this.actions$.pipe((0,u.l4)(T,w),(0,H.R)(this.callbackDestroyed$)).subscribe(()=>{this.isFormCollapsed=!1,this.form.reset(),this.formDisplayErrors=!1,window.scrollTo(0,this.formWrapper.nativeElement.offsetTop-110)})}ngOnDestroy(){this.callbackDestroyed$.next(!0),this.callbackDestroyed$.complete(),this.formChanges$.unsubscribe(),this.navigationStart$.unsubscribe(),this.navigationEnd$.unsubscribe()}onSubmit(n){this.form.valid?this.store.dispatch(Z({comment:{createdAt:(new Date).getTime(),name:n.commentName,value:n.commentValue,parentId:this.movie.id}})):this.formDisplayErrors=!0}toggleForm(){this.isFormCollapsed=!this.isFormCollapsed}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(C.by),e.Y36(c.qu),e.Y36(j),e.Y36(r.yh),e.Y36(u.eX),e.Y36(g.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-comment-form"]],viewQuery:function(n,o){if(1&n&&e.Gf(K,5),2&n){let s;e.iGM(s=e.CRH())&&(o.formWrapper=s.first)}},inputs:{movie:"movie"},decls:49,vars:18,consts:[[1,"form__wrapper"],["formWrapper",""],["type","success",3,"dismissible",4,"ngIf"],["type","error",3,"dismissible",4,"ngIf"],[1,"form","p-4","bg-light","border",3,"formGroup","ngClass","ngSubmit"],[1,"d-flex","justify-content-between","align-items-center","h4","m-0"],["type","button",1,"btn","btn-sm","btn-primary","ms-4",3,"click"],["icon","minus",4,"ngIf"],["icon","plus",4,"ngIf"],[1,"pt-3","form__separator"],[1,"pt-3","border-top","form__content"],[1,"row"],[1,"col-xs-12","col-lg-4","mb-3"],["for","commentName",1,"form-label","d-block","fw-bold"],[1,"text-danger"],["name","commentName","id","commentName","formControlName","commentName",1,"form-control"],["class","form__error",4,"ngIf"],["for","commentEmail",1,"form-label","d-block","fw-bold"],["name","commentEmail","id","commentEmail","formControlName","commentEmail",1,"form-control"],["for","commentPhone",1,"form-label","d-block","fw-bold"],["name","commentPhone","id","commentPhone","formControlName","commentPhone",1,"form-control"],[1,"col-xs-12"],["for","commentValue",1,"form-label","d-block","fw-bold"],["name","commentValue","id","commentValue","formControlName","commentValue",1,"form-control","form-control-textarea"],[1,"text-center","mt-4"],["type","submit",1,"btn","btn-md","btn-success"],["type","success",3,"dismissible"],["type","error",3,"dismissible"],["icon","minus"],["icon","plus"],[1,"form__error"]],template:function(n,o){if(1&n&&(e.TgZ(0,"div",0,1),e.YNc(2,W,2,1,"ngb-alert",2),e.ALo(3,"async"),e.YNc(4,X,2,1,"ngb-alert",3),e.ALo(5,"async"),e.TgZ(6,"form",4),e.NdJ("ngSubmit",function(){return o.onSubmit(o.form.value)}),e.TgZ(7,"fieldset")(8,"legend",5)(9,"span"),e._uU(10," Post a comment "),e.qZA(),e.TgZ(11,"button",6),e.NdJ("click",function(){return o.toggleForm()}),e.YNc(12,ee,1,0,"fa-icon",7),e.YNc(13,te,1,0,"fa-icon",8),e.qZA()(),e._UZ(14,"div",9),e.TgZ(15,"div",10)(16,"div",11)(17,"div",12)(18,"label",13),e._uU(19," Name"),e.TgZ(20,"span",14),e._uU(21,"*"),e.qZA()(),e._UZ(22,"input",15),e.YNc(23,ne,2,0,"span",16),e.qZA(),e.TgZ(24,"div",12)(25,"label",17),e._uU(26," E-mail"),e.TgZ(27,"span",14),e._uU(28,"*"),e.qZA()(),e._UZ(29,"input",18),e.YNc(30,oe,2,0,"span",16),e.YNc(31,ie,2,0,"span",16),e.qZA(),e.TgZ(32,"div",12)(33,"label",19),e._uU(34," Phone number "),e.qZA(),e._UZ(35,"input",20),e.YNc(36,re,2,0,"span",16),e.qZA(),e.TgZ(37,"div",21)(38,"label",22),e._uU(39," Comment"),e.TgZ(40,"span",14),e._uU(41,"*"),e.qZA()(),e._UZ(42,"textarea",23),e.YNc(43,se,2,0,"span",16),e.YNc(44,me,2,1,"span",16),e.qZA()(),e.TgZ(45,"div",11)(46,"div",24)(47,"button",25),e._uU(48," Submit "),e.qZA()()()()()()()),2&n){let s,a,p,v,f,O;e.xp6(2),e.Q6J("ngIf",!0===e.lcZ(3,12,o.formDisplaySuccess$)),e.xp6(2),e.Q6J("ngIf",!0===e.lcZ(5,14,o.formDisplayFailure$)),e.xp6(2),e.Q6J("formGroup",o.form)("ngClass",e.VKq(16,ce,o.isFormCollapsed)),e.xp6(6),e.Q6J("ngIf",o.isFormCollapsed),e.xp6(1),e.Q6J("ngIf",!o.isFormCollapsed),e.xp6(10),e.Q6J("ngIf",o.formDisplayErrors&&(null==(s=o.form.get("commentName"))||null==s.errors?null:s.errors.required)),e.xp6(7),e.Q6J("ngIf",o.formDisplayErrors&&(null==(a=o.form.get("commentEmail"))||null==a.errors?null:a.errors.required)),e.xp6(1),e.Q6J("ngIf",o.formDisplayErrors&&(null==(p=o.form.get("commentEmail"))||null==p.errors?null:p.errors.pattern)),e.xp6(5),e.Q6J("ngIf",o.formDisplayErrors&&(null==(v=o.form.get("commentPhone"))||null==v.errors?null:v.errors.pattern)),e.xp6(7),e.Q6J("ngIf",o.formDisplayErrors&&(null==(f=o.form.get("commentValue"))||null==f.errors?null:f.errors.required)),e.xp6(1),e.Q6J("ngIf",o.formDisplayErrors&&(null==(O=o.form.get("commentValue"))||null==O.errors?null:O.errors.minLength))}},directives:[l.O5,_.xm,c._Y,c.JL,c.sg,l.mk,C.BN,c.Fj,c.JJ,c.u],pipes:[l.Ov],styles:[".form-control-textarea[_ngcontent-%COMP%]{min-height:200px}.form__separator[_ngcontent-%COMP%], .form__content[_ngcontent-%COMP%]{display:none}.form--collapsed[_ngcontent-%COMP%]   .form__separator[_ngcontent-%COMP%], .form--collapsed[_ngcontent-%COMP%]   .form__content[_ngcontent-%COMP%]{display:block}.form__error[_ngcontent-%COMP%]{color:#dc3545}"]}),t})();function le(t,i){if(1&t&&(e.TgZ(0,"article",1)(1,"div",2)(2,"h3",3),e._uU(3),e.qZA(),e.TgZ(4,"time",4),e._UZ(5,"fa-icon",5),e._uU(6),e.qZA()(),e.TgZ(7,"p",6),e._uU(8),e.qZA()()),2&t){const n=e.oxw();e.xp6(3),e.hij(" ",n.comment.name," "),e.xp6(1),e.uIk("datetime",n.DateIso),e.xp6(2),e.hij(" (",n.Date,") "),e.xp6(2),e.hij(" ",n.comment.value," ")}}let pe=(()=>{class t{constructor(n){n.addIcons(d.fT7)}ngOnInit(){}get Date(){return(0,F.jV)(this.comment.createdAt)}get DateIso(){return(0,F.TQ)(this.comment.createdAt)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(C.by))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-comment"]],inputs:{comment:"comment"},decls:1,vars:1,consts:[["class","comment p-3 border mt-2",4,"ngIf"],[1,"comment","p-3","border","mt-2"],[1,"d-flex","align-items-end","flex-wrap","gap-2","mb-2"],[1,"fw-bold","m-0","text-success","h5"],[1,"comment__date","text-dark","fw-light"],["icon","calendar",1,"comment__icon","me-1"],[1,"m-0"]],template:function(n,o){1&n&&e.YNc(0,le,9,4,"article",0),2&n&&e.Q6J("ngIf",null!==o.comment)},directives:[l.O5,C.BN],styles:[".comment__icon[_ngcontent-%COMP%]{font-size:.75rem;letter-spacing:.05em}"]}),t})();function ue(t,i){1&t&&e._UZ(0,"app-comment",8),2&t&&e.Q6J("comment",i.$implicit)}function fe(t,i){if(1&t&&(e.ynx(0),e.TgZ(1,"div",6),e.YNc(2,ue,1,1,"app-comment",7),e.qZA(),e.BQk()),2&t){const n=e.oxw().ngIf;e.xp6(2),e.Q6J("ngForOf",n)}}function de(t,i){if(1&t&&(e.ynx(0),e.YNc(1,fe,3,1,"ng-container",5),e.BQk()),2&t){const n=i.ngIf;e.oxw();const o=e.MAs(7);e.xp6(1),e.Q6J("ngIf",null==n?null:n.length)("ngIfElse",o)}}function ge(t,i){1&t&&(e.TgZ(0,"div")(1,"ngb-alert",9),e._uU(2," There are no comments. Be the first one! "),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("dismissible",!1))}let ve=(()=>{class t{constructor(n){this.store=n,this.comments$=this.store.select(k)}ngOnInit(){this.store.dispatch(x({movieId:this.movie.id}))}ngOnDestroy(){this.store.dispatch($())}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(r.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-comment-section"]],inputs:{movie:"movie"},decls:8,vars:4,consts:[[1,"row","mt-4"],[1,"h3","fw-bold","mb-4"],[1,"mb-4",3,"movie"],[4,"ngIf"],["noComments",""],[4,"ngIf","ngIfElse"],[1,"mb-4"],[3,"comment",4,"ngFor","ngForOf"],[3,"comment"],["type","info",3,"dismissible"]],template:function(n,o){1&n&&(e.TgZ(0,"section",0)(1,"h2",1),e._uU(2," Comments "),e.qZA(),e._UZ(3,"app-comment-form",2),e.YNc(4,de,2,2,"ng-container",3),e.ALo(5,"async"),e.YNc(6,ge,3,1,"ng-template",null,4,e.W1O),e.qZA()),2&n&&(e.xp6(3),e.Q6J("movie",o.movie),e.xp6(1),e.Q6J("ngIf",e.lcZ(5,2,o.comments$)))},directives:[ae,l.O5,l.sg,pe,_.xm],pipes:[l.Ov],styles:[""]}),t})();var he=m(605);function Ce(t,i){if(1&t&&e._UZ(0,"img",21),2&t){const n=e.oxw(2);e.s9C("src",n.PosterPath,e.LSH),e.Q6J("alt","Poster of "+n.movie.title)}}function _e(t,i){if(1&t&&(e.TgZ(0,"time",22),e._UZ(1,"fa-icon",23),e._uU(2),e.qZA()),2&t){const n=e.oxw(2);e.uIk("datetime",n.getDateToIso(n.movie.release_date)),e.xp6(2),e.hij(" ",n.movie.release_date," ")}}function be(t,i){if(1&t&&(e.TgZ(0,"div"),e._UZ(1,"fa-icon",24),e._uU(2," Add to favorite "),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("icon",n.starIcon)}}function Fe(t,i){if(1&t&&(e._UZ(0,"fa-icon",24),e._uU(1," Remove from favorite ")),2&t){const n=e.oxw(2);e.Q6J("icon",n.banIcon)}}function xe(t,i){if(1&t&&e._UZ(0,"app-rating",25),2&t){const n=e.oxw(2);e.Q6J("rating",n.movie.vote_average)}}function ye(t,i){if(1&t&&(e.TgZ(0,"tr")(1,"th",28),e._UZ(2,"fa-icon",29),e._uU(3),e.qZA(),e.TgZ(4,"td",30),e._uU(5),e.qZA()()),2&t){const n=i.$implicit;e.xp6(2),e.Q6J("icon",n.icon),e.xp6(1),e.hij(" ",n.field," "),e.xp6(2),e.hij(" ",n.value," ")}}function Ze(t,i){if(1&t&&(e.TgZ(0,"table",26)(1,"tbody"),e.YNc(2,ye,6,3,"tr",27),e.qZA()()),2&t){const n=e.oxw(2);e.xp6(2),e.Q6J("ngForOf",n.DetailsList)}}function we(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"div",4)(1,"div",5)(2,"div",6)(3,"div",7),e.YNc(4,Ce,1,2,"img",8),e.qZA()(),e.TgZ(5,"div",9)(6,"div",10)(7,"div",11),e.YNc(8,_e,3,2,"time",12),e.TgZ(9,"button",13),e.NdJ("click",function(){return e.CHM(n),e.oxw().toggleFavorite()}),e.YNc(10,be,3,1,"div",14),e.YNc(11,Fe,2,1,"ng-template",null,15,e.W1O),e.qZA()(),e.TgZ(13,"h1",16),e._uU(14),e.qZA(),e.TgZ(15,"div"),e.YNc(16,xe,1,1,"app-rating",17),e.TgZ(17,"p",18),e._uU(18),e.qZA(),e.YNc(19,Ze,3,1,"table",19),e.qZA()()()(),e._UZ(20,"app-comment-section",20),e.qZA()}if(2&t){const n=e.MAs(12),o=e.oxw();e.xp6(4),e.Q6J("ngIf",null!==o.PosterPath),e.xp6(4),e.Q6J("ngIf",o.movie.release_date),e.xp6(1),e.Q6J("ngClass",o.isFavorite?"btn-danger":"btn-success"),e.xp6(1),e.Q6J("ngIf",!o.isFavorite)("ngIfElse",n),e.xp6(4),e.hij(" ",o.movie.title," "),e.xp6(2),e.Q6J("ngIf",o.movie.vote_average),e.xp6(2),e.hij(" ",o.movie.overview," "),e.xp6(1),e.Q6J("ngIf",o.DetailsList.length),e.xp6(1),e.Q6J("movie",o.movie)}}function Te(t,i){if(1&t&&(e.TgZ(0,"div",31)(1,"ngb-alert",32),e._uU(2),e.qZA()()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("dismissible",!1),e.xp6(1),e.hij(" ",n.alertMessage," ")}}function Ie(t,i){1&t&&e._UZ(0,"app-loader")}function Se(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"div",33)(1,"button",34),e.NdJ("click",function(){return e.CHM(n),e.oxw().goBack()}),e._uU(2," Back to list "),e.qZA()()}}const Ve=[{path:"",component:(()=>{class t{constructor(n,o,s,a,p,v){this.router=n,this.activatedRoute=o,this.cardViewService=s,this.favoriteService=a,this.locationService=p,this.store=v,this.id=-1,this.movie=null,this.isFavorite=!1,this.alertMessage="",this.loading=!0,this.starIcon=d.Tab,this.banIcon=d.gPx,this.navigationStart$=this.router.events.pipe((0,b.h)(f=>f instanceof g.OD)).subscribe(()=>{this.fetchMovie()})}ngOnInit(){this.fetchMovie()}fetchMovie(){this.loading=!0,this.activatedRoute.params.subscribe(n=>{this.id=parseInt(n.id),this.isFavorite=this.favoriteService.isFavorite(this.id);const o=this.cardViewService.getMovie(this.id).subscribe({next:s=>{this.movie=s,this.store.dispatch(y({movieId:this.movie.id}))},error:()=>{this.alertMessage="Failed to fetch the movie!",this.loading=!1},complete:()=>{this.loading=!1,o.unsubscribe(),this.navigationStart$.unsubscribe()}})})}get PosterPath(){var n,o,s;return null===(null===(n=this.movie)||void 0===n?void 0:n.poster_path)||!0===(null===(o=this.movie)||void 0===o?void 0:o.adult)?`${h.Ll}/images/thumbnail.jpg`:`${h.V0.posterLg}${null===(s=this.movie)||void 0===s?void 0:s.poster_path}`}get DetailsList(){return this.cardViewService.getDetailsList(this.movie)}getDateToIso(n){return(0,F.hb)(n)}toggleFavorite(){this.isFavorite?(this.favoriteService.removeFromFavorite(this.id),this.isFavorite=!1):(this.favoriteService.addToFavorite(this.id),this.isFavorite=!0)}goBack(){this.locationService.back()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g.F0),e.Y36(g.gz),e.Y36(L),e.Y36(M.e),e.Y36(l.Ye),e.Y36(r.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-card-view"]],decls:4,vars:4,consts:[["class","container card-view",4,"ngIf"],["class","container",4,"ngIf"],[4,"ngIf"],["class","text-center py-2",4,"ngIf"],[1,"container","card-view"],[1,"row"],[1,"col-lg-6","mb-4"],[1,"card-view__image"],["class","img-fluid",3,"src","alt",4,"ngIf"],[1,"col-lg-6"],[1,"row","gap-4"],[1,"d-flex","flex-column","flex-sm-row","align-items-center","mb-2","gap-2","gap-sm-4"],["class","d-block",4,"ngIf"],[1,"btn","btn-sm",3,"ngClass","click"],[4,"ngIf","ngIfElse"],["removeFavorite",""],[1,"h2","fw-bold"],[3,"rating",4,"ngIf"],[1,"lh-base","fs-5"],["class","table table-light table-striped card-view__details mt-4",4,"ngIf"],[3,"movie"],[1,"img-fluid",3,"src","alt"],[1,"d-block"],["icon","calendar",1,"me-2"],[1,"me-2",3,"icon"],[3,"rating"],[1,"table","table-light","table-striped","card-view__details","mt-4"],[4,"ngFor","ngForOf"],[1,"card-view__details-field"],[1,"card-view__details-icon",3,"icon"],[1,"card-view__details-value"],[1,"container"],["type","info",3,"dismissible"],[1,"text-center","py-2"],[1,"btn","btn-secondary",3,"click"]],template:function(n,o){1&n&&(e.YNc(0,we,21,10,"div",0),e.YNc(1,Te,3,2,"div",1),e.YNc(2,Ie,1,0,"app-loader",2),e.YNc(3,Se,3,0,"div",3)),2&n&&(e.Q6J("ngIf",null!==o.movie&&!o.loading),e.xp6(1),e.Q6J("ngIf",o.alertMessage),e.xp6(1),e.Q6J("ngIf",o.loading),e.xp6(1),e.Q6J("ngIf",!o.loading&&!o.alertMessage))},directives:[l.O5,C.BN,l.mk,q,l.sg,ve,_.xm,he.R],styles:[".card-view__image[_ngcontent-%COMP%]{max-width:400px;margin-left:auto;margin-right:auto;display:block}.card-view__details-field[_ngcontent-%COMP%]{white-space:nowrap;vertical-align:middle}.card-view__details-value[_ngcontent-%COMP%]{word-break:break-word}.card-view__details-icon[_ngcontent-%COMP%]{width:2.5rem;display:inline-flex;justify-content:center}"]}),t})(),canDeactivate:[(()=>{class t{constructor(n){this.commentFormService=n}canDeactivate(n,o,s,a){let p=this.commentFormService.isFormDirty$.getValue();return p&&(p=!window.confirm("Are you sure you want to leave? All form changes will be lost!")),!p}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(j))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()]}];let Pe=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.Bz.forChild(Ve)],g.Bz]}),t})();var Ae=m(4466);const Oe=(0,r.Lq)({comments:[],postSuccess:!1,postFailure:!1},(0,r.on)($,t=>Object.assign(Object.assign({},t),{postSuccess:!1,postFailure:!1,comments:[]})),(0,r.on)(x,t=>Object.assign({},t)),(0,r.on)(Y,(t,{comments:i})=>Object.assign(Object.assign({},t),{comments:[...i].reverse()})),(0,r.on)(J,t=>Object.assign(Object.assign({},t),{comments:[]})),(0,r.on)(y,t=>Object.assign({},t)),(0,r.on)(Q,(t,{comments:i})=>Object.assign(Object.assign({},t),{comments:[...i].reverse()})),(0,r.on)(D,t=>Object.assign(Object.assign({},t),{comments:[]})),(0,r.on)(Z,t=>Object.assign({},t)),(0,r.on)(w,(t,{comment:i})=>Object.assign(Object.assign({},t),{postSuccess:!0,comments:[i,...t.comments]})),(0,r.on)(T,t=>Object.assign(Object.assign({},t),{postSuccess:!0})));var V=m(5577),P=m(4004),A=m(262),U=m(9646);let Ne=(()=>{class t{constructor(n){this.http=n}getComments(n){const o=(new I.LE).set("parentId",n);return this.http.get(`${h.HF.url}/comments`,{params:o})}postComment(n){return this.http.post(`${h.HF.url}/comments`,n)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(I.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),$e=(()=>{class t{constructor(n,o){this.actions$=n,this.commentService$=o,this.loadComments$=(0,u.GW)(()=>this.actions$.pipe((0,u.l4)(x.type),(0,V.z)(({movieId:s})=>this.commentService$.getComments(s).pipe((0,P.U)(a=>Y({comments:a})),(0,A.K)(()=>(0,U.of)(J())))))),this.reloadComments$=(0,u.GW)(()=>this.actions$.pipe((0,u.l4)(y.type),(0,V.z)(({movieId:s})=>this.commentService$.getComments(s).pipe((0,P.U)(a=>Q({comments:a})),(0,A.K)(()=>(0,U.of)(D())))))),this.postComment$=(0,u.GW)(()=>this.actions$.pipe((0,u.l4)(Z.type),(0,V.z)(({comment:s})=>this.commentService$.postComment(s).pipe((0,P.U)(a=>w({comment:a})),(0,A.K)(()=>(0,U.of)(T()))))))}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(u.eX),e.LFG(Ne))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})(),Ye=(()=>{class t{constructor(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.ez,Pe,C.uH,Ae.m,_.IJ,c.UX,r.Aw.forFeature("comment",Oe),u.sQ.forFeature([$e])]]}),t})()}}]);