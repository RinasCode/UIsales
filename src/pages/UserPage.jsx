import React, { useState } from "react";

function UserList() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "rizky alamsyah",
      email: "rizky@globaldispomedika.com",
      status: "active",
      password: "password123",
    },
    {
      id: 2,
      username: "anita susanti",
      email: "anita@globaldispomedika.com",
      status: "non-active",
      password: "password456",
    },
    {
      id: 3,
      username: "budi santoso",
      email: "budi@globaldispomedika.com",
      status: "active",
      password: "password789",
    },
    {
      id: 4,
      username: "citra purnama",
      email: "citra@globaldispomedika.com",
      status: "non-active",
      password: "password321",
    },
    {
      id: 5,
      username: "dian maharani",
      email: "dian@globaldispomedika.com",
      status: "active",
      password: "password654",
    },
    {
      id: 6,
      username: "eko wahyudi",
      email: "eko@globaldispomedika.com",
      status: "non-active",
      password: "password987",
    },
    {
      id: 7,
      username: "fitri handayani",
      email: "fitri@globaldispomedika.com",
      status: "active",
      password: "password567",
    },
    {
      id: 8,
      username: "gilang ramadhan",
      email: "gilang@globaldispomedika.com",
      status: "non-active",
      password: "password345",
    },
    {
      id: 9,
      username: "hendra pratama",
      email: "hendra@globaldispomedika.com",
      status: "active",
      password: "password678",
    },
    {
      id: 10,
      username: "indra suryawan",
      email: "indra@globaldispomedika.com",
      status: "non-active",
      password: "password890",
    },
  ]);

  const [newUser, setNewUser] = useState({
    id: null,
    username: "",
    email: "",
    status: "active",
    kode_ps: "",
    password: "",
  });
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddOrEditUser = () => {
    if (newUser.id) {
      setUsers(users.map((user) => (user.id === newUser.id ? newUser : user)));
    } else {
      setUsers([...users, { ...newUser, id: users.length + 1 }]);
    }

    setNewUser({
      id: null,
      username: "",
      email: "",
      status: "active",
      kode_ps: "",
      password: "",
    });
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
    <div className="p-6 bg-gray-50 min-h-screen">
      <div>
        <h2 className="text-center text-2xl font-bold mb-2 mt-4">USER LIST</h2>
        <div className="flex justify-start mt-6 ml-10">
          <button
            onClick={() => setModalOpen(true)}
            className="btn btn-primary px-4 py-2 mb-6"
          >
            Add User
          </button>
        </div>

        {/* Tabel User */}
        <div className="overflow-x-auto bg-white shadow-md rounded-md">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-center">
                  No
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Username
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Email
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Status
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.username}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.email}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.status === "active" ? "Active" : "Non-Active"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => handleEditUser(user.id)}
                      className="btn btn-warning mr-2"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h3 className="text-xl mb-4">
                {newUser.id ? "Edit User" : "Add New User"}
              </h3>
              <div>
                <label className="block text-sm font-semibold">Username</label>
                <input
                  type="text"
                  value={newUser.username}
                  onChange={(e) =>
                    setNewUser({ ...newUser, username: e.target.value })
                  }
                  className="input input-bordered w-full mb-2"
                  placeholder="Username"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">Email</label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                  className="input input-bordered w-full mb-2"
                  placeholder="Email"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">Password</label>
                <input
                  type="password"
                  value={newUser.password}
                  onChange={(e) =>
                    setNewUser({ ...newUser, password: e.target.value })
                  }
                  className="input input-bordered w-full mb-2"
                  placeholder="Password"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">Status</label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="active"
                      checked={newUser.status === "active"}
                      onChange={(e) =>
                        setNewUser({ ...newUser, status: e.target.value })
                      }
                    />
                    <span className="ml-2">Active</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="non-active"
                      checked={newUser.status === "non-active"}
                      onChange={(e) =>
                        setNewUser({ ...newUser, status: e.target.value })
                      }
                    />
                    <span className="ml-2">Non-Active</span>
                  </label>
                </div>
              </div>
              <div className="mt-4">
                <button
                  onClick={handleAddOrEditUser}
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
    </div>
  );
}

export default UserList;
