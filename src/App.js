import React from 'react';
import logo from './logo.svg';
import styled , {keyframes,ThemeProvider} from 'styled-components'
//import { theme1, theme2 } from './theme/globalStyle'
import ThemeSelect from './component/ThemeSelect'
import List from './component/List'

const AppWrapper = styled.div `
   text-align: left;
`
const AppHeader = styled.div`
   background-color:${props => props.theme.dark};
   height:150px;
   padding:20px;
   color: palevioletred;
   text-align:center;
   border-color:${props => props.theme.secondary}
`
const rotate360 = keyframes`
    from{
      transform : rotate(0deg);
    }
    to{
      transform : rotate(360deg)
    }
`

const AppTitle = styled.h1`
   font-size:1.3em;
   color: tomato;
`
const AppIntro = styled.p`
   font-size:large
`
const AppLogo = styled.img`
   animation: ${rotate360} infinite 30s linear
   height:80px;
   &:hover {
     animation: ${rotate360} infinite 5s linear
   }
`

const theme1 = {
  primary: '#ff0198',
  secondary: '#01c1d6',
  danger: '#eb238e',
  light: '#f4f4f4',
  dark: '#fff'
}

const theme2 = {
  primary: '#6e27c5',
  secondary: '#ffb617',
  danger: '#f16623',
  light: '#f4f4f4',
  dark: '#121212'
}

const Applist = styled.li`
   width:50%;
   margin-left:2%;
   list-style-type: ${props => props.temp ? 'square' : 'circle'}
 `




class App extends React.Component {
  state = {
    theme : theme1
  }

  handleThemeChange = (e) =>{
    let theme = e.target.value
    theme === 'theme1' ? (theme = theme1) : (theme = theme2)
    this.setState({theme})
    console.log(theme)
    
  }
  render(){ 
  return (
    <ThemeProvider theme={this.state.theme}>
    <AppWrapper>
      <AppHeader>
        <AppLogo src={logo} className="App-logo" alt="logo" />
        <AppTitle>
          welcome to react
        </AppTitle>
        <AppIntro>
          Bootstraped wth <code>styled-components</code>
        </AppIntro>
        <AppIntro>
          Components styled with <code> styled-components</code>
        </AppIntro>
      </AppHeader>
       <ThemeSelect handleThemeChange={this.handleThemeChange}/>
        {/* <Applist temp>a</Applist>
        <Applist>b</Applist>
        <Applist>c</Applist>
        <Applist>d</Applist> */}
        <List primary/>
        <List />
       
    </AppWrapper>
    
    </ThemeProvider>
  );
}
}

export default App;
