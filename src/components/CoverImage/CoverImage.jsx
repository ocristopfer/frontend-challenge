import React from 'react'
import PropTypes from 'prop-types'
import styles from './CoverImage.module.css'
import musicCover from '../../images/musicCover.jpg'

const getImage = imageList => {
  if (imageList !== undefined && imageList.length > 0) {
    return imageList[imageList.length - 2].url
  }
  return musicCover
}

const CoverImage = ({ imageList, customCoverClass }) => (
  <img
    className={
      customCoverClass !== undefined ? customCoverClass : styles.coverImage
    }
    variant="top"
    src={getImage(imageList)}
    alt=" "
  />
)

CoverImage.propTypes = {
  imageList: PropTypes.array,
  customCoverClass: PropTypes.string,
}

export default CoverImage
