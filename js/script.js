let course1 = {
    code: "ACIT 1620",
    name: "Web Fundamental Technologies"
};

let course2 = {
    code: "ACIT 1420",
    name: "Introduction to Systems Administration",
}
 
let course3 = {
    code: "ACIT 1515",
    name: "Scripting for IT",
}
 
let courselist = [course1, course2, course3];

let num;
do
{
    num  = prompt("Enter 4-digit number: ")  
}
while (!Number(num))
