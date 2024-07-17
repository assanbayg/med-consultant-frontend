import Papa from "papaparse";
import { useState } from "react";
import readXlsxFile from "read-excel-file";

import ToggleDiv from "../ui/ToggleDiv";

export const ImportFile = () => {
  const [faq, setFaq] = useState([]);
  const [dialogueExample, setDialogueExample] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const fileType = file.name.split(".");
    const extension = fileType[fileType.length - 1];

    if (extension === "txt") {
      console.log(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        const dialogueArray = text
          .split("\n")
          .map((line) => line.trim())
          .filter((line) => line);
        setDialogueExample(dialogueArray);
      };
      reader.readAsText(file);
    }

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
    <ToggleDiv title={"Import files"} isTitle={true}>
      <div className="flex max-w-2xl flex-col gap-y-4">
        <div className="flex justify-between gap-x-2">
          <label htmlFor="txtFile">Import dialog example (.txt)</label>
          <input
            type="file"
            name="txtFile"
            id="txtFile"
            accept=".txt"
            onChange={handleFileUpload}
          />
          <p>{dialogueExample}</p>
        </div>
        <div className="flex justify-between gap-x-2">
          <label htmlFor="tableFile">
            Import QA example (.csv, .xlsx). Should have two headers - Question
            and Answer
          </label>
          <input
            type="file"
            accept=".csv, .xlsx"
            name="tableFile"
            id="tableFile"
            onChange={handleFileUpload}
          />
        </div>
        <ul>
          {faq.map((item, index) => (
            <li key={index}>
              <strong>Q:</strong> {item.Question} <br />
              <strong>A:</strong> {item.Answer}
            </li>
          ))}
        </ul>
      </div>
    </ToggleDiv>
  );
};
