import React from 'react'
import { CovidTranformDTO } from '../../../model/Covid.dto'
import HomeTimelineListItem from './HomeTimelineListItem'

interface Props {
  covid: CovidTranformDTO
  onDelete: (slotId) => void
}

const HomeTimeline: React.FC<Props> = ({ covid, onDelete }) => {
  return (
    <div className='home-content view-timeline'>
      <h1 className='home-title'>Timeline</h1>
      <div className='home-description-container'>
        <div className='home-description-content'>

          <span className='home-description-title'>ผู้ป่วย{covid?.gender} อายุ {covid?.age} ปี</span>
          <span className='home-description-occupation'>อาชีพ {covid?.occupation}</span>
        </div>
      </div>
      <div className='app-container-na'>
        <div className="timeline">
          {covid?.slot?.map((item, i) => (
            <HomeTimelineListItem
              key={i}
              item={item}
              onDelete={onDelete}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeTimeline
