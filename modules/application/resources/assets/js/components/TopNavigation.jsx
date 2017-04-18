import React from 'react'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton';

class NotRegister extends React.Component {
  render() {
    return (
      <div>
        <RaisedButton label="Login" style={{ marginRight: '5px'}}/>
        <RaisedButton label="Register" />
      </div> 
    )
  }
}



const TopNavigation = () => (
  <AppBar
    title={<a href="/" className="brand" >Scaffolding App</a>}
    showMenuIconButton={false}
    iconElementRight={<NotRegister />}
  />
);

export default TopNavigation