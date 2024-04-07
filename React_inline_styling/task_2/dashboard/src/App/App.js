import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: getLatestNotification() }
];

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
      <div className={ css(styles.app) }>
        <Header />
        {
          this.props.isLoggedIn ? (
            <BodySectionWithMarginBottom >
              Course list
              <CourseList listCourses={ listCourses }/>
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom >
              Log in to continue
              <Login />
            </BodySectionWithMarginBottom>
          )
        }
        <Footer />
      </div>
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
}

const styles = StyleSheet.create({
  app: {
    display: 'block',
    minHeight: '100vh',
  }
});

const bodySectionStyles = StyleSheet.create({
  bodySection: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 65%',
    padding: '50px 0px 0px 50px',
  }
});

const footerStyles = StyleSheet.create({
  footer: {
    marginTop: 'auto',
    textAlign: 'center',
    background: 'black'
  }
})

export default App;
