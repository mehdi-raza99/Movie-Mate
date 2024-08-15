import StarIcon from '@mui/icons-material/Star';
const Movie = (props) => {

  return (
    <>
    <div className="nft">
        <div class='main'>
      <img class='tokenImage' src={props.image} alt="Not Available"/>
      <h2>{props.title}</h2>
      <p class='description'>{props.overview}</p>
      <div class='tokenInfo'>
        <div class="price">
          <StarIcon/>
          <p>{props.rating > 0 ? props.rating.toFixed(1) : "N/A"}</p>
        </div>
        <div class="duration">
          <p>{props.release_date ? props.release_date.substring(0,4) : "N/A"}</p>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Movie
