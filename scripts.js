let btn = document.getElementById('butclick')
let pl = document.getElementById('idpl')
let counter = 0;


btn.addEventListener('click', () =>{
   if(IdPerk==='1'){
       counter+=2;
   }
   else
   {
       counter +=1;
   }



    pl.innerText = `Кликов:${counter}`
})
let brnDel= document.getElementById('delal')

brnDel.addEventListener('click', ()=>{
    counter=0;
    pl.innerText = `Кликов:${counter}`

})

let SaveCounter = [];
let btnSave = document.getElementById('save')
let check = document.getElementById('checkSave')
btnSave.addEventListener('click', () =>{
    SaveCounter.push(counter)
})
check.addEventListener('click',()=>{
    alert(SaveCounter)
})

let changer = document.getElementById('changeClicksToCoins')
let coins = document.getElementById('coins')
let coinsMain = 0;

changer.addEventListener('click',()=>{
    let countClicks = SaveCounter.pop()
    let MathTime = countClicks/10;
    if(MathTime>=0) {
        coinsMain += MathTime;
        coins.innerText = `Количество монет: ${coinsMain}`
        counter = 0;
        pl.innerText = `Кликов:${counter}`
    }
})
let Perks = []
let perk1 = document.getElementById('perk1')
let BuyItemBtn = document.getElementById("btnBuyItemNum1")
let IdPerk = 0;
BuyItemBtn.addEventListener('click',()=>{
    coinsMain -= 1;
    coins.innerText=`Количество монет:${coinsMain.toFixed(1)}`
    perk1.innerText=`x2 Улучшение`
    btn.innerText =`+2`;
    IdPerk ='1';
    Perks.push(IdPerk)
})




