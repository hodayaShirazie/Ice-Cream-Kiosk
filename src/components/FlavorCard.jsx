export default function FlavorCard({
  flavor,
  isLimitReached,
  onAdd,
  onRemove,
  onToggleFavorite,
}) {
  const isOutOfStockForOrder = flavor.scoopsSelected >= flavor.availableScoops;

  return (
    <div className={`flavor-card ${flavor.isSoldOut ? 'sold-out' : ''}`}>
      <div className="card-top">
        <h2>{flavor.name}</h2>
        <button
          type="button"
          className={`fav-btn ${flavor.isFavorite ? 'active' : ''}`}
          onClick={() => onToggleFavorite(flavor.id)}
          aria-label={`Favorite ${flavor.name}`}
        >
          {flavor.isFavorite ? '★' : '☆'}
        </button>
      </div>

      {flavor.isSoldOut && <span className="sold-out-badge">Sold Out</span>}

      <p className="stock-info">Available: {flavor.availableScoops}</p>
      <p className="scoops-count">Selected: {flavor.scoopsSelected}</p>

      <div className="card-controls">
        <button
          type="button"
          className="ctrl-btn"
          onClick={() => onRemove(flavor.id)}
          disabled={flavor.isSoldOut || flavor.scoopsSelected === 0}
        >
          –
        </button>
        <button
          type="button"
          className="ctrl-btn"
          onClick={() => onAdd(flavor.id)}
          disabled={flavor.isSoldOut || isLimitReached || isOutOfStockForOrder}
        >
          +
        </button>
      </div>
    </div>
  );
}