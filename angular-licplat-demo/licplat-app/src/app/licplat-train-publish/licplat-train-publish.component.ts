import { Component, OnInit } from '@angular/core';
import { ImageService } from "../services/image-service.service";

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-licplat-train-publish',
  templateUrl: './licplat-train-publish.component.html',
  styleUrls: ['./licplat-train-publish.component.css']
})
export class LicplatTrainPublishComponent {
  title = "Licence Plate Training Page";

  selectedFile: ImageSnippet;

  constructor(private imageService: ImageService) { }

  onFileSelected(fileInput: any) {
    // const inputNode: any = document.querySelector('#file');
    const file: File = fileInput.files[0];

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.selectedFile = e.target.result;
      };

      /* this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {

        },
        (err) => {

        })*/

      // reader.readAsArrayBuffer(inputNode.files[0]);
      reader.readAsDataURL(file);
    }
  }

  /* processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {

        },
        (err) => {

        })
    });

    reader.readAsDataURL(file);
  }*/
}
