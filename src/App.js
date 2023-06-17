import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Loyaut from './components/layout/Layout';
import Main from './components/pages/main/Main';
import Form from './components/pages/form/Form';
import Login from './components/pages/login/Login';
import NotFound from './components/pages/notFound/notFound';
import DarkMode from './components/DarkMode/DarkMode'
import './App.css'
import Detail from './components/pages/detail/Detail';



function App() {
  return (
    <div>
      <DarkMode />
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Loyaut />}>
            <Route index element={<Login/>} />
            <Route path='main' element={<Main/>} />
            <Route path='form' element={<Form/>} />
            <Route path='detail' element={<Detail />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
