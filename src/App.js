import React from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Theme'
import { useDarkMode } from './hooks/useDarkMode'
import { GlobalStyle, Wrapper, Main } from './hooks/useGlobalTheming'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './views/Home'
import Project from './views/Project'
import Contact from './views/Contact'
import Meta from './views/Meta'
import Writings from './views/Writings'

import Menu from './views/Menu'
import Footer from './components/Footer'
import Header from './components/Header'
import Cursor from './hooks/useCursor'

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode()

  if (!componentMounted) {
    return <div />
  } else {
    return (
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Cursor />
        <Wrapper>
          <Router>
            <Main>
              <Header mode={theme} modeFunc={toggleTheme} />
              <Switch>
                <Route path='/writing' component={Writings} />
                <Route path='/meta' component={Meta} />
                <Route path='/contact' component={Contact} />
                <Route path='/project' component={Project} />
                <Route path='/menu' component={Menu} />
                <Route exact path='/' component={Home} />
              </Switch>
              <Footer />
            </Main>
          </Router>
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default App
