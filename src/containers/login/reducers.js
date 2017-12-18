/*
* 初始化state
 */

const initState = {
    count: 0,
    isLoading: false,
    userInfo: {},
    errorMsg: ''
};

/*
* reducer
 */
export default function reducer(state = initState, action) {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1
            };
        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1
            };
        case "RESET":
            return {
                ...state,
                count: 0
            };
        case "GET_USER_INFO_REQUEST":
            return {
                ...state,
                isLoading: true,
                userInfo: {},
                errorMsg: ''
            };
        case "GET_USER_INFO_SUCCESS":
            return {
                ...state,
                isLoading: false,
                userInfo: action.userInfo,
                errorMsg: ''
            };
        case "GET_USER_INFO_FAIL":
            return {
                ...state,
                isLoading: false,
                userInfo: {},
                errorMsg: '请求错误'
            };
        default:
            return state
    }
}