import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss'],
})
export class DropzoneComponent {
  @ViewChild('fileDropRef', { static: false })
  fileDropEl!: ElementRef;

  files: any[] = [];

  fileBrowseHandler(event: any) {
    const item = event.target.files[0];
    this.files.push(item);
  }

  onFileDropped(event: any) {
    this.prepareFileList(event);
  }

  prepareFileList(files: Array<any>) {
    for (const item of files) {
      this.files.push(item);
    }
    this.fileDropEl.nativeElement.value = '';
  }

  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  formatBytes(bytes: number, decimals: number = 2) {
    if (bytes === 0) {
      return '0 Bytes';
    }

    const kilo = 1024;
    const decimal = decimals <= 0 ? 0 : decimals;
    const multiples = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const value = Math.floor(Math.log(bytes) / Math.log(kilo));
    const finalValue = parseFloat(
      (bytes / Math.pow(kilo, value)).toFixed(decimal)
    );

    return `${finalValue} ${multiples[value]}`;
  }
}
