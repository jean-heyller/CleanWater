/* eslint-disable react/no-unknown-property */
import { useSelector } from "react-redux";

const Table = ( ) => {
  // Obtén las columnas de las claves del primer objeto en data

  const data = useSelector((state) => state.rewards);

  return (
    <div className="relative overflow-hidden shadow-md rounded-lg">
      <table className="table-fixed w-full text-left">
        <thead
          className="uppercase bg-[#6c92de] text-[#e5e7eb]"
          style={{ backgroundColor: "#6c92de", color: "#e5e7eb" }}
        >
          <tr>
            <th
              className="py-1 text-center font-bold p-4"
              contentEditable="true"
            >
              Nombre
            </th>
            <th
              className="py-1 text-center font-bold p-4"
              contentEditable="true"
            >
              Puntos
            </th>
          </tr>
        </thead>
        <tbody
          className="bg-white text-gray-500"
          style={{ backgroundColor: "#FFFFFF", color: "#6b7280" }}
        >
            {data.map((reward)=> (
                <tr key={reward.id}>
                    <td className="py-1 text-center p-4">{reward.email}</td>
                    <td className="py-1 text-center p-4">{reward.Puntuacion}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

// Ejemplo de uso:
