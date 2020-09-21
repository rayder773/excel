import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template';
import {$} from '@core/dom';
import {handleResize} from '@/components/table/table.functions';

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'],
    });
    this.$root = $root;
  }

  onMousedown(e) {
    if (!e.target.dataset.resize) {
      return;
    }

    handleResize(e);
  }

  toHTML() {
    return createTable()
  }
}
