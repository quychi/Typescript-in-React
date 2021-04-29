import React from 'react'
import {omit} from 'lodash' //err if you not "npm add -D @types/lodash"

interface IProps {
  text: string;
  age?: number;
}

interface IState {
  email: string;
  name: string;
}

// export default class Form extends React.Component<{}, IState> {    //if you no have prop
// export default class Form extends React.Component<IProps> {        //if you no have state
export default class Form extends React.Component<IProps, IState> {
  
  state: IState = {
    email: "",
    name: ""
  }
  
  onHandleChange = (e: React.FormEvent<HTMLInputElement>)  => {
    const { name, value }:  { name: string, value: string } = e.currentTarget;
    this.setState({
      // [name]: value,         //??? theo video err
      "name": value
    });
  }

  render() {
    //const {text} = this.props;                  //destructing (TS)
    const {text} = omit(this.props, "age");      //func omit in lodash)
    const {name} = this.state;
    return (
      <div>
        <div>{text}</div>
        <input name="name" value="name" onChange={this.onHandleChange}/>
      </div>
    )
  }
}
