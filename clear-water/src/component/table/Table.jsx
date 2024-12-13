import { useSelector } from "react-redux";

const Table = () => {
  const data = useSelector((state) => state.rewards);

  // Ordenar el array de mayor a menor puntuación
  const sortedData = [...data].sort((a, b) => b.puntuacion - a.puntuacion);

  return (
    <div className="relative overflow-hidden shadow-md rounded-lg">
      <table className="table-fixed w-full text-left">
        <thead
          className="uppercase bg-[#6c92de] text-[#e5e7eb]"
          style={{ backgroundColor: "#6c92de", color: "#e5e7eb" }}
        >
          <tr>
            <th className="py-1 text-center font-bold p-4">Posición</th>
            <th className="py-1 text-center font-bold p-4">Email</th>
            <th className="py-1 text-center font-bold p-4">Puntos</th>
          </tr>
        </thead>
        <tbody
          className="bg-white text-gray-500"
          style={{ backgroundColor: "#FFFFFF", color: "#6b7280" }}
        >
          {sortedData.map((reward, index) => (
            <tr key={reward.id}>
              <td className="py-1 text-center p-4">{index + 1}</td>
              <td className="py-1 text-center p-4">{reward.email}</td>
              <td className="py-1 text-center p-4">{reward.puntuacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;