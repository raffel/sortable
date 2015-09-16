(function(){
  var options = INSTALL_OPTIONS;

  Array.prototype.forEach.call(document.querySelectorAll('table'), function(table){
    try {
      // If there’s no tHead but the first tBody row contains ths, create a tHead and move that row into it.
      if (!table.tHead && (var firstTBodyRow = table.tBodies[0].rows[0]).children[0].tagName === 'TH') {
        var tHead = document.createElement('thead');
        tHead.appendChild(firstTBodyRow);
        table.insertBefore(tHead, table.firstChild);
      }

      // Sortable requires this
      if (table.tHead.rows.length !== 1) {
        return;
      }
    } catch (err) {
      return;
    }

    table.setAttribute('data-sortable', '');
    table.classList.add('sortable-theme-' + options.theme);
  });
})();
