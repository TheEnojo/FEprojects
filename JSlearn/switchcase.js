let   a= true
console.log(typeof a)

switch(typeof a){
    case 'number':
        console.log('a is a number');
        break;

        case 'string':
            console.log('a is a string');
            break;

            case 'boolean':
                console.log('a is a boolean');
                break;

                default:
                console.log('a is an object');
                break;
}

//check if a number is even or odd

let number= 5;

switch(number % 2){
 case 0:
    console.log('number is even')
break;
    default:
        console.log('number is odd')
break;
}

// new switch example

let day = 0;
let dayName;

switch (day) {
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
}

console.log(dayName);




























