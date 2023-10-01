import { useState } from "react";

const Playlist = () => {
  const [songs, setSongs] = useState(["Take Five", "Claire de Lune"]);
  const [songTitle, setSongTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const title = songTitle.trim()
    if (title !== "") {
      setSongs([...songs, title]);
      setSongTitle("");
    }
  }

  function handleRemove(songIndex) {
    setSongs(songs.filter((song, i) => i !== songIndex));
  }

  function handleRemoveAll() {
    setSongs([]);
  }

  return (
    <div className="container mt-2">

      <h3 className="text-center py-4">My Playlist</h3>

      <div className="row">

        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mb-4"
              value={songTitle}
              onChange={event => setSongTitle(event.target.value)}
            />
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-success">Add</button>
            </div>
          </form>
        </div>

        <div className="col-md-6">
          <ul className="list-group mt-5">
            {
              songs.map((song, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>{song}</span>
                  <button className="btn btn-outline-danger" onClick={() => handleRemove(index)}>Remove</button>
                </li>
              ))
            }
          </ul>

          {
            songs.length > 0 && <button className="btn btn-danger my-2" onClick={handleRemoveAll}>Remove All</button>
          }
        </div>

      </div>

    </div>
  );
}

export default Playlist;