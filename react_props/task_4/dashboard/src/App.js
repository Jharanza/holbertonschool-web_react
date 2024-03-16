import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import Notifications from './Notifications/Notifications';
import CourseList from './CourseList/CourseList';


function App({ isLoggedIn }) {

  App.defaultProps = {
    isLoggedIn: false
  }

  return (
    <>
    <Notifications />
    <div className="App">
      <Header />
      {
        isLoggedIn ? (
          <CourseList />
        ) : (
          <Login />
        )
      }
      <Footer />
    </div>
    </>
  );
}

export default App;
