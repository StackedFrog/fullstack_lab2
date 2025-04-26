import React, { useState, useEffect } from 'react';

const ProjectAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortKey, setSortKey] = useState(null);

  // Fetch data function
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/project_assignments");
      const data = await response.json();
      setAssignments(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  // Auto-refresh setup
  useEffect(() => {
    fetchData(); // Initial fetch
    
    const interval = setInterval(fetchData, 60000); // Refresh every minute
    
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const sortedAssignments = React.useMemo(() => {
    if (!sortKey) return assignments;
    
    return [...assignments].sort((a, b) => {
      let valueA, valueB;
      
      if (sortKey === "Employee_ID") {
        valueA = a.employee_id.employee_id;
        valueB = b.employee_id.employee_id;
      } 
      else if (sortKey === "Employee_name") {
        valueA = a.employee_id.full_name;
        valueB = b.employee_id.full_name;
      }
      else if (sortKey === "Project_name") {
        valueA = a.project_code.project_name;
        valueB = b.project_code.project_name;
      }
      else if (sortKey === "Start_date") {
        valueA = new Date(a.start_date);
        valueB = new Date(b.start_date);
      }
      
      if (valueA < valueB) return -1;
      if (valueA > valueB) return 1;
      return 0;
    });
  }, [assignments, sortKey]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="project-assignments">
      <h2>Latest Project Assignments</h2>
      <table>
        <thead>
          <tr>
            <th onClick={() => setSortKey("Employee_ID")}>Employee ID</th>
            <th onClick={() => setSortKey("Employee_name")}>Employee Name</th>
            <th onClick={() => setSortKey("Project_name")}>Project Name</th>
            <th onClick={() => setSortKey("Start_date")}>Start Date</th>
          </tr>
        </thead>
        <tbody>
          {sortedAssignments.slice(0, 5).map((assignment) => (
            <tr key={assignment._id}>
              <td>{assignment.employee_id.employee_id}</td>
              <td>{assignment.employee_id.full_name}</td>
              <td>{assignment.project_code.project_name}</td>
              <td>{new Date(assignment.start_date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectAssignments;