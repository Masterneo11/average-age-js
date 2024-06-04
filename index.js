



document.getElementById("calculate").addEventListener("click", (e) => {


    
const superHeroes = {
    Tony: 42,
  Peter: 18,
  Steve: 104,
  Bruce: 38,
  Thor: 1055
}

function averageAge(superHeroes){
    let i = 0;
    let counter = 0;
    let divide = 0;
    
    for (const [key, value] of Object.entries(superHeroes)) {
        counter += value; 
        divide += 1;
    total = counter / divide; 
    }
    

    console.log(total);    
    }
    averageAge(superHeroes);
}
);