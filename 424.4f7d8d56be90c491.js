"use strict";(self.webpackChunkmovie_db=self.webpackChunkmovie_db||[]).push([[424],{9424:(L,l,i)=>{i.r(l),i.d(l,{FavoriteModule:()=>b});var a=i(9808),v=i(9560),c=i(801),m=i(4128),f=i(4825),s=i(2340),u=i(7957),t=i(1223),g=i(520),h=i(7933),F=i(605),p=i(9444),d=i(8844);function Z(e,r){1&e&&t._UZ(0,"app-loader")}function x(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",8)(6,"a",10),t._UZ(7,"fa-icon",11),t.qZA()(),t.TgZ(8,"td",8)(9,"button",12),t.NdJ("click",function(){const I=t.CHM(o).$implicit;return t.oxw(3).removeFromFavorite(I.id)}),t._UZ(10,"fa-icon",11),t.qZA()()()}if(2&e){const o=r.$implicit,n=t.oxw(3);t.xp6(2),t.Oqu(o.title),t.xp6(2),t.Oqu(o.overview),t.xp6(2),t.Q6J("routerLink",n.getPath(o.id)),t.xp6(1),t.Q6J("icon",n.iconLoupe),t.xp6(3),t.Q6J("icon",n.iconBan)}}function T(e,r){if(1&e&&(t.TgZ(0,"div",6)(1,"table",7)(2,"thead")(3,"th"),t._uU(4,"Title"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Overview"),t.qZA(),t.TgZ(7,"th",8),t._uU(8,"View"),t.qZA(),t.TgZ(9,"th",8),t._uU(10,"Remove"),t.qZA()(),t.TgZ(11,"tbody"),t.YNc(12,x,11,5,"tr",9),t.qZA()()()),2&e){const o=r.ngIf;t.xp6(12),t.Q6J("ngForOf",o)}}function y(e,r){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,T,13,1,"div",5),t.ALo(2,"async"),t.qZA()),2&e){const o=t.oxw(),n=t.MAs(4);t.xp6(1),t.Q6J("ngIf",t.lcZ(2,2,o.favorite$))("ngIfElse",n)}}function C(e,r){1&e&&(t.TgZ(0,"ngb-alert",13),t._uU(1," You don't have any favorite movies! "),t.qZA()),2&e&&t.Q6J("dismissible",!1)}const $=[{path:"",component:(()=>{class e{constructor(o,n){this.http=o,this.favoriteService=n,this.title="Favorite movies",this.favoriteList=(0,u.$)("favorite"),this.iconLoupe=c.Y$T,this.iconBan=c.gPx,this.alert=!this.favoriteList.length}ngOnInit(){this.favoriteHttp$=this.favoriteList.map(o=>this.http.get(`${s.V0.url}/3/movie/${o}?api_key=${s.V0.key}`)),this.favorite$=(0,m.D)(this.favoriteHttp$).pipe((0,f.g)(500))}getPath(o){return`/movie/${o}`}removeFromFavorite(o){this.favoriteList=this.favoriteService.removeFromFavorite(o),this.favoriteList.length||(this.alert=!0),this.favoriteHttp$=this.favoriteList.map(n=>this.http.get(`${s.V0.url}/3/movie/${n}?api_key=${s.V0.key}`)),this.favorite$=(0,m.D)(this.favoriteHttp$).pipe((0,f.g)(200))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(g.eN),t.Y36(h.e))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-favorite"]],decls:7,vars:3,consts:[[1,"container"],[1,"h2","mb-4"],["loading",""],[4,"ngIf"],["type","info",3,"dismissible",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],[1,"table-responsive"],[1,"table"],[1,"text-center"],[4,"ngFor","ngForOf"],[1,"btn","btn-sm","btn-secondary","text-center",3,"routerLink"],[3,"icon"],[1,"btn","btn-sm","btn-danger","text-center",3,"click"],["type","info",3,"dismissible"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2),t.qZA(),t.YNc(3,Z,1,0,"ng-template",null,2,t.W1O),t.YNc(5,y,3,4,"div",3),t.YNc(6,C,2,1,"ngb-alert",4),t.qZA()),2&o&&(t.xp6(2),t.hij(" ",n.title," "),t.xp6(3),t.Q6J("ngIf",!n.alert),t.xp6(1),t.Q6J("ngIf",n.alert))},directives:[F.R,a.O5,a.sg,v.yS,p.BN,d.xm],pipes:[a.Ov],styles:[".table-responsive[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{min-width:500px}"]}),e})()}];let A=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[v.Bz.forChild($)],v.Bz]}),e})();var J=i(4466);let b=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.ez,A,d.IJ,p.uH,J.m]]}),e})()}}]);