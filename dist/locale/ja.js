// Simple React Validator v1.6.1 | Created By Dockwa | MIT License | 2017 - Present
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['simple-react-validator'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('simple-react-validator'));
  } else {
    root.SimpleReactValidatorLocaleJa = factory(root.SimpleReactValidator);
  }
}(this, function(SimpleReactValidator) {
"use strict";

// Japanese
SimpleReactValidator.addLocale('ja', {
  accepted: ':attributeを受け入れる必要があります。',
  after: ':attributeは:dateより後でなければなりません。',
  after_or_equal: ':attributeは:date以降である必要があります。',
  alpha: ':attributeには文字のみを含めることができます。',
  alpha_space: ':attributeには文字とスペースのみを含めることができます。',
  alpha_num: ':attributeには文字と数字のみを含めることができます。',
  alpha_num_space: ':attributeには文字、数字、およびスペースのみを含めることができます。',
  alpha_num_dash: ':attributeには文字、数字、ダッシュ、およびアンダースコアのみを含めることができます。',
  alpha_num_dash_space: ':attributeには文字、数字、ダッシュ、アンダースコア、およびスペースのみを含めることができます。',
  array: ':attributeは配列でなければなりません。',
  before: ':attributeは:dateより前でなければなりません。',
  before_or_equal: ':attributeは:dateより前か:dateである必要があります。',
  between: ':attributeは:minと:max:typeの間でなければなりません。',
  "boolean": ':attributeはブール値である必要があります。',
  card_exp: ':attributeは有効な有効期限である必要があります。',
  card_num: ':attributeは有効なクレジットカード番号である必要があります。',
  currency: ':attributeは有効な通貨である必要があります。',
  date: ':attributeは日付でなければなりません。',
  date_equals: ':attributeは:dateである必要があります。',
  email: ':attributeは有効なメールアドレスである必要があります。',
  "in": ':attributeは:valuesのいずれかと一致する必要があります。',
  integer: ':attributeは整数でなければなりません。',
  max: ':attributeは:max:typeを超えてはなりません。',
  min: ':attributeは:min:type未満であってはなりません。',
  not_in: ':attributeは:valuesのいずれかと一致してはなりません。',
  not_regex: ':attributeは形式が無効です。',
  numeric: ':attributeは数値でなければなりません。',
  phone: ':attributeは有効な電話番号である必要があります。',
  regex: ':attributeは形式が無効です。',
  required: ':attributeは必須です。',
  size: ':attributeは:size:typeである必要があります。',
  string: ':attributeは文字列でなければなりません。',
  "typeof": ':attributeは:typeの正しいタイプではありません。',
  url: ':attributeは有効なURLである必要があります。'
});
return null;
}));
