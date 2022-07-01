import React, { useEffect, useState } from "react";
import { Jobs } from "./dummyData";
import DataTable from "react-data-table-component";


export default function AdminJobs() {
  const [mydataTable, setMydataTable] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRecords, setFilteredRecords] = useState([]);

  useEffect(() => {
    setFilteredRecords(Jobs);
    setMydataTable(Jobs);
  }, []);

  useEffect(() =>{
    const result = mydataTable.filter(record => {
      return record.hospitalName.toLowerCase().match(search.toLowerCase());
    });

    setFilteredRecords(result);
    
    
  },[search])



  const columns=[
    {
      name: "Job ID",
      selector: (row) => row.jID,
      sortable:true,
    },
    {
      name: "Hospital ID",
      selector: (row) => row.hID,
      sortable:true,
    },
    {
      name: "Doctor ID",
      selector: (row) => row.dID,
    },
    {
      name: "Hospital Name",
      selector: (row) => row.hospitalName,
    },
    {
      name: "Hospital Address",
      selector: (row) => row.hospitalAddress,
    },
    {
      name: "Hospital State",
      selector: (row) => row.hospitalState,
    },
    {
      name: "Hospital City",
      selector: (row) => row.hospitalCity,
    },
    {
      name: "Hospital Email",
      selector: (row) => row.hospitalEmail,
    },
    {
      name: "Hospital Phone",
      selector: (row) => row.hospitalPhone,
    },
    {
      name: "Hospital Pincode",
      selector: (row) => row.hospitalPincode,
    },
    {
      name: "Speciality",
      selector: (row) => row.specialityReqd,
    },
    {
      name: "Job Date",
      selector: (row) => row.jobDate,
    },
    {
      name: "Availability",
      selector: (row) => row.available,
    },
    {
      name: "Details",
      selector: (row) => row.details,
    },
    {
      name: "Pay",
      selector: (row) => row.pay,
    },
    { 
      name : "Action",
      cell: row => <button onClick={() => alert("Are you sure you want to edit for "+ row.name)}>Edit</button>

    },
    { 
      name : "Action",
      cell: row => <button onClick={() => alert("Are you sure you want to delete "+ row.name)}>Delete</button>

    },
  ]

  return (
    <div class="">
      
        <DataTable 
          columns={columns} 
          data={filteredRecords} 
          pagination 
          title="Job Database" 
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
