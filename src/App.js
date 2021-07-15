import GlobalStyles from './styles/GlobalStyle';
import { Home } from './pages/Home';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
      <GlobalStyles />
    </>
  );
}

export default App;
