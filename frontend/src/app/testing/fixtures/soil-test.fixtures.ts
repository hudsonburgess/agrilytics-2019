import { SoilTest } from '../../models/soil-test';

export const soilTest1: SoilTest = {
  id: 'soilTest1',
  username: 'keith',
  sampleName: 'FC1A',
  testDate: new Date(2019, 0, 1).valueOf(),
  p: 80,
  k: 200,
  waterPh: 6.2,
  bufferPh: 7.75
};

export const soilTest2: SoilTest = {
  id: 'soilTest2',
  username: 'keith',
  sampleName: 'B1A',
  testDate: new Date(2018, 3, 1).valueOf(),
  p: 60,
  k: 180,
  waterPh: 6.4,
  bufferPh: 7.85
};
