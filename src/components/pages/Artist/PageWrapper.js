import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import ProgressWrapper from '../../shared/ProgressWrapper'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 10%',
    minHeight: '100%',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundBlendMode: 'overlay',
  },
  content: {
    zIndex: 1,
    flex: 1,
    backgroundImage: 'linear-gradient(90deg, transparent 0, #a9a9a9d6 1%, #a9a9a9d6 99%, transparent 100%)',
    padding: '0px 3%',
  },
  contentTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: '#ffff',
    fontSize: 96,
    margin: 0,
    position: 'relative',
    bottom: 70,
    letterSpacing: 6,
    backgroundImage: 'radial-gradient(ellipse at center, #0000008a 0, transparent 70%, transparent 100%)',
  },
})

const PageWrapper = (props) => {
  const classes = useStyles()
  const {
    loading,
    artist,
    fetchArtist,
    children,
  } = props
  const { id } = useParams()
  const imageUrl = artist.images && artist.images[0]?.url
  useEffect(() => {
    if (!loading && artist.data?.id !== id) {
      fetchArtist(id)
    }
  }, [
    fetchArtist,
    id,
  ])
  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${imageUrl}), linear-gradient(90deg, #c6c6c6, #292929 25%, #292929 75%, #c6c6c6)`,
      }}
    >
      <ProgressWrapper loading={loading}>
        <div className={classes.content}>
          <section className={classes.contentTitle}>
            <img src={imageUrl} alt="artist" />
            <h2 className={classes.title}>{artist.name}</h2>
          </section>
          {children}
        </div>
      </ProgressWrapper>
    </div>
  )
}

export default PageWrapper
