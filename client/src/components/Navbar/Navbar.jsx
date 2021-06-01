//подключение модуля стилей
import style from "./Navbar.module.css";
import { useHistory } from "react-router-dom";
function Navbar({ access }) {
  const history = useHistory();

  const historyHandler = (value) => {
    if (value === "game") {
      history.push("/game");
    }
    if (value === "profile") {
      history.push("/profile");
    }
    if (value === "pictures") {
      history.push("/pictures");
    }
  };

  return (
    <div className={style.navbar}>
      <div className={style.center}>
        <div
          onClick={() => {
            historyHandler("profile");
          }}
          className={style.pointer}
        >
          Profile
        </div>
        {/* Если пользователь не создал аватар нет доступа к игре */}
        {access ? (
          <div
            onClick={() => {
              historyHandler("game");
            }}
            className={style.pointer}
          >
            Game
          </div>
        ) : (
          ""
        )}
        <div
          onClick={() => {
            historyHandler("pictures");
          }}
          className={style.pointer}
        >
          Pictures
        </div>
      </div>
    </div>
  );
}

export default Navbar;
