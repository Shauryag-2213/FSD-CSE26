import Items from "../components/Items";

function ItemStore(){
    let products = [
        {
      id: 1,
      title: "Harry Potter",
      price: 450
    },
    {
      id: 2,
      title: "The Hobbit",
      price: 350
    },
    {
      id: 3,
      title: "Atomic Habits",
      price: 500
    },
    {
      id: 4,
      title: "Rich Dad Poor Dad",
      price: 400
    }
    ];
     return (
    <div className="items">
      {products.map((product) => (
        <Items
          key={product.id}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}
export default ItemStore;