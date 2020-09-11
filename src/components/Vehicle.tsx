import React, { useState, Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import '../styles/vehicle.css'

const useStyles = makeStyles((theme) => ({
  showModelButton: {
    margin: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    borderRadius: 15,
    color: '#ffffff',
    backgroundColor: '#000000',
    transition: theme.transitions.easing.easeInOut,
    '&:hover': {
      background: "#000000",
      color: "#ffffff",
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function Vehicle(props:any):JSX.Element{
  const classes = useStyles();
  const [isShown, setIsShown] = useState<boolean>(false);

  return (
    <Fragment>
      <div 
        className="select-vehicle py-3"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        >
        <h3>{props.vehicle.brand_name}</h3>
        <h4>{props.vehicle.brandName}</h4>
        <p>{props.vehicle.year} | {props.vehicle.price}</p>
        <div className="vehicle-container">
          <img src={'https://glacial-castle-98074.herokuapp.com/' + props.vehicle.main_img_url} alt=""/>
        </div>
        <div className="container-button">
          {!isShown ? null : (
            <Button variant="outlined" size="large" color="primary" className={classes.showModelButton}>
              Ver Modelo
            </Button>
          ) }
        </div>
      </div>
    </Fragment>
  )
}

export default Vehicle;