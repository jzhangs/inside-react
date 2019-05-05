import { renderComponent } from '../react-dom'

const setStateQueue = [];
const renderQueue = [];

function defer(fn) {
  return Promise.resolve().then(fn);
  // return requestAnimationFrame( fn );
}

function enqueueSetState(stateChange, component) {
  if (setStateQueue.length === 0) {
    defer(flush);
  }
  setStateQueue.push({
    stateChange,
    component
  });

  if (!renderQueue.some(item => item === component)) {
    renderQueue.push(component);
  }
}

function flush() {
  let item, component;
  /* eslint-disable-next-line no-cond-assign */
  while (item = setStateQueue.shift()) {
    const { stateChange, component } = item;
    if (!component.prevState) {
      component.prevState = Object.assign({}, component.state);
    }

    if (typeof stateChange === 'function') {
      Object.assign(component.state, stateChange(component.prevState, component.props));
    } else {
      Object.assign(component.state, stateChange);
    }
    component.prevState = component.state;
  }

  /* eslint-disable-next-line no-cond-assign */
  while (component = renderQueue.shift()) {
    renderComponent(component);
  }
}

export class Component {
  constructor(props = {}) {
    this.isReactComponent = true;

    this.state = {};
    this.props = props;
  }

  setState(stateChange) {
    enqueueSetState( stateChange, this );
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
