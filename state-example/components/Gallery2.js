import { GetImageUrl } from "./GetImageUrl";

function Profile({person, imageSize = 70}) {
    const imageSrc = GetImageUrl(person.imageId)
    return (
        <div>
            <h2>{person.name}</h2>
            <img 
            className="avatar"
            src={imageSrc}
            alt={person.name}
            />

            <ul>
                <li> <b>Profession: </b>
                    {person.profession}
                </li>
                <li> <b>Awards: {person.awards.length} </b>
                    ({person.awards.join(', ')})
                </li>
                <li>
                    <b>Discovered: {person.discovery}</b>
                </li>
            </ul>
        </div> 
    )
}

function ProfileSection({ children }) {
    return (
        <div className="profile" style={{border: '1px solid white', borderRadius: '10px', padding: '10px', margin: '0 10px'}}>
            {children}
        </div>
    )
}


export default function Gallery() {
    return (
      <div>
        <h1>Notable Scientists</h1>
        

        <ProfileSection>
            <Profile person={{
                imageId: 'szV5sdG',
                name: 'Maria Skłodowska-Curie',
                profession: 'physicist and chemist',
                discovery: 'polonium (chemical element)',
                awards: [
                'Nobel Prize in Physics',
                'Nobel Prize in Chemistry',
                'Davy Medal',
                'Matteucci Medal'
                ],
            }} />
        </ProfileSection>
      </div>
    );
  }