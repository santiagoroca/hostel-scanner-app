//Constants
import { USER_ADD } from '../actions/User/Add'

const actions = {

    [`${USER_ADD}`]: (state, action) => {
        return Object.assign({}, state, action);
    }

}

const initialState = {
  users: []
};

export default (state = initialState, action) => {
    const _action = actions[action.type];

    if (_action) {
        return _action(state, action);
    }

    return state;
}
