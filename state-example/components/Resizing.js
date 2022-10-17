import { GetImageUrl } from "./GetImageUrl";

function Avatar({ person, size }) {
    thumnail = size < 90 ? 's' : 'b'
    const imageSrc = GetImageUrl(person.imageId, thumnail) 
    return (
        <img
        className="avatar"
        src={imageSrc}
        alt={person.name}
        width={size}
        height={size}
        />
    );
}

export default function Resizing() {
  return (
    <Avatar
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}
