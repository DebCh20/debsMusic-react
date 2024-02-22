import './App.css';

function Songplay(){
    return(
      <div className="outer-wrapper" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div id="songPlay" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1%', marginLeft: '10%', padding: '2rem' }}>
        <img src="https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/625/100x100/burning-wish-1706835651-GOLoVxB4sd.jpg" alt="music image" style={{ height: '20rem' }} />
        <audio id="myAudio">
          <source src="" type="audio/mpeg" />
        </audio>
        <progress id="progressBar" value="0" max="100" style={{ width: '20rem' }}></progress>
        <div className="controlBtns" style={{ display: 'flex', flexDirection: 'row' }}>
          <button id="prevButton"><span className="material-symbols-outlined">chevron_left</span></button>
          <button id="playButton"><span className="material-symbols-outlined">play_circle</span></button>
          <button id="nextButton"><span className="material-symbols-outlined">chevron_right</span></button>
        </div>
      </div>
      <div className="songList" style={{ display: 'flex', flexDirection: 'column', marginRight: '15%', height: '70vh', overflowY: 'scroll' }}>
        <ul></ul>
      </div>
    </div>
    )
  }
  
  export default Songplay;