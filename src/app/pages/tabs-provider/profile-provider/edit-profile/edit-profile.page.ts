import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { GeneralService } from 'src/app/services/general.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';

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
  ruc: any = ''
  district: any = ''
  imageCrop: any = ''
  urlBackEnd: any = this.general.getUrlImages('profile');


  //MODAL

  isVisibleModal: Boolean = false
  isVisibleCortar: Boolean = false



  //Categories and subcategories

  category: any = ''
  subcategory: any = ''
  categories: any = []
  subcategories: any = []
  categoryCompanies: any = []

  isLoad: Boolean = false


  constructor(public route: ActivatedRoute, private router: Router, private api: ApiService, private cookie: CookieService, private general: GeneralService) {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.validateSession()
    if (this.id != 0) {
      this.getProfileByID()
    }

    this.getCategoriesAndSubcategories()
    this.getCategoriesCompanies()

  }

  validateSession() {
    if (!this.cookie.get('ud') || this.cookie.get('ud') == '') {
      this.router.navigate(['/login'])
    } else {
      this.user = JSON.parse(this.cookie.get('ud'))
      this.api.c('user', this.user)
      if (this.user.user.role !== "proveedor" && this.user.user.role !== "admin") {
        this.router.navigate(['/'])
      }
    }
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
    // this.api.c('croppedImage', this.croppedImage)
    this.isVisibleCortar = false
  }

  handleCancelCortar(): void {
    this.isVisibleCortar = false
  }


}



