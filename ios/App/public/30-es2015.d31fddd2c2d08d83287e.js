(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{Y4zY:function(e,t,i){"use strict";i.r(t),i.d(t,"OffersProviderPageModule",(function(){return M}));var n=i("ofXK"),o=i("3Pt+"),c=i("TEn/"),r=i("tyNb"),s=i("fXoL"),a=i("H+bZ"),l=i("b6Qw"),f=i("FQVY"),b=i("Vaw3"),d=i("dEAy");function p(e,t){if(1&e&&s.Sb(0,"div",26),2&e){const e=s.ic().$implicit;s.oc("innerHTML",e.description.substring(0,60),s.Ac)}}function u(e,t){if(1&e){const e=s.Xb();s.Wb(0,"div"),s.Wb(1,"span",27),s.ec("click",(function(){s.zc(e);const t=s.ic().$implicit;return s.ic().vermas(t.description)})),s.Jc(2,"...ver m\xe1s"),s.Vb(),s.Vb()}}function g(e,t){if(1&e&&(s.Wb(0,"p",28),s.Jc(1),s.jc(2,"number"),s.Vb()),2&e){const e=s.ic().$implicit;s.Db(1),s.Lc("S/ ",s.lc(2,1,e.price,"1.2-2"),"")}}function h(e,t){1&e&&(s.Wb(0,"p",29),s.Jc(1,"Activa"),s.Vb())}function m(e,t){1&e&&(s.Wb(0,"p",30),s.Jc(1,"No activa"),s.Vb())}const w=function(e){return{"background-image":e}},v=function(e){return[e]};function O(e,t){if(1&e){const e=s.Xb();s.Wb(0,"div",12),s.Wb(1,"div",13),s.Wb(2,"div",14),s.Sb(3,"div",15),s.Vb(),s.Wb(4,"div",16),s.Wb(5,"span",17),s.Jc(6),s.Vb(),s.Hc(7,p,1,1,"div",18),s.Hc(8,u,3,0,"div",19),s.Hc(9,g,3,4,"p",20),s.Hc(10,h,2,0,"p",21),s.Hc(11,m,2,0,"p",22),s.Vb(),s.Wb(12,"div",23),s.Wb(13,"button",24),s.Jc(14,"Editar"),s.Vb(),s.Wb(15,"button",25),s.ec("click",(function(){s.zc(e);const i=t.$implicit;return s.ic().getOfferByIdAndDelete(i.id)})),s.Jc(16,"Eliminar"),s.Vb(),s.Vb(),s.Vb(),s.Vb()}if(2&e){const e=t.$implicit;s.Db(3),s.oc("ngStyle",s.sc(8,w,"url("+e.image+")")),s.Db(3),s.Kc(e.name),s.Db(1),s.oc("ngIf",e.description&&""!=e.description&&"null"!=e.description),s.Db(1),s.oc("ngIf",e.description&&e.description.length>59),s.Db(1),s.oc("ngIf",e.price&&"null"!=e.price),s.Db(1),s.oc("ngIf",1==e.enable),s.Db(1),s.oc("ngIf",0==e.enable),s.Db(2),s.oc("routerLink",s.sc(10,v,"edit-offers/"+e.id))}}function V(e,t){1&e&&s.Jc(0," Descripci\xf3n ")}function k(e,t){if(1&e&&(s.Wb(0,"p"),s.Jc(1),s.Vb()),2&e){const e=s.ic();s.Db(1),s.Kc(e.currentDescription)}}function I(e,t){if(1&e){const e=s.Xb();s.Wb(0,"button",31),s.ec("click",(function(){return s.zc(e),s.ic().handleCancel()})),s.Jc(1,"Cerrar"),s.Vb()}}function x(e,t){1&e&&(s.Wb(0,"div",32),s.Sb(1,"img",33),s.Vb())}const D=function(){return["edit-offers/0"]},W=[{path:"",component:(()=>{class e{constructor(e,t,i,n,o,c){this.route=e,this.router=t,this.api=i,this.cookie=n,this.general=o,this.storage=c,this.isVisible=!1,this.contentModal=null,this.response="",this.offers=[],this.urlBackEnd=this.general.getUrlImages("offers"),this.isVisibleModal=!1,this.currentDescription="",this.isLoad=!1}ngOnInit(){this.validateSession()}ionViewWillEnter(){this.getOffers()}validateSession(){localStorage.getItem("ud")?this.user=JSON.parse(localStorage.getItem("ud")):window.location.href="/login"}back(){window.history.back()}getOffers(){let e={service:"get-offers",userid:this.user.user.id,token:this.user.token};this.api.c("getOffers pre",e),this.api.api(e).subscribe(e=>{this.api.c("getOffers",e),e.status?this.offers=e.data:this.api.c("getOffers false",e)},e=>{this.api.c("getOffers error",e)})}deleteOffer(e){let t={service:"delete-offer",offerid:e,token:this.user.token};this.api.c("deleteOffer pre",t),this.api.api(t).subscribe(e=>{this.api.c("deleteOffer",e),this.getOffers()},e=>{this.api.c("deleteOffer error",e)})}getOfferByIdAndDelete(e){this.isLoad=!0;let t={service:"get-offer-by-id",userid:this.user.user.id,offerid:e,token:this.user.token};this.api.c("getOfferByIdAndDelete pre",t),this.api.api(t).subscribe(t=>{this.api.c("getOfferByIdAndDelete",t),t.status?(this.deleteOffer(e),this.storage.storage.refFromURL(t.data.image).delete(),this.isLoad=!1):(this.api.c("getOfferByIdAndDelete false",t),this.isLoad=!1)},e=>{this.api.c("getOfferByIdAndDelete error",e)})}getUriImage(e){return encodeURI(e)}showModal(){this.isVisibleModal=!0}handleOk(){this.isVisibleModal=!1}handleCancel(){this.isVisibleModal=!1}vermas(e){this.currentDescription=e,this.showModal()}}return e.\u0275fac=function(t){return new(t||e)(s.Rb(r.a),s.Rb(r.j),s.Rb(a.a),s.Rb(l.a),s.Rb(f.a),s.Rb(b.a))},e.\u0275cmp=s.Lb({type:e,selectors:[["app-offers-provider"]],decls:17,vars:8,consts:[[1,"pt-3","pr-3","pl-3"],[1,"btn1","pt-2","pb-2",3,"click"],[1,"linea"],[1,"row","m-0","p-3","justify-content-center","align-items-center"],["src","/assets/img/partials/add.svg",1,"add",3,"routerLink"],[1,"p-3","row","m-0","pb-5","mb-5"],["class","row m-0 col-12 col-lg-3 p-2 mt-2",4,"ngFor","ngForOf"],[3,"nzVisible","nzTitle","nzContent","nzFooter","nzVisibleChange","nzOnCancel"],["modalTitle",""],["modalContent",""],["modalFooter",""],["class","load",4,"ngIf"],[1,"row","m-0","col-12","col-lg-3","p-2","mt-2"],[1,"item","row","m-0","col-12","p-0"],[1,"col-12","m-0","p-0","row","justify-content-center"],[1,"img-item",3,"ngStyle"],[1,"ml-3","mt-2"],[1,"f-11","font-700"],["class","f-10",3,"innerHTML",4,"ngIf"],[4,"ngIf"],["class","f-12 text-color2 font-700 p-0 m-0",4,"ngIf"],["class","f-10 text-color2 font-700",4,"ngIf"],["class","f-10 text-color5 font-700",4,"ngIf"],[1,"row","m-0","col-12","justify-content-between"],[1,"btn3","mb-3","f-11","font-700","pt-2","pb-2",3,"routerLink"],[1,"btn4","mb-3","f-11","font-700","pt-2","pb-2",3,"click"],[1,"f-10",3,"innerHTML"],[1,"cursor","font-700","f-10","text-color2",3,"click"],[1,"f-12","text-color2","font-700","p-0","m-0"],[1,"f-10","text-color2","font-700"],[1,"f-10","text-color5","font-700"],[1,"btn1","p-2","pl-3","pr-3",3,"click"],[1,"load"],["src","/assets/img/partials/load.svg"]],template:function(e,t){if(1&e&&(s.Wb(0,"ion-content"),s.Wb(1,"header",0),s.Wb(2,"button",1),s.ec("click",(function(){return t.back()})),s.Jc(3,"Regresar"),s.Vb(),s.Vb(),s.Sb(4,"hr",2),s.Wb(5,"div",3),s.Sb(6,"img",4),s.Vb(),s.Wb(7,"div",5),s.Hc(8,O,17,12,"div",6),s.Vb(),s.Wb(9,"nz-modal",7),s.ec("nzVisibleChange",(function(e){return t.isVisibleModal=e}))("nzOnCancel",(function(){return t.handleCancel()})),s.Hc(10,V,1,0,"ng-template",null,8,s.Ic),s.Hc(12,k,2,1,"ng-template",null,9,s.Ic),s.Hc(14,I,2,0,"ng-template",null,10,s.Ic),s.Vb(),s.Hc(16,x,2,0,"div",11),s.Vb()),2&e){const e=s.wc(11),i=s.wc(13),n=s.wc(15);s.Db(6),s.oc("routerLink",s.rc(7,D)),s.Db(2),s.oc("ngForOf",t.offers),s.Db(1),s.oc("nzVisible",t.isVisibleModal)("nzTitle",e)("nzContent",i)("nzFooter",n),s.Db(7),s.oc("ngIf",t.isLoad)}},directives:[c.d,c.s,r.k,n.k,d.a,n.l,n.m],pipes:[n.e],styles:[".linea[_ngcontent-%COMP%]{border-bottom:3px solid #e6e6e6}.item[_ngcontent-%COMP%]{box-shadow:1px 3px 8px 5px #c2c2c2;border-radius:10px}.item[_ngcontent-%COMP%]   .img-item[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;background-position:50%;border-radius:10px 10px 0 0;min-width:23.1vw;max-width:23.1vw;max-height:23.1vw;min-height:23.1vw}.add[_ngcontent-%COMP%]{max-width:40px}@media (max-width:992px){.item[_ngcontent-%COMP%]   .img-item[_ngcontent-%COMP%]{min-width:85vw;max-width:85vw;max-height:85vw;min-height:85vw}}"]}),e})()},{path:"edit-offers/:id",loadChildren:()=>i.e(29).then(i.bind(null,"TxCI")).then(e=>e.EditOffersPageModule)}];let y=(()=>{class e{}return e.\u0275mod=s.Pb({type:e}),e.\u0275inj=s.Ob({factory:function(t){return new(t||e)},imports:[[r.l.forChild(W)],r.l]}),e})();var C=i("rIor");let M=(()=>{class e{}return e.\u0275mod=s.Pb({type:e}),e.\u0275inj=s.Ob({factory:function(t){return new(t||e)},imports:[[n.c,o.c,c.o,y,C.b,d.b]]}),e})()}}]);