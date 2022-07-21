import { createAction, props } from '@ngrx/store';
import { Observable } from 'rxjs';

export const increment = createAction('[Contador] Increment');
export const decrement = createAction('[Contador] Decrement');
export const reset = createAction('[Contador] Reset');
export const multiply = createAction(
    '[Contador] Multiply',
    props<{numero: number}>()
    );
export const divide = createAction(
    '[Contador] Divide',
    props<{numero: number}>()
    );