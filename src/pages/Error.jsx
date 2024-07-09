import React from "react";

function Error() {
  return (
    <div className="flex flex-col text-center">
        <h1 className="mt-64 mb-6">Ooops</h1>
        <p>Sorry, an unexpected error has occured.</p>
        <p className="mt-4 text-gray-400">Not found</p>
    </div>
  );
}

export default Error;
