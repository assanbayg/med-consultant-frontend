import { useState } from "react";
import ToggleDiv from "./ui/ToggleDiv";
import Papa from "papaparse";
import readXlsxFile from "read-excel-file";

export const ImportFile = () => {
  const [faq, setFaq] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const fileType = file.name.split(".");
    const extension = fileType[fileType.length - 1];

    if (extension === "csv") {
      parseCSV(file);
    } else if (extension === "xlsx") {
      parseXlsx(file);
    }
  };

  const parseCSV = (file) => {
    Papa.parse(file, {
      complete: function (res) {
        setFaq(res.data);
      },
      header: true,
    });
  };

  const parseXlsx = (file) => {
    readXlsxFile(file).then((rows) => {
      const faqArray = rows.slice(1).map((row) => ({
        Question: row[0],
        Answer: row[1],
      }));
      setFaq(faqArray);
    });
  };

  return (
    <ToggleDiv title={"Import CSV file"} isTitle={true}>
      <p className="font-bold">
        Note: table should have two headers - Question and Answer
      </p>
      <input type="file" accept=".csv, .xlsx" onChange={handleFileUpload} />
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
