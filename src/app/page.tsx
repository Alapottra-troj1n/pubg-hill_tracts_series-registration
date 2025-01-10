"use client";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { Facebook, Info } from "lucide-react";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import toast from "react-hot-toast";

export default function Home() {
  type TeamRegistration = {
    captainFullName: string; // Captain Full Name (As per Govt. ID)
    captainGameName: string; // Captain Game Name
    captainMobileNumber: string; // Captain Mobile Number
    captainCharacterID: string; // Captain Character ID
    captainEmailAddress: string; // Captain Email Address
    squadName: string; // Squad Name
    teamMember1FullName: string; // Team Member 1 Full Name (As per Gov.ID)
    teamMember1CharacterID: string; // Team Member 1 Character ID
    teamMember2FullName: string; // Team Member 2 Full Name (As per Gov.ID)
    teamMember2CharacterID: string; // Team Member 2 Character ID
    teamMember3FullName: string; // Team Member 3 Full Name (As per Gov.ID)
    teamMember3CharacterID: string; // Team Member 3 Character ID
    substituteFullName?: string; // Substitute Full Name (As per Gov.ID)
    substituteCharacterID?: string; // Substitute Character ID
  };

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const supabase = createClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TeamRegistration>();

  const onSubmit: SubmitHandler<TeamRegistration> = async (data) => {
    setLoading(true);

    toast.error("Registration opens at 13th January. Please try again later.");
    return;

    //check if all non optional fields are filled
    if (
      !data.captainFullName ||
      !data.captainGameName ||
      !data.captainMobileNumber ||
      !data.captainCharacterID ||
      !data.captainEmailAddress ||
      !data.squadName ||
      !data.teamMember1FullName ||
      !data.teamMember1CharacterID ||
      !data.teamMember2FullName ||
      !data.teamMember2CharacterID ||
      !data.teamMember3FullName ||
      !data.teamMember3CharacterID
    ) {
      toast.error("Please fill all the required fields.");
      return;
    }

    const transformedData = {
      captain_full_name: data.captainFullName,
      captain_game_name: data.captainGameName,
      captain_mobile_number: data.captainMobileNumber,
      captain_character_id: data.captainCharacterID,
      captain_email_address: data.captainEmailAddress,
      squad_name: data.squadName,
      team_member1_full_name: data.teamMember1FullName,
      team_member1_character_id: data.teamMember1CharacterID,
      team_member2_full_name: data.teamMember2FullName,
      team_member2_character_id: data.teamMember2CharacterID,
      team_member3_full_name: data.teamMember3FullName,
      team_member3_character_id: data.teamMember3CharacterID,
      substitute_full_name: data.substituteFullName || null, // Optional field
      substitute_character_id: data.substituteCharacterID || null, // Optional field
    };

    try {
      const { data: existData } = await supabase
        .from("registrations")
        .select("*")
        .eq("captain_email_address", data.captainEmailAddress);

      console.log(existData, "exist");

      if ((existData || []).length > 0) {
        toast.error(
          `You have already registered with ${data.captainEmailAddress}.`
        );
        return;
      }

      const { data: registration, error } = await supabase
        .from("registrations")
        .insert([transformedData]);

      if (!error) {
        reset();
        toast.success(
          `Registration Successful! ${transformedData.captain_full_name}. You will be contacted soon. Good luck!`
        ,{duration: 10000});
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    } catch (err) {
      console.log(err);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-hero-pattern bg-top bg-cover min-h-screen">
      <div className="bg-red-500 py-2 text-center absolute top-0 w-full text-white">
        <h2>Registration opens on January 13th—stay tuned for more updates!</h2>

      </div>
      <div className="max-w-6xl mx-auto px-5 lg:px-0 ">
        <div className="flex justify-center flex-col items-center ">
          <div className="flex flex-col lg:flex-row lg:gap-2 items-center mb-12 lg:mb-0">
            <Image width={250} height={250} alt="logo" src={"/logo-min.png"} />
            <h2 className=" text-4xl text-center lg:text-left lg:text-5xl font-bold text-white font-teko lg:mt-6 ">
              Battle for Supremacy Among the Hills 
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[70%,30%] gap-16 lg:gap-28 mt-8 placeholder-shown:text-xs ">
          <div className="text-white lg:hidden">
            <div className="font-teko font-semibold text-3xl  ">
              <h2 className="px-2 ">
                How to Register for the <br />
              </h2>
              <h2 className="px-2 text-[#aae43e] ">
                <span className="text-[#F2AA00]">PUBG MOBILE</span><br /> Hill Tracts Battlegrounds Series
              </h2>

              <h4 className="text-base font-medium px-2 font-lato text-[#e4e4e4] mt-1">
                Registration is a simple three-step process.
              </h4>
            </div>
            <div className=" mt-10 font-lato font-bold ">
              <div className="flex relative pb-10 ">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-700 inline-flex items-center justify-center text-white relative z-10">
                  1
                </div>
                <div className="flex-grow pl-4 mt-2">
                  <p className="leading-relaxed">
                    Complete the registration form.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-10 ">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-700 inline-flex items-center justify-center text-white relative z-10">
                  2
                </div>
                <div className="flex-grow pl-4">
                  <p className="leading-relaxed">
                    Match fixtures and other instructions will be provided in
                    the captain’s email
                  </p>
                </div>
              </div>

              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-700 inline-flex items-center justify-center text-white relative z-10">
                  3
                </div>
                <div className="flex-grow pl-4">
                  <p className="leading-relaxed">
                    Organizer will reach out if your squad has qualified for the
                    Online Playoff.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="font-teko" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-2 text-white text-lg font-light tracking-wide">
                <div>
                  <input
                    placeholder="Captain Full Name (As Per Govt. ID)"
                    type="text"
                    className="bg-[#1a1919] border-[#8cbb36] w-full px-3 py-3  border  "
                    {...register("captainFullName")}
                    required
                  />
                </div>
                <div>
                  <input
                    placeholder="Captain Game Name"
                    type="text"
                    className="bg-[#1a1919] border-[#8cbb36]  w-full px-3 py-3  border "
                    {...register("captainGameName")}
                    required
                  />
                </div>
                <div>
                  <input
                    placeholder="Captain Mobile Number"
                    type="text"
                    className="bg-[#1a1919] border-[#8cbb36]  w-full px-3 py-3  border "
                    {...register("captainMobileNumber")}
                    required
                  />
                </div>
                <div className="relative">
                  <Info
                    onClick={() => setShow(!show)}
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                    className="absolute top-[14px] right-3 cursor-pointer"
                  />
                  {show && (
                    <div>
                      <div className="absolute top-9 right-10 bg-[#1a1919] p-2 text-white text-xs font-lato  border-[#9de649] border-4">
                        <img src="/id.gif" alt="" />
                      </div>
                    </div>
                  )}
                  <input
                    placeholder="Captain Character ID"
                    type="text"
                    className="bg-[#1a1919] border-[#8cbb36]  w-full px-3 py-3  border "
                    {...register("captainCharacterID")}
                    required
                  />
                </div>
                <div>
                  <input
                    placeholder="Captain Email Address"
                    type="email"
                    className="bg-[#1a1919] border-[#8cbb36] w-full px-3 py-3  border  "
                    {...register("captainEmailAddress")}
                    required
                  />
                </div>

                {/* <div className="relative ">
                <input
                  placeholder="Captain Date of Birth"
                  type="date"
                  aria-label="Date"
                  className="bg-[#1a1919] border-[#F2AA00]  w-full px-3 py-[9px] border text-gray-400  [color-scheme:dark]"
                  {...register("captainDateOfBirth")}
                />
                <span className="text-gray-400 absolute right-10 top-[13px] text-sm">
                  Captain Date of Birth
                </span>
              </div> */}

                <div>
                  <input
                    placeholder="Squad Name"
                    type="text"
                    className="bg-[#1a1919] border-[#8cbb36]  w-full px-3 py-3  border"
                    {...register("squadName")}
                    required
                  />
                </div>

                <div>
                  <input
                    placeholder="Team Member 1 Full Name (As Per Gov.ID)"
                    type="text"
                    required
                    className="bg-[#1a1919] border-[#8cbb36]  w-full px-3 py-3  border"
                    {...register("teamMember1FullName")}
                  />
                </div>

                <div>
                  <input
                    placeholder="Team Member 1 Character ID"
                    type="text"
                    required
                    className="bg-[#1a1919] border-[#8cbb36]  w-full px-3 py-3  border "
                    {...register("teamMember1CharacterID")}
                  />
                </div>

                <div>
                  <input
                    placeholder="Team Member 2 Full Name (As Per Gov.ID)"
                    type="text"
                    required
                    className="bg-[#1a1919] border-[#8cbb36]  w-full px-3 py-3  border "
                    {...register("teamMember2FullName")}
                  />
                </div>

                <div>
                  <input
                    placeholder="Team Member 2 Character ID"
                    type="text"
                    required
                    className="bg-[#1a1919] border-[#8cbb36]  w-full px-3 py-3  border "
                    {...register("teamMember2CharacterID")}
                  />
                </div>

                <div>
                  <input
                    placeholder="Team Member 3 Full Name (As Per Gov.ID)"
                    type="text"
                    required
                    className="bg-[#1a1919] border-[#8cbb36]  w-full px-3 py-3  border "
                    {...register("teamMember3FullName")}
                  />
                </div>

                <div>
                  <input
                    placeholder="Team Member 3 Character ID"
                    type="text"
                    required
                    className="bg-[#1a1919] border-[#8cbb36]  w-full px-3 py-3  border "
                    {...register("teamMember3CharacterID")}
                  />
                </div>

                <div>
                  <input
                    placeholder="Substitute Full Name"
                    type="text"
                    className="bg-[#1a1919] border-[#8cbb36]  w-full px-3 py-3  border "
                    {...register("substituteFullName")}
                  />
                </div>

                <div>
                  <input
                    placeholder="Substitute Character ID"
                    type="text"
                    className="bg-[#1a1919] border-[#8cbb36]  w-full px-3 py-3  border "
                    {...register("substituteCharacterID")}
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 mt-7 text-white text-xs font-bold font-lato ">
                <input
                  type="checkbox"
                  required
                  name="termsAndConditions"
                  className="cursor-pointer w-4 h-4  accent-[#AAE43E]
  "
                  id="termsAndConditions"
                />
                <div>
                  I agree to the{" "}
                  <span className="underline">Terms & Conditions</span>
                </div>
              </div>
              <div className="flex items-center gap-5 mt-3 text-white text-xs font-bold font-lato ">
                <input
                  type="checkbox"
                  required
                  name="dataAccuracy"
                  className="w-4 h-4 cursor-pointer accent-[#AAE43E] "
                  id="termsAndConditions"
                />
                <div>
                  Data shared here is accurate. Note: Inaccurate data will
                  result in immediate disqualification
                </div>
              </div>
              <div>
                <button
                  disabled={loading}
                  type="submit"
                  className="bg-[#AAE43E] hover:bg-white text-center transition disabled:bg-[#688a29]  px-5 lg:text-2xl py-3 mt-7 mb-14 text-gray-800 font-medium  font-teko uppercase text-base"
                >
                 Register For The Hill Tracts Battlegrounds Series
                </button>
              </div>
            </form>
          </div>

          <div className="text-white hidden lg:block">
            <div className="font-teko font-semibold text-3xl  ">
              <h2 className="px-2 ">
                How to Register for the <br />
              </h2>
              <h2 className=" text-nowrap px-2 text-[#F2AA00] ">
             PUBG MOBILE
              </h2>
              
              <h2 className=" text-nowrap px-2 text-[#aae43e] ">
              Hill Tracts Battlegrounds Series
              </h2>

              <h4 className="text-base font-medium px-2 font-lato text-[#e4e4e4] mt-1">
                Registration is a simple three-step process.
              </h4>
            </div>
            <div className=" mt-10 font-lato font-bold ">
              <div className="flex relative pb-10 ">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-700 inline-flex items-center justify-center text-white relative z-10">
                  1
                </div>
                <div className="flex-grow pl-4 mt-2">
                  <p className="leading-relaxed">
                    Complete the registration form.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-10 ">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-700 inline-flex items-center justify-center text-white relative z-10">
                  2
                </div>
                <div className="flex-grow pl-4">
                  <p className="leading-relaxed">
                    Match fixtures and other instructions will be provided in
                    the captain’s email
                  </p>
                </div>
              </div>

              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-700 inline-flex items-center justify-center text-white relative z-10">
                  3
                </div>
                <div className="flex-grow pl-4">
                  <p className="leading-relaxed">
                    Organizer will reach out if your squad has qualified for the
                    Online Playoff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1b1b1b] w-full py-12 mt-12 min-h-24 border-t-[1px] border-[#a7df3e]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-start">
            <Facebook size={26} className="stroke-[#8cbb36] " />
            <div className="flex flex-col lg:flex-row gap-5 font-teko">
              <h4 className="text-white text-sm font-lato font-bold">
                TERMS & CONDITIONS
              </h4>
              <h4 className="text-white text-sm font-lato font-bold">
                CONTACT
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
