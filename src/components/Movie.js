const Movie = (props) => {
    return (
        <div className="movie">
            <img  src={props.img} alt="IronMan" />
              <p>Drama name: {props.Title}</p>
              <p>Year: {props.Year}</p>
         

        </div>
    )
}

export default Movie
