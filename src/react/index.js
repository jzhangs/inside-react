import { renderComponent } from '../react-dom'

export class Component {
  constructor(props = {}) {
    this.isReactComponent = true;

    this.state = {};
    this.props = props;
  }

  setState(stateChange) {
    Object.assign(this.state, stateChange);
    renderComponent(this);
  }
}

function createElement(tag, attrs, ...children) {
  attrs = attrs || {};
  return {
    tag,
    attrs,
    children,
    key: attrs.key || null
  }
}

export default {
  Component,
  createElement
}
