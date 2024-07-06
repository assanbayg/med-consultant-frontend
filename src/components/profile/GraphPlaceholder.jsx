import { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../services/firebase";

const GraphPlaceholder = () => {
  const [plotUrl, setPlotUrl] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const plotsRef = ref(storage, "plots");

    listAll(plotsRef)
      .then((res) => {
        const plotRef = res.items[0];
        getDownloadURL(plotRef).then((downloadURL) => {
          setPlotUrl(downloadURL);
        });
      })
      .catch((error) => {
        setError(error);
      });
  }, [plotUrl]);

  return (
    <>
      <iframe src={plotUrl} width={800} height={600}></iframe>
      {error && (
        <div className="rounded-lg bg-red-50 p-2 text-red-500">{error}</div>
      )}
    </>
  );
};

export default GraphPlaceholder;
