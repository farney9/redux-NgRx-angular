import { Component,  OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../models/app.reducers.model';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {

  contador$!: Observable<number>;

  // @Output() cambioContador = new EventEmitter<number>();

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.contador$ = this.store.select('count');
  }

  multiply(){
    // this.contador$ *= 2;
    // this.cambioContador.emit(this.contador);
    this.store.dispatch(actions.multiply({numero: 2}));
  }
  
  divide(){
    this.store.dispatch(actions.divide({numero: 2}));
    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);
  }

}
