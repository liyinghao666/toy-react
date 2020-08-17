import { createElement, Component } from './createElement'
export default class My extends Component {
  constructor() {
    super()
    this.state = {
      name: 1
    }
  }
  render() {
    return (
      <div>
        <div onClick={() => {this.setState({name:this.state.name + 1})}}>{this.state.name.toString()}</div>
        {this.children}
      </div>
    )
  }

}