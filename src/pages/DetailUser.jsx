import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function DetailUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const userId = id || localStorage.getItem('userId');

  const today = new Date().toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    if (!userId) {
      navigate('/');
      return;
    }

    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`/detail_user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Gagal ambil data user:", error);
      }
    };

    fetchUser();
  }, [userId, navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">{user.name ?? "PKL DSI"}</h1>
            <div className="flex items-center gap-4">
                <span className="bg-blueDarker text-white px-6 py-2 rounded-lg">
                {today}
                </span>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                onClick={() => {
                  localStorage.clear();
                  navigate('/');
                }}>
                Logout
                </button>
            </div>
        </div>
        <div className='p-4'>
            <h3 className="text-xl font-bold mt-5">Prodi</h3>
            <h3>{user.prodi ?? "-"}</h3>
            <h3 className="text-xl font-bold mt-5">Email</h3>
            <h3>{user.email ?? "-"}</h3>
            <h3 className="text-xl font-bold mt-5">Status</h3>
            <h3>{user.status ?? "-"}</h3>
        <div className='w-full h-1 bg-greyPrimary my-2 mt-11 rounded-lg'></div>
        </div>
    </div>
  );
}

export default DetailUser;
