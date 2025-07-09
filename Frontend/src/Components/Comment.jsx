import React from "react";

const Comment = ({ author, content, timestamp, image }) => {
  return (
    <div className="flex items-start space-x-4 p-4">
      <div className="flex-shrink-0 ">
        <img
          className="h-10 w-10 rounded-full"
          src={`https://i.pravatar.cc/150?u=${author}`}
          alt={author}
        />
        <div className="text-sm font-medium font-Inter text-center">
          {author}
        </div>
      </div>
      <div className="p-4 border border-greyLight rounded-lg shadow-md mb-4 bg-primary/65 font-normal font-Inter">
        <div className="mt-1 text-sm ">{content}</div>
        <div className="mt-2 text-xs ">{timestamp}</div>
      </div>

      {/* {image && (
        <div className="mt-4">
          <img
            className="w-full h-auto rounded-lg"
            src={image}
            alt="Uploaded"
          />
        </div>
      )} */}
    </div>
  );
};

export default Comment;
