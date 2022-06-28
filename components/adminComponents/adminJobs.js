import React, { useEffect, useState } from "react";
import { Jobs } from "./dummyData";
import DataTable from "./dataTable";

export default function AdminJobs() {
  const [mydataTable, setMydataTable] = useState([]);

  useEffect(() => {
    setMydataTable(Jobs);
  }, []);

  const column = Object.keys(Jobs[0]);
  console.log(column);

  return (
    <div class="overflow-x">

        <DataTable data={mydataTable} column={column} />
      
    </div>
  );
}
