import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../models/app.reducers.model';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit {

  contador$!: Observable<number>;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.contador$ = this.store.select('count');
  }

  reset(){
    this.store.dispatch(actions.reset())
  }

}
