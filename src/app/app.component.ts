import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from './contador/counter.actions';
import { AppState } from './models/app.reducers.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'redux-app';
  contador$: Observable<number>;

  constructor( private store: Store<AppState>) {
    // select() permite seleccionar el nodo que interesa
    this.contador$ = store.select('count');
    
    // this.store.select('counter')
    //   .subscribe(miContador => this.contador$ = miContador);

    
  }

  ngOnInit(): void {

  }

  increment() {
    // this.contador ++;
    this.store.dispatch(actions.increment());
  }

  decrement() {
    // this.contador --;
    this.store.dispatch(actions.decrement());

  }
  reset() {
    // this.contador --;
    this.store.dispatch(actions.reset());

  }
}
