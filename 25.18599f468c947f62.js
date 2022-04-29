"use strict";(self.webpackChunkmovie_db=self.webpackChunkmovie_db||[]).push([[25],{3025:(ae,x,m)=>{m.r(x),m.d(x,{CardViewModule:()=>le});var l=m(9808),f=m(3477),a=m(801),T=m(9300),v=m(7957),p=m(2340),e=m(5e3),I=m(8537),h=m(520),Z=m(7933);let F=(()=>{class n{constructor(t,o){this.http=t,this.favoriteService=o}getMovie(t){return this.http.get(`${p.V0.url}/3/movie/${t}?api_key=${p.V0.key}`).pipe((0,I.g)(300))}getDetailsList(t){const o=[];return null===t||(null!=(null==t?void 0:t.genres)&&(null==t?void 0:t.genres.length)&&o.push({icon:a.Psp,field:"Genres",value:null==t?void 0:t.genres.map(r=>r.name).join(", ")}),null!=(null==t?void 0:t.revenue)&&o.push({icon:a.n7u,field:"Box office",value:`${null==t?void 0:t.revenue.toLocaleString()}$`}),null!=(null==t?void 0:t.adult)&&o.push({icon:a.caW,field:"For adults",value:(null==t?void 0:t.adult)?"Yes":"No"}),null!=(null==t?void 0:t.homepage)&&(null==t?void 0:t.homepage.length)&&o.push({icon:a.nNP,field:"Website",value:null==t?void 0:t.homepage})),o}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(h.eN),e.LFG(Z.e))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),w=(()=>{class n{constructor(t){this.http=t}getComments(t){const o=(new h.LE).set("parentId",t);return this.http.get(`${p.HF.url}/comments`,{params:o})}postComment(t){return this.http.post(`${p.HF.url}/comments`,t)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(h.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var u=m(9444);let y=(()=>{class n{constructor(){this.rating=0}ngOnInit(){}get Rating(){return Math.floor(this.rating)/10*100+"%"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-rating"]],inputs:{rating:"rating"},decls:4,vars:3,consts:[[1,"progress","position-relative","mb-4"],[1,"progress-bar","progress-bar-striped"],[1,"position-absolute","top-0","end-0","bottom-0","start-0","text-center","d-flex","align-items-center","justify-content-center","fw-bold","p-1"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3),e.qZA()()()),2&t&&(e.xp6(1),e.Udp("width",o.Rating),e.xp6(2),e.hij(" Community rating: ",o.Rating," "))},styles:[".progress[_ngcontent-%COMP%]{height:2rem;text-shadow:2px 2px 2px rgba(0,0,0,.4)}.progress-bar[_ngcontent-%COMP%]{height:inherit}"]}),n})();var s=m(3075),C=m(3139);const N=["formWrapper"];function V(n,i){1&n&&(e.TgZ(0,"ngb-alert",26),e._uU(1," Your comment has been posted! "),e.qZA()),2&n&&e.Q6J("dismissible",!0)}function U(n,i){1&n&&(e.TgZ(0,"ngb-alert",27),e._uU(1," Failed to post the comment! "),e.qZA()),2&n&&e.Q6J("dismissible",!0)}function A(n,i){1&n&&e._UZ(0,"fa-icon",28)}function J(n,i){1&n&&e._UZ(0,"fa-icon",29)}function Y(n,i){1&n&&(e.TgZ(0,"span",30),e._uU(1,"This field is required"),e.qZA())}function Q(n,i){1&n&&(e.TgZ(0,"span",30),e._uU(1,"This field is required"),e.qZA())}function M(n,i){1&n&&(e.TgZ(0,"span",30),e._uU(1,"This e-mail address is incorrect"),e.qZA())}function q(n,i){1&n&&(e.TgZ(0,"span",30),e._uU(1,"Error phone"),e.qZA())}function S(n,i){1&n&&(e.TgZ(0,"span",30),e._uU(1,"This field is required"),e.qZA())}function P(n,i){if(1&n&&(e.TgZ(0,"span",30),e._uU(1),e.qZA()),2&n){const t=i.ngIf;e.xp6(1),e.hij(" ",t," ")}}const O=function(n){return{"form--collapsed":n}};let D=(()=>{class n{constructor(t,o,r){this.formBuilder=o,this.commentService=r,this.updateComments=new e.vpe,this.formDisplaySuccess=!1,this.formDisplayFailure=!1,this.formDisplayErrors=!1,this.isFormCollapsed=!0,t.addIcons(a.Kl4,a.r8p),this.form=this.formBuilder.group({commentName:new s.NI("",s.kI.required),commentEmail:new s.NI("",[s.kI.required,s.kI.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")]),commentPhone:new s.NI("",[s.kI.pattern("^([+]?[s0-9]+)?(d{3}|[(]?[0-9]+[)])?([-]?[s]?[0-9])+$")]),commentValue:new s.NI("",[s.kI.required,this.commentValueValidation])})}ngOnInit(){}onSubmit(t){this.form.valid?this.commentService.postComment({createdAt:(new Date).getTime(),name:t.commentName,value:t.commentValue,parentId:this.movie.id}).subscribe({next:()=>{this.isFormCollapsed=!1,this.formDisplaySuccess=!0,this.updateComments.emit("New value")},error:()=>{this.formDisplayFailure=!0},complete:()=>{this.form.reset(),this.formDisplayErrors=!1,window.scrollTo(0,this.formWrapper.nativeElement.offsetTop-110)}}):this.formDisplayErrors=!0}toggleForm(){this.isFormCollapsed=!this.isFormCollapsed}commentValueValidation(t){var o,r;return 0===(null===(o=t.value)||void 0===o?void 0:o.trim().length)?null:(null===(r=t.value)||void 0===r?void 0:r.length)<10?{minLength:"Your comment should have at least 10 characters!"}:null}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.by),e.Y36(s.qu),e.Y36(w))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-comment-form"]],viewQuery:function(t,o){if(1&t&&e.Gf(N,5),2&t){let r;e.iGM(r=e.CRH())&&(o.formWrapper=r.first)}},inputs:{movie:"movie"},outputs:{updateComments:"updateComments"},decls:47,vars:14,consts:[[1,"form__wrapper"],["formWrapper",""],["type","success",3,"dismissible",4,"ngIf"],["type","error",3,"dismissible",4,"ngIf"],[1,"form","p-4","bg-light","border",3,"formGroup","ngClass","ngSubmit"],[1,"d-flex","justify-content-between","align-items-center","h4","m-0"],["type","button",1,"btn","btn-sm","btn-primary","ms-4",3,"click"],["icon","minus",4,"ngIf"],["icon","plus",4,"ngIf"],[1,"pt-3","form__separator"],[1,"pt-3","border-top","form__content"],[1,"row"],[1,"col-xs-12","col-lg-4","mb-3"],["for","commentName",1,"form-label","d-block","fw-bold"],[1,"text-danger"],["name","commentName","id","commentName","formControlName","commentName",1,"form-control"],["class","form__error",4,"ngIf"],["for","commentEmail",1,"form-label","d-block","fw-bold"],["name","commentEmail","id","commentEmail","formControlName","commentEmail",1,"form-control"],["for","commentPhone",1,"form-label","d-block","fw-bold"],["name","commentPhone","id","commentPhone","formControlName","commentPhone",1,"form-control"],[1,"col-xs-12"],["for","commentValue",1,"form-label","d-block","fw-bold"],["name","commentValue","id","commentValue","formControlName","commentValue",1,"form-control","form-control-textarea"],[1,"text-center","mt-4"],["type","submit",1,"btn","btn-md","btn-success"],["type","success",3,"dismissible"],["type","error",3,"dismissible"],["icon","minus"],["icon","plus"],[1,"form__error"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0,1),e.YNc(2,V,2,1,"ngb-alert",2),e.YNc(3,U,2,1,"ngb-alert",3),e.TgZ(4,"form",4),e.NdJ("ngSubmit",function(){return o.onSubmit(o.form.value)}),e.TgZ(5,"fieldset")(6,"legend",5)(7,"span"),e._uU(8," Post a comment "),e.qZA(),e.TgZ(9,"button",6),e.NdJ("click",function(){return o.toggleForm()}),e.YNc(10,A,1,0,"fa-icon",7),e.YNc(11,J,1,0,"fa-icon",8),e.qZA()(),e._UZ(12,"div",9),e.TgZ(13,"div",10)(14,"div",11)(15,"div",12)(16,"label",13),e._uU(17," Name"),e.TgZ(18,"span",14),e._uU(19,"*"),e.qZA()(),e._UZ(20,"input",15),e.YNc(21,Y,2,0,"span",16),e.qZA(),e.TgZ(22,"div",12)(23,"label",17),e._uU(24," E-mail"),e.TgZ(25,"span",14),e._uU(26,"*"),e.qZA()(),e._UZ(27,"input",18),e.YNc(28,Q,2,0,"span",16),e.YNc(29,M,2,0,"span",16),e.qZA(),e.TgZ(30,"div",12)(31,"label",19),e._uU(32," Phone number "),e.qZA(),e._UZ(33,"input",20),e.YNc(34,q,2,0,"span",16),e.qZA(),e.TgZ(35,"div",21)(36,"label",22),e._uU(37," Comment"),e.TgZ(38,"span",14),e._uU(39,"*"),e.qZA()(),e._UZ(40,"textarea",23),e.YNc(41,S,2,0,"span",16),e.YNc(42,P,2,1,"span",16),e.qZA()(),e.TgZ(43,"div",11)(44,"div",24)(45,"button",25),e._uU(46," Submit "),e.qZA()()()()()()()),2&t){let r,c,d,g,_,b;e.xp6(2),e.Q6J("ngIf",o.formDisplaySuccess),e.xp6(1),e.Q6J("ngIf",o.formDisplayFailure),e.xp6(1),e.Q6J("formGroup",o.form)("ngClass",e.VKq(12,O,o.isFormCollapsed)),e.xp6(6),e.Q6J("ngIf",o.isFormCollapsed),e.xp6(1),e.Q6J("ngIf",!o.isFormCollapsed),e.xp6(10),e.Q6J("ngIf",o.formDisplayErrors&&(null==(r=o.form.get("commentName"))||null==r.errors?null:r.errors.required)),e.xp6(7),e.Q6J("ngIf",o.formDisplayErrors&&(null==(c=o.form.get("commentEmail"))||null==c.errors?null:c.errors.required)),e.xp6(1),e.Q6J("ngIf",o.formDisplayErrors&&(null==(d=o.form.get("commentEmail"))||null==d.errors?null:d.errors.pattern)),e.xp6(5),e.Q6J("ngIf",o.formDisplayErrors&&(null==(g=o.form.get("commentPhone"))||null==g.errors?null:g.errors.pattern)),e.xp6(7),e.Q6J("ngIf",o.formDisplayErrors&&(null==(_=o.form.get("commentValue"))||null==_.errors?null:_.errors.required)),e.xp6(1),e.Q6J("ngIf",o.formDisplayErrors&&(null==(b=o.form.get("commentValue"))||null==b.errors?null:b.errors.minLength))}},directives:[l.O5,C.xm,s._Y,s.JL,s.sg,l.mk,u.BN,s.Fj,s.JJ,s.u],styles:[".form-control-textarea[_ngcontent-%COMP%]{min-height:200px}.form__separator[_ngcontent-%COMP%], .form__content[_ngcontent-%COMP%]{display:none}.form--collapsed[_ngcontent-%COMP%]   .form__separator[_ngcontent-%COMP%], .form--collapsed[_ngcontent-%COMP%]   .form__content[_ngcontent-%COMP%]{display:block}.form__error[_ngcontent-%COMP%]{color:#dc3545}"]}),n})();function k(n,i){if(1&n&&(e.TgZ(0,"article",1)(1,"div",2)(2,"h3",3),e._uU(3),e.qZA(),e.TgZ(4,"time",4),e._UZ(5,"fa-icon",5),e._uU(6),e.qZA()(),e.TgZ(7,"p",6),e._uU(8),e.qZA()()),2&n){const t=e.oxw();e.xp6(3),e.hij(" ",t.comment.name," "),e.xp6(1),e.uIk("datetime",t.DateIso),e.xp6(2),e.hij(" (",t.Date,") "),e.xp6(2),e.hij(" ",t.comment.value," ")}}let E=(()=>{class n{constructor(t){t.addIcons(a.fT7)}ngOnInit(){}get Date(){return(0,v.jV)(this.comment.createdAt)}get DateIso(){return(0,v.TQ)(this.comment.createdAt)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(u.by))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-comment"]],inputs:{comment:"comment"},decls:1,vars:1,consts:[["class","comment p-3 border mt-2",4,"ngIf"],[1,"comment","p-3","border","mt-2"],[1,"d-flex","align-items-end","flex-wrap","gap-2","mb-2"],[1,"fw-bold","m-0","text-success","h5"],[1,"comment__date","text-dark","fw-light"],["icon","calendar",1,"comment__icon","me-1"],[1,"m-0"]],template:function(t,o){1&t&&e.YNc(0,k,9,4,"article",0),2&t&&e.Q6J("ngIf",null!==o.comment)},directives:[l.O5,u.BN],styles:[".comment__icon[_ngcontent-%COMP%]{font-size:.75rem;letter-spacing:.05em}"]}),n})();var j=m(605);function L(n,i){if(1&n&&e._UZ(0,"img",24),2&n){const t=e.oxw(2);e.s9C("src",t.PosterPath,e.LSH),e.Q6J("alt","Poster of "+t.movie.title)}}function $(n,i){if(1&n&&(e.TgZ(0,"time",25),e._UZ(1,"fa-icon",26),e._uU(2),e.qZA()),2&n){const t=e.oxw(2);e.uIk("datetime",t.getDateToIso(t.movie.release_date)),e.xp6(2),e.hij(" ",t.movie.release_date," ")}}function B(n,i){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"fa-icon",27),e._uU(2," Add to favorite "),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("icon",t.starIcon)}}function R(n,i){if(1&n&&(e._UZ(0,"fa-icon",27),e._uU(1," Remove from favorite ")),2&n){const t=e.oxw(2);e.Q6J("icon",t.banIcon)}}function z(n,i){if(1&n&&e._UZ(0,"app-rating",28),2&n){const t=e.oxw(2);e.Q6J("rating",t.movie.vote_average)}}function G(n,i){if(1&n&&(e.TgZ(0,"tr")(1,"th",31),e._UZ(2,"fa-icon",32),e._uU(3),e.qZA(),e.TgZ(4,"td",33),e._uU(5),e.qZA()()),2&n){const t=i.$implicit;e.xp6(2),e.Q6J("icon",t.icon),e.xp6(1),e.hij(" ",t.field," "),e.xp6(2),e.hij(" ",t.value," ")}}function H(n,i){if(1&n&&(e.TgZ(0,"table",29)(1,"tbody"),e.YNc(2,G,6,3,"tr",30),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(2),e.Q6J("ngForOf",t.DetailsList)}}function W(n,i){1&n&&e._UZ(0,"app-comment",35),2&n&&e.Q6J("comment",i.$implicit)}function X(n,i){if(1&n&&(e.ynx(0),e.YNc(1,W,1,1,"app-comment",34),e.BQk()),2&n){const t=e.oxw().ngIf;e.xp6(1),e.Q6J("ngForOf",null==t?null:t.reverse())}}function K(n,i){if(1&n&&(e.ynx(0),e.YNc(1,X,2,1,"ng-container",14),e.BQk()),2&n){const t=i.ngIf;e.oxw();const o=e.MAs(27);e.xp6(1),e.Q6J("ngIf",null==t?null:t.length)("ngIfElse",o)}}function ee(n,i){1&n&&(e.TgZ(0,"div")(1,"ngb-alert",36),e._uU(2," There are no comments. Be the first one! "),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("dismissible",!1))}function te(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",4)(1,"div",5)(2,"div",6)(3,"div",7),e.YNc(4,L,1,2,"img",8),e.qZA()(),e.TgZ(5,"div",9)(6,"div",10)(7,"div",11),e.YNc(8,$,3,2,"time",12),e.TgZ(9,"button",13),e.NdJ("click",function(){return e.CHM(t),e.oxw().toggleFavorite()}),e.YNc(10,B,3,1,"div",14),e.YNc(11,R,2,1,"ng-template",null,15,e.W1O),e.qZA()(),e.TgZ(13,"h1",16),e._uU(14),e.qZA(),e.TgZ(15,"div"),e.YNc(16,z,1,1,"app-rating",17),e.TgZ(17,"p",18),e._uU(18),e.qZA(),e.YNc(19,H,3,1,"table",19),e.qZA()()()(),e.TgZ(20,"section",20)(21,"h2",21),e._uU(22," Comments "),e.qZA(),e.TgZ(23,"app-comment-form",22),e.NdJ("updateComments",function(r){return e.CHM(t),e.oxw().onUpdateComments(r)}),e.qZA(),e.YNc(24,K,2,2,"ng-container",2),e.ALo(25,"async"),e.YNc(26,ee,3,1,"ng-template",null,23,e.W1O),e.qZA()()}if(2&n){const t=e.MAs(12),o=e.oxw();e.xp6(4),e.Q6J("ngIf",null!==o.PosterPath),e.xp6(4),e.Q6J("ngIf",o.movie.release_date),e.xp6(1),e.Q6J("ngClass",o.isFavorite?"btn-danger":"btn-success"),e.xp6(1),e.Q6J("ngIf",!o.isFavorite)("ngIfElse",t),e.xp6(4),e.hij(" ",o.movie.title," "),e.xp6(2),e.Q6J("ngIf",o.movie.vote_average),e.xp6(2),e.hij(" ",o.movie.overview," "),e.xp6(1),e.Q6J("ngIf",o.DetailsList.length),e.xp6(4),e.Q6J("movie",o.movie),e.xp6(1),e.Q6J("ngIf",e.lcZ(25,11,o.comments$))}}function ne(n,i){if(1&n&&(e.TgZ(0,"div",37)(1,"ngb-alert",36),e._uU(2),e.qZA()()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("dismissible",!1),e.xp6(1),e.hij(" ",t.alertMessage," ")}}function oe(n,i){1&n&&e._UZ(0,"app-loader")}function ie(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",38)(1,"button",39),e.NdJ("click",function(){return e.CHM(t),e.oxw().goBack()}),e._uU(2," Back to list "),e.qZA()()}}const re=[{path:"",component:(()=>{class n{constructor(t,o,r,c,d,g){this.router=t,this.activatedRoute=o,this.cardViewService=r,this.commentService=c,this.favoriteService=d,this.locationService=g,this.id=-1,this.movie=null,this.isFavorite=!1,this.alertMessage="",this.loading=!0,this.starIcon=a.Tab,this.banIcon=a.gPx,this.router.events.pipe((0,T.h)(_=>_ instanceof f.OD)).subscribe(()=>this.fetchMovie())}ngOnInit(){this.fetchMovie()}fetchMovie(){this.loading=!0,this.activatedRoute.params.subscribe(t=>{this.id=parseInt(t.id),this.isFavorite=this.favoriteService.isFavorite(this.id),this.cardViewService.getMovie(this.id).subscribe({next:o=>{this.movie=o,this.comments$=this.commentService.getComments(this.movie.id)},error:()=>{this.alertMessage="Failed to fetch the movie!",this.loading=!1},complete:()=>{this.loading=!1}})})}get PosterPath(){var t,o,r;return null===(null===(t=this.movie)||void 0===t?void 0:t.poster_path)||!0===(null===(o=this.movie)||void 0===o?void 0:o.adult)?`${p.Ll}/images/thumbnail.jpg`:`${p.V0.posterLg}${null===(r=this.movie)||void 0===r?void 0:r.poster_path}`}get DetailsList(){return this.cardViewService.getDetailsList(this.movie)}getDateToIso(t){return(0,v.hb)(t)}toggleFavorite(){this.isFavorite?(this.favoriteService.removeFromFavorite(this.id),this.isFavorite=!1):(this.favoriteService.addToFavorite(this.id),this.isFavorite=!0)}goBack(){this.locationService.back()}onUpdateComments(t){this.comments$=this.commentService.getComments(this.movie.id)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f.F0),e.Y36(f.gz),e.Y36(F),e.Y36(w),e.Y36(Z.e),e.Y36(l.Ye))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-card-view"]],decls:4,vars:4,consts:[["class","container card-view",4,"ngIf"],["class","container",4,"ngIf"],[4,"ngIf"],["class","text-center py-2",4,"ngIf"],[1,"container","card-view"],[1,"row"],[1,"col-lg-6","mb-4"],[1,"card-view__image"],["class","img-fluid",3,"src","alt",4,"ngIf"],[1,"col-lg-6"],[1,"row","gap-4"],[1,"d-flex","flex-column","flex-sm-row","align-items-center","mb-2","gap-2","gap-sm-4"],["class","d-block",4,"ngIf"],[1,"btn","btn-sm",3,"ngClass","click"],[4,"ngIf","ngIfElse"],["removeFavorite",""],[1,"h2","fw-bold"],[3,"rating",4,"ngIf"],[1,"lh-base","fs-5"],["class","table table-light table-striped card-view__details mt-4",4,"ngIf"],[1,"row","my-4"],[1,"h3","fw-bold","mb-4"],[1,"mb-4",3,"movie","updateComments"],["noComments",""],[1,"img-fluid",3,"src","alt"],[1,"d-block"],["icon","calendar",1,"me-2"],[1,"me-2",3,"icon"],[3,"rating"],[1,"table","table-light","table-striped","card-view__details","mt-4"],[4,"ngFor","ngForOf"],[1,"card-view__details-field"],[1,"card-view__details-icon",3,"icon"],[1,"card-view__details-value"],[3,"comment",4,"ngFor","ngForOf"],[3,"comment"],["type","info",3,"dismissible"],[1,"container"],[1,"text-center","py-2"],[1,"btn","btn-secondary",3,"click"]],template:function(t,o){1&t&&(e.YNc(0,te,28,13,"div",0),e.YNc(1,ne,3,2,"div",1),e.YNc(2,oe,1,0,"app-loader",2),e.YNc(3,ie,3,0,"div",3)),2&t&&(e.Q6J("ngIf",null!==o.movie&&!o.loading),e.xp6(1),e.Q6J("ngIf",o.alertMessage),e.xp6(1),e.Q6J("ngIf",o.loading),e.xp6(1),e.Q6J("ngIf",!o.loading&&!o.alertMessage))},directives:[l.O5,u.BN,l.mk,y,l.sg,D,E,C.xm,j.R],pipes:[l.Ov],styles:[".card-view__image[_ngcontent-%COMP%]{max-width:400px;margin-left:auto;margin-right:auto;display:block}.card-view__details-field[_ngcontent-%COMP%]{white-space:nowrap;vertical-align:middle}.card-view__details-value[_ngcontent-%COMP%]{word-break:break-word}.card-view__details-icon[_ngcontent-%COMP%]{width:2.5rem;display:inline-flex;justify-content:center}"]}),n})()}];let me=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[f.Bz.forChild(re)],f.Bz]}),n})();var se=m(4466);let le=(()=>{class n{constructor(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[l.ez,me,u.uH,se.m,C.IJ,s.UX]]}),n})()}}]);