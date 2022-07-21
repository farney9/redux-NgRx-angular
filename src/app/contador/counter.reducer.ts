import { createReducer, on } from "@ngrx/store";
import { decrement, divide, increment, multiply, reset } from "./counter.actions";

export const initialState = 20;

export const counterReducer = createReducer(
    initialState,
    on( decrement, (state) => state - 1),
    on( increment, (state) => state + 1),
    on( reset,     (state) => initialState),
    on( multiply,  (state, {numero}) => state * numero),
    on( divide,    (state, {numero}) => state / numero)
  );

