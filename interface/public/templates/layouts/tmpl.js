define(function() {
function encodeHTMLSource() {  var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },  matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;  return function() {    return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;  };};
String.prototype.encodeHTML=encodeHTMLSource();
var tmpl = {};
  tmpl['app']=function anonymous(it) {
var out='<div class="app"><header class="app-header"><div class="app-search" data-content="search">'+(it.search)+'</div></header><div class="app-translations" data-content="translations">'+(it.translations)+'</div><div class="app-edit" data-content="edit">';if(it.edit){out+=(it.edit);}out+='</div></div>';return out;
};
return tmpl;});