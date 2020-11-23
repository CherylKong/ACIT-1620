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

function promt_user() {
  let num;
  do {
    num = prompt("Enter 4-digit number: ")
    while (num.length != 4) {
      num = prompt("Enter 4-digit number: ")
    }

  }
  while (!Number(num))

  return num
}

function createCourseArray() {
  let course_list = []
  code = document.querySelectorAll("a.left_side")
  date = document.querySelectorAll("p.left_side")
  for (let x = 0; x < code.length; x++) {
    let course;
    course = { code: code[x].innerText, date: date[x].innerText }
    course_list.push(course)
  }
  return course_list
}

function findCourse(course_list) {
  num = promt_user()
  course = document.querySelectorAll('section')
  let valid = 'false'
  for (let y of course) {
    if (y.innerText.includes(num)) {
      valid = 'true'
      y.style.backgroundColor = 'green'
    }
  }
  if(valid === 'false') 
  {
    let all_course =document.querySelector('main')
    let new_course = document.createElement("section")
    let new_para = document.createElement("p")
    let new_para1 = document.createElement("p")
    let new_para2 = document.createElement("p")
    let new_code = document.createTextNode(num)
    let new_date = document.createTextNode('Fall 2020')
    let new_descp = document.createTextNode('N/A')
    new_para.appendChild(new_code)
    new_para1.appendChild(new_descp)
    new_para2.appendChild(new_date)
    new_course.appendChild(new_para)
    new_course.appendChild(new_para1)
    new_course.appendChild(new_para2)
    new_course.setAttribute("class","last_course")
    all_course.appendChild(new_course)
    let last_course = document.querySelector(".last_course")
    last_course.style.borderBottom='solid gray 1px'
    
  }
}

createCourseArray()
findCourse(createCourseArray())
