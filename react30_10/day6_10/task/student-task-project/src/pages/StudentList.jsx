
function StudentList() {
  let students = [
    "Arun",
    "Priya",
    "Karthik",
    "Divya",
    "Sanjay"
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold text-blue-700">
        Student List
      </h2>

      <ul className="list-disc pl-6">
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
