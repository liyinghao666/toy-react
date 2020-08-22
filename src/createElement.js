
export class Component {
  constructor(){
    this.props = Object.create(null)
    this.children = []
    this._range = null
  }
  get vdom() {
    return this.render().vdom
  }
  setAttribute(name, value) {
    this.props[name] = value
  }
  appendChild(component) {
    this.children.push(component)
  }
  _renderToDom(range) {
    this._range = range
    this._vdom = this.vdom
    this._vdom._renderToDom(range)
  }
  update() {
    let isSameNode = (oldNode, newNode) => {
      if(oldNode.type !== newNode.type)return false
      for(let prop in newNode.props) {
        if(newNode.props[prop] !== oldNode.props[prop])return false
      }
      if(Object.keys(oldNode.props).length !== Object.keys(newNode.props).length)return false
      if(oldNode.type === "#text" && newNode.content !== oldNode.content)return false
      return true
    }
    let update = (oldNode, newNode) => {
      if(!isSameNode(oldNode, newNode)) {
        newNode._renderToDom(oldNode._range)
        return
      }
      newNode._range = oldNode._range

      let newChildren = newNode.vchildren
      let oldChildren = oldNode.vchildren

      let tailRange = oldChildren[oldChildren.length - 1]._range

      for(let i = 0; i < newChildren.length; i++) {
        let newChild = newChildren[i] 
        let oldChild = oldChildren[i]
        if(i < oldChildren.length) {
          update(oldChild, newChild)
        } else {
          let range = document.createRange()
          range.setStart(tailRange.endContainer, tailRange.endOffset)
          range.setEnd(tailRange.endContainer, tailRange.endOffset)
          newChild._renderToDom(range)
          tailRange = range
        }
      }
    }
    let vdom = this.vdom
    update(this._vdom, vdom)
    this._vdom = vdom
  }
  setState(newState) {
    if(this.state === null || typeof this.state !== 'object') {
      this.state = newState
      this.rerender()
      return
    }
    let merge = (oldState, newState) => {
      for(let p in newState) {
        if(typeof oldState[p] !== 'object' || oldState[p] === null) {
          oldState[p] = newState[p]
        } else if (typeof newState[p] !== 'object' || newState[p] === null) {
          oldState[p] = newState[p]
        } else {
          merge(oldState[p], newState[p])
        }
      }
    }
    merge(this.state, newState)
    this.update()
  }
}
export class reactNodeElement extends Component{
  constructor(tag) {
    super(tag)
    this.type = tag
  }
  get vdom() {
    this.vchildren = this.children.map(child => child.vdom)
    return this
  }
  _renderToDom(range) {
    this._range = range
    let root = document.createElement(this.type)
    for(let name in this.props) {
      let value = this.props[name]
      if(name.match(/^on([\s\S]+)$/))root.addEventListener(RegExp.$1.replace(/^[\s\S]/, (c) => c.toLowerCase()), value)
      if(name === 'className') {
        root.setAttribute('class', value)
      } else {
        root.setAttribute(name, value)
      }
    }

    if(!this.vchildren)
      this.vchildren = this.children.map(child => child.vdom)

    for(let child of this.vchildren) {
      let childRange = document.createRange()
      childRange.setStart(root, root.childNodes.length)
      childRange.setEnd(root, root.childNodes.length)
      child._renderToDom(childRange)
    }
    replaceContent(range, root)
  }
}
export class reactTextElement extends Component {
  constructor(content) {
    super(content)
    this.type = "#text"
    this.content = content
  }
  get vdom() {
    return this
  }
  _renderToDom(range) {
    this._range = range
    let root = document.createTextNode(this.content)
    replaceContent(range, root)
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
      if (child === null)return
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
  let range = document.createRange()
  range.setStart(root, 0)
  range.setEnd(root, root.childNodes.length)
  range.deleteContents()
  component._renderToDom(range)
}

function replaceContent(range, node) {
  range.insertNode(node);
  range.setStartAfter(node)
  range.deleteContents()
  range.setStartBefore(node)
  range.setEndAfter(node);  
}