import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data : []
};

const addTodoReducer = createSlice({
  name: "todosR",
  initialState,
  reducers: {
    //Adding todos
    addTodosR: (state, action) => {
      console.log('action....' , action.payload)
      state.data = action.payload;
      console.log('state' , state)
      // return state;
    },
        //update todos
        updateTodos: (state, action) => {
          console.log('action...', action.payload.id)
          state.data =  state.data.map((todo) => {
            if (todo.id === action.payload.id) {
              todo.status = action.payload.status
            }
            return todo;
          });
        },
  
  },
});

export const {
  addTodosR,
  updateTodos,
} = addTodoReducer.actions;
export const reducerR = addTodoReducer.reducer;
