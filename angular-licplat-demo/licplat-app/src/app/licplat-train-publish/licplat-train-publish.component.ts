import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-licplat-train-publish',
  templateUrl: './licplat-train-publish.component.html',
  styleUrls: ['./licplat-train-publish.component.css']
})
export class LicplatTrainPublishComponent implements OnInit {

  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  hideSubmitCancel = false;
  hideDisabled = true;

  constructor(private http: HttpClient, private appService: AppService) { }

  ngOnInit() { this.appService.setTitle('Licence Plate Training Page'); }

  fileProgress(fileInput: any) {
    this.fileData = fileInput.target.files[0] as File;
    this.preview();
  }

  preview() {
    this.hideDisabled = true;
    this.hideSubmitCancel = false;
    // Show preview
    let mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    };

    this.hideDisabled = false;
    this.hideSubmitCancel = true;
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('files', this.fileData);
    console.log(formData);

    this.fileUploadProgress = '0%';

    this.http.post('http://localhost:5000/file-upload', formData, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(events => {
        if (events.type === HttpEventType.UploadProgress) {
          this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
          console.log(this.fileUploadProgress);
        } else if (events.type === HttpEventType.Response) {
          this.fileUploadProgress = '';
          console.log(events.body);
          alert('SUCCESS !!');
        }
      });
  }

  Cancel() {
    window.location.reload();
  }
}
