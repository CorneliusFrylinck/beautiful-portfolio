import logo from './logo.svg';
import './App.css';
import MainPage from './components/pages/mainPage';
import FixedHeader from './components/layout/fixedHeader';
import AboutPage from './components/pages/aboutPage';
import ProjectPage from './components/pages/projectPage';
import WorkPage from './components/pages/experiencePage';
import ContactPage from './components/pages/contactPage';

function App() {
  return (
    <div className="App">
      <FixedHeader />
      <MainPage />
      <hr/>
      <AboutPage />
      <hr/>
      <ProjectPage />
      <hr/>
      <WorkPage />
      <hr/>
      <ContactPage />
    </div>
  );
}

export default App;
