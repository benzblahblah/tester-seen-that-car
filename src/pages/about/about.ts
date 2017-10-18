import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public alerCtrl: AlertController, public navCtrl: NavController, private camera: Camera) { }

    doConfirm() {
      let confirm = this.alerCtrl.create({
        title: 'Open the camera?',
        message: 'Do you agree to allow us to use your camera?',
        buttons: [
          {
            text: 'Disagree',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
          {
            text: 'Agree',
            handler: () => {
              console.log('Agree clicked');
              const options: CameraOptions = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                saveToPhotoAlbum: true,
                mediaType: this.camera.MediaType.PICTURE
              }

              this.camera.getPicture(options).then((imageData) => {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                let base64Image = 'data:image/jpeg;base64,' + imageData;
               }, (err) => {
                // Handle error
               });
            }            
          }
        ]
      });
      confirm.present()
    }
    
  }