export const getLanguage = (object) => {
  const language = localStorage.getItem('language') || 'en';
  if (language === 'fi') {
    return object.fi || object.content;
  } else {
    return object.content;
  }
};

export default getLanguage;
