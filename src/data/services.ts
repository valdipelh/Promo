import serialSpaceData from './services/serial-space.json';
import kinopoiskData from './services/kinopoisk.json';
import iviData from './services/ivi.json';
import winkData from './services/wink.json';
import okkoData from './services/okko.json';
import kionData from './services/kion.json';
import startData from './services/start.json';
import premierData from './services/premier.json';
import moretvData from './services/more-tv.json';
import amediatekaData from './services/amediateka.json';
import vijuData from './services/viju.json';


import { StreamingService } from '../types';

export const streamingServices: StreamingService[] = [
  serialSpaceData,
  kinopoiskData,
  iviData,
  winkData,
  okkoData,
  kionData,
  startData,
  premierData,
  moretvData,
  amediatekaData,
  vijuData
];