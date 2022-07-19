import React, {useState} from 'react'
import {episodes} from '../fakeStorage/episodes'
import {paginate} from '../utils/paginate'
import Episode from './episode'
import Pagination from './pagination'
import PropTypes from 'prop-types'

const EpisodesList = () => {
  const count = episodes.length
  const pageSize = 8
  const [currentPage, setCurrentPage] = useState(1)

  const pageEpisodes = paginate(episodes, currentPage, pageSize)

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  return (
    <div className='container'>
      <div className='row'>
        {pageEpisodes.map((episode) => (
          <Episode key={episode.id} {...episode} />
        ))}
      </div>
      <div className='row'>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
}

export default EpisodesList
