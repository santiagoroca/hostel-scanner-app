//Third Party
import update from 'react-addons-update'

const actions = {

    [`${MODAL_READONLY}`]: (state, action) => {
        return Object.assign({}, state, action);
    }

}

const initialState = {};

export default (state = initialState, action) => {
    const _action = actions[action.type];

    if (_action) {
        return _action(state, action);
    }

    return state;
}
