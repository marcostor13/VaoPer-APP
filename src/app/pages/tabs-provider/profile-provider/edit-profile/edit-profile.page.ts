import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { GeneralService } from 'src/app/services/general.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { AngularFireStorage } from '@angular/fire/storage';
import { map, finalize } from "rxjs/operators";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  user: any;
  isVisible: boolean = false
  contentModal: any = null
  fileToUpload: File = null
  nameInputFile: any = ''
  id: any;
  name: any = ''
  description: any = ''
  price: any = ''
  phone: any = ''
  response: string = ''
  profile: any = {}
  image: any = ''
  facebook: any = ''
  twitter: any = ''
  instagram: any = ''
  email: any = ''
  siteweb: any = ''
  legalname: any = ''
  address: any = ''
  addressDisplay: any = ''
  responseModal: any = ''
  
  ruc: any = ''
  district: any = ''
  imageCrop: any = ''
  urlBackEnd: any = this.general.getUrlImages('profile');


  //Upload

  title = "cloudsSorage";
  selectedFile: File = null;
  downloadURL: Observable<string>;
  previewImage: string | undefined = '';
  previewVisible = false;
  profileUrl: Observable<string | null>;


  //MODAL

  isVisibleModal: Boolean = false
  isVisibleCortar: Boolean = false



  //Categories and subcategories

  category: any = ''
  subcategory: any = ''
  categories: any = []
  subcategories: any = []
  categoryCompanies: any = []

  delivery: any = false
  tienda: any = false
  starthour: any = ''
  endhour: any = ''

  isLoad: Boolean = false


  constructor(public route: ActivatedRoute, private router: Router, private api: ApiService, private cookie: CookieService, private general: GeneralService, private storage: AngularFireStorage) {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.validateSession()
    if (this.id != 0) {
      this.getProfileByID()
    }

    this.getCategoriesAndSubcategories()
    this.getCategoriesCompanies()
    this.getSections()

  }

  validateSession() {
    if (localStorage.getItem('ud')) {
      this.user = JSON.parse(localStorage.getItem('ud'))
    } else {
      window.location.href = '/login'
    }
  }

  back() {
    window.history.back()
  }



  getProfileByID() {

    this.isLoad = true

    let data = {
      service: 'get-profile-by-id',
      userid: this.user.user.id,
      id: this.id,
      token: this.user.token,
    }

    this.api.c('getProfileByID pre', data)

    this.api.api(data).subscribe((res: any) => {
      this.api.c('getProfileByID', res)

      this.isLoad = false
      if (res.status) {
        this.profile = res.data
        this.name = res.data.comercialname != 'null' ? res.data.comercialname : ''
        this.description = res.data.description != 'null' ? res.data.description : ''
        this.phone = res.data.phone1 != 'null' ? res.data.phone1 : ''
        this.facebook = res.data.facebook != 'null' ? res.data.facebook : ''
        this.twitter = res.data.twitter != 'null' ? res.data.twitter : ''
        this.instagram = res.data.instagram != 'null' ? res.data.instagram : ''
        this.email = res.data.email != 'null' ? res.data.email : ''
        this.siteweb = res.data.siteweb != 'null' ? res.data.siteweb : ''
        this.legalname = res.data.legalname != 'null' ? res.data.legalname : ''
        this.ruc = res.data.ruc != 'null' ? res.data.ruc : ''
        this.address = res.data.address1 != 'null' ? res.data.address1 : ''
        this.addressDisplay = res.data.address2 != 'null' ? res.data.address2 : ''
        this.district = res.data.district != 'null' ? res.data.district : ''
      } else {
        this.api.c('getProfileByID false', res)
      }
    },
      error => {
        this.api.c('getProfileByID error', error)
      })

  }

  saveProfile() {

    this.isLoad = true

    const formData = new FormData();
    formData.append('file', this.fileToUpload)
    formData.append('name', this.name)
    formData.append('description', this.description)
    formData.append('phone', this.phone)
    formData.append('userid', this.user.user.id)
    formData.append('token', this.user.token)
    formData.append('id', this.id)
    formData.append('type', 'product')
    formData.append('image', this.croppedImage)
    // formData.append('file', this.fileToUpload)
    // formData.append('facebook', this.facebook)
    // formData.append('twitter', this.twitter)
    // formData.append('instagram', this.instagram)
    formData.append('email', this.email)
    formData.append('siteweb', this.siteweb)
    formData.append('legalname', this.legalname)
    formData.append('address', this.address)
    formData.append('address2', this.addressDisplay)
    formData.append('ruc', this.ruc)
    formData.append('district', this.district)

    const headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    let data = {
      service: 'save-profile',
      data: formData,
      extra: {
        headers: headers
      }
    }

    this.api.c('saveProfile pre', data)

    this.api.apiUpload(data).subscribe((res: any) => {

      this.isLoad = false

      this.api.c('saveProfile res', res)

      if (res.status) {
        this.response = res.message

        if (this.id == 0) {
          this.name = ''
          this.description = ''
          this.phone = ''
          // this.image = ''
          // this.facebook = ''
          // this.twitter = ''
          // this.instagram = ''
          this.email = ''
          this.siteweb = ''
          this.legalname = ''
          this.address = ''
          this.addressDisplay = ''
          this.ruc = ''
          this.district = ''
        }

        if (res.data != '') {
          this.imageCrop = this.urlBackEnd + this.getUriImage(res.data)
        }

      } else {
        this.api.c('saveProfile', res)
      }
    },
      error => {
        this.api.c('saveProfile error', error)
      })

  }

  getUriImage(image) {
    return encodeURI(image)
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = null;
    this.fileToUpload = files.item(0);
    this.nameInputFile = files.item(0).name;
    this.api.c('handleFileInput', files.item(0))

    this.imageCrop = files;

  }

  showModal() {
    this.isVisibleModal = true
  }
  closeModal() {
    this.isVisibleModal = false
  }


  getCategoriesAndSubcategories() {

    let data = {
      service: 'get-categories-and-subcategories'
    }

    this.api.c('getCategoriesAndSubcategories pre', data)

    this.api.api(data).subscribe((res: any) => {
      this.api.c('getCategoriesAndSubcategories', res)
      this.categories = res
      this.subcategories = res[0].subcategories
    },
      error => {
        this.api.c('getCategoriesAndSubcategories error', error)
      })

  }

  onChangeCategory() {
    this.subcategories = []
    for (let i = 0; i < this.categories.length; i++) {
      const element = this.categories[i];
      if (element.id == this.category) {
        this.subcategories = element.subcategories
        break
      }
    }
  }

  getCategoriesCompanies() {
    let data = {
      service: 'get-categories-to-users',
      companyid: this.id,
      token: this.user.token,
    }
    this.api.api(data).subscribe((res: any) => {
      this.api.c('getCategoriesCompanies', res)
      if (res.status) {
        this.categoryCompanies = res.data
      } else {
        this.api.c('getCategoriesCompanies status false', res)
      }
    },
      error => {
        this.api.c('getCategoriesCompanies error', error)
      })
  }

  addCategories() {

    if (this.categoryCompanies.length > 4) {
      this.responseModal = 'No puede agregar más de 5 categorías'
    } else {
      if (this.category == '') {
        return false;
      }

      let data = {
        service: 'add-categories-to-users',
        categoryid: this.category,
        subcategoryid: this.subcategory,
        companyid: this.id,
        token: this.user.token,
      }
      this.api.api(data).subscribe((res: any) => {
        this.api.c('addCategories', res)
        if (res.status) {
          this.getCategoriesCompanies()
          this.isVisibleModal = false
        } else {
          this.api.c('addCategories status false', res)
        }
      },
        error => {
          this.api.c('addCategories error', error)
        })
    }


  }

  deleteCategories(idcategoryuser) {

    let data = {
      service: 'delete-categories-to-users',
      id: idcategoryuser,
      token: this.user.token,
    }
    this.api.api(data).subscribe((res: any) => {
      this.api.c('deleteCategories', res)
      this.getCategoriesCompanies()
    },
      error => {
        this.api.c('deleteCategories error', error)
      })

  }


  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
    this.showModalCortar()
    this.imageChangedEvent = event
    // this.api.c('fileChangeEvent', event)
  }
  imageCropped(event: ImageCroppedEvent) {

    this.api.c('ImageCropped', event)

    this.croppedImage = event.base64;

  }

  imageLoaded() {
    // this.api.c('imageLoaded', 'ok')
  }
  cropperReady() {
    // this.api.c('cropperReady', 'ok')
  }
  loadImageFailed() {
    // this.api.c('loadImageFailed', 'ok')
  }


  //MODAL


  showModalCortar(): void {
    this.isVisibleCortar = true
  }

  handleOkCortar(): void {

    this.isVisibleCortar = false
    const imageName = 'name.png';
    const imageBlob = this.dataURItoBlob(this.croppedImage);
    this.croppedImage = new File([imageBlob], imageName, { type: 'image/png' });
  }

  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''));
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/png' });
    return blob;
  }

  handleCancelCortar(): void {
    this.isVisibleCortar = false
  }




  handleUpload = (item: any = null) => {

    this.isLoad = true

    if (this.croppedImage && this.croppedImage != '') {

      this.api.c('handleUpload', this.croppedImage)

      var n = Date.now();
      const filePath = `profile/${n}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(`profile/${n}`, this.croppedImage);
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
              if (url) {
                this.croppedImage = url;
                this.saveProfile()
              }
              console.log('fb', url);

            });
          })
        )
        .subscribe(url => {
          if (url) {
            // console.log('url subscribe', url);
          }
        });
    } else {
      this.saveProfile()
    }


  }


  getSections() {
    this.isLoad = true
    let data = {
      userid: this.user.user.id,
      token: this.user.token,
      service: 'get-sections'
    }
    this.api.api(data).subscribe((result: any) => {
      this.api.c('getSections', result)
      this.isLoad = false
      if (result.status) {
        if (result.data.delivery == 1) {
          this.delivery = true
        }
        if (result.data.tienda == 1) {
          this.tienda = true
        }
        if (result.data.starthour) {
          this.starthour = result.data.starthour
        }
        if (result.data.endhour) {
          this.endhour = result.data.endhour
        }
      }
    },
      error => {
        this.api.c('Error getSections', error)

      });
  }

  onChangeDelivery() {
    this.isLoad = true
    let data = {
      userid: this.user.user.id,
      token: this.user.token,
      delivery: this.delivery,
      tienda: this.tienda,
      starthour: this.starthour,
      endhour: this.endhour,
      service: 'save-sections'
    }
    this.api.api(data).subscribe((result: any) => {
      this.isLoad = false
      this.api.c('saveSections', result)
    },
      error => {
        this.api.c('Error saveSections', error)

      });
  }


}




