import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { addDays } from "date-fns";
import Reminder from "../assets/images/Reminder.png";
import { MedicationRoutingDialog } from "../components/MedicationRoutingDialog";
import { fetchMedicationRoutings } from "@/supabase/fetchMedicationRoutings";

export default function MediAlarm() {
  const [cards, setCards] = useState([]);
  const [date, setDate] = useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMedicationRoutings();
        setCards(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex-1 bg-pagebg space-y-4 p-8 pt-6">
      {/* Main Card */}
      <Card className="flex items-center bg-gray-900 rounded-medium shadow-none justify-between p-4">
        <div className="flex items-center space-x-4">
          <img
            src={Reminder}
            alt="reminder png "
            className="w-16 h-16 object-contain"
          />
          <div>
            <h1 className="text-lg text-white font-bold">
              Stay on Track with Your Medications
            </h1>
            <p className="text-sm text-white text-muted-foreground">
              Maintain your health with our medication reminder. Set up your
              routines and get timely reminders to ensure you never miss a dose.
            </p>
          </div>
        </div>

        <MedicationRoutingDialog />
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <Card
            key={index}
            className="flex items-center hover:border-green-400 hover:bg-green-200 border border-dashed text-sm rounded-medium shadow-none justify-between p-4"
          >
            <div className="flex items-center pl-5 space-x-4">
              <div>
                <h1 className="text-lg font-bold">{card.condition}</h1>
                <p className="text-sm text-muted-foreground">
                  {card.medications.map((med, medIndex) => (
                    <div key={medIndex}>
                      <strong>{med.name}</strong>: {med.dosage}, {med.frequency}
                      , {med.timeOfDay},{" "}
                      {med.endDate
                        ? new Date(med.endDate).toLocaleDateString()
                        : "No end date"}
                    </div>
                  ))}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
