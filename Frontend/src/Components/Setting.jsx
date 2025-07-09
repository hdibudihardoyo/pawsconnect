import React, { useState } from 'react';
import axios from 'axios';

const Setting = ({ user, setUser }) => {
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    photoUrl: user.photoUrl
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update user information
      const response = await axios.put('http://localhost:8000/api/user/profile', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      // If photo is selected, upload it
      if (selectedFile) {
        const formData = new FormData();
        formData.append('photo', selectedFile);

        const photoResponse = await axios.post('http://localhost:8000/api/user/profile/photo', formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'multipart/form-data'
          }
        });

        setFormData(prevState => ({ ...prevState, photoUrl: photoResponse.data.photoUrl }));
      }

      setUser(response.data);
      alert('Profil berhasil diperbarui');
    } catch (error) {
      console.error("There was an error updating the profile!", error);
      alert('Gagal memperbarui profil');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-primary"
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-primary"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-primary"
          required
        />
      </div>
      <div>
        <label htmlFor="photo">Profile Photo</label>
        <input
          type="file"
          id="photo"
          name="photo"
          onChange={handleFileChange}
          className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-primary"
        />
      </div>
      <button type="submit" className="btn btn-primary w-full">Update Profile</button>
    </form>
  );
};

export default Setting;
