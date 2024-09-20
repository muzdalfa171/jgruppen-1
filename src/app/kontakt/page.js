import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="py-36">
        <form className=" bg-[#81828531] px-44 pt-6 pb-8 mb-4">
          <div className="mb-4">
         
         <p className="text-center text-[#636466] text-2xl font-bold  p-8 ">KONTAKT</p>
            <input
              className=" hover:border-[#818285] border-2 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="company"
              type="text"
              placeholder="Företag"
            />
          </div>
          <div className="mb-4">
            
            <input
              className=" hover:border-[#818285] border-2 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Namn*"
              required
            />
          </div>
          <div className="mb-4">
           
            <input
              className="hover:border-[#818285] border-2 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email*"
              placeholder="Email*"
              required
            />
          </div>
          <div className="mb-4">
           
            <input
              className="hover:border-[#818285] border-2 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Telefonnummer"
            />
          </div>
          <div className="mb-4">
           
            <input
              className="hover:border-[#818285] border-2 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Adress"
            />
          </div>
          <div className="mb-4">
            
            <input
              className=" hover:border-[#818285] border-2 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="Ämne"
            />
          </div>
          <div className="mb-6">
            
            <textarea
              className=" hover:border-[#818285] border-2 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Meddelande*"
              required
              rows="4"
            ></textarea>
          </div>
          <div className="flex py-8 items-center justify-between">
            <button
              className="bg-[#4a536e] hover:bg-[#636466] text-white font-bold py-3 px-52 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Skicka
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactPage;