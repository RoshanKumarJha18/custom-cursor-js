var page=document.querySelector("#main")
var cursor=document.querySelector(".cursor")

page.addEventListener("mousemove",function(e){
    cursor.style.left=e.x+"px"
    cursor.style.top=e.y+"px"
})