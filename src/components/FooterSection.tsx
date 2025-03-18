import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';

const FooterSection = () => {
  return (
    <ErrorBoundary sectionName="Footer">
      <Footer />
    </ErrorBoundary>
  );
};

export default FooterSection;
