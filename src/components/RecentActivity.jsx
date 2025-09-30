import ActivityItem from "./ActivityItem";

function RecentActivity({ activities }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="font-bold text-lg mb-4">RECENT ACTIVITY</h3>
      <div className="divide-y">
        {activities.map((act, index) => (
          <ActivityItem key={index} action={act.action} time={act.time} />
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;