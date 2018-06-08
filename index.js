function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested')
}

function increaseRankBy(n){
  var rank=document.querySelectorAll('.ranked-list li')
  for (let i=0; i<rank.length;i++){
    rank[i].innerHTML=parseInt(rank[i].innerHTML)+n
  }
}


function deepestChild(){
  var deep=document.querySelectorAll('div#grand-node div')
  var str=''
  for (let i=0; i<deep.length; i++){
    str=str+' div'
  }
  return str, document.querySelector('div#grand-node div'+str)
}
