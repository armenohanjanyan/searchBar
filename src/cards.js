import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Big from './modal';


const styles = {
  card: {
    maxWidth: 200,
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
  },
};


class ImgMediaCard extends Component {
  constructor(props) {
      super(props);

  }

  componentWillMount() {
    console.log('hi Will')
  }

  componentDidMount() {
    console.log('hi Did')
  }

  componentWillUpdate(nextProps) {
    console.log('will',this.props)
  }


    componentDidUpdate(prevProps, prevState) {
      console.log('prev ', prevProps);
      console.log('this', this.props)
  }

  render() {
  const { classes } = this.props;
  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        className={classes.media}
        height="140"
        image={this.props.img}
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {this.props.name}
          {this.props.number}
        </Typography>
        <Typography component="p">
          {this.props.team}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
         <Big {...this.props} />
        </Button>
        <Button size="small" className="btn-danger" onClick={this.props.onDeleteCard}>
          Delete
        </Button>
      </CardActions>
    </Card>  
  
  );
}
}
ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
