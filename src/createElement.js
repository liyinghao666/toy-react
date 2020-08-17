export class Component {
  constructor(){
    this.props = Object.create(null)
    this._root = null
    this.children = []
  }
  setAttribute(name, value) {
    this.props[name] = value
  }
  appendChild(component) {
    this.children.push(component)
  }
  get root() {
    if(!this._root) {
      this._root = this.render().root
    }
    return this._root
  }
}
Component.prototype.setState = function (set) {
  if (!(typeof set === "object" && set instanceof Function))throw new Error('setState receives only functions')
  let newState = set(this.state, callback)
  const callback = function(){
    Object.assign(this.state, newState)
  }.bind(this)
}
/**
 * reactNodeElement
 * 用来代理常规节点
 * 抹平自定义节点与原生节点的差异
 * 提供普适的setAttribute方法与appendChild方法
 * 实现思路：把原生Dom结构存在this.root中
 */
export class reactNodeElement {
  constructor(tag) {
    this.root = document.createElement(tag)
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value)
  }
  appendChild(ele) {
    this.root.appendChild(ele.root)
  }
}
/**
 * reactTextElement
 * 用来代理文本节点
 * 不需要上述方法
 */
export class reactTextElement {
  constructor(content) {
    this.root = document.createTextNode(content)
  }
}
export function createElement(tag, attr, ...children) {
  let ele
  if(typeof tag === "string") {       // tag 是 string 时， 即表明是一个原生Dom结构
    ele = new reactNodeElement(tag)
  } else {
    ele = new tag()                   // 否则即为用户自定义的结构，此结构必定继承于Component方法
  }
  for (let i in attr) {
    ele.setAttribute(i, attr[i])
  }
  const insertChildren = (children) => {
    children.forEach(child => {
      if (typeof child === "object" && (child instanceof Array)) {
        insertChildren(child)
        return
      }
      if (typeof child === "string")child = new reactTextElement(child)
      ele.appendChild(child)
    });  
  }
  insertChildren(children)
  return ele
}
export function render(component, root) {
  root.appendChild(component.root)
}
