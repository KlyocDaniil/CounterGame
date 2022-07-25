let btn = document.getElementById('butclick')
let pl = document.getElementById('idpl')
let counter = 0;


btn.addEventListener('click', () =>{
   if(IdPerk==='1'){
       counter+=2;
   }
   else if (IdPerk === '2')
   {
       counter+=3
       // alert(Perks)
   }
   else if(IdPerk ==='3')
   {
       counter+=4
   }
   else if(IdPerk ==='4')
   {
       counter+=5
   }
   else
   {
       counter +=1;
   }

   // for (let i = 0;i<Perks.length;i++){
   //
   // }



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
let perk2 = document.getElementById('perk2')
let perk3 = document.getElementById('perk3')
let perk4 = document.getElementById('perk4')
let BuyItemBtn1 = document.getElementById("btnBuyItemNum1")
let IdPerk = 0;
BuyItemBtn1.addEventListener('click',()=>{
    if(coinsMain>=1&&perk1!==1) {
        coinsMain -= 1;
        coins.innerText = `Количество монет:${coinsMain.toFixed(1)}`
        perk1.innerText = `x2 Улучшение`
        perk1 = 1;
        btn.innerText = `+2`;
        IdPerk = '1';
        Perks.push(IdPerk)
    }
    else
    {
        alert("У вас нет денег... Серьезно?, надеюсь у вас просто уже есть этот перк")
    }
})
let BuyItemBtn2 = document.getElementById('btnBuyItemNum2')
BuyItemBtn2.addEventListener('click',()=>{
    if(coinsMain>=2&&perk2!==2){
    coinsMain -= 2;
    coins.innerText=`Количество монет:${coinsMain.toFixed(1)}`
    perk2.innerText=`x3 Улучшение`
        perk2 = 2;
    btn.innerText =`+3`;
    IdPerk ='2';
    Perks.push(IdPerk)}
    else
    {
        alert("У вас нет денег или этот перк уже есть!")
    }
})
let BuyItemBtn3 = document.getElementById('btnBuyItemNum3')
BuyItemBtn3.addEventListener('click',()=>{
    if(coinsMain>=3&&perk3!==3){
    coinsMain -= 3;
    coins.innerText=`Количество монет:${coinsMain.toFixed(1)}`
    perk3.innerText=`x4 Улучшение`
        perk3 =3;
    btn.innerText =`+4`;
    IdPerk ='3';
    Perks.push(IdPerk)
        }else {
        alert("У вас нет денег или этот перк уже есть!")
    }
})
let BuyItemBtn4 = document.getElementById('btnBuyItemNum4')
BuyItemBtn4.addEventListener('click',()=>{
    if(coinsMain>4&&perk4!==4) {
        coinsMain -= 4;
        coins.innerText = `Количество монет:${coinsMain.toFixed(1)}`
        perk4.innerText = `x5 Улучшение`
        perk4=4;
        btn.innerText = `+5`;
        IdPerk = '4';
        Perks.push(IdPerk)
    }
    else
    {
        alert("У вас нет денег или этот перк уже есть!")
    }
})




