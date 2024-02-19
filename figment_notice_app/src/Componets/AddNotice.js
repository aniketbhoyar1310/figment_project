import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";

const AddNotice = () => {
  const [showIssueCalendar, setShowIssueCalendar] = useState(false);
  const [showDueCalendar, setShowDueCalendar] = useState(false);
  const [formData, setFormData] = useState({
    gst: "",
    section:"",
    type:"",
    content: "",
    refnotice: "",
    Issued: "",
    dateChaned: "",
    dueDate: "",
    amount:"",
    file:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleIssueCalendarChange = (date) => {
    const formattedDate = format(date, "dd-MM-yyyy");
    setFormData((prevState) => ({
      ...prevState,
      dateChaned: formattedDate,
    }));
    setShowIssueCalendar(false);
  };

  const handleDueCalendarChange = (date) => {
    const formattedDate = format(date, "dd-MM-yyyy");
    setFormData((prevState) => ({
      ...prevState,
      dueDate: formattedDate,
    }));
    setShowDueCalendar(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      gst: "",
      content: "",
      type:"",
      section:"",
      refnotice: "",
      Issued: "",
      dateChaned: "",
      dueDate: "",
      amount:"",
      file:"",
    });
  };

  return (
    <div className="flex justify-center   items-center h-screen">
      <div className="">
        <div className=" flex items-center justify-center text-xl py-3" style={{background:"#f8f8f8"}}>
          <h3>Add Notice</h3>
        </div>
        <div className="py-6  bg-white px-8" style={{ boxShadow: "0 4px 24px 0 rgba(34, 41, 47, .1)" }}>
        <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {/* Inputs */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              GSTIN-TradeName <span className=" text-red-500">*</span>
            </label>
            <select
              id="gst"
              name="gst"
              value={formData.gst}
              onChange={handleChange}
              className="   shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select category</option>
              <option value="announcement">Announcement</option>
              <option value="event">Event</option>
              <option value="news">News</option>
            </select>
          </div>



          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Type <span className=" text-red-500">*</span>
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select category</option>
              <option value="announcement">Announcement</option>
              <option value="event">Event</option>
              <option value="news">News</option>
            </select>
          </div>


          <div className="mb-4">
            <label
              htmlFor="refnotice"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
           Section <span className=" text-red-500">*</span>
            </label>
            <select
              id="section"
              name="section"
              value={formData.section}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select category</option>
              <option value="announcement">Announcement</option>
            </select>
          </div>


          <div className="mb-4 relative">
            <label
              htmlFor="dateChaned"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Issue Date <span className=" text-red-500">*</span>
            </label>
            <input
              placeholder="Issue Date"
              id="dateChaned"
              name="dateChaned"
              value={formData.dateChaned}
              onChange={handleChange}
              onClick={() => setShowIssueCalendar(true)}
              readOnly
              className="transition ease-in-out  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {showIssueCalendar && (
              <div className="absolute top-full left-0 z-10 ">
                <Calendar
                  onChange={handleIssueCalendarChange}
                  value={
                    formData.dateChaned
                      ? new Date(formData.dateChaned)
                      : new Date()
                  }
                  formatShortWeekday={(locale, date) =>
                    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
                      date.getDay()
                    ]
                  }
                  formatShortMonth={(locale, date) =>
                    [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ][date.getMonth()]
                  }
                  formatDay={(locale, date) => date.getDate()}
                />
              </div>
            )}
          </div>
          {/* Select */}wedfwef
          <div className="mb-4">
            <label
              htmlFor="refnotice"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Ref/Notice Id <span className=" text-red-500">*</span>
            </label>
            <select
              id="refnotice"
              name="refnotice"
              value={formData.refnotice}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select category</option>
              <option value="announcement">Announcement</option>
            </select>
          </div>

          <div className="mb-4 relative">
            <label
              htmlFor="dueDate"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Due Date 
            </label>
            <input
              placeholder="Due Date"
              id="dueDate"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              onClick={() => setShowDueCalendar(true)}
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {showDueCalendar && (
              <div className="absolute top-full left-0 z-10">
                <Calendar
                  onChange={handleDueCalendarChange}
                  value={
                    formData.dueDate ? new Date(formData.dueDate) : new Date()
                  }
                  formatShortWeekday={(locale, date) =>
                    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
                      date.getDay()
                    ]
                  }
                  formatShortMonth={(locale, date) =>
                    [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ][date.getMonth()]
                  }
                  formatDay={(locale, date) => date.getDate()}
                />
              </div>
            )}
          </div>
          {/* Optional value */}
          <div className="mb-4">
            <label
              htmlFor="Issued"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Issued By <span className=" text-red-500">*</span>
            </label>
            <select
              id="Issued"
              name="Issued"
              value={formData.Issued}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select category</option>
              <option value="announcement">Announcement</option>
            </select>
          </div>
         
        
         

          <div className=" mb-4 relative ">
          <label
              htmlFor="dueDate"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Amount Of Demand 
            </label>
            <input
              placeholder="amount"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
             
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className=" mb-4 relative ">
          <label
              htmlFor="file"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
             Choose File
            </label>
            <input
              placeholder="file"
              id="file"
              name="file"
              type="file"
              value={formData.file}
              onChange={handleChange}
             
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Notice Order Description 
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Remark"
            />
          </div>
          {/* Submit button */}
         
          </div>
          <div className=" flex  justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default AddNotice;
