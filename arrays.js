document.addEventListener("DOMContentLoaded", function() {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 

    //opgave 1
    let newNumbers = numbersArray.filter(function(number) {
        return number > 20;
    })
    console.log(newNumbers);

    // opgave 2
    catsArray.push("Sniffles");
    console.log("opgave 2", catsArray);

    //opgave 3 
    let hasTrixie = dogsArray.includes("Trixie")
    console.log("Opgave 3", hasTrixie);

    let hasBaxter = dogsArray.some(function(dog){ return dog == "Baxter"})
    let hasBaxterArrow = dogsArray.some((dog) => dog == "Baxter")
    console.log("opgave 3b", hasBaxter);

    //opgave 4
    let hasBagheera = catsArray.find((cat) => cat == "Bagheera")
    let hasBagheeraFunction = catsArray.find(function(cat){return cat = "Bagheera"})
    console.log("opgave 4a", hasBagheera);

    let hasSalem = catsArray.find(cat => cat == "Salem")
    console.log(("opgave 4b", hasSalem));

    //opgave 5

    let multiplied = numbersArray.map((number) => number * 3)
    console.log("opgave 5", multiplied);

    //opgave 6
    let dogsString = dogsArray.join("")
    console.log("opgave 5", dogsString);

    //opgave 7 

    let mangoIndex = fruitsArray.indexOf("Mango")
    console.log("Opgave 7a", mangoIndex);

    let blueberryIndex = fruitsArray.indexOf("Blåbær")
    console.log("Opgave 7b", blueberryIndex);

    //opgave 8 
    let dogsModified = dogsArray.filter(dog => dog != "Polly")
    console.log(dogsModified);

    //ekstra opgave 
    let sum = numbersArray.reduce((result, number) => result + number, 500)
    console.log("ekstraopgave", sum);
}) // ends DOMContentLoaded