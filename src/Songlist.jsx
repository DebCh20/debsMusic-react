import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Songlist() {
  const [songListData, setSongListData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/home")
      .then((res) => {
        setSongListData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching song list:', error);
      });
  }, []);

  const listItems = songListData.map((song, i) => (
    <a key={i} className="songListItem" style={{ cursor: 'pointer' }} songId={i}>
      <li>
        <img src={`https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/625/100x100/burning-wish-1706835651-GOLoVxB4sd.jpg`} alt={`song${i}`} />
        <span>{`song${i}`}</span>
      </li>
    </a>
  ));

  return (
    <div className="outer-wrapper" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div id="songPlay" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1%', marginLeft: '10%', padding: '2rem' }}>
        {/* Music player elements */}
      </div>
      <div className="songList" style={{ display: 'flex', flexDirection: 'column', marginRight: '15%', height: '70vh', overflowY: 'scroll' }}>
        <ul>
          {/* Render the list items array */}
          {listItems}
        </ul>
      </div>
    </div>
  );
}

export default Songlist;
