import i18next from 'i18next';

export default (key = '', options = {}) => i18next.t(key, options) || key;
