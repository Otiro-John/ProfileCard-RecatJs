
import "./UserProfileCard.css";
import profile_img from "../assets/img/img.avif";
const UserProfileCard = () => {
  return (
    <div className="upc">
<div className="gradiant"></div>
<center>
<div className="profile-down">
    <img src={profile_img} alt="profile" />
<div className="profile-title">Jaimie Hertz</div>
<div className="profile-description">
Elon Musk is a businessman and investor1. He is known for his key roles in space company SpaceX and automotive company Tesla, Inc.12. Musk has also been involved in the founding of The Boring Company, xAI, Neuralink, and OpenAI13.
</div>
</div>
<div className="profile-button">
    <a href="mailto:john1234otiro@gmail.com">Contact Me</a>
</div>
</center>
    </div>
  )
}

export default UserProfileCard