import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

const AlaPage = async () => {
  const cookieStore = cookies();
  const supabase = await createClient(cookieStore);

  const data = await supabase.from("registrations").select("*");
  console.log(data);

  return (
    <div>Alapottra</div>
  );
};

export default AlaPage;
