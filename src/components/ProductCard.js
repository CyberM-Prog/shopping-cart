function ProductCard(props) {
    return (
        <div className="product">
            <img src={props.img} alt=""></img>
            <div className="separator"></div>
            <h1 className="producttitle">{props.name}</h1>
            <div>
                <p className="price">{props.price}</p>
                <input
                    type="number"
                    defaultValue="1"
                    className="quantity"
                ></input>
                <button className="addtocartbtn">Add To Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;
