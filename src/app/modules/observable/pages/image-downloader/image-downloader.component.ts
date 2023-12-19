import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-image-downloader',
  templateUrl: './image-downloader.component.html',
  styleUrls: ['./image-downloader.component.css']
})
export class ImageDownloaderComponent implements OnInit{
   isLoading = false
   imageUrls = ['url1', 'url2', 'url3'];

  // Replace 'downloadImage' with your actual image download function that returns an Observable
 downloadImage(url: string): Observable<string> {
  // Simulating image download
  return new Observable<string>(observer => {
      setTimeout(() => {
          observer.next(`Downloaded: ${url}`);
          observer.complete();
      }, Math.random() * 3000); // Simulating random download time
  });


}
downloadObservables = this.imageUrls.map(url => this.downloadImage(url));

ngOnInit(): void {
  this.isLoading = true
  forkJoin(this.downloadObservables).subscribe(
   { next: downloadedImages => {
        // All images are downloaded here
        console.log('All images downloaded:', downloadedImages);
        // Proceed to view images or perform further operations
        this.isLoading = false
    },
    error: error => {
        // Handle error if any of the image downloads fail
        console.error('Error downloading images:', error);
        this.isLoading = false
    }}
  )
}



}
