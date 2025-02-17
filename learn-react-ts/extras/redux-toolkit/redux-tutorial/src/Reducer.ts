import { combineReducers } from "redux";
import todosReducer from './features/todos/todosSlice'
import filtersReducer from "./features/filters/filtersSlice";

const rootReducer = combineReducers({
	// Define a top-level state field name `todos`, handled by `todosReducer`
	todos: todosReducer,
	filters: filtersReducer,
})

export default rootReducer;

/*
// Use the initialState as a default value
export default function appReducer(state: any = {}, action: { type: string; payload: any; }) {
	// always return a new object for the root state
	return {
		// the value of `state.todos` is whatever the todos reducer returns
		todos: todosReducer(state.todos, action),
		// For both reducers, we only pass in their slice of the state
		filters: filtersReducer(state.filters, action)
	}
}*/
