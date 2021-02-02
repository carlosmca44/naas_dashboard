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
      text:{
        color:'secondary'
      },
      
    },
    MuiCard:{
      root:{
        boxShadow:'none',
        border:'1px #A7AEB8 solid'
      }
    },
    MuiTab:{
      selected:{
        backgroundColor:'#008CFF',
        color:'white'
      },
      root:{
        backgroundColor:'secondary',
        margin:'0.2% 0.2% 0.2% 0.2%',
        border:'1px black solid',
        borderBottom:'0px',
      }
    },
    MuiTabs:{
      indicator:{
        backgroundColor:'transparent'
      },
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
