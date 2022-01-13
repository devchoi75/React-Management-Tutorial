//주석

import React, { Component } from 'react';
import Customer from './component/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const customers = [
    {
      'id': 1,
      'image': 'https://placeimg.com/64/64/any',
      'name': '최혁',
      'birthday': '750927',
      'gender': '남자',
      'job': '직장인',
    },
    {
      'id': 2,
      'image': 'https://placeimg.com/65/65/any',
      'name': '최용운',
      'birthday': '777777',
      'gender': '남자',
      'job': '직장인',
    },
    {
      'id': 3,
      'image': 'https://placeimg.com/66/66/any',
      'name': '홍길순',
      'birthday': '788888',
      'gender': '여자',
      'job': '직장인',
    },

]

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unix * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

//function App() {
  class App extends Component {
    render() {
    const { classes } = this.props;
    //const styles = new styles(); 

    return (
      <Paper className={classes.paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>              
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => { return( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday}  gender={c.gender}  job={c.job}   />  );  })  }    
          </TableBody>
        </Table>
      </Paper>
    );
    }
  
}

export default withStyles(styles)(App) ;


