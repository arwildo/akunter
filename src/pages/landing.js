import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Landing = function () {
	const [users, setUsers] = useState(null);

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	useEffect(() => {
		axios
			.get("/api/users")
			.then((users) => setUsers(users))
			.catch((err) => console.log(err));
	}, []);

	function submitForm() {
		if (username === "") {
			alert("Please fill the username field");
			return;
		}
		if (email === "") {
			alert("Please fill the email field");
			return;
		}
		axios
			.post("/api/users", {
				username: username,
				email: email,
			})
			.then(function () {
				alert("Account created successfully");
				window.location.reload();
			})
			.catch(function () {
				alert("Could not creat account. Please try again");
			});
	}
	return (
    <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h1 className="text-lg leading-6 font-medium text-gray-900">My Project</h1>
              <div className="text-sm text-gray-900 p-2">
                {users === null ? (
                  <p>Loading...</p>
                ) : users.length === 0 ? (
                  <p>No user available</p>
                ) : (
                  <>
                    <h2>Available Users</h2>
                    <ol>
                      {users.map((user, index) => (
                        <li key={index}>
                          Name: {user.name} - Email: {user.email}
                        </li>
                      ))}
                    </ol>
                  </>
                )}
              </div>
          </div>

          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <form onSubmit={submitForm}>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Enter your username"
                className="rounded-lg m-2 p-2 bg-gray-100 focus:bg-white"
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Enter your email address"
                className="rounded-lg m-2 p-2 bg-gray-100 focus:bg-white"
              />
              <input className="m-3 w-18 justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
	);
};
export default Landing
