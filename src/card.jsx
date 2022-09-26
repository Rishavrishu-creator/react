

const Card = (props) =>{

  console.log(props);
  return(
    <div className="outer">
        <h1>
            {props.product.id}
        </h1>
    </div>
  );
}

export default Card;