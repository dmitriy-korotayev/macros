const GET_INFO = 'macros/file/GET_INFO'
const GET_INFO_SUCCESS = 'macros/file/GET_INFO_SUCCESS'
const GET_INFO_FAIL = 'macros/file/GET_INFO_FAIL'
const SUBMIT_FORM = 'macros/file/SUBMIT_FORM'
const SUBMIT_FORM_SUCCESS = 'macros/file/SUBMIT_FORM_SUCCESS'
const SUBMIT_FORM_FAIL = 'macros/file/SUBMIT_FORM_FAIL'

const initialState = {
  gotInfo: false
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_INFO:
      return {
        ...state,
        gettingInfo: true
      }
    case GET_INFO_SUCCESS:
      return {
        ...state,
        gettingInfo: false,
        gotInfo: true,
        info: action.result
      }
    case GET_INFO_FAIL:
      return {
        ...state,
        gettingInfo: false,
        gotInfo: false,
        error: action.error
      }
    case SUBMIT_FORM:
      return {
        ...state
      }
    case SUBMIT_FORM_SUCCESS:
      return {
        ...state
      }
    case SUBMIT_FORM_FAIL:
      return {
        ...state
      }
    default:
      return state
  }
}

export function getInfo(file) {
  return {
    types: [GET_INFO, GET_INFO_SUCCESS, GET_INFO_FAIL],
    promise: (client) => client.post('/file/getInfo', {
      data: {
        file: file
      }
    })
  }
}

/*export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/loadAuth')
  }
}

export function login(password) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: (client) => client.post('/login', {
      data: {
        password: password
      }
    })
  }
}

export function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: (client) => client.get('/logout')
  }
}*/
