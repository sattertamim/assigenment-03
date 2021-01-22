// function kilometerToMeter(kilometer){
//     if(kilometer > 0){
//         var meter = kilometer*0.001;
//         return meter;
//     }
//     else{
//         return "Parameter can not be negetive";
//     }
// }

// var output = kilometerToMeter(1200);
// console.log(output);

// function budgetCalculator(clock, phone, laptop){
//         if(clock >= 0 && phone >= 0 && laptop >= 0){
//             clock = clock * 50;
//             phone = phone * 100;
//             laptop = laptop * 500;
//             total = clock + phone + laptop;
//             return total;
//         }
//         else{
//             return "Please enter a value greter than 0";
//         }
// }
// var totalCost = budgetCalculator(2,0,0);
// console.log(totalCost);

// function hotelCost(day){
//     if(day <= 10 && day >0){
//      var   cost = day * 100;
//         return cost;
//     }
//     else if (day > 10 && day <= 20)
//     {
//       var  remainDay = day - 10;
//       var  cost = (10 * 100) + (remainDay * 80);
//         return cost;
//     }
//     else if (day > 20)
//     {
//         var  remainDay = day - 20;
//         var  cost = (10 * 100) +(10 * 80) + (remainDay * 50);
//           return cost;
//       }
//       else {
//           return "Your balance is 0";
//       }
//     }

//     var totalCost = hotelCost(25);
//     console.log(totalCost);

function megaFriend(friends){
    var name = friends[0];
    for(var i = 0; i < friends.length; i++){
        var element = " ";
        if(element.length > name.length){
            name = element;
            return name;
        }
        else{
            return "The Array is Empty";
        }
    }
}


var friends = ["abul","kabul","mohaabul","bul","bulbul"];
var bigName = megaFriend(friends);
console.log(bigName);