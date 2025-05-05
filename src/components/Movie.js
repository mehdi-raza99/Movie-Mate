import StarIcon from '@mui/icons-material/Star';
const Movie = (props) => {

  return (
    <>
    <div className="nft">
        <div className='main'>
      <img className='tokenImage' src={props.image} alt="Not Available"/>
      <h2>{props.title}</h2>
      <p className='description'>{props.overview}</p>
      <div className='tokenInfo'>
        <div className="price">
          <StarIcon/>
          <p>{props.rating > 0 ? props.rating.toFixed(1) : "N/A"}</p>
        </div>
        <div className="duration">
          <p>{props.release_date ? props.release_date.substring(0,4) : "N/A"}</p>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Movie
