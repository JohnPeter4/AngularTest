import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imageSize: { width: number, height: number } = { width: 0, height: 0 };

  setImageSize(width: number, height: number) {
    this.imageSize = { width, height };
  }
}
