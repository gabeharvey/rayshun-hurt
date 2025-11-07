import PlayerBio from './PlayerBio';
import Records from './Records';
import PlayerCards from './PlayerCards';
import Contact from './Contact';
import FootballReels from './FootballReels';
import Offers from './Offers';
import Media from './Media';

const MainLayout = () => {
  return (
    <>
      <div id="player-bio">
        <PlayerBio />
      </div>
      <div id="records">
        <Records />
      </div>
      <div id="football-reels">
        <FootballReels />
      </div>
      <div id="player-cards">
        <PlayerCards />
      </div>
      <div id="media">
        <Media />
      </div>
      <div id="offers">
        <Offers />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default MainLayout;