// if else, switch case, ternary

let age = 22;
if(age >= 18){
    console.log("Voter");
}
else if(age>=15){
    console.log("Pre-voter.");
}
else{
    console.log("Not a voter.");
}

switch(true){  // need to put "true" here, not the age.
    case age>=18:
        console.log("Voter");
        break;
    
    case age >= 15:
        console.log("Pre-Voter.")
        break;
    default:
        console.log("Not a voter.");
}

// ternary condition ? true: false;

age >= 18? console.log("voter") : console.log("Not Voter.");