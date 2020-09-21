import {$} from '@core/dom';

function setDocumentListeners(listeners = {}) {
  Object.keys(listeners).forEach(key => {
    document[key] = listeners[key]
  })
}

export function handleResize(e) {
  let delta;
  let value;

  const $target = $(e.target);
  const $parent = $target.closest('[data-type="resizable"]');
  const {colIndex} = $parent.$el.dataset;
  const $cols =
    document.querySelectorAll(`[data-col-index="${colIndex}"]`);

  const coords = $parent.getCoords();
  const type = e.target.dataset.resize;

  const arrayOfColumns = [...$cols, $parent.$el];

  $target.$el.classList.add('resize-pressed');

  const resizeCol = (e) => {
    delta = e.pageX - coords.right;
    arrayOfColumns.forEach(col => {
      col.style.width = (coords.width + delta) + 'px'
    })
  }

  const resizeRow = e => {
    delta = e.pageY - coords.bottom;
    value = delta + coords.height;
    $parent.css({height: value + 'px'})
  }

  const setResize = {
    row: resizeRow,
    col: resizeCol
  }

  const onMouseUp = () => {
    document.onmousemove = null;
    document.onmouseup = null
  }

  setDocumentListeners({
    onmousemove: setResize[type],
    onmouseup: onMouseUp,
  })
}
