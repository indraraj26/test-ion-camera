import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IConfig } from '@indraraj26/ion-camera';
import { Camera } from '@ionic-native/camera/ngx'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private camera: Camera, private _httpClient: HttpClient) {}
  public showImage: string;

  config: IConfig = {
    quality: 50,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.CAMERA,
  };

  onCameraResult(event: any) {
  console.log('returns blob', event);
  this.showImage = event.filePath;
  const formData = new FormData();
  formData.append('fileKey', event.result)
  this._httpClient.post('url', formData).subscribe()
}
}
