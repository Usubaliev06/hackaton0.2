import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Loyaut from './components/layout/Layout';
import Main from './components/pages/main/Main';
import Form from './components/pages/form/Form';
import Docs from './components/pages/docs/Docs';
import NotFound from './components/pages/notFound/notFound';
import DarkMode from './components/DarkMode/DarkMode'
import './App.css'



function App() {
  return (
    <div>
      <BrowserRouter >
      <DarkMode />
        <Routes>
          <Route path='/' element={<Loyaut />}>
            <Route index element={<Main/>} />
            <Route path='docs' element={<Docs/>} />
            <Route path='form' element={<Form/>} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
