import Card from "../../components/Card/Card";
import "./styles.css";

function Homework_02() {

  const human = {
  fullName: "Humor Simpson",
  typeOfActiviti: "Chemist and safety inspector",
  hobby: "Eating donuts",
  avatarURL:
    "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
};

    return(
         <div className="card">
        <img className="avatar_pic" src={human.avatarURL} alt="Human image"/>
        <h3 className="card_title_person">Person card: {human.fullName}</h3>
        <p className="card_info">Type of Activiti: {human.typeOfActiviti}</p>
        <p className="card_info">Hobby: {human.hobby}</p>
        </div>
      
    );
}

export default Homework_02;