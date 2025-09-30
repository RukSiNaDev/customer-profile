function ActivityItem({ action, time }) {
  return (
    <div className="flex justify-between items-center py-2">
      <div className="flex items-center space-x-2">
        <span className="w-2 h-2 rounded-full bg-green-600"></span>
        <span>{action}</span>
      </div>
      <span className="text-sm text-gray-500">{time}</span>
    </div>
  );
}

export default ActivityItem;
