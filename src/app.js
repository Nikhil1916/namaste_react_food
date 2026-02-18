import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import HeadComponent from './HeadComponent';
import Body from './Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './About';
import ErrorEl from './ErrorEl';
import Contact from './ContactUs';
import RestaurantDetail from './RestaurantDetail';
import UserContext from '../utils/UserContext';
import { Provider } from 'react-redux';
import appStore from '../utils/appStore';
import Cart from './Cart';
const Grocery = lazy(()=>import("./Grocery"));

const AppLayout = () => {
    const [user,setUser] = useState("");
    useEffect(()=>{
        setTimeout(()=>{
            setUser("nikhil chawla")
        },3000)
    },[])
    return (
        <Provider store={appStore}>
            
        <UserContext.Provider value={{
            loggedInUser: user,
            setUser
        }}>
            <HeadComponent />
            <Outlet />
        </UserContext.Provider>
        </Provider>

    )
}

const appRoute = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        errorElement:<ErrorEl/>,
        children: [
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"/restaurant/:id",
                element: <RestaurantDetail/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>loadingg....</h1>}><Grocery/></Suspense>
            },
            {
                path: "/cart",
                element: <Cart/>
            }

        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoute} />);