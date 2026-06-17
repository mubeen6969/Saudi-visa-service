import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/applications"
      );

      console.log("Applications:", res.data);

      setApplications(res.data);
    } catch (err) {
      console.log("Admin Error:", err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:5000/api/applications/${id}`,
        { status }
      );

      fetchApplications();
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <table className="w-full border">
        <thead>
          <tr>
            <th>Tracking ID</th>
            <th>Name</th>
            <th>Visa</th>
            <th>Status</th>
            <th>Change Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((app) => (
            <tr key={app._id}>
              <td>{app.trackingId}</td>
              <td>{app.fullName}</td>
              <td>{app.visaType}</td>

              <td>{app.status}</td>

              <td>
                <select
                  id={`status-${app._id}`}
                  defaultValue={app.status}
                >
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </td>

              <td>
                <button
                  onClick={() => {
                    const status =
                      document.getElementById(
                        `status-${app._id}`
                      ).value;

                    updateStatus(app._id, status);
                  }}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;