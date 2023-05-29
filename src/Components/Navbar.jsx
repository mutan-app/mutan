import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="grid grid-cols-5 gap-3 mb-8 pt-6 pb-4 px-2 bottom-0 bg-gradient-to-br from-bright_accent to-accent rounded-2xl">
      <Link to="/home">
        <div className="flex justify-center text-white">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet" />
          <span class="material-icons">
            home
          </span>
        </div>
        <div className="flex justify-center text-sm text-text">
          ホーム
        </div>
      </Link>

      <Link to="/statistics">
        <div className="flex justify-center text-white">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <span class="material-icons">
            leaderboard
          </span>
        </div>
        <div className="flex justify-center text-sm text-text">
          統計
        </div>
      </Link>

      <Link to="/tasks">
        <div className="flex justify-center text-white">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <span class="material-icons">
            add_task
          </span>
        </div>
        <div className="flex justify-center text-sm text-text">
          タスク
        </div>
      </Link>

      <Link to="/appearance">
        <div className="flex justify-center text-white">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <span class="material-icons">
            palette
          </span>
        </div>
        <div className="flex justify-center text-sm text-text">
          着せ替え
        </div>
      </Link>

      <Link to="/friends">
        <div className="flex justify-center text-white">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <span class="material-icons">
            people
          </span>
        </div>
        <div className="flex justify-center text-sm text-text">
          友達
        </div>
      </Link>

    </div>
  );
}
