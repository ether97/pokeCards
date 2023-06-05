import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  constructor(private http: HttpClient) {}

  pokemons: any[] = [];
  nextUrl: string = '';

  ngOnInit() {
    this.http
      .get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
      .pipe(
        catchError((err) => {
          console.error(err);
          return of([]);
        })
      )
      .subscribe((resp: any) => {
        console.log(resp);

        this.pokemons = resp.results;
        this.nextUrl = resp.next;
      });
  }
}
