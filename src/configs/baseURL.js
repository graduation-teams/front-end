const PRODUCTION_API_HOST = 'http://api.techstore.cf/api/v1';
const DEVELOPMENT_API_HOST = 'https://api.techstore.gq/api/v1';

export const getBaseHost = () => {
    switch (process.env.NODE_ENV) {
        case 'development':
          return DEVELOPMENT_API_HOST;
        case 'production':
          return PRODUCTION_API_HOST;
        default:
          return DEVELOPMENT_API_HOST;
    }
}