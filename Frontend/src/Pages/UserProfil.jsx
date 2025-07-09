import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Setting from "../Components/Setting.jsx";
import Loading from "../Components/Loading.jsx";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from the server
    axios
      .get(`http://localhost:8000/users/${user.id}/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the user profile!", error);
      });
  }, []);

  if (!user) return <Loading />;

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-xs">
          <h1 className="text-2xl font-bold mb-6">Profil Pengguna</h1>
          <img
            src={user.photoUrl}
            alt="Profile"
            className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
          />
          <p>
            Nama: {user.firstName} {user.lastName}
          </p>
          <p>Email: {user.email}</p>
        </div>
      </div>
      <div className="w-96 space-y-6 mx-10 mt-4">
        <Setting user={user} setUser={setUser} />
        <UserMenu logoutButtonText="Keluar" />
      </div>
    </>
  );
};

export default UserProfile;
