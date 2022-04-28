import React from 'react'
import YoutubeItem from './YoutubeItem'

const YoutubeList = ({ videos, onVideoSelect }) => {
  return (
    <>
      {videos.map((video) => (
        <YoutubeItem
          key={video.id.videoId}
          video={video}
          onVideoSelect={onVideoSelect}
        />
      ))}
    </>
  )
}

export default YoutubeList
