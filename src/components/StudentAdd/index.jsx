import StudentProvider from "../../context/Student.provider";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

const StudentAdd = () => {
  return (
    <>
      <StudentProvider>
        <section className="my-12">
          <StudentForm />
        </section>
        <hr />
        <section className="my-12">
          <StudentList />
        </section>
      </StudentProvider>
    </>
  );
};

export default StudentAdd;
