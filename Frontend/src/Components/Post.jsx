// Post.jsx

import React from "react";
import { FaPaperclip } from "react-icons/fa";

const Post = ({ post, onSelectPost, onDeletePost, formatTimeAgo }) => {
  return (
    <div className="chat">
      <div className="chat-header">
      </div>
      <div className="chat-bubble p-3 rounded-lg bg-primary/65 border border-greyLight shadow-md mb-4 font-normal font-Inter">
        <p>{post.text}</p>
        {post.image && (
          <img src={post.image} alt="Post" className="mt-2 max-w-full h-auto" />
        )}
        <time className="text-xs opacity-50 mt-4">
            {post.nama_depan} - {formatTimeAgo(post.created_at)}
        </time>
      </div>
      <div className="chat-footer opacity-50 text-xs">
        {/* Buttons for Detail and Delete */}
        {/* <div className="mt-2">
          <button
            onClick={() => onSelectPost(post.id_post)}
            className="bg-green-500 text-white px-2 py-1 rounded mr-2"
          >
            Detail
          </button>
          <button
            onClick={() => onDeletePost(post.id_post)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Hapus
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Post;
