function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    return 'This one is on me!'
  } else if (feet > 2000); {
    return feet > 2000 && feet <= 2500 ? "I will gladly take your thirty bucks." : "No can do.";
  } 
}

function ternaryCheckCity(city){
    return city === 'NYC'? 'Ok, sounds good.' : "No go.";
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
      break;
  }
}

