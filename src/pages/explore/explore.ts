import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})
export class ExplorePage {

  public photo: any;
  public base64Image: string;

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
              quality: 50,
              destinationType: this.camera.DestinationType.NATIVE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              correctOrientation: true,
              saveToPhotoAlbum: true
            }

            this.camera.getPicture(options).then((imageData) => {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64:
              this.base64Image = 'data:image/jpeg;base64,' + imageData;
              this.photo = this.base64Image;
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
