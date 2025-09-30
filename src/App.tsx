import { useState } from "react";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard"
import MetricCard from "./components/MetricCard"
import ContactInfo from "./components/ContactInfo"
import RecentActivity from "./components/RecentActivity"
import customerData from "./mock/customer.json";

function App() {

  const [customer, setCustomer] = useState(customerData);

  return (
    <>
      {
        !customer ?
          (
            <div className="p-6">Loading...</div>
          )
          :
          <div className="min-h-screen bg-background">
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-textDefault items-start p-4 md:px-10">
              <div className="order-1 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 md:self-center">
                <ProfileCard customer={customer} />
              </div>
              <div className="order-2 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">
                <ContactInfo customer={customer} />
              </div>
              <div className="order-3 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3">
                <MetricCard label="TOTAL SPEND" value={`$ ${customer.totalSpend.toLocaleString()}`} />
              </div>
              <div className="order-4 md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4">
                <MetricCard label="NUMBER OF PURCHASES" value={customer.purchases} />
              </div>
              <div className="order-5 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-4">
                <RecentActivity activities={customer.activities} />
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default App
