import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSong, removeSong, removeAll } from '../store/songsSlice'

const Playlist = () => {
  const songsFromStore = useSelector((state) => state.songs.list);
  const dispatch = useDispatch() 
  const [songTitle, setSongTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const title = songTitle.trim()
    if (title !== "") {
      dispatch(addSong(title)); // dispatch({ type: "songs/addSong", payload: "Despacito" }) 
      setSongTitle("");
    }
  }

  function handleRemove(songIndex) {
    dispatch(removeSong(songIndex)); 
  }

  function handleRemoveAll() {
    dispatch(removeAll());
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
              songsFromStore.map((song, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>{song}</span>
                  <button className="btn btn-outline-danger" onClick={() => handleRemove(index)}>Remove</button>
                </li>
              ))
            }
          </ul>

          {
            songsFromStore.length > 0 && <button className="btn btn-danger my-2" onClick={handleRemoveAll}>Remove All</button>
          }
        </div>

      </div>

    </div>
  );
}

export default Playlist;