import React from 'react';

const Loading = () => {
  return (
    <>
      <div className="h-5/6 px-4 flex justify-center mt-48">
      <div className="flex flex-col gap-4 w-52 align-center">
        <div className="skeleton h-32 w-full bg-greyLight"></div>
        <div className="skeleton h-4 w-28 bg-greyLight"></div>
        <div className="skeleton h-4 w-full bg-greyLight"></div>
        <div className="skeleton h-4 w-full bg-greyLight"></div>
        <div className="font-satoshi-light flex items-center justify-center">Mohon tunggu sebentar...</div>
      </div>
      </div>
    </>
  );
};

export default Loading;