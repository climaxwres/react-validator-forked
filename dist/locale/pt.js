// Simple React Validator v1.6.1 | Created By Dockwa | MIT License | 2017 - Present
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['simple-react-validator'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('simple-react-validator'));
  } else {
    root.SimpleReactValidatorLocalePt = factory(root.SimpleReactValidator);
  }
}(this, function(SimpleReactValidator) {
"use strict";

// Brazilian Portuguesse
SimpleReactValidator.addLocale('pt', {
  accepted: ':attribute devem ser aceitos.',
  after: ':attribute deve ser depois de :date.',
  after_or_equal: ':attribute deve ser depois ou igual à :date.',
  alpha: ':attribute deve conter apenas letras.',
  alpha_space: ':attribute deve conter apenas letras e espaços.',
  alpha_num: ':attribute deve conter apenas letras e números.',
  alpha_num_space: ':attribute deve conter apenas letras, números e espaços.',
  alpha_num_dash: ':attribute deve conter apenas letras, números e hífens.',
  alpha_num_dash_space: ':attribute deve conter apenas letras, números, hífens e espaços.',
  array: ':attribute deve ser uma matriz.',
  before: ':attribute deve ser antes de :date.',
  before_or_equal: ':attribute deve ser antes ou igual à :date.',
  between: ':attribute deve ser entre :min e :max:type.',
  "boolean": ':attribute deve ser boleano.',
  card_exp: ':attribute deve ser uma data de validade válida.',
  card_num: ':attribute deve ser um número de cartão válido.',
  currency: ':attribute deve ser uma moeda válida.',
  date: ':attribute deve ser uma data.',
  date_equals: ':attribute deve ser :date.',
  email: ':attribute deve ser um endereço de email válido.',
  "in": ':attribute deve ser :values.',
  integer: ':attribute deve ser um valor inteiro.',
  max: ':attribute não deve ser maior que :max:type.',
  min: ':attribute deve ser ao menos :min:type.',
  not_in: ':attribute não deve ser :values.',
  not_regex: ':attribute não é válido.',
  numeric: ':attribute deve ser um número.',
  phone: ':attribute deve ser um número de telefone válido.',
  regex: ':attribute não é válido.',
  required: ':attribute é obrigatório.',
  size: ':attribute deve ser :size:type.',
  string: ':attribute deve ser um conjunto de caracteres.',
  "typeof": ':attribute deve ser do tipo :type.',
  url: ':attribute deve ser uma url.'
});
return null;
}));
