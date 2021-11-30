import React from 'react'
import { doc, setDoc } from "firebase/firestore";
import { firestore } from '../../../../firebase'
import { CovidDTO } from '../../../model/Covid.dto'
import { OptionType } from '../../../type/OptionType'
import BaseCard from '../../../component/BaseCard'
import BaseInput from '../../../component/BaseInput'
import BaseTextarea from '../../../component/BaseTextarea'
import BaseButton from '../../../component/BaseButton'
import BaseSelect from '../../../component/BaseSelect'

interface Props {
  covid: CovidDTO
}

interface State {
  gender: string
  invalidGender: boolean
  age: number
  invalidAge: boolean
  occupation: string
  invalidOccupation: boolean
  datetime: string
  invalidDatetime: boolean
  detail: string
  invalidDetail: boolean
}

const initialState: State = {
  gender: 'ชาย',
  invalidGender: false,
  age: 0,
  invalidAge: false,
  occupation: '',
  invalidOccupation: false,
  datetime: '',
  invalidDatetime: false,
  detail: '',
  invalidDetail: false
}

const initialOption: OptionType[] = [
  { value: 'ชาย', label: 'ชาย' },
  { value: 'หญิง', label: 'หญิง' }
]

const HomeForm: React.FC<Props> = ({ covid }) => {
  const [state, setState] = React.useState(initialState)
  const [option] = React.useState(initialOption)

  const onChange = (name: keyof State, value): void => {
    setState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const verify = (): boolean => {
    const invalidGender = !(state.gender && state.gender.trim())
    const invalidAge = !(state.age && state.age > 0)
    const invalidOccupation = !(state.occupation && state.occupation.trim())
    const invalidDatetime = !(state.datetime && state.datetime.trim())
    const invalidDetail = !(state.detail && state.detail.trim())

    setState((prev) => ({
      ...prev,
      invalidGender,
      invalidAge,
      invalidOccupation,
      invalidDatetime,
      invalidDetail
    }))

    return (
      invalidGender
      || invalidAge
      || invalidOccupation
      || invalidDatetime
      || invalidDetail
    )
  }

  const onSubmit = async (): Promise<void> => {
    const isInValid = verify()

    if (isInValid) return
    await setDoc(doc(firestore, "covid", "SZHr1LhZIT1xFE7vhhEi"), {
      age: state.age,
      gender: state.gender,
      occupation: state.occupation,
      slot: [
        ...covid.slot,
        {
          date: state.datetime.split('T')[0],
          time: state.datetime.split('T')[1],
          detail: state.detail,
          slotId: Math.random()
        }
      ]
    })
    setState(initialState)
  }

  return (
    <div className='home-content form'>
      <BaseCard title={'ข้อมูลผู้ป่วย'}>
        <div className='divide-form'>
          <div className='divide'>
            <BaseSelect
              label='เพศ'
              value={state?.gender}
              options={option}
              messageError={state?.invalidGender && 'กรุณาเลือกเพศ' || ''}
              onChange={(value) => onChange('gender', value)}
            />
          </div>
          <div className='divide'>
            <BaseInput
              type='number'
              label='อายุ'
              value={state?.age}
              messageError={state?.invalidAge && 'กรุณากรอกอายุ' || ''}
              onChange={(value) => onChange('age', value)}
            />
          </div>
        </div>
        <BaseInput
          type='text'
          label='อาชีพ'
          value={state?.occupation}
          messageError={state?.invalidOccupation && 'กรุณากรอกอาชีพ' || ''}
          onChange={(value) => onChange('occupation', value)}
        />
      </BaseCard>
      <BaseCard title={'ข้อมูลไทม์ไลน์'}>
        <BaseInput
          type='datetime-local'
          label='วันเวลา'
          value={state?.datetime}
          messageError={state?.invalidDatetime && 'กรุณากรอกวันเวลา' || ''}
          onChange={(value) => onChange('datetime', value)}
        />
        <BaseTextarea
          rows={5}
          label='รายละเอียด'
          value={state?.detail}
          messageError={state?.invalidDetail && 'กรุณากรอกายละเอียด' || ''}
          onChange={(value) => onChange('detail', value)}
        />
        <BaseButton onClick={onSubmit}> + เพิ่มข้อมูล</BaseButton>
      </BaseCard>
    </div>
  )
}

export default HomeForm
