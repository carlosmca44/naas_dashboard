import React, { Component } from 'react';
import 'typeface-roboto'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

const theme = createMuiTheme({
  palette:{
    primary:{
      main:'#0066CC'
    },
    secondary:{
      main:'#008CFF'
    }
  },
  overrides:{
    MuiButton:{
      colorInherit:{
        color:'secondary',
      }
    }
      
    
  }
})

class App extends Component {
  render(){
    return (
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes/>
          </BrowserRouter>
        </ThemeProvider>
    );
  }
}

export default App;
