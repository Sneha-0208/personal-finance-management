import React, { useState } from "react";

interface UserProfile {
  name: string;
  email: string;
  currency: string;
}

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: "John Doe",
    email: "johndoe@example.com",
    currency: "USD",
  });
  const [editMode, setEditMode] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState(profile);

  const handleUpdate = () => {
    setProfile(updatedProfile);
    setEditMode(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="border p-4 rounded-md shadow-md w-96">
        {!editMode ? (
          <>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Preferred Currency:</strong> {profile.currency}</p>
            <button onClick={() => setEditMode(true)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Edit Profile
            </button>
          </>
        ) : (
          <>
            <label className="block mt-2">Name</label>
            <input
              type="text"
              value={updatedProfile.name}
              onChange={(e) => setUpdatedProfile({ ...updatedProfile, name: e.target.value })}
              className="border p-2 w-full"
            />

            <label className="block mt-2">Email</label>
            <input
              type="email"
              value={updatedProfile.email}
              onChange={(e) => setUpdatedProfile({ ...updatedProfile, email: e.target.value })}
              className="border p-2 w-full"
            />

            <label className="block mt-2">Preferred Currency</label>
            <select
              value={updatedProfile.currency}
              onChange={(e) => setUpdatedProfile({ ...updatedProfile, currency: e.target.value })}
              className="border p-2 w-full"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="INR">INR</option>
            </select>

            <button onClick={handleUpdate} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
              Save Changes
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
