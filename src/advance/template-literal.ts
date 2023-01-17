type VPosition = 'top' | 'middle' | 'bottom'
type HPositon = 'left' | 'center' | 'right'

type PositionValues = `${VPosition}-${HPositon}`

type PositionValues2 =
  | Exclude<`${VPosition}-${HPositon}`, 'middle-center'>
  | 'center'