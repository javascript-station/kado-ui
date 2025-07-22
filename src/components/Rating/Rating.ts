import RatingRoot from "./RatingRoot";
import RatingItems from "./RatingItems";

const Rating = Object.assign(RatingRoot, {
  Items: RatingItems
});

export default Rating;