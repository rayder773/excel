const CODES = {
  A: 65,
  Z: 90,
};

function createCell(cell) {
  return `<div class="cell" contenteditable>${cell}</div>`
}

function createRow(data, number = '') {
  const resizer = number ?
      `<div class="row-resize" data-resize="row"></div>` : '';

  return `
      <div class="row">
        <div class="row-info">
            ${number}
            ${resizer}
        </div>
        <div class="row-data">
            ${data}
        </div>
      </div>
  `
}

function createCol(col) {
  return `
      <div class="column">
        ${col}
        <div class="col-resize" data-resize="col"></div>
      </div>
  `;
}

export function createTable(rowsCount = 15) {
  const colCount = CODES.Z - CODES.A + 1;

  const rows = [];
  const cols = Array(colCount)
      .fill('')
      .map((_, index) => String.fromCharCode(CODES.A + index))
      .map(createCol)
      .join('');

  rows.push(createRow(cols))

  for (let i = 0; i < rowsCount; i ++) {
    const cells = Array(colCount)
        .fill('')
        .map(createCell)
        .join('')

    rows.push(createRow(cells, i + 1))
  }

  return rows.join('')
}
