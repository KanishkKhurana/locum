const DataTable = ({ data, column }) => {
    return (
        <div >
      <table class="text-sm text-left text-gray-500 dark:text-gray-400  ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {column.map((item, index) => <TableHeadItem item={item} />)}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => <TableRow item={item} column={column} />)}
        </tbody>
      </table>
      </div>
    )
  }
  
  const TableHeadItem = ({ item }) => <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{item}</th>
  const TableRow = ({ item, column }) => (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      {column.map((columnItem, index) => {
  
        // if(columnItem.value.includes('.')) {
        // //   const itemSplit = columnItem.value.split('.') //['address', 'city']
        //   return <td>{item[itemSplit[0]][itemSplit[1]]}</td>
        // }
  
        return <td class="px-6 py-4">{item[`${columnItem}`]}</td>
      })}
    </tr>
  )
  
  export default DataTable