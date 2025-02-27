// Simple React Validator v1.6.1 | Created By Dockwa | MIT License | 2017 - Present
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['simple-react-validator'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('simple-react-validator'));
  } else {
    root.SimpleReactValidatorLocaleIt = factory(root.SimpleReactValidator);
  }
}(this, function(SimpleReactValidator) {
"use strict";

// Italian
SimpleReactValidator.addLocale('it', {
  accepted: ':attribute deve essere accettato.',
  after: ':attribute deve essere successiva a :date.',
  after_or_equal: ':attribute deve essere successiva o uguale a :date.',
  alpha: ':attribute deve contenere solo lettere.',
  alpha_space: 'Il campo :attribute può contenere solo spazi e lettere.',
  alpha_num: 'Il campo :attribute può contenere solo numeri e lettere.',
  alpha_num_space: 'Il campo :attribute può contenere solo spazi, numeri e lettere.',
  alpha_num_dash: 'Il campo :attribute può contenere solo trattini, numeri e lettere.',
  alpha_num_dash_space: 'Il campo :attribute può contenere solo lettere, numeri, spazi e trattini.',
  array: 'Il campo :attribute deve essere un array.',
  before: 'Il campo :attribute deve essere precedente a :date.',
  before_or_equal: 'Il campo :attribute deve essere precedente o uguale a :date.',
  between: 'Il campo :attribute deve essere compreso tra :min - :max:type.',
  "boolean": 'Il campo :attribute deve essere un booleano.',
  card_exp: 'Il campo :attribute deve essere una data di scadenza valida.',
  card_num: 'Il campo :attribute deve essere un numero di carta di credito valido.',
  currency: 'Il campo :attribute deve essere un importo.',
  date: 'Il campo :attribute deve essere una data valida.',
  date_equals: 'Il campo :attribute deve essere una data uguale a :date.',
  email: 'Il campo :attribute deve essere un indirizzo email valido.',
  "in": 'Il campo :attribute deve essere uno dei seguenti valori :values.',
  integer: 'Il campo :attribute deve essere un numero intero.',
  max: 'Il campo :attribute non deve superare :max:type.',
  min: 'Il campo :attribute non deve essere inferiore a :min:type.',
  not_in: 'Il campo :attribute non deve essere uno dei seguenti valori :values.',
  not_regex: 'Il formato di :attribute non è valido.',
  numeric: 'Il campo :attribute deve essere un numero.',
  phone: 'Il campo :attribute deve essere un numero di telefono.',
  regex: 'Il formato di :attribute non è corretto.',
  required: 'Il campo :attribute è obbligatorio.',
  size: 'La dimensione di :attribute non deve superare :size:type.',
  string: 'Il campo :attribute deve essere una stringa.',
  "typeof": 'Il campo :attribute deve essere di tipo :type.',
  url: 'Il campo :attribute deve essere un url web.'
});
return null;
}));
