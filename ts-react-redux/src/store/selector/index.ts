import { createSelector } from "reselect";
import { FruitsState } from "../../types/reducers";

export const fruitsBucketSelector = (fruits: FruitsState) => fruits.bucket

export const totalPriceSelector = createSelector(
  fruitsBucketSelector,
  bucket => bucket.reduce((acc, cur) => acc + cur.price, 0)
)
