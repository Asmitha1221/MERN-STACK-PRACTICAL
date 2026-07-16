let student = {
    name: "Asmitha",
    rollno: 2,
    marks: 95
};
console.log("Original Object:");
console.log(student);
//accesing property 
console.log("\nAccessing property:");
console.log("Name:", student.name);
console.log("Marks:", student.marks);
//updating property
student.marks = 95;
console.log("\nAfter Updating Marks: \n", student);
//adding new property
student.city = "Mumbai";
console.log("\nAfter Adding: \n", student);
//delete property
delete student.rollno;
console.log("\nAfter deleteing rollno: \n", student)
console.log("~Asmitha")


