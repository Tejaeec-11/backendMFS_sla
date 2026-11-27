import { useRef, useState } from "react";

const Task1StudentForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const ageRef = useRef(null);

  const [students, setStudents] = useState([]);

  const handleAdd = () => {
    const obj = {
      id: Date.now(),
      name: nameRef.current.value,
      email: emailRef.current.value,
      age: ageRef.current.value,
    };

    if (!obj.name || !obj.email || !obj.age) {
      alert("Please fill all fields");
      return;
    }

    setStudents((prev) => [...prev, obj]);

    nameRef.current.value = "";
    emailRef.current.value = "";
    ageRef.current.value = "";

    nameRef.current.focus();
  };

  return (
    <div>
      <h2>Student Form</h2>
      <input type="text" placeholder="Enter Name"  ref={nameRef}/>
      <input type="email"placeholder="Enter Email" ref={emailRef}/>
      <input type="number" placeholder="Enter Age" ref={ageRef}/>
      <button onClick={handleAdd}>Add</button>
      <h3>Student Details</h3>
      {students.map((student) => (
        <div key={student.id}>
          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
          <p>Age: {student.age}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Task1StudentForm