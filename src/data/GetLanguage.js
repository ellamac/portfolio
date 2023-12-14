export const getLanguage = (object, type) => {
  const defaultContent = object[type || 'content'];
  const language = localStorage.getItem('language') || 'en';
  if (language === 'fi') {
    return object.fi || defaultContent;
  } else {
    return defaultContent;
  }
};

export default getLanguage;
