import './App.css';
import { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: getLatestNotification() }
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      if (this.props.logOut) this.props.logOut();
    }
  }

  render() {
    return (
      <>
    <Notifications listNotifications={ listNotifications }/>
    <div className="App">
      <Header />
      {
        this.props.isLoggedIn ? (
          <CourseList listCourses={ listCourses }/>
        ) : (
          <Login />
        )
      }
      <Footer />
    </div>
    </>
    )
  };
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
}

export default App;
