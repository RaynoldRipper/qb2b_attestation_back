const r={phoneFormat(e){return e.toString().replace(/\D+/g,"").replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,"$1-($2)-$3-$4-$5")},dateFormat(e){return new Date(e).toLocaleDateString()}};var t=r;export{t as h};