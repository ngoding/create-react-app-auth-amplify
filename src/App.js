import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div>
        <AmplifyAuthenticator hideSignUp>
          <AmplifySignIn slot="sign-in" hideSignUp></AmplifySignIn>
          <div className="App">
            <AmplifySignOut />
            {/* <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header> */}
            <div>
            <iframe src="http://reporting.rumahsiapkerja.com/embed/query/133/visualization/195?api_key=SkoCVb28k3lAf4aDYZbR8Mb1z7CaXff5UdbB85kv&p_Date.start=2021-08-25&p_Date.end=2021-08-28&p_Referral=%5B%22SIAPKERJA250%22%2C%22AKUSIAPKERJA%22%2C%22SIAPKERJA300%22%5D&hide_link&hide_header" width="1080" height="720"></iframe>
            </div>
            <div>
            <iframe src="http://reporting.rumahsiapkerja.com/embed/query/133/visualization/197?api_key=SkoCVb28k3lAf4aDYZbR8Mb1z7CaXff5UdbB85kv&p_Date.start=2021-08-25%2000%3A00&p_Date.end=2021-08-28%2000%3A00&p_Referral=%5B%22SIAPKERJA250%22%2C%22AKUSIAPKERJA%22%2C%22SIAPKERJA300%22%5D&hide_link&hide_header" width="360" height="500"></iframe>
            </div>
          </div>
        </AmplifyAuthenticator>
      </div>
    );
  }
}

export default App;
