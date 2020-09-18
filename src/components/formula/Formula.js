import {ExcelComponent} from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
    });
  }

  onInput(e) {
    console.log(this.$root)
  }

  onClick(e) {
    console.log(e.target)
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div 
        class="input" 
        contenteditable spellcheck="false"
      ></div>
    `
  }
}
