(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{IwRS:function(e,t,i){"use strict";i.r(t),i.d(t,"ConfigUserProviderPageModule",(function(){return f}));var o=i("ofXK"),n=i("3Pt+"),r=i("TEn/"),a=i("tyNb"),s=i("XNiG"),c=i("fXoL"),d=i("H+bZ"),p=i("b6Qw"),l=i("rIor");function b(e,t){if(1&e){const e=c.Xb();c.Wb(0,"header",23),c.Wb(1,"button",24),c.ec("click",(function(){return c.zc(e),c.ic().back()})),c.Jc(2,"Regresar"),c.Vb(),c.Vb()}}function g(e,t){if(1&e){const e=c.Xb();c.Wb(0,"header",23),c.Wb(1,"button",24),c.ec("click",(function(){return c.zc(e),c.ic().back()})),c.Jc(2,"Regresar"),c.Vb(),c.Vb()}}function u(e,t){if(1&e){const e=c.Xb();c.Wb(0,"div",25),c.Wb(1,"div",26),c.Wb(2,"div",27),c.Wb(3,"h6",28),c.Jc(4,"Cortar Imagen"),c.Vb(),c.Wb(5,"img",29),c.ec("click",(function(){return c.zc(e),c.ic().handleCancelCortar()})),c.Vb(),c.Vb(),c.Wb(6,"div",30),c.Wb(7,"div",31),c.Wb(8,"div",32),c.Wb(9,"h5"),c.Jc(10,"Cortar Imagen"),c.Vb(),c.Wb(11,"image-cropper",33),c.ec("imageCropped",(function(t){return c.zc(e),c.ic().imageCropped(t)}))("imageLoaded",(function(){return c.zc(e),c.ic().imageLoaded()}))("cropperReady",(function(){return c.zc(e),c.ic().cropperReady()}))("loadImageFailed",(function(){return c.zc(e),c.ic().loadImageFailed()})),c.Vb(),c.Vb(),c.Wb(12,"div",34),c.Wb(13,"h5"),c.Jc(14,"Previsualizar"),c.Vb(),c.Sb(15,"img",35),c.Vb(),c.Vb(),c.Vb(),c.Wb(16,"div",36),c.Wb(17,"button",37),c.ec("click",(function(){return c.zc(e),c.ic().saveImageProfile()})),c.Jc(18,"Terminar"),c.Vb(),c.Vb(),c.Vb(),c.Vb()}if(2&e){const e=c.ic();c.Db(11),c.oc("imageChangedEvent",e.imageChangedEvent)("maintainAspectRatio",!0)("aspectRatio",1)("resizeToWidth",0),c.Db(4),c.oc("src",e.croppedImage,c.Bc)}}const m=[{path:"",component:(()=>{class e{constructor(e,t,i){this.router=e,this.api=t,this.cookie=i,this.isLoad=!1,this.responseName="",this.responsePassword="",this.currentpassword="",this.password="",this.repassword="",this.username="",this.eventsSubject=new s.a,this.isVisibleModal=!1,this.isVisibleCortar=!1,this.imageChangedEvent="",this.croppedImage="/assets/img/partials/user.svg",this.imagesArray=[]}ngOnInit(){this.validateSession()}back(){window.history.back()}validateSession(){localStorage.getItem("ud")&&""!=localStorage.getItem("ud")&&(this.user=JSON.parse(localStorage.getItem("ud")),this.api.c("user",this.user),this.getCategoriesAndSubcategories(),this.getUsername(),this.getImageProfile())}getCategoriesAndSubcategories(){this.api.api({service:"get-categories-and-subcategories"}).subscribe(e=>{this.api.c("getCategoriesAndSubcategories result",e),this.categories=e,this.isLoad=!1},e=>{this.api.c("Error getCategoriesAndSubcategories",e)})}toogleMenuHome(){this.api.c("toogleMenuFather2",this.eventsSubject),this.eventsSubject.next()}saveImageProfile(){this.api.api({service:"save-image-profile",token:this.user.token,userid:this.user.user.id,imageprofile:this.croppedImage}).subscribe(e=>{this.api.c("saveImageProfile result",e),this.croppedImage="",this.isVisibleCortar=!1},e=>{this.api.c("Error saveImageProfile",e)})}getImageProfile(){this.api.api({service:"get-image-profile",token:this.user.token,userid:this.user.user.id}).subscribe(e=>{this.api.c("getImageProfile result",e),e.status&&(this.croppedImage=e.data&&"null"!=e.data?e.data:null)},e=>{this.api.c("Error getImageProfile",e)})}changePassword(){""==this.currentpassword||""==this.password||""==this.repassword?this.responsePassword="Debe completar todos los campos":this.password!==this.repassword?this.responsePassword="Las contrase\xf1as no coinciden":this.api.api({service:"change-password",token:this.user.token,userid:this.user.user.id,password:this.password,currentpassword:this.currentpassword}).subscribe(e=>{this.api.c("saveImageProfile result",e),e.status&&(this.responsePassword=e.message)},e=>{this.api.c("Error saveImageProfile",e)})}saveUserName(){this.api.api({service:"save-user-name",token:this.user.token,userid:this.user.user.id,username:this.username}).subscribe(e=>{this.api.c("saveUserName result",e),e.status&&(this.responseName=e.message)},e=>{this.api.c("Error saveUserName",e)})}getUsername(){this.api.api({service:"get-user-name",token:this.user.token,userid:this.user.user.id}).subscribe(e=>{this.api.c("getUsername result",e),e.status&&e.data&&"null"!=e.data&&(this.username=e.data)},e=>{this.api.c("Error getUsername",e)})}fileChangeEvent(e){this.showModalCortar(),this.imageChangedEvent=e}imageCropped(e){this.croppedImage=e.base64}imageLoaded(){}cropperReady(){}loadImageFailed(){}showModalCortar(){this.isVisibleCortar=!0}handleCancelCortar(){this.isVisibleCortar=!1}}return e.\u0275fac=function(t){return new(t||e)(c.Rb(a.j),c.Rb(d.a),c.Rb(p.a))},e.\u0275cmp=c.Lb({type:e,selectors:[["app-config-user-provider"]],decls:45,vars:12,consts:[["class","pt-3 pr-3 pl-3 pb-3 shadow-lg col-12 z-index1000 bg-white",4,"ngIf"],[1,"container-fluid","p-5","mt-5"],[1,"row"],[1,"col-12","col-xl-4","row","m-0","p-0","justify-content-center","align-items-center"],[1,"col-12","p-0","row","m-0","justify-content-center"],[1,"userimage","rounded-circle","overflow-hidden"],["type","file",1,"w-100","h-100","rounded-circle","inputimage",3,"change"],[1,"col-12","p-0","row","m-0","mt-2","justify-content-center"],["for","email",1,"col-12","text-center"],["type","text","disabled","",1,"text-center","col-12","col-xl-6",3,"value"],["for","username",1,"col-12","text-center"],["type","text","placeholder","Nombre de usuario",1,"text-center","col-12","col-xl-6",3,"ngModel","ngModelChange"],[1,"col-12","col-xl-5","btn1","pt-2","pb-2","pl-5","pr-5",3,"click"],[1,"text-center","text-color2"],[1,"col-12","col-xl-8","pl-0","pl-xl-5","pr-0","pr-xl-5","pb-5","mb-5","mb-xl-5","pb-xl-0","mt-4","mt-xl-0"],[1,"text-color2","font-700","text-center","text-xl-left"],[1,"form-group","mt-5"],["type","password","placeholder","Ingrese su contrase\xf1a actual",1,"pl-3","form-control",3,"ngModel","ngModelChange"],[1,"form-group"],["type","password","placeholder","Ingrese una contrase\xf1a",1,"pl-3","form-control",3,"ngModel","ngModelChange"],[1,"col-12","col-xl-3","btn1","pt-2","pb-2","pl-5","pr-5",3,"click"],[1,"text-color2"],["class","modal",4,"ngIf"],[1,"pt-3","pr-3","pl-3","pb-3","shadow-lg","col-12","z-index1000","bg-white"],[1,"btn1","pt-2","pb-2",3,"click"],[1,"modal"],[1,"content-modal","modal2","p-5"],[1,"header-modal","row","m-0","justify-content-between","align-items-center"],[1,"title-modal","font-700","text-color2"],["width","20","src","assets/img/partials/close.svg",3,"click"],[1,"form-group","mt-2"],[1,"row",2,"margin-top","5%"],[1,"text-center","col-md-8"],["format","png",3,"imageChangedEvent","maintainAspectRatio","aspectRatio","resizeToWidth","imageCropped","imageLoaded","cropperReady","loadImageFailed"],[1,"text-center","col-md-4"],[3,"src"],[1,"mt-3","row","justify-content-end"],[1,"btn1","pl-3","pr-3","pt-1","pb-1","mr-3",3,"click"]],template:function(e,t){1&e&&(c.Wb(0,"ion-content"),c.Hc(1,b,3,0,"header",0),c.Hc(2,g,3,0,"header",0),c.Wb(3,"div",1),c.Wb(4,"div",2),c.Wb(5,"div",3),c.Wb(6,"div",4),c.Wb(7,"div",5),c.Wb(8,"input",6),c.ec("change",(function(e){return t.fileChangeEvent(e)})),c.Vb(),c.Vb(),c.Vb(),c.Wb(9,"div",7),c.Wb(10,"label",8),c.Jc(11,"Correo"),c.Vb(),c.Sb(12,"input",9),c.Vb(),c.Wb(13,"div",7),c.Wb(14,"label",10),c.Jc(15,"Nombre"),c.Vb(),c.Wb(16,"input",11),c.ec("ngModelChange",(function(e){return t.username=e})),c.Vb(),c.Vb(),c.Wb(17,"div",7),c.Wb(18,"button",12),c.ec("click",(function(){return t.saveUserName()})),c.Jc(19,"Guardar"),c.Vb(),c.Vb(),c.Wb(20,"div",7),c.Wb(21,"p",13),c.Jc(22),c.Vb(),c.Vb(),c.Vb(),c.Wb(23,"div",14),c.Wb(24,"h5",15),c.Jc(25,"Cambiar contrase\xf1a"),c.Vb(),c.Wb(26,"div",16),c.Wb(27,"label"),c.Jc(28,"Contrase\xf1a actual"),c.Vb(),c.Wb(29,"input",17),c.ec("ngModelChange",(function(e){return t.currentpassword=e})),c.Vb(),c.Vb(),c.Wb(30,"div",18),c.Wb(31,"label"),c.Jc(32,"Contrase\xf1a nueva"),c.Vb(),c.Wb(33,"input",19),c.ec("ngModelChange",(function(e){return t.password=e})),c.Vb(),c.Vb(),c.Wb(34,"div",18),c.Wb(35,"label"),c.Jc(36,"Repita la contrase\xf1a nueva"),c.Vb(),c.Wb(37,"input",19),c.ec("ngModelChange",(function(e){return t.repassword=e})),c.Vb(),c.Vb(),c.Wb(38,"div",18),c.Wb(39,"button",20),c.ec("click",(function(){return t.changePassword()})),c.Jc(40,"Actualizar"),c.Vb(),c.Vb(),c.Wb(41,"div",18),c.Wb(42,"p",21),c.Jc(43),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Hc(44,u,19,5,"div",22),c.Vb()),2&e&&(c.Db(1),c.oc("ngIf","admin"==t.user.user.role||"user"==t.user.user.role&&!t.isDesktop),c.Db(1),c.oc("ngIf","proveedor"==t.user.user.role),c.Db(5),c.Ec("background-image: url("+t.croppedImage+")"),c.Db(5),c.pc("value",t.user.user.email),c.Db(4),c.oc("ngModel",t.username),c.Db(6),c.Kc(t.responseName),c.Db(7),c.oc("ngModel",t.currentpassword),c.Db(4),c.oc("ngModel",t.password),c.Db(4),c.oc("ngModel",t.repassword),c.Db(6),c.Kc(t.responsePassword),c.Db(1),c.oc("ngIf",t.isVisibleCortar))},directives:[r.d,o.l,n.b,n.f,n.g,l.a],styles:[".load[_ngcontent-%COMP%]{position:fixed;top:0;left:0;min-width:100vw;min-height:100vh;background-color:hsla(0,0%,100%,.9);display:flex;justify-content:center;align-items:center;z-index:1000}.load[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{opacity:.9}.userimage[_ngcontent-%COMP%]{min-width:180px;max-width:180px;min-height:180px;background-position:50%;background-repeat:no-repeat;background-size:contain}label[_ngcontent-%COMP%]{color:#4d4d4d}input[_ngcontent-%COMP%]{min-height:40px;border:2px solid #ffe266!important;border-radius:10px}[_ngcontent-%COMP%]:focus{outline:none!important}.image-cropper[_ngcontent-%COMP%]{max-height:500px!important}.modal[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.4);display:flex;justify-content:center;align-items:flex-start;position:fixed;min-width:100vw;min-height:100vh;top:0;left:0;z-index:100}.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{border:0;background-color:#fff;margin-top:80px;border-radius:10px;padding:20px;min-height:100px}.modal[_ngcontent-%COMP%]{overflow:auto}.modal2[_ngcontent-%COMP%]{max-width:90%!important;min-width:90%!important;position:absolute;top:150px;margin-bottom:150px;background-color:#fff}@media (max-width:1300px){.modal2[_ngcontent-%COMP%]{max-width:90%!important}}@media (max-width:960px){.modal2[_ngcontent-%COMP%]{max-width:98%!important}}.img-item[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;background-color:#e6e6e6;background-position:50%;min-width:80px;max-width:80px;max-height:80px;min-height:80px}.inputImage[_ngcontent-%COMP%]{position:relative;cursor:pointer}.inputImage[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;z-index:2}.inputImage[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .inputImage[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:absolute;top:0;left:0;border-radius:8px}.inputImage[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;opacity:1;min-width:100%;min-height:40px;background-color:#ffe266;z-index:1}.inputimage[_ngcontent-%COMP%]{opacity:0;cursor:pointer}.z-index1000[_ngcontent-%COMP%]{position:fixed;top:0;z-index:100000!important}"]}),e})()}];let h=(()=>{class e{}return e.\u0275mod=c.Pb({type:e}),e.\u0275inj=c.Ob({factory:function(t){return new(t||e)},imports:[[a.l.forChild(m)],a.l]}),e})(),f=(()=>{class e{}return e.\u0275mod=c.Pb({type:e}),e.\u0275inj=c.Ob({factory:function(t){return new(t||e)},imports:[[o.c,n.c,r.o,h,l.b]]}),e})()}}]);