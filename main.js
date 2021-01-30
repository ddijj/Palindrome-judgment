const r = true;
let n = 0
let k_list=[];
const alf=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const Palindrome = (str) => {
  var strn=str.split('')
  return strn.reverse().join('')
}
const abc = (al) =>{
  var strn=al.split('')
  var t=true
  for(var i=0;i< strn.length;i++){
    if(alf.indexOf(strn[i]) == -1){
      t=false
    }
  }
  return t;
}
const rr = (s) =>{
  var t=s.split('')
  var m=false
  for(var i=0;i<t.length;i++){
    if(t[i]!=t[0]){
     m=true
    }
  }
  return m
}
const aiu=['あ','い','う','え','お','か','き','く','け','こ','さ','し','す','せ','そ','た','ち','つ','て','と','は','ひ','ふ','へ','ほ','ま','み','む','め','も','や','ゆ','よ','ら','り','る','れ','ろ','わ','を','ん']
const hk = (stl) => {
  var strn=stl.split('')
  var t=true
  for(var i=0;i< strn.length;i++){
    if(aiu.indexOf(strn[i]) == -1){
      t=false
    }
  }
  return t;
}
var app = new Vue({
el: '#app',
data: {
message: 'sos',
h: "回文か判定",
point : 0,
list :""
},
methods: {
reverseMessage: function () {
  console.log(k_list)
  if(Palindrome(this.message) == this.message){
  this.h="これは回文です"
  console.log(k_list.length)
  if(abc(this.message)){
    this.message = this.message.toUpperCase();
    console.log(this.message)
  }
  else if(hk(this.message)==false){
    this.h="カタカナ、漢字は使えません"
    r=false
  }
  if(k_list.indexOf(Palindrome(this.message))===-1  && rr(this.message) && r){
    k_list.push(Palindrome(this.message))
    app.point=k_list.length
    var sl=""
    for(var i=0;i<k_list.length;i++){
      sl=sl+"\n"+k_list[i]
    }
    this.list=sl
    console.log(sl)
  }
  }
  else{
    this.h="回文か判定"
  }
}
}
})