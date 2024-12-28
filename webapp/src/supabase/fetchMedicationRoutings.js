import supabase from "@/config/supabase";

export const fetchMedicationRoutings = async () => {
  try {
    const { data, error } = await supabase
      .from("medication_routings")
      .select("*");

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
