function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested')
}

function increaseRankBy(n){
  var rank=document.querySelectorAll('.ranked-list li')
  for (let i=0; i<rank.length;i++){
    parseInt(rank[i].innerHTML)=parseInt(rank[i].innerHtml)+n
  }
}
