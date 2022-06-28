import React, { useEffect, useState } from "react";
import { Doctors } from "./dummyData";
import DataTable from "./dataTable";

export default function AdminDoctors() {
  const [mydataTable, setMydataTable] = useState([]);

  useEffect(() => {
    setMydataTable(Doctors);
  }, []);

  const column = Object.keys(Doctors[0]);
  console.log(column);

  return (
    <div class="overflow-x">

        <DataTable data={mydataTable} column={column} />

    </div>
  );
}
