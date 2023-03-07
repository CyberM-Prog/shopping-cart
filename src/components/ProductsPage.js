import TopSection from "./TopSection";
import ProductCard from "./ProductCard";
import chairImage from "../images/alpha-gamer-alegra---fabric-blue---black.jpg";
import headPhonesImage from "../images/asus-rog-delta-core-headset-gaming.jpg";
import mouseImage from "../images/logitech-g100s-rato-gaming.jpg";
import Cart from "./Cart";

function ProductsPage(props) {
    return (
        <div className="productspage">
            <Cart isCartHidden={props.isCartHidden} hideCart={props.hideCart} />
            <TopSection
                cartQuantity={props.cartQuantity}
                unhideCart={props.unhideCart}
            />
            <div className="productscontainer">
                <ProductCard
                    img={chairImage}
                    name="Alpha Gamer Alegra Fabric Blue / Black"
                    price="$349.98"
                    changeCartQuantity={props.changeCartQuantity}
                />
                <ProductCard
                    img={headPhonesImage}
                    name="Asus ROG Delta Core"
                    price="$102.99"
                    changeCartQuantity={props.changeCartQuantity}
                />
                <ProductCard
                    img={mouseImage}
                    name="Logitech G100s"
                    price="$48.50"
                    changeCartQuantity={props.changeCartQuantity}
                />
            </div>
        </div>
    );
}

export default ProductsPage;
