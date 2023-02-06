import logo from './logo.svg';
import './App.css';
import MainPage from './components/pages/mainPage';
import FixedHeader from './components/layout/fixedHeader';
import AboutPage from './components/pages/aboutPage';
import ProjectPage from './components/pages/projectPage';
import WorkPage from './components/pages/experiencePage';
import ContactPage from './components/pages/contactPage';
import { useEffect, useState } from 'react';
import Loader from './components/layout/loader';
import { observer } from 'mobx-react-lite';
import { useStore } from './stores/store';

function App() {
  const [loading, setLoading] = useState(true);
  const { loadingStore } = useStore();

  useEffect(() => {
    setLoading(loadingStore.loading)
  }, [loadingStore.loading])


  return (
    <>
      {loadingStore.loading && <Loader />}
      <div style={{display: loadingStore.loading ? 'none' : 'inherit'}} className="App">
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
    </>
  );
}

export default observer(App);
