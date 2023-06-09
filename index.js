var kagiz=document.querySelector('.kagiz')
var qayci=document.querySelector('.qayci')
var dash=document.querySelector('.dash')
var compSekil=document.querySelector('.compchoice')
var userScore=document.querySelector('.userScore')
var compScore=document.querySelector('.compScore')
var oyun=['d','q','k']
var compChoice='';
var userWin=0
var compWin=0
kagiz.onclick=function(){
        var index=Math.floor(Math.random()*oyun.length)
        kagiz.classList.add('secilen')
        dash.classList.remove('secilen')
        qayci.classList.remove('secilen')
        compSekil.classList.add('secim')
        compChoice=oyun[index]
        if(compChoice=='d'){
            userWin++
            compSekil.setAttribute('src', './dash.jpg')
            userScore.innerText=userWin
    
        }
        else if(compChoice=='q'){
            compWin++
            compSekil.setAttribute('src','./qayci.jpg')
            compScore.innerText=compWin
        }
        else{
            compSekil.setAttribute('src' ,'./kagiz.jpg')
        }
}
qayci.onclick=function(){
        var index=Math.floor(Math.random()*oyun.length)
        qayci.classList.add('secilen')
        dash.classList.remove('secilen')
        kagiz.classList.remove('secilen')
        compSekil.classList.add('secim')
        compChoice=oyun[index]
        if(compChoice=='d'){
            compWin++
            compSekil.setAttribute('src', './dash.jpg')
            compScore.innerText=compWin
    
        }
        else if(compChoice=='k'){
            userWin++
            compSekil.setAttribute('src','./kagiz.jpg')
            userScore.innerText=userWin
        }
        else{
            compSekil.setAttribute('src' ,'./qayci.jpg')
    
        }
}
dash.onclick=function(){
        var index=Math.floor(Math.random()*oyun.length)
        dash.classList.add('secilen')
        kagiz.classList.remove('secilen')
        qayci.classList.remove('secilen')
        compSekil.classList.add('secim')
        compChoice=oyun[index]
        if(compChoice=='q'){
            userWin++
            compSekil.setAttribute('src', './qayci.jpg')
            userScore.innerText=userWin
    
        }
        else if(compChoice=='k'){
            compWin++
            compSekil.setAttribute('src','./kagiz.jpg')
            compScore.innerText=compWin
        }
        else{
            compSekil.setAttribute('src' ,'./dash.jpg')
    
        }
}   
