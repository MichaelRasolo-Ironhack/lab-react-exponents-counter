const ExponentThree = (props) => {
  const total = Math.pow(props.count,3)

  return(
   <div className="exponent-counter-container">
    <p className="exponent-label">{props.count}³</p>
    <p className="exponent-result">{props.count} * {props.count} * {props.count} = <span className="total">{total}</span></p>
  </div>
)};

export default ExponentThree;