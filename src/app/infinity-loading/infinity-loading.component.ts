import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-infinity-loading',
  templateUrl: './infinity-loading.component.html',
  styleUrls: ['./infinity-loading.component.scss']
})
export class InfinityLoadingComponent {
  fullData: any[] = [];
  displayedData: any[] = [];
  limit = 20;
  pageIndex = 0;

  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.service.getData().subscribe((res) => {
      this.fullData = res;
      this.updateDisplayedData();
    });
  }

  updateDisplayedData() {
    const start = this.pageIndex * this.limit;
    const end = start + this.limit;
    this.displayedData = this.fullData.slice(start, end);
    console.log('display Data:', this.displayedData)
  }



  onScroll(event: any) {
    const { scrollTop, scrollHeight, clientHeight } = event.target;

    const atBottom = scrollTop + clientHeight >= scrollHeight - 5;
    const atTop = scrollTop <= 5;

    if (atBottom && (this.pageIndex + 1) * this.limit < this.fullData.length) {
      this.pageIndex++;
      this.updateDisplayedData();

      setTimeout(() => {
        event.target.scrollTop = 10;
      });
    }

    if (atTop && this.pageIndex > 0) {
      this.pageIndex--;
      this.updateDisplayedData();

      setTimeout(() => {
        event.target.scrollTop = event.target.scrollHeight - clientHeight - 10;
      });
    }
  }


  trackById(index: number, item: any) {
    return item.id;
  }
}