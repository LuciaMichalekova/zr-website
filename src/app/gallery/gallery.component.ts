import { Component, Output, Input, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { KROJE } from '../shared/ponuka-krojov-mock';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnChanges{
  @Input() dataSource: any[] = KROJE; 
  @Input() startIndex: number = 0;
  @Output() close = new EventEmitter<void>();
  
  index = 0;
  image: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dataSource'] || changes['startIndex']) {
      //TODO: zmazat
      this.dataSource = KROJE;
      this.startIndex = 0;
      //s
      if (this.dataSource.length > 0) {
        this.index = this.startIndex;
        this.image = this.dataSource[this.index].img;
      }
    }
  }

  onClose() {
    this.close.emit();
  }

  slide(value: number){
    this.index += value;
    if(this.index >= this.dataSource.length){
      this.index = 0;
    }
    else if(this.index < 0){
      this.index = this.dataSource.length - 1;
    }
    this.image = this.dataSource[this.index].img;
  }
}
