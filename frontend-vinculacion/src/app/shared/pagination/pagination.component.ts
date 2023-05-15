import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  constructor() {}

  @Output() pageBoundsCorrection: EventEmitter<number>;
  @Input() id: string;
  @Input() config: {
    itemsPerPage: number;
    currentPage: number;
  };

  ngOnInit(): void {}

  pageChange(event: any) {
    this.config.currentPage = event;
  }

}
