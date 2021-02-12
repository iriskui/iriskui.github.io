import styles from './style.less';
import { Image } from 'antd';
import AnonymityImg from '../../assets/img/objects/Anonmity.jpg';
import BlackHoleImg from '../../assets/img/objects/Black-hole.png';
import CombinationImg from '../../assets/img/objects/Combination.png';
import GradeImg from '../../assets/img/objects/Grade.jpg';
import GrandHotelImg from '../../assets/img/objects/Grand-hotel.jpg';
import IsolationImg from '../../assets/img/objects/Isolation.jpg';
import LargeCapacityMahjongRoomImg from '../../assets/img/objects/Large-capacity-mahjong-room.jpg';
import MonitorImg from '../../assets/img/objects/Monitor.jpg';
import NeatFreakImg from '../../assets/img/objects/Neat-freak.jpg';
import ObservationDeckImg from '../../assets/img/objects/Observation-deck.jpg';
import OccasionalityImg from '../../assets/img/objects/Occasionality.jpg';
import OptionsImg from '../../assets/img/objects/Options.png';
import OrderImg from '../../assets/img/objects/Order.jpg';
import PleaseDrawTheCurtainImg from '../../assets/img/objects/Please-draw-the-curtain.png';
import PrintImg from '../../assets/img/objects/Print.jpg';
import SlideImg from '../../assets/img/objects/Slide.jpg';
import TheSecondFloorImg from '../../assets/img/objects/The-second-floor.jpg';
import VIPTreatmentImg from '../../assets/img/objects/VIP-treatment.jpg';
import WeChatRoundTheAbyssImg from '../../assets/img/objects/We-chat-round-the-abyss.jpg';
import WhenLightsTurnOnImg from '../../assets/img/objects/When-lights-turn-on.jpg';
import DissipateHeatImg from '../../assets/img/objects/Dissipate-heat.jpg';

const Objects = () => {
  const ratio = 0.85;

  return (
    <div className={styles.work}>
      <h1 className="title">The System of Objects</h1>
      <p className="description">
        The System of Objects focuses on interior spaces especially modern
        residential spaces. The black and white style seems to create a serious
        and solemn atmosphere. However, in this series, through the stacking and
        splicing of objects, it presents absurdity and abnormality: we can see
        staggered beds which are surrounded by circles of surveillance cameras,
        toilets stacked by toilet rings which symbolize "rank", countless light
        bulbs that emit dizzy lights at the same time, interesting visual
        presentation of the term "neat freak", windows facing different
        directions haphazardly, curtains that open but only show an empty wall,
        an absurd indoor viewing device, layers of viaducts that couldn't have
        been there crisscrossing each other and a row of shoes with only the toe
        exposed...Both furniture and other objects are deeply deconstructed and
        reconstructed, presenting a dramatic scene.
      </p>
      <p className="description">
        In this context, the manufacture of objects is not only a technical
        issue. Its appearance and function are not only based on aesthetic and
        practical needs, but also show profound sociological principles. People
        project various desires on objects and satisfy themselves by giving them
        some concepts. The proliferation, stacking, and splicing of furniture
        and relative objects blur the boundary between "useful" and "useless".
      </p>
      <p className="description">
        Now that the abundance of objects has become an important feature of
        society, it is no longer people surrounding objects, but objects closely
        surrounding people. The System of Objects uncharacteristically removes
        the line of sight from people, and devotes wholeheartedly to the
        performance of objects, hoping to provide a new possibility of
        expressing and understanding objects.
      </p>
      <Image.PreviewGroup>
        <Image
          width={300 * ratio}
          height={400 * ratio}
          src={AnonymityImg}
          preview={{
            mask: 'Anonymity',
          }}
        />
        <Image
          width={300 * ratio}
          height={400 * ratio}
          src={BlackHoleImg}
          preview={{
            mask: 'Black Hole',
          }}
        />
        <Image
          width={300 * ratio}
          height={400 * ratio}
          src={CombinationImg}
          preview={{
            mask: 'Combination',
          }}
        />
        <Image
          width={300 * ratio}
          height={400 * ratio}
          src={GradeImg}
          preview={{
            mask: 'Grade',
          }}
        />
        <Image
          width={300 * ratio}
          height={400 * ratio}
          src={GrandHotelImg}
          preview={{
            mask: 'Grand Hotel',
          }}
        />
        <Image
          width={300 * ratio}
          height={400 * ratio}
          src={IsolationImg}
          preview={{
            mask: 'Isolation',
          }}
        />
        <Image
          width={300 * ratio}
          height={400 * ratio}
          src={LargeCapacityMahjongRoomImg}
          preview={{
            mask: 'Large Capacity Mahjong Room',
          }}
        />
        <Image
          width={300 * ratio}
          height={400 * ratio}
          src={MonitorImg}
          preview={{
            mask: 'Monitor',
          }}
        />
        <Image
          width={300 * ratio}
          height={400 * ratio}
          src={NeatFreakImg}
          preview={{
            mask: 'Neat Freak',
          }}
        />
        <Image
          width={300 * ratio}
          height={400 * ratio}
          src={ObservationDeckImg}
          preview={{
            mask: 'Observation Deck',
          }}
        />
        <Image
          width={300 * ratio}
          height={400 * ratio}
          src={OccasionalityImg}
          preview={{
            mask: 'Occasionality',
          }}
        />
        <Image
          width={300 * ratio}
          height={400 * ratio}
          src={OptionsImg}
          preview={{
            mask: 'Options',
          }}
        />
        <Image
          width={300 * ratio}
          height={400 * ratio}
          src={OrderImg}
          preview={{
            mask: 'Order',
          }}
        />
        <Image
          width={300 * ratio}
          height={400 * ratio}
          src={PleaseDrawTheCurtainImg}
          preview={{
            mask: 'Please Draw the Curtain',
          }}
        />
        <Image
          width={300 * ratio}
          height={400 * ratio}
          src={PrintImg}
          preview={{
            mask: 'Print',
          }}
        />
        <Image
          width={300 * ratio}
          height={400 * ratio}
          src={SlideImg}
          preview={{
            mask: 'Slide',
          }}
        />
        <Image
          width={300 * ratio}
          height={400 * ratio}
          src={TheSecondFloorImg}
          preview={{
            mask: 'The Second Floor',
          }}
        />
        <Image
          width={300 * ratio}
          height={400 * ratio}
          src={VIPTreatmentImg}
          preview={{
            mask: 'VIP Treatment',
          }}
        />
        <Image
          width={300 * ratio}
          height={400 * ratio}
          src={WeChatRoundTheAbyssImg}
          preview={{
            mask: 'Sit around the abyss',
          }}
        />
        <Image
          width={300 * ratio}
          height={400 * ratio}
          src={WhenLightsTurnOnImg}
          preview={{
            mask: 'When Lights Turn On',
          }}
        />
        <Image
          width={300 * ratio}
          height={400 * ratio}
          src={DissipateHeatImg}
          preview={{
            mask: 'Dissipate Heat',
          }}
        />
      </Image.PreviewGroup>
    </div>
  );
};

export default Objects;
