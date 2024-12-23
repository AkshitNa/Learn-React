import { useRouteError } from "react-router";

function Error() {

  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h3>Opps Error!!</h3>
      <h3>Something went wrong</h3>
      <h2> {error?.status ? `${error.status}: ${error.statusText}` : "An unexpected error occurred"}</h2>
      
    </div>
  );
}

export default Error;
