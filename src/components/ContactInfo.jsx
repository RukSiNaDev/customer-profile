function ContactInfo({ customer }) {
  const creditColors = {
    "NO CREDIT": "bg-warning text-white",
    "15 DAYS AFTER INVOICE": "bg-success text-white",
    "30 DAYS AFTER SERVICE": "bg-secondary text-white",
  };

  return (
    <div className="p-6 space-y-2">
      <h3 className="font-bold text-lg mb-2">CONTACT INFO</h3>
      <p className="flex items-center space-x-2">
        <img src="/email.png" alt="Email" className="w-5 h-5" />
        <span>{customer.email}</span>
      </p>
      <p className="flex items-center space-x-2">
        <img src="/phone-call.png" alt="Phone" className="w-5 h-5" />
        <span>{customer.phone}</span>
      </p>

      <div className="flex items-center space-x-2 mt-2">
        <span className="font-bold">CREDIT</span>
        <span className={`px-3 py-1 rounded-full text-bold ${creditColors[customer.creditStatus]}`}>
          {customer.creditStatus}
        </span>
      </div>

      <p>
        <span className="font-bold">Salesperson </span>
        {customer.salesperson}
      </p>
    </div>
  );
}

export default ContactInfo;
