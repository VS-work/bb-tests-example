import { AbstractTestObject } from 'bb-tests-provider/dist';
import { sg, testData } from './data-suite-registry';
import { DdfCsvReaderTestObject, WsProdServerTestObject } from '../test-objects';

const wsPath = 'https://waffle-server-stage.gapminder.org/api/ddf/ql';
const ghWsAcc = 'buchslava';

export const getTestObjectGroups = (): AbstractTestObject[] => [
  new DdfCsvReaderTestObject().forDataSuite(sg).init({path: './test/fixtures/readers-test-ds-systema-globalis/master-HEAD'}),
  new WsProdServerTestObject().forDataSuite(sg).init({path: wsPath, dataset: `${ghWsAcc}/readers-test-ds-systema-globalis`})/*,
  new DdfCsvReaderTestObject().forDataSuite(testData).init({}),
  new WsProdServerTestObject().forDataSuite(testData).init({}),*/
];
