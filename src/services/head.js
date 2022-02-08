const headArray = [
    { title: "First Name", category: "firstName" },
    { title: "Last Name", category: "lastName" },
    { title: "Start Date", category: "startDate" },
    { title: "Department", category: "department" },
    { title: "Date of Birth", category: "birthDay" },
    { title: "Street", category: "street" },
    { title: "City", category: "city" },
    { title: "State", category: "state" },
    { title: "Zip Code", category: "zipCode" },
]

<Table
headersArray={headArray}
rowsContent={rowsContent}
title='Current Employees'
filter={true}
entriesSelector={[10, 100]}
showEntries={true}
hideButtons={true}
/>