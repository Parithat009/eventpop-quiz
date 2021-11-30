
export class CovidDTO {
  age: string
  gender: string
  occupation: string
  slot: Slot[]
}

export class CovidTranformDTO {
  age: string
  gender: string
  occupation: string
  slot: Slot[][]
}

export class Slot {
  date: string
  time: string
  slotId: string
  detail: string
}
