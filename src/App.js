import { Provider } from "react-redux";
import { store } from './Store/Store'
import Characters from './Characters';
import CharactersId from './CharactersId'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Characters />} />
          <Route path="CharactersId/:id" element={<CharactersId />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
