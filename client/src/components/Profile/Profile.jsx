import style from "./Profile.module.css";
import { useEffect, useState } from "react";

const Profile = ({ access, setAccess }) => {
  const [avatar, setAvatar] = useState(
    "https://avatars.dicebear.com/api/male/john.svg?background=%230000ff"
  );
  const [options, setOptions] = useState([
    { male: "мужик" },
    { female: "бабенский" },
  ]);
  const [gender, setGender] = useState("male");
  const [name, setName] = useState("");

  function avatarHandler() {
    setAvatar(`https://avatars.dicebear.com/api/${gender}/${name}.svg`);
  }
  useEffect(() => {}, []);
  return (
    <div className="">
      <div className={style.panel}>
        <img className={style.ava} src={avatar} />
        <form>
          <select
            onChange={(e) => {
              setGender(e.target.value);
              avatarHandler();
            }}
          >
            {options.map((el) => {
              const key = Object.keys(el)[0];
              return <option value={key}>{el[key]}</option>;
            })}
          </select>

          <input
            onChange={(e) => {
              setName(e.target.value);
              avatarHandler();
              if (!e.target.value.length) {
                setAccess(false);
              } else {
                setAccess(true);
              }
            }}
            placeholder="Введите свое имя"
          />
          <button onSubmit={() => {}} сlassName={style.btn}>
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
