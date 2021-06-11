import React from 'react';
import './App.css';
import LoginPage from './pages/login/login.page';
import Header from './common-components/components/header/header.component'
import UserProfilePage from './pages/account/account.page';

import { BrowserRouter, Route} from 'react-router-dom'
import { MainPage } from './main/main';

interface WelcomeUI{
  name: string;
}

// "`", "'" , """
function Welcome( props : WelcomeUI ) {
  return <h1>{`Hello World! ${props.name}`}</h1>
}

function App () {

  return (
    <div>
      <BrowserRouter>
          <Route path={'/'} component={MainPage} />
      </BrowserRouter>

      {/* <div>
        <LoginPage></LoginPage>
        <UserProfilePage></UserProfilePage>
      </div> */}
    </div>
   
    
    
  )
}

export default App;
