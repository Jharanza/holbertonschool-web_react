import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import Notifications from './Notifications/Notifications';
import CourseList from './CourseList/CourseList';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
]

function App({ isLoggedIn }) {
  return (
    <>
    <Notifications />
    <div className="App">
      <Header />
      {
        isLoggedIn ? (
          <CourseList listCourses={ listCourses }/>
        ) : (
          <Login />
        )
      }
      <Footer />
    </div>
    </>
  );
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;
