import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import YoutubeDetail from './components/YoutubeDetail'
import YoutubeList from './components/YoutubeList'


function App() {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  // Get Videos
  const handleTermSubmit = async (term) => {
    const response = await axios.get(
      'https://www.googleapis.com/youtube/v3/search',
      {
        params: {
          part: 'snippet',
          type: 'video',
          maxResults: 5,
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
          q: term,
        },
      }
    )

    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])
  }

  useEffect(() => {
    handleTermSubmit('HTML')
  }, [])

  const handleSelected = (video) => {
    setSelectedVideo(video)
  }
  return (
    <>
      <Search onTerm={handleTermSubmit} />
      <div className='ui container'>
        <div className='row'>
          <div className='col-sm-8'>
            <YoutubeDetail video={selectedVideo} />
          </div>
          <div className='col-sm-4'>
            <YoutubeList videos={videos} onVideoSelect={handleSelected} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
