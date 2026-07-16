//function calculateSalary(name, basicSalary){
   // let bonus = 5000;
   // let totalSalary = basicSalary + bonus;

   // console.log("Employee Name:", name);
  //  console.log("Basic Salary:", basicSalary);
   // console.log("Bonus:", bonus);
   // console.log("Total Salary:", totalSalary);
//}
//calculateSalary("Anu", 50000);
//console.log("~Asmitha");

function generateBill(product, quantity, price)
{
    let total = quantity * price;
    let bill = total + (total * 0.09);

    console.log("Product:", product);
    console.log("Quantity:", quantity);
    console.log("Price per item:", price);
    console.log("Total Bill", bill);
}
generateBill("Laptop", 2, 50000)
console.log("~Asmitha");