export function increment() {
    return {type: "INCREMENT"}
}

export function decrement() {
    return {type: "DECREMENT"}
}

export function reset() {
    return {type: "RESET"}
}

function getUserInfoRequest() {
    return {
        type: 'GET_USER_INFO_REQUEST'
    }
}

function getUserInfoSuccess(userInfo) {
    return {
        type: 'GET_USER_INFO_SUCCESS',
        userInfo: userInfo
    }
}

function getUserInfoFail() {
    return {
        type: 'GET_USER_INFO_FAIL'
    }
}
export function getUserInfo() {
    return function (dispatch) {
        dispatch(getUserInfoRequest());
        return fetch('http://api.map.baidu.com/telematics/v3/weather?location=%E5%8C%97%E4%BA%AC')
            .then((response => {
                return response.json()
            }))
            .then((json) => {
                    dispatch(getUserInfoSuccess(json))
                }
            ).catch(
                () => {
                    dispatch(getUserInfoFail());
                }
            )
    }
}