import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '30px',
      '& > *': {
        margin: theme.spacing(3),
      },
    },
    inputs : {
        justifyContent: 'space-around'
    },
    input: {
        width: '100%'
    },
    container: {
        margin: 'auto',
        width: '800px',
        height: '600px',
        boxShadow: '2px 4px 8px 4px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' 
    },
    filed: {
        width : '250px',
        marginLeft: '15px'
    },
    singleFieled: {
        width: '515px',
        marginRight: '30px'
    },

    btn: {
        backgroundColor: "#006DCC",
        '&:hover':{
            backgroundColor:"#0049AA",
        },
        color: 'white',
        width: '515px',
        marginLeft:'40px',
        height: '35px',
        borderRadius: '8px'
    },

    h1:{
        textAlign:'center',
        fontWeight:'bold'
    }

  }));

export const CreateAccount = () => {
    const classes = useStyles();
  return (
      <div className="container" style={{textAlign: 'center', marginTop: '100px'}}>
        <div className={classes.container}>
        <form className={classes.root} method="post">
            <h2 className={classes.h1}>Create an account</h2>
            <div className={classes.inputs}>
                <TextField className={classes.filed} name="first name" label="First name" color="#006DCC"/>
                <TextField className={classes.filed} name="last name" id="" label="Last name" color="#006DCC"/>
            </div>
            <div className={classes.inputs}>
                <TextField className={classes.filed} name="username" id="" label="Username" color="#006DCC"/>
                <TextField className={classes.filed} name="email" type="email" id="" label="Email" color="#006DCC"/>
            </div>
            <div className={classes.input}>
                <TextField className={classes.singleFieled} name="association" id="" label="Association" color="#006DCC"/>
            </div>
            <div className={classes.input}>
                <TextField className={classes.singleFieled} name="password" type="password" id="" label="Password" color="#006DCC"/>
            </div>
            <Button className={classes.btn} variant="outlined" type="sumbit" disableElevation disableRipple>
                Create account
            </Button>
        </form>
        </div>
      </div>
  );
}