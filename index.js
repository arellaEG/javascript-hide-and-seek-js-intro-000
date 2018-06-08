function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested')
}

function increaseRankBy(n){
  var rank=document.querySelectorAll('.ranked-list')
  for (let i=0; i<rank.length;i++){
    rank[i].li=rank[i].li+n
  }
}
