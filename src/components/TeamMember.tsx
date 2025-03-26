import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => {
  return (
    <div className="text-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500"
      />
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-blue-300">{role}</p>
    </div>
  );
};

export default TeamMember;