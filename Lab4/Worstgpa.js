function FindLowestGPA(listofstudents)
{
var LowestGPA;
list of students.forEach(
element=>
{
if (LowestGPA == null)
{
LowestGPA=element;}
else
{ if (element.gpa < LowestGPA.gpa)
{
LowestGPA=element;}
}
}
);
return LowestGPA;
}
function Run4()
{
console.log(theJSON);
var students = theJSON.data;
var LowestGPA = FindWorstStudent(students);
console.log("The lowest student has been found. It is");
console.log(LowestGPA);
}
