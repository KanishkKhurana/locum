import React from 'react'

export default  function AdminDashboardCard (props) {
  return (

<a href="#" class="block p-4 w-fit bg-white rounded-3xl border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400 text-center">{props.value}</p>
</a>

  )
};


