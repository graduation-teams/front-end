(function (n) {
  const i = (n['gu'] = n['gu'] || {});
  i.dictionary = Object.assign(i.dictionary || {}, { Bold: 'ઘાટુ - બોલ્ડ્', Italic: 'ત્રાંસુ - ઇટલિક્' });
  i.getPluralForm = function (n) {
    return n != 1;
  };
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
