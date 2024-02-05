import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavLayout } from './components/Layout';
import Login from './containers/Login';
import Home from './containers/Home';
import Manage from './containers/Manage';
import Product from './containers/Manage/Product';
import NotFound from './containers/Notfound';
import ProtectedRoute from './routes/ProtectedRoute';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        {/* <Route element={<ProtectedRoute />}> */}
          <Route element={<NavLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="manage/" element={<Manage />}>
              <Route path="product" element={<Product />} />
            </Route>
          </Route>
        {/* </Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
