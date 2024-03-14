export default function updateStudentGradeByCity(arr, city, newGrades) {
  const studentCity = arr.filter((student) => student.city === city);

  return studentCity.map((student) => {
    const newStudent = { ...student };
    const allGrades = newGrades.filter((grade) => student.id === grade.studentId);

    if (allGrades.length === 0) {
      newStudent.grade = 'N/A';
    } else {
      newStudent.grade = allGrades[0].grade;
    }

    return student;
  });
}
