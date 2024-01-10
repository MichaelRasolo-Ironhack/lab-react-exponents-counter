const ExponentTwo = (props) => {  const total = Math.pow(props.count,2)
  return(
   <div className="exponent-counter-container">
    <p className="exponent-label">{props.count}²</p>
    <p className="exponent-result">{props.count} * {props.count} = <span className="total">{total}</span></p>
  </div>
)};

export default ExponentTwo;