import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function MuiTable() {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MuiTable;

const tableData = [
  {
    id: 1,
    first_name: "Heall",
    last_name: "Edmead",
    email: "hedmead0@arizona.edu",
    gender: "Male",
    ip_address: "19.70.180.207",
  },
  {
    id: 2,
    first_name: "Wanda",
    last_name: "Stranio",
    email: "wstranio1@slashdot.org",
    gender: "Female",
    ip_address: "153.178.180.229",
  },
  {
    id: 3,
    first_name: "Adolph",
    last_name: "Stanmer",
    email: "astanmer2@nydailynews.com",
    gender: "Male",
    ip_address: "67.40.102.43",
  },
  {
    id: 4,
    first_name: "Aarika",
    last_name: "Kilbee",
    email: "akilbee3@wordpress.org",
    gender: "Female",
    ip_address: "10.238.50.97",
  },
  {
    id: 5,
    first_name: "Eva",
    last_name: "Stonier",
    email: "estonier4@cocolog-nifty.com",
    gender: "Agender",
    ip_address: "65.101.6.120",
  },
  {
    id: 6,
    first_name: "Decca",
    last_name: "Praten",
    email: "dpraten5@ow.ly",
    gender: "Male",
    ip_address: "226.100.24.191",
  },
  {
    id: 7,
    first_name: "Margo",
    last_name: "Bentinck",
    email: "mbentinck6@issuu.com",
    gender: "Female",
    ip_address: "58.187.90.137",
  },
  {
    id: 8,
    first_name: "Pet",
    last_name: "Crichley",
    email: "pcrichley7@eepurl.com",
    gender: "Female",
    ip_address: "75.23.124.240",
  },
  {
    id: 9,
    first_name: "Laina",
    last_name: "Glendenning",
    email: "lglendenning8@angelfire.com",
    gender: "Female",
    ip_address: "131.146.216.109",
  },
  {
    id: 10,
    first_name: "Zsa zsa",
    last_name: "Nuscha",
    email: "znuscha9@canalblog.com",
    gender: "Female",
    ip_address: "15.176.53.43",
  },
];
