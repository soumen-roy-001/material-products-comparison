import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  tblTh: {
    fontWeight: "bold",
    background: "#f3eded"
  },
  comparedList: {
    marginTop: 40
  }
});

const myStyles = makeStyles({
  root: {
    background: props => props.color,
    boxShadow: props => `0 0px 2px 0px ${props.color}`,
    width: 15,
    height: 15,
    border: props => `1px solid ${props.color}`,
    borderRadius: "50%",
    display: "inline-block",
    marginRight: 5
  }
});

function MyColor(props) {
  const { color, ...other } = props;
  const classes = myStyles(props);
  return <span className={classes.root} {...other}></span>;
}

MyColor.propTypes = {
  color: PropTypes.oneOf(["blue", "cyan", "red"]).isRequired
};

const myBadgeStyles = makeStyles({
  root: {
    background: props => (props.condition === "Fresh" ? "cyan" : "red"),
    color: "#fff",
    padding: "10px 30px"
  }
});

function MyBadge(props) {
  const { condition, ...other } = props;
  const classes = myBadgeStyles(props);
  return (
    <div className={classes.root} {...other}>
      {condition}
    </div>
  );
}

MyBadge.propTypes = {
  condition: PropTypes.oneOf(["Fresh", "Frozen"]).isRequired
};

export default function ComparedItems({ comparedItems }) {
  const classes = useStyles();
  return (
    <TableContainer className={classes.comparedList} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {comparedItems.map(row => (
              <TableCell key={row.id} align="center">
                {row.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row" className={classes.tblTh}>
              Price
            </TableCell>
            {comparedItems.map(row => (
              <TableCell component="td" key={row.id} align="center">
                ${row.price.toFixed(2)}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" className={classes.tblTh}>
              Colors
            </TableCell>
            {comparedItems.map(row => (
              <TableCell key={row.id} align="center">
                {row.colors.map(color => {
                  return <MyColor key={color} color={color} />;
                })}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" className={classes.tblTh}>
              Condition
            </TableCell>
            {comparedItems.map(row => (
              <TableCell key={row.id} align="center">
                <MyBadge condition={row.condition} />
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
