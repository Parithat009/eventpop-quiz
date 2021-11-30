import React from 'react'
import { Slot } from '../../../model/Covid.dto'

interface Props {
  item: Slot[]
  onDelete: (slotId: string) => void
}

const HomeTimelineListItem: React.FC<Props> = (props) => {
  // console.log(props);

  return (
    <div className="container right">
      <div className="date">{props?.item[0]?.date}</div>
      <div className="content">
        {props?.item?.map((val, i) => (
          <div className='list-item-content' key={i}>
            <span className='list-item-time'>{val?.time} : </span>
            <span className='list-item-detail'>{val?.detail}</span>
            <div className='list-item-space' />
            <span className='list-item-delete' onClick={() => props.onDelete(val?.slotId)}>
              X
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeTimelineListItem
