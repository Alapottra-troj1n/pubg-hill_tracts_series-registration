"use client";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { Facebook } from "lucide-react";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TeamRegistration>();
  const onSubmit: SubmitHandler<TeamRegistration> = (data) => console.log(data);

  return (
    <div className="bg-hero-pattern bg-top bg-cover min-h-screen">
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
          <div>
            <form action="">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-2 text-white text-sm ">
                <div>
                  <input
                    placeholder="Captain Full Name (As Per Govt. ID)"
                    type="text"
                    className="bg-[#1a1919] border-[#8cbb36] w-full px-3 py-3  border placeholder-shown:text-sm "
                    {...register("captainFullName")}
                    required
                  />
                </div>
                <div>
                  <input
                    placeholder="Captain Game Name"
                    type="text"
                    className="bg-[#1a1919] border-[#8cbb36]  w-full px-3 py-3  border placeholder-shown:text-sm"
                    {...register("captainGameName")}
                    required
                  />
                </div>
                <div>
                  <input
                    placeholder="Captain Mobile Number"
                    type="text"
                    className="bg-[#1a1919] border-[#8cbb36]  w-full px-3 py-3  border placeholder-shown:text-sm"
                    {...register("captainMobileNumber")}
                    required
                  />
                </div>
                <div>
                  <input
                    placeholder="Captain Character ID"
                    type="text"
                    className="bg-[#1a1919] border-[#8cbb36]  w-full px-3 py-3  border placeholder-shown:text-sm"
                    {...register("captainCharacterID")}
                    required
                  />
                </div>
                <div>
                  <input
                    placeholder="Captain Email Address"
                    type="text"
                    className="bg-[#1a1919] border-[#8cbb36] w-full px-3 py-3  border placeholder-shown:text-sm "
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
                    className="bg-[#1a1919] border-[#8cbb36]  w-full px-3 py-3  border placeholder-shown:text-sm"
                    {...register("squadName")}
                    required
                  />
                </div>

                <div>
                  <input
                    placeholder="Team Member 1 Full Name (As Per Gov.ID)"
                    type="text"
                    required
                    className="bg-[#1a1919] border-[#8cbb36]  w-full px-3 py-3  border placeholder-shown:text-sm"
                    {...register("teamMember1FullName")}
                  />
                </div>

                <div>
                  <input
                    placeholder="Team Member 1 Character ID"
                    type="text"
                    required
                    className="bg-[#1a1919] border-[#8cbb36]  w-full px-3 py-3  border placeholder-shown:text-sm"
                    {...register("teamMember1CharacterID")}
                  />
                </div>

                <div>
                  <input
                    placeholder="Team Member 2 Full Name (As Per Gov.ID)"
                    type="text"
                    required
                    className="bg-[#1a1919] border-[#8cbb36]  w-full px-3 py-3  border placeholder-shown:text-sm"
                    {...register("teamMember2FullName")}
                  />
                </div>

                <div>
                  <input
                    placeholder="Team Member 2 Character ID"
                    type="text"
                    required
                    className="bg-[#1a1919] border-[#8cbb36]  w-full px-3 py-3  border placeholder-shown:text-sm"
                    {...register("teamMember2CharacterID")}
                  />
                </div>

                <div>
                  <input
                    placeholder="Team Member 3 Full Name (As Per Gov.ID)"
                    type="text"
                    required
                    className="bg-[#1a1919] border-[#8cbb36]  w-full px-3 py-3  border placeholder-shown:text-sm"
                    {...register("teamMember3FullName")}
                  />
                </div>

                <div>
                  <input
                    placeholder="Team Member 3 Character ID"
                    type="text"
                    required
                    className="bg-[#1a1919] border-[#8cbb36]  w-full px-3 py-3  border placeholder-shown:text-sm"
                    {...register("teamMember3CharacterID")}
                  />
                </div>

               

                <div>
                  <input
                    placeholder="Substitute Full Name"
                    type="text"
                    className="bg-[#1a1919] border-[#8cbb36]  w-full px-3 py-3  border placeholder-shown:text-sm"
                    {...register("substituteFullName")}
                  />
                </div>

                <div>
                  <input
                    placeholder="Substitute Character ID"
                    type="text"
                    className="bg-[#1a1919] border-[#8cbb36]  w-full px-3 py-3  border placeholder-shown:text-sm"
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
                  type="submit"
                  className="bg-[#AAE43E] hover:bg-white transition disabled:bg-[#85b134]  px-5 lg:text-2xl py-3 mt-7 mb-14 text-gray-800 font-medium  font-teko uppercase text-base"
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
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center">
          <Facebook  size={26} className="stroke-[#8cbb36] " />
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
