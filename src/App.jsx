import { useState } from "react";

export default function LabradorApp() {
  const [dogProfile, setDogProfile] = useState({ name: "", age: "", favoriteToy: "" });
  const [gallery, setGallery] = useState([]);
  const [photo, setPhoto] = useState("");

  const handleProfileChange = (e) => {
    setDogProfile({ ...dogProfile, [e.target.name]: e.target.value });
  };

  const handleAddPhoto = () => {
    if (photo) {
      setGallery([...gallery, photo]);
      setPhoto("");
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">🐶 LabrApp</h1>

      <div className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          placeholder="Imię labradora"
          name="name"
          value={dogProfile.name}
          onChange={handleProfileChange}
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Wiek"
          name="age"
          value={dogProfile.age}
          onChange={handleProfileChange}
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Ulubiona zabawka"
          name="favoriteToy"
          value={dogProfile.favoriteToy}
          onChange={handleProfileChange}
        />

        <div className="space-y-2">
          <input
            className="w-full p-2 border rounded"
            placeholder="Link do zdjęcia"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded" onClick={handleAddPhoto}>Dodaj zdjęcie</button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {gallery.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Labrador ${index + 1}`}
              className="rounded-xl shadow"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
