// Общие классы
class GenericNumber<NumType> {
  zeroValue: NumType
  add: (x: NumType, y: NumType) => NumType
}

const myGenericNum = new GenericNumber<number>()
myGenericNum.zeroValue = 0
myGenericNum.add = (x, y) => x + y

// Классы не ограничены числами
const stringNumeric = new GenericNumber<string>()
stringNumeric.zeroValue = ''
stringNumeric.add = (x, y) => x + y

console.log(stringNumeric.add(stringNumeric.zeroValue, 'test'))

