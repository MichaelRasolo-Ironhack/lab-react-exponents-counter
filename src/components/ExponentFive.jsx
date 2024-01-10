const ExponentFive = (props) => {
  const total = Math.pow(props.count,5)

  return(
  <div className="exponent-counter-container">
    <p className="exponent-label">{props.count}⁵</p>
    <p className="exponent-result">{props.count} * {props.count} * {props.count} * {props.count} * {props.count} = <span className="total">{total}</span></p>
  </div>
)};

export default ExponentFive;