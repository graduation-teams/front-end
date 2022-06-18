export const getBaseHost = () => {
    switch (process.env.NODE_ENV) {
        case 'development':
          return process.env.REACT_APP_BASE_URL_API_DEV;
        case 'production':
          return process.env.REACT_APP_BASE_URL_API_PRODUCTION;
        default:
          return process.env.REACT_APP_BASE_URL_API_DEV;
    }
}