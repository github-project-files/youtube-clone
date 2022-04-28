import React from 'react'

const YoutubeDetail = ({ video }) => {
  if (!video) {
    return <div>Loading .....</div>
  }
console.log(video)
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <>
      <div>
        <iframe
          title='video player'
          src={videoSrc}
           allowsFullscreen
          style={{ width: '100%', height: '450px' }}
        />
      </div>
      <div className=''>
        <h5>{video.snippet.channelTitle}</h5>
        <h6>{video.snippet.publishedAt}</h6>
        
        <h4 className=''>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </>
  )
}

export default YoutubeDetail
