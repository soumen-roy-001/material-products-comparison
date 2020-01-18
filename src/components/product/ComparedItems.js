import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    tblTh: {
        fontWeight: 'bold',
        background: "#ddd",
        borderBottom: "1px solid #ccc"
    }
});


export default function SimpleTable({ comparedItems }) {
    const classes = useStyles();
    // console.log(comparedItems)
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        {comparedItems.map(row => (
                            <TableCell key={row.id} align="center">{row.title}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row" className={classes.tblTh}>
                            Price
                        </TableCell>
                        {comparedItems.map(row => (
                            <TableCell component="td" key={row.id} align="center">${row.price}</TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row" className={classes.tblTh}>
                            Type
                        </TableCell>
                        {comparedItems.map(row => (
                            <TableCell key={row.id} align="center">{row.type}</TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row" className={classes.tblTh}>
                            Colors
                        </TableCell>
                        {comparedItems.map(row => (
                            <TableCell key={row.id} align="center">{row.colors.join()}</TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}