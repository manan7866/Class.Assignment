let data : { name: string, classID : string , rollnumber: number, email: string , ispassed : boolean, subjects : string[],} = {
    name    : "abdul manan",
    classID : "12abc",
    rollnumber : 285997,
    email : "abdulmananwighio06@gmail.com",
    ispassed : true,
    subjects : ["English","Urdu","Programing"]


}
console.log(data.name)
console.log(data.classID)
console.log(data.rollnumber)
console.log(data.email)
console.log(data.ispassed)
console.log(data.subjects)
console.log(data.subjects[2])

let Pakistan: {} = {
    sindh : {
        city1 : "karachi",
        city2 : "hyderabad",
        city3 : "sukkur",

    },
    punjab : {
        city1 : "lahore",
        city2 : "multan",
        city3 : "Rawalpindi",
    },
    k_p_k : {
        city1 : "Peshawar",
        city2 : "Mardan",
        city3 : "Malakand",
    },
    balochistan : {
        city1 : "Quetta",
        city2 : "zohib",
        city3 : "Gawader"
    }
}



console.log(Pakistan)

let aerry1 : any[] = [["a","b","c"],{
     abc : {
        name : "abdul manan"

},
},"Abdul Manan",]

console.log(aerry1)