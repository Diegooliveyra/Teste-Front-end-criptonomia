import GlobalStyles from './styles/GlobalStyle';
import { Home } from './pages/Home';
import { Header } from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyles />
    </>
  );
}

export default App;
