console.log("switch statement")

// switch statement is extremly similar to the if and else statement

const age = 20

if (age < 18) {
    console.log("you cannot enter")
}else if (age === 21){
    console.log("you can enter")
}else {
    console.log("you are too small")
}


const superHero = "Captain Abdullateef"

switch (superHero){
    case "iron man":
        console.log("i am an iron man...");
        break;
        case "Good":
            console.log("i am a good man..")
            break;
            case "Captain Abdullateef":
                console.log("I am a captain")
                break;
                default:
                    console.log("Enter a valid superhero name")

}

