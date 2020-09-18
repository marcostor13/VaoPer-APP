import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GeneralService } from 'src/app/services/general.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ModalController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { map, finalize } from "rxjs/operators";
import { Observable } from 'rxjs';
import { ModalPage } from './../../../../modal/modal.page';


@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.page.html',
  styleUrls: ['./edit-products.page.scss'],
})
export class EditProductsPage implements OnInit {

  user: any;
  isVisible: boolean = false
  contentModal: any = null
  fileToUpload: File = null
  nameInputFile: any = ''
  id: any;
  name: any = ''
  description: any = ''
  price: any = ''
  response: string = ''
  product: any = {}
  image: any = ''
  isLoad: Boolean = false

  //MODAL

  isVisibleModal: Boolean = false
  isVisibleCortar: Boolean = false

  //Upload

  title = "cloudsSorage";
  selectedFile: File = null;
  downloadURL: Observable<string>;
  previewImage: string | undefined = '';
  previewVisible = false;
  profileUrl: Observable<string | null>;


  constructor(public route: ActivatedRoute, private router: Router, private api: ApiService, private cookie: CookieService, private general: GeneralService, private storage: AngularFireStorage, public modalController: ModalController) {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.validateSession()
    if (this.id != 0) {
      this.getProductsByID()
    }
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

  isJson(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  getProductsByID() {

    this.isLoad = true

    let data = {
      service: 'get-products-by-id',
      userid: this.user.user.id,
      productid: this.id,
      token: this.user.token,
    }

    this.api.c('getProductsByID pre', data)

    this.api.api(data).subscribe((res: any) => {
      this.api.c('getProductsByID', res)

      this.isLoad = false

      if (res.status) {
        this.name = res.data.name
        this.description = res.data.description
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
          .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
        .replace('<br />', '\n')
          .replace('<br />', '\n')
        this.price = res.data.price
        this.imagesArray = res.data.images

      } else {
        this.api.c('getProductsByID false', res)
      }

    },
      error => {
        this.api.c('getProductsByID error', error)
      })

  }

  saveProduct() {

    this.isLoad = true
    let data = {
      service: 'save-product',
      name: this.name,
      price: this.price,
      description: this.description.replace(/\n\r?/g, '<br />'),
      userid: this.user.user.id,
      type: 'product',
      image: this.imagesArray.length > 0 ? this.imagesArray : '',
      token: this.user.token,
      productid: this.id,
    }

    this.api.api(data).subscribe((res: any) => {

      this.api.c('saveProduct res', res)

      this.isLoad = false

      if (res.status) {
        this.response = res.message

        if (this.id == 0) {
          this.name = ''
          this.description = ''
          this.price = ''
          this.image = ''
          this.imagesArray = []
        }
      }
    },
      error => {
        this.api.c('saveProduct error', error)
      })

  }

  handleFileInput(files: FileList) {
    this.fileToUpload = null;
    this.fileToUpload = files.item(0);
    this.nameInputFile = files.item(0).name;
    this.api.c('handleFileInput', this.nameInputFile)


  }

  imageChangedEvent: any = '';
  croppedImage: any = '';
  imagesArray: any = []

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

  //MODAL

  showModalCortar(): void {
    this.isVisibleCortar = true
  }

  handleOkCortar(): void {
    // this.api.c('croppedImage', this.croppedImage)     

    this.isLoad = true
    this.isVisibleCortar = false
    const imageName = `name.png`;
    const imageBlob = this.dataURItoBlob(this.croppedImage);
    const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
    this.handleUpload(imageFile);

  }

  handleCancelCortar(): void {
    this.isVisibleCortar = false
  }

  showModal(type) {
    this.contentModal = type
    this.isVisible = true
  }

  deleteProductImage(i, downloadUrl) {

    this.isLoad = true

    this.storage.storage.refFromURL(downloadUrl).delete().then(() => {
      this.imagesArray.splice(i, 1);
      this.saveProduct();
    });


  }





  handleUpload = (item: any) => {

    this.isLoad = true
    var n = Date.now();
    const filePath = `products/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`products/${n}`, item);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.imagesArray.push({
                image: url
              });
              this.imagesArray = this.imagesArray;
              this.isLoad = false;
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



  }

  



}
