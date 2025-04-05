const setup = () => {
    vanObjectNaarString();
    vanJsonNaarObject();
}
const vanObjectNaarString = () => {
    let student={
        voornaam : "Seppe",
        familienaam : "De Moor",
        geboorteDatum : new Date("2005-03-20"),
        adres : {
            straat : "Pierenstraat 17",
            postcode : "9620",
            gemeente : "Zottegem"
        }
    }

    let jsonStudent = JSON.stringify(student);
    console.log(jsonStudent);
}
const vanJsonNaarObject = () => {
    let student = JSON.parse('{"voornaam":"Seppe","familienaam":"De Moor","geboorteDatum":"2005-03-20T00:00:00.000Z","adres":{"straat":"Pierkenstraat 17","postcode":"9620","gemeente":"Zottegem"}}');
    console.log(student);
    console.log(student.voornaam);
    console.log(student.adres.gemeente);
}
window.addEventListener("load", setup);