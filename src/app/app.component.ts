import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'custom-components-angular';

  @ViewChild('fileDropRef', { static: false })
  fileDropEl!: ElementRef;

  files: any[] = [];

  fileBrowseHandler(event: any) {
    console.log(event);
  }

  onFileDropped(event: any) {
    this.prepareFileList(event);
  }

  prepareFileList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.fileDropEl.nativeElement.value = '';
    
  }

  deleteFile(){

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

    return `${finalValue} ${multiples[value]}`
  }
}
