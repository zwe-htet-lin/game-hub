import meh from "../../assets/meh.webp"
import thumbsUp from "../../assets/thumbs-up.webp"
import bullsEye from "../../assets/bulls-eye.webp"

interface Props {
  rating: number;
}

const RatingEmoji = ({ rating }: Props) => {
  const src = rating === 3 ? meh : rating === 4 ? thumbsUp : rating === 5 ? bullsEye : '';
  const alt = rating === 3 ? 'meh' : rating === 4 ? 'recommended' : rating === 5 ? 'exceptional' : '';
  const size = rating === 3 ? "size-6" : rating === 4 ? "size-6" : rating === 5 ? "size-7" : "";

  return (
    <div className={size}>
      <img src={src} alt={alt}/>
    </div>
  )
}

export default RatingEmoji