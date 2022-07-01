import React, { useEffect, useState } from "react";
import { Doctors } from "./dummyData";
import DataTable from "react-data-table-component";


export default function AdminDoctors() {
  const [mydataTable, setMydataTable] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRecords, setFilteredRecords] = useState([]);

  useEffect(() => {
    setFilteredRecords(Doctors);
    setMydataTable(Doctors);
  }, []);

  useEffect(() =>{
    const result = mydataTable.filter(record => {
      return record.firstName.toLowerCase().match(search.toLowerCase());
    });

    setFilteredRecords(result);
    
    
  },[search])



  const columns=[
    {
      name: "Doctor ID",
      selector: (row) => row.dID,
      sortable:true,
    },
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable:true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable:true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
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
      name: "City.",
      selector: (row) => row.city,
    },
    {
      name: "Pincode",
      selector: (row) => row.pincode,
    },
    {
      name: "Age",
      selector: (row) => row.age,
    },
    {
      name: "Reg No.",
      selector: (row) => row.regNo,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
    },
    {
      name: "dob",
      selector: (row) => row.dob,
    },
    {
      name: "Speciality",
      selector: (row) => row.speciality,
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
    <div class="overflow-x">
      
        <DataTable 
          columns={columns} 
          data={filteredRecords} 
          pagination 
          title="Doctor Database" 
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
