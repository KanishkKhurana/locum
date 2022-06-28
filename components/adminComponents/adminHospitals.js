import React, { useEffect, useState } from "react";
import { Hospitals } from "./dummyData";
import DataTable from "./dataTable";

export default function adminHospitals() {
  const [mydataTable, setMydataTable] = useState([]);

  useEffect(() => {
    setMydataTable(Hospitals);
  }, []);

  const column = Object.keys(Hospitals[0]);
  console.log(column);

  return (
    <div class="overflow-x">
      
        <DataTable data={mydataTable} column={column} />
      
    </div>
  );
}
