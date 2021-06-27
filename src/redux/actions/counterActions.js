import { ActionTypes } from "./ActionTypes"

export const increment = (num) => {
  return {
    type: ActionTypes.INCREMENT,
    payload:num
  }
}