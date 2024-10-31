import React, { useEffect, useState } from 'react';
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const { authorizationToken, API } = useAuth();

  const getAllUsersData = async () => {
    setLoading(true); // Set loading to true when fetching starts
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(`users ${data}`);

      // Ensure data is an array before setting state
      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        console.error("Data is not an array:", data);
        setUsers([]); // Set to empty array if data is not as expected
      }
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setLoading(false); // Set loading to false when fetch is complete
    }
  };

  // Delete the user on delete button click
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
      const data = await response.json();
      console.log(`users after delete:  ${data}`);

      getAllUsersData(); // Refresh user list after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1>Admin Users Data </h1>
        </div>
        <div className="container admin-users">
          {loading ? ( // Show loading message or spinner while loading
            <h2>Loading users...</h2>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((curUser) => ( // Use curUser directly
                    <tr key={curUser._id}>
                      <td>{curUser.username}</td>
                      <td>{curUser.email}</td>
                      <td>{curUser.phone}</td>
                      <td>
                        <Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link>
                      </td>
                      <td>
                        <button
                          className="btn"
                          onClick={() => deleteUser(curUser._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No users found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </>
  );
}

export default AdminUsers;
