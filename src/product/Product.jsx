export default function Product({ product }) {
  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.id}. {product.name}</h2>
      <p>Harga: Rp{product.price}</p>
    </div>
  );
}
