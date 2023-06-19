type TYPE_AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY_LIST =
  | 'auth/app-not-authorized'
  | 'auth/credential-already-in-use'
  | 'auth/email-already-in-use'
  | 'auth/null-user'
  | 'auth/user-not-found'

type TYPE_AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY<T> = {
  [ERROR in TYPE_AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY_LIST]: T
}

const AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY: TYPE_AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY<string> =
  {
    'auth/app-not-authorized': 'App is not authorized',
    'auth/credential-already-in-use': 'Credential already in use',
    'auth/email-already-in-use': 'Email already exist',
    'auth/null-user': 'User is not found',
    'auth/user-not-found': 'User is not found',
  }

export { AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY }
