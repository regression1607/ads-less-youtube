import React ,{useEffect,useState} from "react";
import Head from "./componets/Head";
import "./index.css";
import Body from "./componets/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import MainContainer from "./componets/MainContainer";
import WatchPage from "./componets/WatchPage";
 
const appROuter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "/watch",
      element :<WatchPage/>
    }
  ]
}]);

function App() {

  const [apiKey, setApiKey] = useState(localStorage.getItem('GOOGLE_API_KEY'));

  useEffect(() => {
    if (!apiKey) {
      const userApiKey = prompt('Please enter your Google API key:');
      if (userApiKey) {
        localStorage.setItem('GOOGLE_API_KEY', userApiKey);
        setApiKey(userApiKey); // Update state to trigger re-render
        window.location.reload(); 
      }
    }
  }, [apiKey]);

  return ( 
    <Provider store={store}>
    <div>
      <Head/>
      <RouterProvider router={appROuter}/>
    </div>
    </Provider>
  );
}

export default App;
