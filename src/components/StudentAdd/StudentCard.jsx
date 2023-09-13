/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { MdDelete, MdOutlineEditNote } from "react-icons/md";
import { StudentContext } from "../../context/Student.provider";
import EditModal from "./EditModal";

const StudentCard = ({ img_url, student_data, id }) => {
  const { DeleteHandler,editStudentModal } = useContext(StudentContext);
  const [open, setOpen] = useState(false);

  const default_image =
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60";
  console.log("card");
  return (
    <div className="w-[100%] md:w-[49%] lg:w-[32%]">
      <div>
        <img
          className="w-full"
          src={img_url ? img_url : default_image}
          alt="KMs"
        />
      </div>
      <div>
        <h2>{student_data.name}</h2>
        <p> {student_data.age ? `${student_data.age} years` : "nodata"}</p>
      </div>
      <div className="mt-4">
        <button
          className="py-2 px-3 border-2 rounded-md "
          onClick={() => DeleteHandler(id)}
        >
          <MdDelete size={22} className="text-red-600" />
        </button>
        <button className="py-2 px-3 border-2 rounded-md ml-5 ">
          <MdOutlineEditNote
            size={22}
            className="text-yellow-500"
            onClick={() => {
              setOpen(true);
              editStudentModal(id)
            }}
          />
        </button>
      </div>
      <EditModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default StudentCard;
