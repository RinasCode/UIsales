import React, { useState } from "react";

function UserList() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "john_doe",
      email: "john@example.com",
      password: "password123",
    },
    {
      id: 2,
      username: "jane_smith",
      email: "jane@example.com",
      password: "password456",
    },
  ]);

  const [newUser, setNewUser] = useState({ username: "", email: "", password: "" });
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddUser = () => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ username: "", email: "", password: "" });
    setModalOpen(false);
  };

  const handleEditUser = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    if (userToEdit) {
      setNewUser(userToEdit);
      setModalOpen(true);
    }
  };

  return (
    <div>
      {/* Tabel User */}
      <div className="mb-4">
        <h2 className="text-center text-2xl font-bold mb-4">USER LIST</h2>
        <button
          onClick={() => setModalOpen(true)}
          className="btn btn-primary mb-4"
        >
          Add User
        </button>

        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-center">No</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Username</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Email</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Password</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{user.username}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{user.email}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{user.password}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => handleEditUser(user.id)}
                      className="btn btn-warning"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Add/Edit User */}
      {modalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl mb-4">{newUser.id ? "Edit User" : "Add New User"}</h3>
            <div>
              <label className="block text-sm font-semibold">Username</label>
              <input
                type="text"
                value={newUser.username}
                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                className="input input-bordered w-full mb-2"
                placeholder="Username"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Email</label>
              <input
                type="email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                className="input input-bordered w-full mb-2"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Password</label>
              <input
                type="password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                className="input input-bordered w-full mb-2"
                placeholder="Password"
              />
            </div>
            <div className="mt-4">
              <button
                onClick={handleAddUser}
                className="btn btn-primary w-full mb-2"
              >
                {newUser.id ? "Save Changes" : "Add User"}
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="btn btn-secondary w-full"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserList;
