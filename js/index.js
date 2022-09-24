import {log,logTitle} from "./logger/main.js"


logTitle("Learn JavaScript")

const person={
    name:"Mahmoud",
    age:20,
    hasDriverLicence:true,
    Language:{
        Programming:["C++","Javascript","Java"],
        speaksEnglish:true,
        native:"Arabic"
    }
}

log(JSON.stringify(person))
log(person.name)
log(person.age)
log(Object.values(person))

