import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template';

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'],
    });
  }

  onMousedown(e) {
    if (e.target.dataset.resize) {
      console.log(e)
    }
  }

  toHTML() {
    return createTable()
  }
}
