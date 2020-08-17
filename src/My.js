import { createElement, Component } from './createElement'
export default class My extends Component {
  constructor() {
    super()
    this.state = {
      name: "liyinghao"
    }
  }
  render() {
    return (
      <div>
        <div>{this.state.name}</div>
        {this.children}
      </div>
    )
  }
}