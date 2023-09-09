import React, { useRef, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { LinearProgress } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Menu from 'ui/shared/SideMenu'
import useStyles from './styles'

const Header = () => {
  const classes = useStyles()
  const loading = useSelector((store) => store.loading)
  const headerRef = useRef(null);

  useEffect(() => {
    let lastScrollTop = 0;
    const header = headerRef.current
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        header.style.top = `${lastScrollTop > 80 ? -80 : -lastScrollTop}px`;
      } else {
        header.style.top = '0px';
      }
      lastScrollTop = scrollTop;
    });
  }, []);

  return (
    <header ref={headerRef} className={classes.root} id="header">
      <div className={classes.mainContent}>
        <Menu />
        <Link to="/" className={classes.headerTitle}>Meloman</Link>
      </div>
      {loading && (<LinearProgress />)}
    </header>
  )
}

export default Header
