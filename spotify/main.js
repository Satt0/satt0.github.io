
const menu=document.getElementById('drawer')
const btn=document.getElementById('toggle')
const body=document.getElementsByTagName('body')[0]
const backdrop=document.getElementById('backdrop')
let flag=true;
btn.addEventListener('click',()=>{
    flag=!flag
    if(flag){
        menu.classList="nav-responsive"
        body.style.overflow=""
    }
    else{
        menu.classList="nav-responsive show"
        body.style.overflow="hidden"
    }
})
backdrop.addEventListener('click',()=>{
    menu.classList="nav-responsive"
    body.style.overflow=""
    flag=true
})
window.addEventListener('resize',()=>{
    if(window.innerWidth>1092){
        menu.classList="nav-responsive"
        body.style.overflow=""
        flag=true
    }
})