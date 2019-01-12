import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    minWidth: 275,
    margin: '10px 20px 0px 20px',  
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}

class PatientCard extends Component { 
   
  render() {
    const { classes } = this.props
    
    return (
      <Card className={classes.card}>

       <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          Chart # {this.props.patient.chartNumber} {this.props.patient.ownername} 
          </Typography>
          <Typography variant="h5" component="h2">
          Patient: {this.props.patient.patientname}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          
          </Typography>
          <Typography component="p">
            Species: {this.props.patient.species}
          </Typography>
          <Typography component="p">
            Breed: {this.props.patient.breed}
          </Typography>
          <Typography component="p">
            Age: {this.props.patient.age}
          </Typography>
          <Typography component="p">
            Weight: {this.props.patient.weight}
          </Typography>
          <Typography component="p">
            Color: {this.props.patient.color}
          </Typography>
        </CardContent>
        <CardActions> 
          <Button size="small" variant="contained" color={this.props.rightbuttonColor} disabled={this.props.isDisabled}
                  onClick={() => this.props.handleRightButtonSelection(this.props.patient)} >{this.props.rightButtonLabel}</Button>
          <Button size="small" variant="contained" color={this.props.leftbuttonColor} disabled={this.props.isDisabled}  
                  onClick={() => this.props.handleLeftButtonSelection(this.props.patient)}>{this.props.leftButtonLabel}</Button>
        </CardActions> 
      </Card>
    )  //return
  }   //render
}  // class PatientCard

PatientCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PatientCard)
