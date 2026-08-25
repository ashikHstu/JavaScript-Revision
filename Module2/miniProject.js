let students = [
    {id:101,name:"Ashik", age: 20, department: "CSE"},
    {id: 102, name: "Asif", age: 22, department: "EEE"},
];

function addStudent(name, age, dept)
{
    let newId = students.length>0?  students[students.length -1].id+1  : 101;
    let newStudent = {
        id:newId,
        name: name,
        age:age,
        department: dept,
    };
    students.push(newStudent);
    console.log("Student added successfully.");
}

function getAll()
{
    for(const student of students)
    {
        console.log(student);
    }
}

function findStudent(id)
{
    let foundStd = null;

    for (let student of students)
    {
        if(student.id == id){
            foundStd = student;
            break;
        }
    }

    if(foundStd){
        console.log("Found student: ",foundStd);

    }
    else {
        console.log("404 not found student");
    }
}

function deleteStudent(id)
{
    let targetStudent = -1;

    for (let i = 0;i<students.length;i++)
    {
        if(students[i].id==id)
        {
            targetStudent = i;
        }
    }

    if(targetStudent!=-1)
    {
        let deletedStd = students.splice(targetStudent, 1);
        console.log(`Deleted ${deletedStd[0].name}, id: ${deletedStd[0].id}`)
    }
    else{
        console.log("404 student not found!");
    }
}

addStudent("Fahim", 25, "AI");
// console.log(students);
getAll();
findStudent(101);
deleteStudent(101);

getAll();