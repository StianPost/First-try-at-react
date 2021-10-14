import Footer from './Footer';
import Navigation from './Navigation';

function Layout(props) {
  return (
    <div>
      <Navigation />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
