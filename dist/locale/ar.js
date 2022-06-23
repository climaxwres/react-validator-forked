// Italian
// Simple React Validator v1.6.1 | Created By Dockwa | MIT License | 2017 - Present
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['simple-react-validator'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('simple-react-validator'));
  } else {
    root.SimpleReactValidatorLocaleEl = factory(root.SimpleReactValidator);
  }
}(this, function(SimpleReactValidator) {
"use strict";

// Greek
SimpleReactValidator.addLocale('ar', {
  accepted: 'Πρέπει να αποδεχετείτε το πεδίο :attribute',
  email_accepted: 'البريد الإلكتروني مسجل من قبل',
  app_accepted: 'يجب إختيار تطبيق واحد علي الأقل',
  has_num_symbol_space: 'يجب إدخال رقم, رمز او مسافة',
  after: 'Η ημ/νία :attribute πρέπει να είναι μετά από :date.',
  after_or_equal: 'Η ημ/νία :attribute πρέπει να είναι ίση με ή μετά από :date.',
  alpha                : '.أدخل احرف فقط',
  alpha_ar               : 'أدخل احرف عربية فقط',
  alpha_space          : 'أدخل احرف و مسافة فقط',
  alpha_dash_space          : 'أدخل احرف, شرطة و مسافة فقط',
  alpha_ar_space               : 'أدخل احرف عربية و مسافة فقط',
  alpha_num            : 'أدخل احرف و ارقام فقط',
  alpha_ar_num            : 'أدخل احرف عربية و ارقام فقط.',
  alpha_num_space      : 'أدخل احرف , ارقام و مسافة فقط',
  alpha_en_ar_num_space      : 'أدخل احرف إنجليزية او عربية, ارقام و مسافة فقط',
  alpha_ar_num_space            : 'أدخل احرف عربية, مسافة و ارقام فقط.',
  alpha_num_dash: 'أدخل احرف , ارقام و شرطة ( - ) فقط',
  alpha_ar_num_dash            : 'أدخل احرف عربية, ارقام وشرطة ( - ) فقط',
  alpha_num_dash_space: 'أدخل احرف إنجليزية, مسافة, ارقام وشرطة ( - ) فقط',
  alpha_ar_num_dash_space           : 'أدخل احرف عربية, مسافة, ارقام وشرطة ( - ) فقط',
  username_or_email          : 'إستخدم حروف وارقام فقط لإسم المستخدم او بريد إلكتروني صالح',
  complex_password          : 'كلمة المرور يجب ان تحتوي علي الاقل 8 أحرف, حرف كبير, حرف صغير, ارقام و رموز',
  simple_password          : 'كلمة المرور يجب ان تحتوي علي الاقل 8 أحرف من حروف و ارقام',
  array: ':attribute غير مقبولة',
  before: 'Η ημ/νία πρέπει να είναι πριν από :date.',
  before_or_equal: 'Η ημ/νία πρέπει να είναι πριν ή ίση με :date.',
  between: 'Η τιμή του πεδίου :attribute πρέπει να βρίσκεται ανάμεσα από :min - :max:type.',
  "boolean": 'يجب ان تختار قيمة منطقية',
  card_exp: 'To πεδίο :attribute πρέπει να είναι μια έγκυρη ημ/νία.',
  card_num: 'Το πεδίο :attribute πρέπει να είναι ένας έγκυρος αριθμός κάρτας.',
  currency: 'Το πεδίο :attribute πρέπει να έιναι ένα έγκυρο ποσό',
  date: 'Το πεδίο :attribute πρέπει να είναι μια έγκυρη ημ/νία.',
  date_equals: 'Η ημ/νία :attribute πρέπει να είναι ίδια με :date.',
  email: 'البريد الإلكتروني غير مقبول',
  "in": 'الخانة يجب ان تكون :values',
  integer: 'أدخل ارقام فقط',
  max: 'Η τιμή του πεδίου :attribute δεν μπορεί να είναι μεγαλύτερη απο :max:type.',
  min: 'Η τιμή του πεδίου :attribute πρέπει να είναι τουλάχιστον :min:type.',
  not_in: 'الخانة يجب الا تكون :values',
  not_regex: 'Η τιμή :attribute δεν πρέπει να ταιριάζει με το υπόδειγμα.',
  numeric: 'استخدم ارقام فقط',
  numeric_slash_dash: 'استخدم ارقام و شرطة (-) و (\) فقط',
  phone: 'رقم الهاتف غير مقبول',
  regex: 'Η τιμή του πεδίου :attribute πρέπει να ταιριάζει στο υπόδειγμα.',
  required: 'الخانة إلزامية',
  size: 'Η τιμή του πεδίου :attribute πρέπει να ισούται με :size:type.',
  string: 'يرجي مراجعة النص',
  "typeof": 'Η τιμή του πεδίου :attribute δεν ταιρίαζει με τον τύπο :type.',
  url: 'الرابط غير مقبول'
});
return null;
}));
