import './App.css';
import Avatar from './components/Avatar';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import InterestSection from './components/InterestSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="card">
      <Avatar />
      <Header />
      <AboutSection />
      <InterestSection />
      <Footer />

    </div>
  );
}

export default App;
