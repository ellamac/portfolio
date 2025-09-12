import ScrollToTop from './helpers/scrollToTop';
import NavbarTop from './components/NavbarTop';
import NavbarBottom from './components/NavbarBottom';
import Content from './components/Content';

const Main = (props) => {
  /* Disabled language change for now

const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'en'
  );

  useEffect(() => {
    const lang = localStorage.getItem('language');
    if (lang) {
      setLanguage(lang);
    } else {
      setLanguage('en');
      localStorage.setItem('language', language);
    }
  }, []);


  const changeLanguage = () => {
    const lang = language === 'en' ? 'fi' : 'en';
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };
 */
  return (
    <>
      <ScrollToTop />
      <NavbarTop />
      <Content />
      <NavbarBottom />
    </>
  );
};

export default Main;
