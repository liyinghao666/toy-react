import { createElement, render } from './src/createElement.js'
import My from './src/My.js'
render(
  <div>
    <My name="liyinghao">
      <div id="a">
        <div id="aa">hahaha</div>
      </div>
      <div id="b">wawawa</div>
    </My>
  </div>
,document.body)