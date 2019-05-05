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
  return {
    tag,
    attrs,
    children
  }
}

export default {
  Component,
  createElement
}
