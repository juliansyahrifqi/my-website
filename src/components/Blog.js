import React from 'react';
import testImage from "../assets/image-1.jpg";
import userPhoto from "../assets/user.jpg";

function Blog({category, title, name, imageSrc}) {
    return (
      <div className="card p-6 rounded-3xl transition duration-150 ease-in hover:bg-hover-card transition ease-in-out hover:outline outline-2 outline-hover-border duration-150 cursor-pointer">
        <img src={testImage} className="w-full rounded-3xl" />

        <p className="mt-3 text-sm font-normal" style={{ color: "#B8BCC2" }}>
          Frontend | Jumat, 28 Januari 2020
        </p>

        <h1 className="font-bold mt-4 text-xl text-white">
          Rekomendasi Playlist Buat Ngoding ala Gweh
        </h1>

        <p
          className="text-sm mt-3 text-base font-normal"
          style={{ color: "#B8BCC2" }}
        >
          Pernah ga sih waktu ngoding kalian jenuh, atau mungkin playlist
          ngoding kalian udah sedikit membosankan? Nah kali ini gweh mau saranin
          nih playlist . . .
        </p>

        <div className="flex mt-5 items-center">
          <img src={userPhoto} className="w-10 rounded-full" />
          <p className="text-md ml-3 font-medium text-white">Rifqi Pratama</p>
        </div>
      </div>
    );
}

export default Blog;