import React from 'react';
import Rock from '../assets/images/Rock.gif';

function UserProfile() {
  const user = {
    name: "Dwayne Johnson",
    gender: "Male",
    age: 50,
    weight: 230,
    height: 60, // Height in centimeters
    bio: "World famous actor. He was Shazam. And the Scorpion King, but that was awhile ago.",
  };

  const calculateBMI = () => {
    const heightInMeters = user.height / 100;
    const bmi = user.weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(2);
  };

  return (
    <div className="user-profile">
      <img src={Rock} alt="Profile Picture" />
      <h2>{user.name}</h2>
      <p>
        <strong>Gender:</strong> {user.gender} <br />
        <strong>Age:</strong> {user.age} years old <br />
        <strong>Weight:</strong> {user.weight} lbs <br />
        <strong>Height:</strong> {user.height} in <br />
        <strong>BMI:</strong> {calculateBMI()}
      </p>
      <p>{user.bio}</p>
    </div>
  );
}

export default UserProfile;