import React from 'react'
import { onSnapshot, doc, setDoc } from "firebase/firestore";
import { firestore } from '../../../firebase'
import { CovidDTO, CovidTranformDTO } from '../../model/Covid.dto'
import BaseLayout from '../../component/BaseLayout'
import HomeContainer from './component/HomeContainer'
import HomeForm from './component/HomeForm'
import HomeTimeline from './component/HomeTimeline'

const HomeViewPage: React.FC = () => {
  const [covid, setCovid] = React.useState<CovidDTO>({} as CovidDTO)
  const [covidTranform, setCovidtranform] = React.useState<CovidTranformDTO>({}  as CovidTranformDTO)

  const onDelete = async (slotId: string) => {
    const filterSlot = covid.slot.filter(item => item.slotId !== slotId)
    await setDoc(doc(firestore, "covid", "SZHr1LhZIT1xFE7vhhEi"), {
      ...covid,
      slot: filterSlot
    })
  }

  const onRetrieve = async () => {
    try {
      await onSnapshot(doc(firestore, "covid", "SZHr1LhZIT1xFE7vhhEi"), (doc) => {
        const response = doc.data()
        setCovid(response as CovidDTO)

        const slotGroupBy = response?.slot?.reduce((prev, cur) => ({
          ...prev,
          [cur.date]: (prev[cur.date] || []).concat(cur)
        }), {})

        const tranform = Object.keys(slotGroupBy)?.map(key => slotGroupBy[key])
        const sortDate = tranform?.sort((prev, cur) => {
          return new Date(prev[0]?.date)?.valueOf() - new Date(cur[0]?.date)?.valueOf()
        })

        const sortTime = sortDate?.map(item => item?.sort((prev, cur) => {
          return new Date(`${prev?.date} ${prev?.time}`).getTime() - new Date(`${cur?.date} ${cur?.time}`).getTime()
        }))

        setCovidtranform({
          ...response,
          slot: sortTime
        } as CovidTranformDTO)

      })
    }
    catch (e) {
      console.log(e)
    }
  }

  React.useEffect(() => {
    onRetrieve()
  }, [])

  return (
    <BaseLayout>
      <h1 className='home-title'>COVID Timeline Generator</h1>
      <HomeContainer>
        <HomeForm covid={covid} />
        <HomeTimeline
          covid={covidTranform}
          onDelete={onDelete}
        />
      </HomeContainer>
    </BaseLayout>
  )
}

export default HomeViewPage
