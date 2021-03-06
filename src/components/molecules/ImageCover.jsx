import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    position: 'absolute',
    width: '100%',
    height: 400,
  },
  img: {
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center center',
  },
  space: {
    height: 300,
  },
})

class ImageCover extends Component {
  render() {
    const { children, img, alt, classes } = this.props

    return (
      <Fragment>
        <div className={classes.root}>
          <img src={img} className={classes.img} alt={alt} />
          {children}
        </div>
        <div className={classes.space} />
      </Fragment>
    )
  }
}

export default withStyles(styles, { name: 'imageCover' })(ImageCover)
