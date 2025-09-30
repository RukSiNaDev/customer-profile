function MetricCard({ label, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <p className="font-bold text-lg">{label}</p>
      <p className="text-3xl font-extrabold text-primary mt-2">{value}</p>
    </div>
  );
}

export default MetricCard;