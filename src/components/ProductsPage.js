import TopSection from "./TopSection";
import ProductCard from "./ProductCard";
import chairImage from "../images/alpha-gamer-alegra---fabric-blue---black.jpg";
import headPhonesImage from "../images/asus-rog-delta-core-headset-gaming.jpg";
import mouseImage from "../images/logitech-g100s-rato-gaming.jpg";

function ProductsPage() {
    return (
        <div className="productspage">
            <TopSection />
            <div className="productscontainer">
                <ProductCard
                    img={chairImage}
                    name="Alpha Gamer Alegra Fabric Blue / Black"
                    price="$349.98"
                />
                <ProductCard
                    img={headPhonesImage}
                    name="Asus ROG Delta Core"
                    price="$102.99"
                />
                <ProductCard
                    img={mouseImage}
                    name="Logitech G100s"
                    price="$48.50"
                />
            </div>
        </div>
    );
}

export default ProductsPage;
