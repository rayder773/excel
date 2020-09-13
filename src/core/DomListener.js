import {capitalize} from '@core/utils';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DomListener!`)
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDomListeners() {
    console.log(this.listeners)
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);

      this[method] = this[method].bind(this);

      this.$root.on(listener, this[method])
    })
  }

  removeDomListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      this.$root.off(listener, this[method])
    })
  }
}

function getMethodName(event) {
  return 'on' + capitalize(event);
}
