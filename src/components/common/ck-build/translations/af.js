(function (e) {
  const n = (e['af'] = e['af'] || {});
  n.dictionary = Object.assign(n.dictionary || {}, {
    '%0 of %1': '',
    'Align center': 'Belyn in die middel',
    'Align left': 'Belyn links',
    'Align right': 'Belyn regs',
    Bold: 'Vetgedruk',
    Cancel: 'Kanselleer',
    Italic: 'Skuinsgedruk',
    Justify: 'Belyn beide kante',
    'Remove color': '',
    Save: 'Berg',
    'Show more items': '',
    'Text alignment': 'Teksbelyning',
    'Text alignment toolbar': '',
  });
  n.getPluralForm = function (e) {
    return e != 1;
  };
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
