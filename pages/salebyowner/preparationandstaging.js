import React from "react";
import MainHeader from "../../components/MainHeader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect } from "react";
import { BsCheck2 } from "react-icons/bs";
import { Checkbox } from "@nextui-org/react";
// import Chatbot from "../../components/Chatbot";
function Preparationandstaging() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);
  return (
    <div>
      {/* <Chatbot></Chatbot> */}
      <MainHeader page={""}></MainHeader>
      <div className="w-full h-[85-vh] grid sm:grid-cols-2 grid-cols-1">
        <div className="flex flex-col items-center px-3">
        <div className="my-5 py-2 bg-custom-light-yellow rounded-lg sm:text-3xl text-2xl justify-center items-center w-full flex font-header">
          Staging to Sell
        </div>
        <div className="sm:h-[75vh] h-[50vh]">
          <Image
            src="/Checklist.jpg"
            fill
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAsICAoIBwsKCQoNDAsNERwSEQ8PESIZGhQcKSQrKigkJyctMkA3LTA9MCcnOEw5PUNFSElIKzZPVU5GVEBHSEX/2wBDAQwNDREPESESEiFFLicuRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUX/wAARCABxAHEDASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAAUCAwQGAQf/xAAgEAABBQEAAwEBAQAAAAAAAAAAAQIDBDEhERJBMhMi/8QAFwEBAQEBAAAAAAAAAAAAAAAAAQACA//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A+uAAEgAApJVIvQYvSuR/QY/pMtIAi+UAmgAASAABJmtYoomXo0tu0UTO6TFQ8gQ9gFl1IAAOoIyO9WkjLZk8IQqiSTp4yTpklm6RZN0cZO4X+ULDDXlw3IvlPINQAAEQC4BGRfDFJMFt+iiZ/Tfbk0TzydFipe4Gb+gDgdwAAZdHjl8NVRVbl0YWH+rRFcl01IKzTTd0jHN3TDNN0hHN01jLo602DaCT2b4OaqzYOq0uBYYYgeNd7IemGgZ7L/CF7l8IL7UmjIC23Jonnk6brkmiWeTqm5As/qBk/qA4n04APHL4apyaYrj+Kc9dk0dXHac7edp0gLJ5elcU3+iiy/qlUT/9G2a6GpLg8qyYczTfg9qvwzUewycL/fhghfw0e/DNhSlfwWWn8U1yv4LLT+KKKrj9EtiToyuP0SWH9UYR/QDN7gaOPsZGT8qSIyfk4RFFxdOevfTobiac/dTTeggs/pSmL9GmwzqlMbOmtGGdRcHtVcEdVMHdXEDQbQrw0e3DJFho88BISu4LLTtGEq8FlnFIktxdElheqObn0SWNU1K1FHkDwB0vtJF/5JHjsU4gqtpohuN06K03RJbbo6HPzx9UpZH03zM6VNZ0tK+s3BxWTBdXZg1rtwtDbEnC/wCFUacLvHC0KJcFtn6M5U4LbKcUdRHbTRLYTo8tponnToaYx+ALfAFpfYgXAAEwWU0TWm6PLKaJrKaAhPM3pU1vTVKnSpqdBtogaMoEMECDKBMFmtkaFvjhXGW/BZZ5U4LbKaM5cFtn6SJbSaKJ06ObX0UzJ0Cy+AJ+ABPrgABosdn6J7P0AAQsl1SpugBltrg1BlAACzW1hZ8ABZUS4LrP0AJE1r6KZtAAKkAAE//Z"
            className="!relative"
            alt="..."
          ></Image>
        </div>
        </div>
        <div className="sm:px-12 px-3 h-[85vh] sm:overflow-y-scroll overflow-y-visible no-scrollbar">
          <div className="font-header w-full justify-center py-6 text-left sm:text-xl text-lg tracking-wider">
            Staging is the icing on the cake that gives your home a professional
            touch. With a few props and the following tips, your home will show
            like a model.
          </div>
          <div className="py-6 w-full font-Montserrat">
            <div className="font-semibold font-header mb-4">
              The front of your home:
            </div>
            <ol className=" list-outside leading-5 text-sm py-2">
              <li className="w-full flex items-start space-x-4">
               <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
              <div>
                Clear any debris, remove cobwebs, clean your front door, door
                bell or door knocker, polish the storm door, replace rusted or
                worn hardware.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
               <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
              <div>
                Add a fresh doormat.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
               <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
              <div>
                Add a pot or two of flowers at the front of the house and remove
                any dead plants or empty planters{" "}
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
               <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
              <div>
                Pro tip: Remove any other items from the front yard— storage
                items, lawn care products should be removed.toys,
                </div>
              </li>
            </ol>
          </div>
          <div className="py-6 w-full font-Montserrat">
            <div className="font-semibold font-header mb-4">Interior rooms:</div>
            <ol
              className="
         list-outside leading-5 text-sm py-2"
            >
              <li className="w-full flex items-start space-x-4 ">
               <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
              <div>
                Box up everything you can live without during your marketing
                period. Clear all surfaces of every counter, dresser, and table.
                Place a neat basket of “personal items” (remotes, magazines,
                etc.) in a corner if necessary. Once the house feels too bare,
                you{"'"}
                re ready.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
               <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
              <div>
                Remove any collections.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
               <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
              <div>
                Replace cleared items with one or two decorative items - be sure
                to add an item of greenery.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
               <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
              <div>
                Pictures should be hung at eye level.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
               <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
              <div>
                Limit personal photos to a small display on an end table, on the
                stairway walls or in a hallway— never display personal photos in
                a bathroom or in the master bedroom.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
               <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
              <div>
                Boxes are OK in garages, unfinished basements, or designated
                storage areas only.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
               <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
              <div>
                Pro tip: Weather permitting, open the windows and air out your
                rooms prior to the first day of showings.
                </div>
              </li>
            </ol>
          </div>
          <div className="py-6 w-full font-Montserrat">
            <div className="font-semibold font-header mb-4">Kitchen:</div>
            <ol className=" list-outside leading-5 text-sm py-4">
            <li className="w-full flex items-start space-x-4">
               <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
              <div>
                Clear all counters and tables of all small items and appliances.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
              <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
              <div>
                Clear refrigerator of magnets and other items, clear tops of the
                fridge and cabinets.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
               <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
              <div>
                Polish your sink and floors, re-caulk around sink if needed. Add
                new hardware to cabinets if needed.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4 mb-2">
               <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
              <div>
                Remove 1/3 of items in your pantry.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
               <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
              <div>
                Pro tip: Empty all trashcans and scrub clean.
                </div>
              </li>
              <li className="w-full flex items-center space-x-4">
               <Checkbox  color="warning" size="lg" radius="none" ></Checkbox>
              <div>
                Replace binsin inconspicuous places and place one
                fabric-softenersheet in the bottom of each bin for a subtly
                fresh scent.
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preparationandstaging;
