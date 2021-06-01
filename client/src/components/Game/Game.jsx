import { useState, useEffect } from "react";
import style from "./Game.module.css";
const Game = () => {
  const [board, setBoard] = useState([]);
  const [gamewin, setGamewin] = useState(false);

  useEffect(() => {
    setBoard(
      //   [
      //   [1, 2, 3, 4],
      //   [5, 6, 7, 8],
      //   [9, 10, 11, 12],
      //   [13, 14, null, 15],
      // ]
      boardRandom()
    );
  }, []);

  function boardRandom() {
    let integerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    let line = [];
    let board = [];
    do {
      let random = randomInteger(1, 15);
      if (integerArray.includes(random)) {
        line.push(random);
        integerArray.splice(integerArray.indexOf(random), 1);
        if (line.length == 4) {
          board.push(line);
          line = [];
        }
        if (integerArray == 0) {
          board.push(line);
        }
      }
    } while (integerArray.length);
    board[3][3] = null;
    return board;
  }

  const randomInteger = (min, max) =>
    min + Math.round(Math.random() * (max - min));

  function isWinGame(board1) {
    let right = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
    console.log(board1);
    let buba = board1.map((el) => el.join(","));
    buba = buba.join(",");
    if (buba == right) {
      return setGamewin(true);
    } else return setGamewin(false);
  }

  useEffect(() => {
    isWinGame(board);
  }, [board]);

  function changer(e) {
    const i = +e.target.dataset.i;
    const j = +e.target.dataset.j;
    console.log("выбрана", i, j);

    if (i + 1 <= 3) {
      if (board[i + 1][j] == null) {
        setBoard((prev) => {
          let a = [...prev];
          a[i + 1][j] = a[i][j];
          a[i][j] = null;
          return a;
        });
      }
    }
    if (i - 1 >= 0) {
      if (board[i - 1][j] == null) {
        setBoard((prev) => {
          let a = [...prev];
          a[i - 1][j] = a[i][j];
          a[i][j] = null;
          return a;
        });
      }
    }
    if (j + 1 <= 3) {
      if (board[i][j + 1] == null) {
        setBoard((prev) => {
          let a = [...prev];
          a[i][j + 1] = a[i][j];
          a[i][j] = null;

          return a;
        });
      }
    }
    if (j - 1 >= 0) {
      if (board[i][j - 1] == null) {
        setBoard((prev) => {
          let a = [...prev];
          a[i][j - 1] = a[i][j];
          a[i][j] = null;
          return a;
        });
      }
    }
  }

  return (
    <div className={style.wrapper}>
      {gamewin ? (
        <>
          <h3> Красава! </h3>
          <button>Еще разок?</button>
        </>
      ) : (
        <div className={style.board}>
          {board.map((el, i) =>
            el.map((elem, j) => {
              return (
                <div
                  key={`${i}-${j}`}
                  data-i={i}
                  data-j={j}
                  className={style.square}
                  onClick={(e) => changer(e)}
                >
                  {elem}
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default Game;
