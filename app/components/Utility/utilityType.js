export const accommodation = (utility) => (
  utility.utilityType === 'food_and_acommodation' ||
  utility.utilityType === 'accomodation'
)
export const food = (utility) => (
  utility.utilityType === 'food_and_acommodation' ||
  utility.utilityType === 'restaurant' ||
  utility.utilityType === 'petrol_station'
)
export const shop = (utility) => (
  utility.utilityType === 'shop' ||
  utility.utilityType === 'petrol_station'
)
export const transport = (utility) => (
  utility.utilityType === 'bus_stop' ||
  utility.utilityType === 'train_station'
)
