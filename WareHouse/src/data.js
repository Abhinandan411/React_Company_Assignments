const data = [
  {
    name: "Warehouse-165",
    code: "W-00001",
    id: 1,
    city: "Delhi",
    space_available: 1234,
    type: "Leasable Space",
    cluster: "cluster-a-32",
    is_registered: "Yes",
    is_live: "No",
  },
  {
    name: "Warehouse-276",
    code: "W-00002",
    id: 2,
    city: "Chennai",
    space_available: 124,
    type: "Warehouse Service",
    cluster: "cluster-a-1",
    is_registered: "Yes",
    is_live: "No",
  },
  {
    name: "Warehouse-3039",
    code: "W-00003",
    id: 3,
    city: "Indore",
    space_available: 134,
    type: "Warehouse Service",
    cluster: "cluster-a-1",
    is_registered: "Yes",
    is_live: "No",
  },
  {
    name: "Warehouse-324",
    code: "W-00004",
    id: 4,
    city: "Chennai",
    space_available: 12,
    type: "Leasable Space",
    cluster: "cluster-a-21",
    is_registered: "Yes",
    is_live: "No",
  },
  {
    name: "Warehouse-5454",
    code: "W-00005",
    id: 5,
    city: "Chennai",
    space_available: 1243434,
    type: "Warehouse Service",
    cluster: "cluster-a-21",
    is_registered: "Yes",
    is_live: "No",
  },
  {
    name: "Warehouse-4345",
    code: "W-00006",
    id: 6,
    city: "Chennai",
    space_available: 1,
    type: "Leasable Space",
    cluster: "cluster-a-21",
    is_registered: "Yes",
    is_live: "No",
  },
  {
    name: "Warehouse-3455",
    code: "W-00007",
    id: 7,
    city: "Mumbai",
    space_available: 4,
    type: "Leasable Space",
    cluster: "cluster-a-2",
    is_registered: "Yes",
    is_live: "No",
  },
  {
    name: "Warehouse-23455",
    code: "W-00008",
    id: 8,
    city: "Bangalore",
    space_available: 3456,
    type: "Warehouse Service",
    cluster: "cluster-a-21",
    is_registered: "Yes",
    is_live: "Yes",
  },
  {
    name: "Warehouse-6457",
    code: "W-00009",
    id: 9,
    city: "Bangalore",
    space_available: 1234545,
    type: "Warehouse Service",
    cluster: "cluster-a-1",
    is_registered: "Yes",
    is_live: "No",
  },
  {
    name: "Warehouse-32456",
    code: "W-000010",
    id: 10,
    city: "Guwahati",
    space_available: 121234,
    type: "Warehouse Service",
    cluster: "cluster-a-1",
    is_registered: "Yes",
    is_live: "Yes",
  },
  {
    name: "Warehouse-3245678",
    code: "W-000011",
    id: 11,
    city: "Delhi",
    space_available: 98,
    type: "Leasable Space",
    cluster: "cluster-v-2",
    is_registered: "Yes",
    is_live: "No",
  },
  {
    name: "Warehouse-4567",
    code: "W-000012",
    id: 12,
    city: "Indore",
    space_available: 97,
    type: "Warehouse Service",
    cluster: "cluster-a-1",
    is_registered: "Yes",
    is_live: "Yes",
  },
  {
    name: "Warehouse-458",
    code: "W-000013",
    id: 13,
    city: "Delhi",
    space_available: 654,
    type: "Leasable Space",
    cluster: "cluster-a-1",
    is_registered: "Yes",
    is_live: "No",
  },
  // Additional 11 warehouses
  {
    name: "Warehouse-890",
    code: "W-000014",
    id: 14,
    city: "Pune",
    space_available: 543,
    type: "Warehouse Service",
    cluster: "cluster-b-13",
    is_registered: "No",
    is_live: "No",
  },
  {
    name: "Warehouse-2678",
    code: "W-000015",
    id: 15,
    city: "Jaipur",
    space_available: 234,
    type: "Leasable Space",
    cluster: "cluster-c-22",
    is_registered: "Yes",
    is_live: "No",
  },
  {
    name: "Warehouse-9876",
    code: "W-000016",
    id: 16,
    city: "Kolkata",
    space_available: 987,
    type: "Warehouse Service",
    cluster: "cluster-d-5",
    is_registered: "Yes",
    is_live: "Yes",
  },
  {
    name: "Warehouse-1234",
    code: "W-000017",
    id: 17,
    city: "Hyderabad",
    space_available: 456,
    type: "Leasable Space",
    cluster: "cluster-e-12",
    is_registered: "No",
    is_live: "Yes",
  },
  {
    name: "Warehouse-4568",
    code: "W-000018",
    id: 18,
    city: "Ahmedabad",
    space_available: 675,
    type: "Warehouse Service",
    cluster: "cluster-f-8",
    is_registered: "Yes",
    is_live: "No",
  },
  {
    name: "Warehouse-7645",
    code: "W-000019",
    id: 19,
    city: "Bhopal",
    space_available: 432,
    type: "Leasable Space",
    cluster: "cluster-g-11",
    is_registered: "No",
    is_live: "No",
  },
  {
    name: "Warehouse-9023",
    code: "W-000020",
    id: 20,
    city: "Lucknow",
    space_available: 321,
    type: "Warehouse Service",
    cluster: "cluster-h-6",
    is_registered: "Yes",
    is_live: "Yes",
  },
  {
    name: "Warehouse-6677",
    code: "W-000021",
    id: 21,
    city: "Nagpur",
    space_available: 100,
    type: "Leasable Space",
    cluster: "cluster-i-3",
    is_registered: "Yes",
    is_live: "No",
  },
  {
    name: "Warehouse-7766",
    code: "W-000022",
    id: 22,
    city: "Surat",
    space_available: 567,
    type: "Warehouse Service",
    cluster: "cluster-j-7",
    is_registered: "No",
    is_live: "Yes",
  },
  {
    name: "Warehouse-1239",
    code: "W-000023",
    id: 23,
    city: "Kanpur",
    space_available: 789,
    type: "Leasable Space",
    cluster: "cluster-k-4",
    is_registered: "Yes",
    is_live: "No",
  },
  {
    name: "Warehouse-1122",
    code: "W-000024",
    id: 24,
    city: "Patna",
    space_available: 234,
    type: "Warehouse Service",
    cluster: "cluster-l-2",
    is_registered: "Yes",
    is_live: "Yes",
  }
];

export default data;
