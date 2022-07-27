let btn = document.getElementById('butclick')
let pl = document.getElementById('idpl')
let counter = 0;


btn.addEventListener('click', () =>{
    switch (IdPerk){
        case 0:
            counter+=1
            break;
        case '1':
            counter +=2
            break;
        case '2':
            counter +=3
            break;
        case '3':
            counter +=4
            break;
        case '4':
            counter +=5
            break;

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
    try{
        SaveCounter.push(counter)
        counter=0;
        pl.innerText="Кликов:0"
    if(SaveCounter.length>1){
        throw new Error();
    }
    }
    catch (ErrorFoundArrayIsLargeThen1){
    alert('Вы можете сохранить только одну сумму кликов')
    }

})
check.addEventListener('click',()=>{
    alert(SaveCounter)
})

let changer = document.getElementById('changeClicksToCoins')
let coins = document.getElementById('coins')
let coinsMain = 0;


let kart1 = document.getElementById('kart1')
kart1.classList.add("BlockedCard")
let kart2 = document.getElementById('kart2')
kart2.classList.add("BlockedCard")
let kart3 = document.getElementById('kart3')
kart3.classList.add("BlockedCard")
let kart4 = document.getElementById('kart4')
kart4.classList.add("BlockedCard")

function clearStyleBlock(object){
    this.classList.remove("BlockedCard")
}

changer.addEventListener('click',()=>{
    let countClicks = SaveCounter.pop()
    let MathTime = countClicks/10;
    if(MathTime>=0) {
        coinsMain += MathTime;
        if (coinsMain>=1){
            kart1.classList.remove("BlockedCard")
        }
        if (coinsMain>=2&&perCheck===1){
            kart2.classList.remove("BlockedCard")
        }
        if (coinsMain>=3&&perCheck===2){
            kart3.classList.remove("BlockedCard")
        }
        if (coinsMain>=4&&perCheck===3){
            kart4.classList.remove("BlockedCard")
        }
        coins.innerText = `Количество монет: ${coinsMain.toFixed(1)}`
        counter = 0;
        pl.innerText = `Кликов:${counter}`
    }
})
let Perks = []
let perCheck = 0;

// let perk1 = document.getElementById('perk1')

// let perk2 = document.getElementById('perk2')

// let perk3 = document.getElementById('perk3')

// let perk4 = document.getElementById('perk4')

let BuyItemBtn1 = document.getElementById("btnBuyItemNum1")
let IdPerk = 0;
BuyItemBtn1.addEventListener('click',()=>{
    if(coinsMain>=1&&perCheck!==1) {
        coinsMain -= 1;
        coins.innerText = `Количество монет:${coinsMain.toFixed(1)}`
        // perk1.innerText = "x2"
        perCheck = 1;
        btn.innerText = `+2`;
        IdPerk = '1';
        kart1.classList.add('Unlocked')
        Perks.push(IdPerk)
    }
    else
    {
        alert("У вас нет денег... Серьезно?, надеюсь у вас просто уже есть этот перк")
    }
})
let BuyItemBtn2 = document.getElementById('btnBuyItemNum2')
BuyItemBtn2.addEventListener('click',()=>{
    if(coinsMain>=2&&perCheck!==0&&perCheck!==2){
    coinsMain -= 2;
    coins.innerText=`Количество монет:${coinsMain.toFixed(1)}`
    // perk2.innerText=`x3`
        perCheck = 2;
    btn.innerText =`+3`;
    IdPerk ='2';
    kart2.classList.add('Unlocked')
    Perks.push(IdPerk)}
    else
    {
        alert("У вас нет денег или этот перк уже есть!")
    }
})
let BuyItemBtn3 = document.getElementById('btnBuyItemNum3')
BuyItemBtn3.addEventListener('click',()=>{
    if(coinsMain>=3&&perCheck!==3&&perCheck!==0&&perCheck!==0){
    coinsMain -= 3;
    coins.innerText=`Количество монет:${coinsMain.toFixed(1)}`
    // perk3.innerText=`x4`
        perCheck =3;
    btn.innerText =`+4`;
    IdPerk ='3';
    kart3.classList.add('Unlocked')
    Perks.push(IdPerk)
        }else {
        alert("У вас нет денег или этот перк уже есть!")
    }
})
let cheats = document.getElementById('btn_Cheat')

cheats.addEventListener('click', ()=>{
    coinsMain = 99999;
    coins.innerText =`Количество монет:${coinsMain.toFixed(1)}`
})


function clearFirstListCards(){
    kart1.remove()
    kart2.remove()
    kart3.remove()
    kart4.remove()
}

let btnNextLvl = document.getElementById('btn_NextLvl')
btnNextLvl.classList.add("BlockedCard")


    btnNextLvl.addEventListener('click', ()=>{
        if(perCheck === 4) {
            clearFirstListCards()
        }
    })



let BuyItemBtn4 = document.getElementById('btnBuyItemNum4')
BuyItemBtn4.addEventListener('click',()=>{
    if(coinsMain>4&&perCheck!==4&&perCheck!==0&&perCheck!==0&&perCheck!==0) {
        coinsMain -= 4;
        coins.innerText = `Количество монет:${coinsMain.toFixed(1)}`
        // perk4.innerText = `x5`
        perCheck=4;
        btn.innerText = `+5`;
        IdPerk = '4';
        kart4.classList.add('Unlocked')
        Perks.push(IdPerk)
        btnNextLvl.classList.remove("BlockedCard")

    }
    else
    {
        alert("У вас нет денег или этот перк уже есть!")
    }
})











