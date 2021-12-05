import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  {
    id: "p1",
    price: 8,
    title: "FirstBook",
    description: "This is a very a good a major aaaaa something!",
  },
  {
    id: "p2",
    price: 16,
    title: "Second Book",
    description: "This is a back ehhhh terrible!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
