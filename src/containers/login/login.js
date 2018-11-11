import React from 'react'
import Input from '../../components/form/input'
import Button from '../../components/form/button'
import {H1,H2,H3,H4} from '../../components/heading/heading'
import {connect} from 'react-redux'

class Login extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      username : '',
      password: '',
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    const {name, value} = e.target;
    this.setState({[name]:value});
  }
  handleSubmit(e){
    e.preventDefault();

    this.setState({submitted:true});
    const {username, password} = this.state ;
    const {dispatch} = this.props;
    if(username && password){
      dispatch()
    }
  }
  render(){

    const {loggingIn} = this.props;
    const {username, password, submitted} = this.state;

    return(
        <div className="login-area">
          <H1 style="" value="Login to your shop"/>
          <form onSubmit={this.handleSubmit}>
            <Input label="Username" inputtype="text" inputplaceholder="Username" inputname="username" value={username}  onChangeEvent={this.handleChange}/>
            <Input label="Password" inputtype="password" inputvalue="password" inputplaceholder="Password" inputname="password" value={password} onChangeEvent={this.handleChange}/>
            <div>
              <Input label="Remember me" inputtype="checkbox" />
              <a href="">Forgot password</a>
            </div>
            <Button btnvalue="Submit"/>
          </form>
        </div>
    )
  }
}
function mapStateToProps(state){
  console.log('state',state)
  const {loggingIn} = state.authentication;
  return{
    loggingIn
  }
}

const ConnectedLoginPage = connect(mapStateToProps)(Login);
export default ConnectedLoginPage
