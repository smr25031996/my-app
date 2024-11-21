import React from "react";

function MapFunctionInJs() {
  var employees = [
    { empId: 1234, name: "john Doe", designation: "SE" },
    { empId: 4567, name: "Bron Rock", designation: "SSE" },
    { empId: 8901, name: "EL Smith", designation: "SE" },
  ];

  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>EMP ID</th>
            <th>EMP Name</th>
            <th>Designation </th>
          </tr>
        </thead>
        <tbody>
            {employees.map((employee)=>{
                return(
                    <tr key={employee.empId}>
                        <td>{employee.empId}</td>
                        <td>{employee.name}</td>
                        <td>{employee.designation}</td>

                    </tr>
                )
            })}
        </tbody>
      </table>
    </React.Fragment>
  );
}
export default MapFunctionInJs;
