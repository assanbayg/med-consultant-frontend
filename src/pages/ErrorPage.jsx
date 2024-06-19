import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center flex flex-col gap-2">
      <h1 className="font-medium">Emaa!</h1>
      <p>Osyny kütpedık.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
