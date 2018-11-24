import i18next from 'i18next';
import { DEVELOPMENT } from './constants';
import langs from '../langs';

i18next.init({
  lng: 'pt-BR',
  debug: process.env.NODE_ENV === DEVELOPMENT,
  resources: {
    'pt-BR': { translation: langs }
  }
});
