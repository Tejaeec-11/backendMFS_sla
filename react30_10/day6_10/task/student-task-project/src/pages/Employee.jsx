
function Employee() {
  let name = "Priya";
  let id = "EMP101";
  let designation = "React Developer";
  let salary = 35000;
  let company = "TCS";

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold text-blue-700">
        Employee Details
      </h2>
      <p>Employee ID: {id}</p>
      <p>Name: {name}</p>
      <p>Designation: {designation}</p>
      <p>Salary: ₹{salary.toLocaleString("en-IN")}</p>
      <p>Company: {company}</p>
    </div>
  );
}

export default Employee;
