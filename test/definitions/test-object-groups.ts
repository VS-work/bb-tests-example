import { AbstractTestObject } from 'bb-tests-provider/dist';
import {
  sg,
  presentationSet,
  sankey,
  sgTiny,
  gmPopulation,
  bubbles3,
  gmPopulationBig,
  sgMixEntity,
  staticAssets,
  gmStaticAssets,
  sodertornsmodellen
} from './data-suite-registry';
import { DdfCsvReaderTestObject, WsProdServerTestObject } from '../test-objects';

const wsPath = 'https://waffle-server-stage.gapminder.org/api/ddf/ql';
const ghWsAcc = 'buchslava';

export const getTestObjectGroups = (): AbstractTestObject[] => [
  new DdfCsvReaderTestObject().forDataSuite(sg).init({path: `./test/fixtures/${sg.nick}/master-HEAD`}),
  new WsProdServerTestObject().forDataSuite(sg).init({path: wsPath, dataset: `${ghWsAcc}/${sg.nick}`}),
  new DdfCsvReaderTestObject().forDataSuite(presentationSet).init({path: `./test/fixtures/${presentationSet.nick}/master-HEAD`}),
  new WsProdServerTestObject().forDataSuite(presentationSet).init({
    path: wsPath,
    dataset: `${ghWsAcc}/${presentationSet.nick}`
  }),
  new DdfCsvReaderTestObject().forDataSuite(sankey).init({path: `./test/fixtures/${sankey.nick}/master-HEAD`}),
  new WsProdServerTestObject().forDataSuite(sankey).init({path: wsPath, dataset: `${ghWsAcc}/${sankey.nick}`}),
  new DdfCsvReaderTestObject().forDataSuite(sgTiny).init({path: `./test/fixtures/${sgTiny.nick}/master-HEAD`}),
  new WsProdServerTestObject().forDataSuite(sgTiny).init({path: wsPath, dataset: `${ghWsAcc}/${sgTiny.nick}`}),
  new DdfCsvReaderTestObject().forDataSuite(gmPopulation).init({path: `./test/fixtures/${gmPopulation.nick}/master-HEAD`}),
  new WsProdServerTestObject().forDataSuite(gmPopulation).init({
    path: wsPath,
    dataset: `${ghWsAcc}/${gmPopulation.nick}`
  }),
  new DdfCsvReaderTestObject().forDataSuite(bubbles3).init({path: `./test/fixtures/${bubbles3.nick}/master-HEAD`}),
  new WsProdServerTestObject().forDataSuite(bubbles3).init({path: wsPath, dataset: `${ghWsAcc}/${bubbles3.nick}`}),
  new DdfCsvReaderTestObject().forDataSuite(gmPopulationBig).init({path: `./test/fixtures/${gmPopulationBig.nick}/master-HEAD`}),
  new WsProdServerTestObject().forDataSuite(gmPopulationBig).init({
    path: wsPath,
    dataset: `${ghWsAcc}/${gmPopulationBig.nick}`
  }),
  new DdfCsvReaderTestObject().forDataSuite(sgMixEntity).init({path: `./test/fixtures/${sgMixEntity.nick}/master-HEAD`}),
  new WsProdServerTestObject().forDataSuite(sgMixEntity).init({
    path: wsPath,
    dataset: `${ghWsAcc}/${sgMixEntity.nick}`
  }),
  new DdfCsvReaderTestObject().forDataSuite(staticAssets).init({path: `./test/fixtures/${staticAssets.nick}/master-HEAD`}),
  new WsProdServerTestObject().forDataSuite(staticAssets).init({
    path: wsPath,
    dataset: `${ghWsAcc}/${staticAssets.nick}`
  }),
  new DdfCsvReaderTestObject().forDataSuite(gmStaticAssets).init({path: `./test/fixtures/${gmStaticAssets.nick}/master-HEAD`}),
  new WsProdServerTestObject().forDataSuite(gmStaticAssets).init({
    path: wsPath,
    dataset: `${ghWsAcc}/${gmStaticAssets.nick}`
  }),
  new DdfCsvReaderTestObject().forDataSuite(sodertornsmodellen).init({path: `./test/fixtures/${sodertornsmodellen.nick}/master-HEAD`}),
  new WsProdServerTestObject().forDataSuite(sodertornsmodellen).init({
    path: wsPath,
    dataset: `${ghWsAcc}/${sodertornsmodellen.nick}`
  }),
];
