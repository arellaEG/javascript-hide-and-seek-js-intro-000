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
  var tree=document.getElementById('grand-node')
  for (let i=0; i<tree.length-1; i++){
    str=str+' div'
  }
  return document.querySelector('div#grand-node div'+str)
}
