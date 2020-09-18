import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GeneralService } from 'src/app/services/general.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { AngularFireStorage } from '@angular/fire/storage';
import { map, finalize } from "rxjs/operators";
import { Observable } from 'rxjs';



@Component({
  selector: 'app-edit-offers',
  templateUrl: './edit-offers.page.html',
  styleUrls: ['./edit-offers.page.scss'],
})
export class EditOffersPage implements OnInit {

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
  offer: any = {}
  image: string = ''
  startDate: string = ''
  endDate: string = ''
  enable: any = true

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



  constructor(public route: ActivatedRoute, private router: Router, private api: ApiService, private cookie: CookieService, private general: GeneralService, private storage: AngularFireStorage) {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.validateSession()
    if (this.id != 0) {
      this.getOfferByID()
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


  getOfferByID() {

    let data = {
      service: 'get-offer-by-id',
      userid: this.user.user.id,
      offerid: this.id,
      token: this.user.token,
    }

    this.api.c('getOfferByID pre', data)

    this.api.api(data).subscribe((res: any) => {
      this.api.c('getOfferByID', res)

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
        this.croppedImage = res.data.image
        this.enable = (res.data.enable == 1) ? true : false
        // this.startDate = res.data.startDate,
        // this.endDate = res.data.endDate
      } else {
        this.api.c('getOfferByID false', res)
      }

    },
      error => {
        this.api.c('getOfferByID error', error)
      })

  }

  saveOffer() {

    if (this.name == '') {
      this.response = 'Debe completar al menos el nombre';
    } else {
      this.isLoad = true
      const formData = new FormData();
      formData.append('image', this.croppedImage)
      formData.append('name', this.name)
      formData.append('description', this.description)
      formData.append('price', this.price)
      // formData.append('startDate', this.startDate)
      // formData.append('endDate', this.endDate)
      if (this.enable) {
        formData.append('enable', '1')
      } else {
        formData.append('enable', '0')
      }
      formData.append('token', this.user.token)
      formData.append('userid', this.user.user.id)
      formData.append('offerid', this.id)
      formData.append('type', 'offer')
      const headers = new Headers();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');

      let data = {
        service: 'save-offer',
        data: formData,
        extra: {
          headers: headers
        }
      }

      this.api.c('saveOffer pre', data)

      this.api.apiUpload(data).subscribe((res: any) => {

        this.api.c('saveOffer res', res)

        this.isLoad = false

        if (res.status) {
          this.response = res.message

          if (this.id == 0) {
            this.name = ''
            this.description = ''
            this.image = ''
            this.startDate = ''
            this.endDate = ''

          }
        } else {
          this.api.c('saveOffer', res)
        }
      },
        error => {
          this.api.c('saveOffer error', error)
        })

    }


  }
  editDescriptionProduct() {

  }
  editPriceProduct() {

  }

  handleFileInput(files: FileList) {
    this.fileToUpload = null;
    this.fileToUpload = files.item(0)
    this.nameInputFile = files.item(0).name
    this.api.c('handleFileInput', this.nameInputFile)

  }

  showModal(type) {
    this.contentModal = type
    this.isVisible = true
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

  handleOkCortar(): void {
    // this.api.c('croppedImage', this.croppedImage)
    this.isVisibleCortar = false
    const imageName = `name.png`;
    const imageBlob = this.dataURItoBlob(this.croppedImage);
    const imageFile = new File([imageBlob], imageName, { type: 'image/png' });
    this.handleUpload(imageFile);


  }

  handleCancelCortar(): void {
    this.isVisibleCortar = false
  }


  handleUpload = (item: any) => {

    this.isLoad = true
    var n = Date.now();
    const filePath = `offers/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`offers/${n}`, item);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.croppedImage = url;
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
