import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice.js";
import Feed from "./components/Feed/Feed.jsx";
import { auth } from "./components/firebase";
import Header from "./components/Header/Header.jsx";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Widgets from "./components/Widgets/Widgets.jsx";


function App() {
  const user = useSelector(selectUser);  // Destructure user directly from selector
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, [dispatch]); // Adding dispatch as a dependency ensures effect runs when necessary

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
