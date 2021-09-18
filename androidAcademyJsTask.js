function getTopStudents (students,attendees, N){
    studentLecturesObj = {}
    studentsSet = new Set(students)
    for (let lectIndex = 0; lectIndex < attendees.length; lectIndex++) {
        attendees[lectIndex]
        .filter(attendee => studentsSet.has(attendee))
        .forEach(attendee => {studentLecturesObj[attendee] =
             (studentLecturesObj[attendee] || new Set()).add(lectIndex)
        });
    }

    appearancesStudentsObject = {}
    for (const [key, value] of Object.entries(studentLecturesObj)) {
        appearancesStudentsObject[value.size] = (appearancesStudentsObject[value.size] || []);
        appearancesStudentsObject[value.size].push(key)
      }
      topStudentsOrdered=[]
      Object.keys(appearancesStudentsObject).sort().reverse().
      forEach(amount=>{Array.prototype.push.apply(topStudentsOrdered, appearancesStudentsObject[amount]);})
    return topStudentsOrdered.slice(0, N);
}


students = ['Eden', 'Refael', 'Yoni', 'Nitzan', 'Hadas']

attendees = [['Eden', 'Refael', 'Yoni', 'Nitzan', 'Hadas', 'Ortal'], 
 ['Berry', 'Nitzan', 'Yoni', 'Eden', 'Hadas', 'Ortal'], 
 ['Maxim', 'Ortal', 'Yoni', 'Refael', 'Nitzan', 'Alex'], 
    ['Eden', 'Andrew', 'Yoni', 'Nitzan', 'Ortal','Nitzan']]

N = 4

top = getTopStudents(students, attendees, N)
console.log("Top "+N+" students are - "+top)
