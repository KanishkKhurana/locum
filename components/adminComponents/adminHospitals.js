import React, { useEffect, useState } from "react";
import { Hospitals } from "./dummyData";
import DataTable from "react-data-table-component";


export default function adminHospitals() {
  const [mydataTable, setMydataTable] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRecords, setFilteredRecords] = useState([]);

  useEffect(() => {
    setFilteredRecords(Hospitals);
    setMydataTable(Hospitals);
  }, []);

  useEffect(() =>{
    const result = mydataTable.filter(record => {
      return record.name.toLowerCase().match(search.toLowerCase());
    });

    setFilteredRecords(result);
    
    
  },[search])



  const columns=[
    {
      name: "Hospital ID",
      selector: (row) => row.hID,
      sortable:true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable:true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
    },
    {
      name: "State",
      selector: (row) => row.state,
    },
    {
      name: "City",
      selector: (row) => row.city,
    },
    {
      name: "Pincode",
      selector: (row) => row.pincode,
    },
    {
      name: "Phone No.",
      selector: (row) => row.phone,
    },
    {
      name: "Email ID",
      selector: (row) => row.email,
    },
    {
      name: "Website",
      selector: (row) => row.website,
    },
    {
      name: "Reg No.",
      selector: (row) => row.regNo,
    },
    { 
      name : "Action",
      cell: row => <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => alert("Are you sure you want to edit for "+ row.name)}>Edit</button>

    },
    { 
      name : "Action",
      cell: row => <button type="submit" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => alert("Are you sure you want to delete "+ row.name)}>Delete</button>

    },
  ]

  return (
    <div class="overflow-x">
      
        <DataTable 
          columns={columns} 
          data={filteredRecords} 
          pagination 
          title="Hospital Database" 
          selectableRows 
          selectableRowsHighlight 
          highlightOnHover 
          actions={
            <button type="submit" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2">Export</button>
          }
          subHeader
          subHeaderComponent={
            <input type="text" placeholder="search" class="w-3/4" value={search} onChange={(e) => setSearch(e.target.value)}></input>
          }
          subHeaderAlign="center"

          
          
          />
      
    </div>
  );
}
