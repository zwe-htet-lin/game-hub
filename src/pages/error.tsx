import Navbar from "@/components/app/Navbar";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <div className="text-center">
        <h1 className="text-5xl mb-3">Oops...</h1>
        <p className="text-xl">
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occured."}
        </p>
      </div>
    </>
  );
};

export default Error;
