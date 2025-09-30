function ProfileCard({ customer }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm flex items-center space-x-4">
      <div className="w-16 h-16 rounded-full bg-purple-800 flex items-center justify-center text-white font-bold text-xl">
        {customer.initials}
      </div>
      <div>
        <h2 className="text-xl font-bold">{customer.fullName}</h2>
        <p>{customer.company}</p>
        <p className="text-sm text-gray-500">Active since {customer.activeSince}</p>
      </div>
    </div>
  );
}

export default ProfileCard;