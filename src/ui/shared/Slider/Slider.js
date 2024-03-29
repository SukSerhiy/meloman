import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Button } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper'
import useStyles from './styles'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const Slider = ({
  id, items, keyName, renderItem,
}) => {
  const classes = useStyles()
  return (
    <div className={classes.container} id={id}>
      <Button className={clsx(classes.navigation, classes.prevBtn)}>
        <ArrowBackIosIcon />
      </Button>
      <Button className={clsx(classes.navigation, classes.nextBtn)}>
        <ArrowForwardIosIcon />
      </Button>
      <Swiper
        tag="section"
        spaceBetween={50}
        slidesPerView={3}
        id="main"
        navigation={{
          prevEl: `#${id} .${classes.prevBtn}`,
          nextEl: `#${id} .${classes.nextBtn}`,
        }}
        pagination
      >
        {items.map((item, idx) => (
          <SwiperSlide key={item[keyName] || idx}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

Slider.defaultProps = {
  items: [],
  keyName: 'id',
  renderItem: (item) => item,
}

Slider.propTypes = {
  id: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  keyName: PropTypes.string,
  renderItem: PropTypes.func,
}

export default Slider
