import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
  Outlet
} from "react-router-dom";
import Header from './Header';
import AllUnits from './Categories/AllUnits';
import OperationBar from './OperationBar';
import Login from './Auth/Login';
import CreateCategory from './Categories/CreateCategory';
import { Provider } from 'react-redux';
import { store } from './app/store';
import EditCategory from './Categories/EditCategory';
import AllProducts from './Products/AllProducts';
import CreateProduct from './Products/CreateProduct';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode>
  <Provider store={store}>

  <BrowserRouter>
    <Routes>
        <Route path='/' element={
                <>
                <div className='flex flex-col' style={{minHeight:"100vh"}}>
                  <Header/>
                  {/* <div style={{height:"100vh"}}> */}
                    <Outlet/>
                  {/* </div> */}
                  {/* <div className='mt-auto'>
                    <Footer/>
                  </div> */}
                </div>

                </>
              }>
                
          <Route path='log-in' element={<><Login/></>}   />

          <Route path='categorys' element={<><AllUnits/></>}  />

          <Route path='create-category' element={<CreateCategory/>}   />
          <Route path='create-product' element={<CreateProduct/>}   />
          
          
          <Route path='products' element={<><AllProducts/></>}   />
          
          <Route path='edit-category/:categoryId' element={<EditCategory/>}   />

        </Route>
      {/* <App/> */}
    </Routes>
  </BrowserRouter>
  </Provider>

  // </React.StrictMode>
);


