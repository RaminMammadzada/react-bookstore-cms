import { CHANGE_FILTER } from '../constants/action-types';

const initialState = 'All';

export default function filter(state = initialState, action) {
  if (action.type === CHANGE_FILTER && action.payload === 'All') {
    return 'All';
  }

  if (action.type === CHANGE_FILTER && action.payload !== 'All') {
    return action.payload;
  }

  return state;
}
