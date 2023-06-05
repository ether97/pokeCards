import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GridComponent } from './grid/grid.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { GridItemDetailComponent } from './grid-item-detail/grid-item-detail.component';

const routes: Routes = [
  { path: '', component: GridComponent },
  { path: 'grid-item-detail', component: GridItemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
