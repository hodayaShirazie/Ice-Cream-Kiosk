export default function OrderSummary({
  totalScoops,
  scoopLimit,
  totalPrice,
  favoritesCount,
  onClear,
}) {
  return (
    <footer className="order-summary">
      <div className="summary-details">
        <h3>Order Summary</h3>
        <p>
          Total scoops: <strong>{totalScoops}</strong> / {scoopLimit}
        </p>
        <p>
          Total price: <strong>${totalPrice}</strong>
        </p>
        <p className="favorites-note">Favorites selected: {favoritesCount}</p>
        {totalScoops === 0 && (
          <p className="empty-note">Your order is empty</p>
        )}
      </div>

      <button
        type="button"
        className="clear-btn"
        onClick={onClear}
        disabled={totalScoops === 0}
      >
        Clear Order
      </button>
    </footer>
  );
}