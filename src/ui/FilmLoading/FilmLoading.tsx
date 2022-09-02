import React from 'react'
import ContentLoader from 'react-content-loader'

export const FilmLoading = () => {
  return (
    <ContentLoader
      width={'100%'}
      height={300}
      viewBox='0 0 100% 300'
      backgroundColor='#f5f5f5'
      foregroundColor='#dbdbdb'>
      <rect x='0' y='45' rx='16' ry='16' width='50%' height='210' />
      <rect x='52%' y='113' rx='3' ry='3' width='102' height='7' />
      <rect x='52%' y='91' rx='3' ry='3' width='20%' height='7' />
      <rect x='52%' y='139' rx='3' ry='3' width='30%' height='7' />
      <rect x='52%' y='162' rx='3' ry='3' width='27%' height='7' />
      <rect x='52%' y='189' rx='3' ry='3' width='22%' height='7' />
      <rect x='52%' y='41' rx='3' ry='3' width='50%' height='29' />
    </ContentLoader>
  )
}
