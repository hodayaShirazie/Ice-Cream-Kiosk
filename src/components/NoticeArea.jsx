export default function NoticeArea({ isLimitReached, scoopLimit, showNoFlavors }) {
  if (!isLimitReached && !showNoFlavors) return null;

  return (
    <div className="notice-area">
      {isLimitReached && (
        <div className="notice notice-warning">
          Scoop limit reached (max {scoopLimit} scoops per order).
        </div>
      )}
      {showNoFlavors && (
        <div className="notice notice-info">No flavors to show.</div>
      )}
    </div>
  );
}