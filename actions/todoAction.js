import {ADD, DELETE, UPDATE, COMPLETE} from './types'

export const addTodo =(input) =>{
    return {type: ADD, payload: input}
};
