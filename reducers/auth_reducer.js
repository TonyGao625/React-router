import { TEST_ACTION } from '../actions/types';

const INTIAL_STATE =[{"_id":"58f36df862569c0d70e9d4d7","text":"this is so neat","author":"your","__v":0},{"_id":"58f37999a6b06827f8839977","text":"what's up","author":"james","__v":0}]

export default function (state = null, action) {
    switch (action.type) {
        case TEST_ACTION:
            //   return { ...state, message: action.payload.message };
            console.log("this is payload");
            console.log(action.payload);
            return Object.assign({}, state, {
                // message: action.payload.message
                message: action.payload
            })


    }


    /**
     * return the state to the reducer index.js
     */
    return state;
}