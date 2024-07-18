function cart({ cart,plus,minus,rem,price,quantity }) {
  const text = {
    textAlign: "center",
  };
  const center= {
    display:"flex",
    justifyContent:"center",
    alignItems: "center"
  }
  return (
    <div className="cart">
      <div className="data">
          {cart.map((elem, i) => {
            return (
              <div className="phone" key={i}>
              <div className="card">
                <img src={elem.img} alt="Phone" />
                <p>{elem.name}</p>
                <p id="h">{elem.price}</p>
                <div className="inc" style={center}>
                  <button className="btn" onClick={()=>{plus(elem)}} style={{width:"25%", margin:"auto"}}> + </button>
                  <p style={text}>{elem.quantity}</p>
                  <button className="btn" onClick={()=>{minus(elem)}} style={{width:"25%" , margin:"auto"}}> - </button>
                </div>
                <div className="rem">
                  <button onClick={()=>{rem(elem,i)}}> Remove Item</button>
                </div>
              </div>
              </div>
            );
          })}
      </div>
      <div className="total">Total price: {price}</div>
    </div>
  );
}

export default cart;
