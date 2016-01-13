const GET_FILE_INFO = 'macros/file/GET_FILE_INFO'
const GET_FILE_INFO_SUCCESS = 'macros/file/GET_FILE_INFO_SUCCESS'
const GET_FILE_INFO_FAILURE = 'macros/file/GET_FILE_INFO_FAILURE'
const SUBMIT_FORM = 'macros/file/SUBMIT_FORM'
const SUBMIT_FORM_SUCCESS = 'macros/file/SUBMIT_FORM_SUCCESS'
const SUBMIT_FORM_FAILURE = 'macros/file/SUBMIT_FORM_FAILURE'

const initialState = {
  loaded: false
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_FILE_INFO:
      return {
        ...state
      }
    case GET_FILE_INFO_SUCCESS:
      return {
        ...state
      }
    case GET_FILE_INFO_FAILURE:
      return {
        ...state
      }
    case SUBMIT_FORM:
      return {
        ...state
      }
    case SUBMIT_FORM_SUCCESS:
      return {
        ...state
      }
    case SUBMIT_FORM_FAILURE:
      return {
        ...state
      }
    default:
      return state
  }
}

export function getFileInfo(file) {
  return {
    types: [GET_FILE_INFO, GET_FILE_INFO_SUCCESS, GET_FILE_INFO_FAILURE],
    promise: (client) => client.post('/file/get_info', {
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
