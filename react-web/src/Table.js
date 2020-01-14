import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const rows = [
    {"name": "Respiratory rate", "value":  5.722527},
    {"name": "Heart Rate", "value":  5.060755},
    {"name": "Temperature", "value":  4.320148},
    {"name": "BaseExcess", "value":  3.473745},
    {"name": "Fraction of Inspired Oxygen", "value":  3.093767},
    {"name": "Glucose", "value":  1.114521},
    {"name": "Gender", "value":  0.841425},
    {"name": "Diastolic blood pressure", "value":  0.821818},
    {"name": "pH", "value":  0.199657},
    {"name": "Age", "value":  0.088738},
    {"name": "Systolic blood pressure", "value": -0.179312},
    {"name": "Mean Arterial Pressure", "value": -0.356347},
    {"name": "Potassium", "value": -0.356959},
    {"name": "Oxygen Saturated Level", "value": -1.064931},
    {"name": "Hematocrit", "value": -2.673977}
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
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Factors showing Sipsis</StyledTableCell>
            <StyledTableCell align="right">Value</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.value}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}