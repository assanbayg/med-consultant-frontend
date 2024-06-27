import { useState } from "react";
import ToggleDiv from "./ui/ToggleDiv";
import Papa from "papaparse";

export const ImportFile = () => {
  const [faq, setFaq] = useState([]);

  const handleCsvUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      parseCSV(file);
    }
  };

  const parseCSV = (file) => {
    Papa.parse(file, {
      complete: function (res) {
        console.log(res.data);
        setFaq(res.data);
      },
      header: true,
    });
  };

  return (
    <ToggleDiv title={"Import CSV file"} isTitle={true}>
      <p className="font-bold">
        Note: table should have two headers - Question and Answer
      </p>
      <input type="file" accept=".csv" onChange={handleCsvUpload} />
      <ul>
        {faq.map((item, index) => (
          <li key={index}>
            <strong>Q:</strong> {item.Question} <br />
            <strong>A:</strong> {item.Answer}
          </li>
        ))}
      </ul>
    </ToggleDiv>
  );
};
