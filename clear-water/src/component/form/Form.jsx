import React, { useState } from 'react';
import useAuthStore from '../../stores/use-auth-store';
import UserDao from '../../daos/UserDao';

const Form = ({ onSubmit }) => {
  const [puntuacion, setPuntuacion] = useState('');
  const { user } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();

    const score = {
      email: user,
      puntuacion: parseInt(puntuacion),
    }

    UserDao.addScore(score);
   
  };


  console.log(user);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={user}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="puntuacion">
            Puntuación
          </label>
          <input
            type="number"
            id="puntuacion"
            value={puntuacion}
            onChange={(e) => setPuntuacion(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter puntuación"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

