import Card from "./card";

export const P2pBalance = () => {
  return (
    <div>
        <div className="w-96">
            <div className="block bg-gradient-to-bl from-blue-300 to-blue-400 border border-gray-200 rounded-lg shadow">
              <div className="text-white font-bold px-6 pt-6 whitespace-nowrap">
                Available Balance
              </div>
              <div className="text-3xl text-white font-bold px-6 pt-4">
                $3000.00
              </div>
              <div className="px-6 pb-6 pt-2 text-blue-200 text-sm font-bold">
                Last updated: Today, 10:00 AM
              </div>
            </div>
        </div>
     
    </div>
  );
};
