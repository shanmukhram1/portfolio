import React,{Component} from 'react';
import Main from './components/MainComponent';
import { HashRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet'

const TITLE = 'ShanmukhRam-Portfolio'


class App extends Component {
  render(){
  return (
      <HashRouter>
        <div>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
          <Main/>
        </div>  
      </HashRouter>
  );
  }
}

export default App;
