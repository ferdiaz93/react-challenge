import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { makeStyles } from '@material-ui/core/styles';
import '../styles/navigation.css'
import EgoLogo from '../assets/logos/ego_logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  customLabelColor: {
    color: "#790909"
  }
}));

function Navigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <div className="container-fluid row border px-4">
      <div className="col-1 ego-logo-container">
        <img src={EgoLogo} alt=""/>
      </div>
      <div className="col-10 d-none d-md-block">
        <Paper className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Modelos" classes={{ textColorSecondary: classes.customLabelColor }} />
            <Tab label="Ficha de model" />
          </Tabs>
        </Paper>
      </div>
      <div className="col-1 d-flex align-items-center">
        <div>
          Menu
        </div>
        <div>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Navigation;