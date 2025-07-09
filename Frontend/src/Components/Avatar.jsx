import React from "react";

const defaultAvatarURL =
  "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
const Avatar = () => {
  return (
    <>
      <div className="avatar ">
        <div className="w-8 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <div className="cursor-pointer" />
          <img
            src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            className="w-8 object-cover rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default Avatar;
