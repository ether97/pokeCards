import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grid-item-detail',
  templateUrl: './grid-item-detail.component.html',
  styleUrls: ['./grid-item-detail.component.scss'],
})
export class GridItemDetailComponent {
  id: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
  }
}
