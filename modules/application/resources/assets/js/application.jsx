import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TopNavigation from './components/TopNavigation.jsx'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div>
      <TopNavigation />
    </div>
  </MuiThemeProvider>
)
ReactDOM.render(
  <App />,
  document.getElementById('root')
)