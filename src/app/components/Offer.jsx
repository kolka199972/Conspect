import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import qs from 'query-string'

const Offer = () => {
  const [showOffer, setShowOffer] = useState(false)

  const {search} = useLocation()
  const {fromUrl, block} = qs.parse(search)

  useEffect(() => {
    if (!showOffer && fromUrl && block) {
      setShowOffer(true)
    }
  }, [fromUrl, block])

  return showOffer ? <div>Специальное предложение</div> : null
}

export default Offer
