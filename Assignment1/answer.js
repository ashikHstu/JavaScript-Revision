// Question 1: Value Detective
function describeValue(value)
{
    type = typeof(value);
    truthy_check = (value)?true:false;
    return `${type} | ${truthy_check}`;
}
// Testing:
// console.log(describeValue(10));
// console.log(describeValue(0));
// console.log(describeValue("Hello"));
// console.log(describeValue(""));
// console.log(describeValue(NaN));
// console.log(describeValue(null));



// Question 2: Bangladesh Weekend Machine 
function getDayType(day){
    day = day.toLowerCase();
    switch(day){
        case "friday":
            return "Weekend";
        case "saturday":
            return "Weekend";
        case "sunday":
            return "Working Day";
        case "monday":
            return "Working Day";
        case "tuesday":
            return "Working Day";
        case "wednesday":
            return "Working Day";
        case "thursday":
            return "Working Day";
        default:
            return "Invalid Day";
    }
}

// console.log(getDayType("Friday"));
// console.log(getDayType("friday"));
// console.log(getDayType("Monday"));
// console.log(getDayType("Bandarban"));



//Question 3: Username Gatekeeper 

function validateUsername(username){
    username = username.toLowerCase();

    if(username.length <4)
        return "Too Short";
    else if (username.includes(" "))
        return "No Space Allowed";
    else if (username.includes("admin"))
        return "Reserved Word";
    else 
        return "Available";
}

// console.log(validateUsername("asif ashik"));
// console.log(validateUsername("asif"));
// console.log(validateUsername("asifadminasif"));



// Question 4: Dhaka CNG Fare Meter

function getCngFare(distance, isNight=false, waitingMinutes=0){
    total_fare = 50+ waitingMinutes * 2;
    if(distance>2)
        total_fare += (distance-2)*15;
    if(isNight)
        total_fare = total_fare + (total_fare * 0.2);
    return total_fare;
}

// console.log(getCngFare(2));
// console.log(getCngFare(1));
// console.log(getCngFare(5));
// console.log(getCngFare(10));
// console.log(getCngFare(5,false,10));
// console.log(getCngFare(5,true));
// console.log(getCngFare(5, true, 10));



//Question 5: Run Chase Commentator

const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;

  if (runsNeeded <= 0) {
    return "Won";
  }

  if (ballsLeft <= 0) {
    return "Lost";
  }

  const requiredRate = (runsNeeded / ballsLeft) * 6;
  let verdict = "";

  if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }

  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
}

// console.log(getChaseVerdict(200, 200, 12)); 
// console.log(getChaseVerdict(200, 190, 0));  
// console.log(getChaseVerdict(100, 90, 12));  
// console.log(getChaseVerdict(100, 80, 12));  
// console.log(getChaseVerdict(100, 70, 12));  
// console.log(getChaseVerdict(150, 149, 1)); 
