import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  form: {
  },
  input: {
    marginBottom: '1rem'
  },
  button: {
    margin: '1rem auto'
  },
}));

const CreateTable = (props: any) => {

  return (
    <Button>Create table</Button>
  );
}

export default CreateTable;