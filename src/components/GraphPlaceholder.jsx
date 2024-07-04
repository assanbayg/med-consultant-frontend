import { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../services/firebase";
import ToggleDiv from "./ui/ToggleDiv";

const GraphPlaceholder = () => {
  const [file, setFile] = useState(null);
  const [plotUrl, setPlotUrl] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile.type === "text/html") {
      setFile(selectedFile);
    } else {
      alert("Please select an HTML file.");
    }
  };

  const handleUpload = () => {
    if (file) {
      const plotsRef = ref(storage, "plots");
      const plotRef = ref(plotsRef, "some_plot.html");

      uploadBytes(plotRef, file).then((snapshot) => {
        console.log("Uploaded a blob or file!");
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          setPlotUrl(downloadURL);
          console.log("Download URL:", downloadURL);
        });
      });
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <ToggleDiv isTitle={true} title={"Graph Placeholder"}>
      <input type="file" accept=".html" onChange={handleFileChange} />
      <button className="primary-btn" onClick={handleUpload}>
        Upload HTML File
      </button>
      <iframe src={plotUrl} width={800} height={600}></iframe>
    </ToggleDiv>
  );
};

export default GraphPlaceholder;
