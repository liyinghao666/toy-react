
export class Component {
  constructor(){
    this.props = Object.create(null)
    this.children = []
    this._range = null
  }
  setAttribute(name, value) {
    this.props[name] = value
  }
  appendChild(component) {
    this.children.push(component)
  }
  _renderToDom(range) {
    this._range = range
    this.render()._renderToDom(range)
  }
  rerender() {
    this._range.deleteContents()
    this._renderToDom(this._range)
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
    this.rerender()
  }
  // get root() {
  //   if(!this._root) {
  //     this._root = this.render().root
  //   }
  //   return this._root
  // }
}
/**
 * reactNodeElement
 * 用来代理常规节点
 * 抹平自定义节点与原生节点的差异
 * 提供普适的setAttribute方法与appendChild方法
 * 实现思路：把原生Dom结构存在this.root中
 * _renderToDom利用range对象实现dom节点的替换，此方法每个类型的element都应该具备
 */
export class reactNodeElement {
  constructor(tag) {
    this.root = document.createElement(tag)
  }
  setAttribute(name, value) {
    if(name.match(/^on([\s\S]+)$/))this.root.addEventListener(RegExp.$1.replace(/^[\s\S]/, (c) => c.toLowerCase()), value)
    this.root.setAttribute(name, value)
  }
  appendChild(ele) {
    let range = document.createRange()
    range.setStart(this.root, this.root.childNodes.length)
    range.setEnd(this.root, this.root.childNodes.length)
    ele._renderToDom(range)
  }
  _renderToDom(range) {
    range.deleteContents()
    range.insertNode(this.root)
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
  _renderToDom(range) {
    range.deleteContents()
    range.insertNode(this.root)
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
  let range = document.createRange()
  range.setStart(root, 0)
  range.setEnd(root, root.childNodes.length)
  range.deleteContents()
  component._renderToDom(range)
}
