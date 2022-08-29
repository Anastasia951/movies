import React from 'react'
import ContentLoader from 'react-content-loader'

const FilmItemLoading = () => (
  <ContentLoader
    speed={2}
    width={'100%'}
    height={'100%'}
    viewBox='0 0 300 500'
    backgroundColor='#f5f5f5'
    foregroundColor='#dbdbdb'>
    <rect x='0' y='0' rx='0' ry='0' width='300px' height='500px' />
  </ContentLoader>
)

export default FilmItemLoading
