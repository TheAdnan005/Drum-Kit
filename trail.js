function HouseKeeper(yearsOfExpereince,name,cleaningReport){

    this.yearsOfExpereince=yearsOfExpereince;
    this.name=name
    this.cleaningReport=cleaningReport
    this.clean=()=>{
        console.log("cleaning in progress ....");
    }
}

let Micky= new HouseKeeper(12,"Mickey",["Bathroom","Bedroom"])
let Ricky= new HouseKeeper(12,"Mickey",["Bathroom","Bedroom"])
let Ticky= new HouseKeeper(1,"Tickey",["Bathroom","Bedroom"])


console.log(`${Ticky.name} , ${Ticky.yearsOfExpereince} , ${Ticky.cleaningReport} `);

Micky.clean()