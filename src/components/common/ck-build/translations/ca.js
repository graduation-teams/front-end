(function (a) {
  const e = (a['ca'] = a['ca'] || {});
  e.dictionary = Object.assign(e.dictionary || {}, {
    '%0 of %1': '',
    'Align center': 'Alineació centre',
    'Align left': 'Alineació esquerra',
    'Align right': 'Alineació dreta',
    Bold: 'Negreta',
    Cancel: 'Cancel·lar',
    'Choose heading': 'Escull capçalera',
    Default: 'Predeterminada',
    'Document colors': '',
    'Font Color': '',
    'Font Family': 'Font',
    Heading: 'Capçalera',
    'Heading 1': 'Capçalera 1',
    'Heading 2': 'Capçalera 2',
    'Heading 3': 'Capçalera 3',
    'Heading 4': '',
    'Heading 5': '',
    'Heading 6': '',
    Italic: 'Cursiva',
    Justify: 'Justificar',
    Paragraph: 'Pàrraf',
    'Remove color': '',
    Save: 'Desar',
    'Show more items': '',
    'Text alignment': 'Alineació text',
    'Text alignment toolbar': '',
  });
  e.getPluralForm = function (a) {
    return a != 1;
  };
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
