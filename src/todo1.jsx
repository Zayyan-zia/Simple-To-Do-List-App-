import { TiFolderDelete } from "react-icons/ti";
function T1({ datasend, click }) {
  return (
    <>
      {datasend.map((el, ind) => (
        <div classNameNameName="do1" key={ind}>
          <p>{el.todoname}</p>
          <p>{el.tododate}</p>
          <button onClick={() => click(el)}><TiFolderDelete /></button>
        </div>
      ))}
    </>
  );
}

export default T1;
