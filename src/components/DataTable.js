import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Company from './Company';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('XYZ company', 949595159, 6.0, 24, 4.0),
  createData('Reliance', 94954237, 9.0, 37, 4.3),
  createData('Cadila', 949594262, 16.0, 24, 6.0),
  createData('Tcs', 949599305, 3.7, 67, 4.3),
  createData('Gingerbread', 949595356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Company Name</StyledTableCell>
            <StyledTableCell align="right"> Contact Info </StyledTableCell>
            <StyledTableCell align="right">Trucks Required </StyledTableCell>
            {/* <StyledTableCell align="right">Carbs</StyledTableCell> */}
            {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                <Company name={row.name}></Company>
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              
              {/* <StyledTableCell align="right">{row.carbs}</StyledTableCell> */}
              {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
