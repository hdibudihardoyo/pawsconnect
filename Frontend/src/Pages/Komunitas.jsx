// Komunitas.jsx

import React, { useState, useEffect } from "react";
import {
  FaImage,
  FaPaperclip,
  FaPlusCircle,
  FaRegPlusSquare,
} from "react-icons/fa";
import NavHeader from "../Components/NavHeader";
import Footer from "../Components/Footer";
import axios from "axios";
import Post from "../Components/Post";

const Komunitas = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ text: "", image: null });
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/show-post");
      const sortedPosts = response.data.data.sort((a, b) => {
        return new Date(a.created_at) - new Date(b.created_at); // Sorting by ascending order of creation time
      });
      setPosts(sortedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user_id", localStorage.getItem("id")); // Replace with appropriate user ID
    formData.append("text", newPost.text);
    if (newPost.image) {
      formData.append("image", newPost.image);
    }

    try {
      await axios.post("http://localhost:8000/add-post", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setNewPost({ text: "", image: null });
      fetchPosts(); // Refresh posts after creating new one
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/delete/${id}`);
      fetchPosts(); // Refresh posts after deleting
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleSelectPost = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8000/byid/${id}-post`);
      setSelectedPost(response.data.data);
    } catch (error) {
      console.error("Error fetching post details:", error);
    }
  };

  // Function to format time ago
  const formatTimeAgo = (timestamp) => {
    const current = new Date();
    const previous = new Date(timestamp);
    const seconds = Math.floor((current - previous) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
      return `${interval} tahun yang lalu`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      return `${interval} bulan yang lalu`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      return `${interval} hari yang lalu`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      return `${interval} jam yang lalu`;
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
      return `${interval} menit yang lalu`;
    }
    return `${Math.floor(seconds)} detik yang lalu`;
  };

  return (
    <>
      <NavHeader
        nav="Komunitas"
        page="Beranda"
        pagenav1=">"
        page2="Detail Kucing"
      />
      <div className="max-w-4xl mx-auto py-10 px-4">
        {/* List of posts */}
        <div className="max-w-4xl space-y-4 mb-6 -ml-96">
          {posts.map((post) => (
            <Post
              key={post.id_post}
              post={post}
              onSelectPost={handleSelectPost}
              onDeletePost={handleDeletePost}
              formatTimeAgo={formatTimeAgo}
            />
          ))}
        </div>

        {/* Form to create new post */}
        <div className="flex justify-center">
          <form
            onSubmit={handleCreatePost}
            className="card-body flex items-center justify-center p-6 rounded-lg space-x-4"
          >
            <textarea
              value={newPost.text}
              onChange={(e) => setNewPost({ ...newPost, text: e.target.value })}
              className="card-body flex h-48 w-full p-4 border bg-greyLighter rounded-lg focus:outline-none focus:border-cyan text-xl"
              placeholder="Apa yang Anda pikirkan?"
            />

            <div className="flex relative left-80 bottom-16 space-x-4">
              <label htmlFor="file-upload" className="cursor-pointer">
                <FaPlusCircle
                  className="text-gray-600 hover:text-gray-800 relative top-2"
                  size={28}
                />

                <input
                  id="file-upload"
                  type="file"
                  onChange={(e) =>
                    setNewPost({ ...newPost, image: e.target.files[0] })
                  }
                  className="hidden"
                />
              </label>
              <button
                type="submit"
                className="btn btn-primary bg-violet text-white px-4 py-2 rounded-3xl"
              >
                Posting
              </button>
            </div>
          </form>
        </div>

        {/* Modal to display post details */}
        {selectedPost && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded max-w-lg w-full">
              <h2 className="text-xl font-bold mb-2">Detail Postingan</h2>
              <p>{selectedPost.text}</p>
              {selectedPost.image && (
                <img
                  src={selectedPost.image}
                  alt="Post"
                  className="mt-2 max-w-full h-auto"
                />
              )}
              <button
                onClick={() => setSelectedPost(null)}
                className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Komunitas;
