import React from 'react';
import { Grid, Paper, Container, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}))(TableCell);

const ChapterCard = ({ subTasks }) => {
  return (
    <div>
      <Grid>
        <Container style={{ backgroundColor: 'pink' }}>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                {subTasks
                  ? subTasks.map((subTask: any) => (
                      <StyledTableRow>
                        <StyledTableCell>
                          <Typography>{subTask.name}</Typography>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))
                  : null}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Grid>
    </div>
  );
};

export default ChapterCard;
