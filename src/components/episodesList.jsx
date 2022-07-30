import React, {useEffect, useState} from 'react'
import {fetchAll, fetchYears} from '../fakeApi/episodesApi'
import {paginate} from '../utils/paginate'
import Episode from './episode'
import GroupList from './groupList'
import Pagination from './pagination'

const EpisodesList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [episodes, setEpisodes] = useState([])
  const [years, setYears] = useState([])
  const [filter, setFilter] = useState()
  const count = episodes.length
  const pageSize = 6

  const getEpisodes = (year) => {
    fetchAll(year).then((response) => setEpisodes(response))
    setCurrentPage(1)
  }

  useEffect(() => {
    getEpisodes(filter)
  }, [filter])

  useEffect(() => {
    fetchYears().then((response) => setYears(response))
  }, [])

  const pageEpisodes = paginate(episodes, currentPage, pageSize)

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const handleFilterChange = (filter) => {
    setFilter(filter)
  }

  const handleReset = () => {
    setFilter()
  }

  return (
    <div className='container pt-2'>
      <div className='row'>
        <div className='col-4'>
          {!!years.length && (
            <>
              <GroupList
                items={years}
                filter={filter}
                onChangeFilter={handleFilterChange}
              />
              <hr />
              <div className='d-grid'>
                <button onClick={handleReset} className='btn btn-m btn-primary'>
                  Очистить
                </button>
              </div>
            </>
          )}
        </div>
        <div className='col-8'>
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
      </div>
    </div>
  )
}

export default EpisodesList
