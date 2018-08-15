import { printSummaryTable, runTests, TestSuite } from 'bb-tests-provider/dist';
import { GeneralAssertPattern, getTestObjectGroups, sg, sodertornsmodellen } from './definitions';

describe('Concepts supporting', () => {
  const aggregatedData = {};
  const testSuites = [
    new TestSuite().forDataSuite(sg).withTitle('4 fields selects should be expected')
      .withRecordsCount(8)
      .withInputData({
        select: {
          key: ['concept'],
          value: [
            'concept_type', 'name', 'domain'
          ]
        },
        from: 'concepts',
        where: {
          $and: [
            {concept_type: {$eq: 'entity_set'}}
          ]
        }
      })
      .withAssertPattern(GeneralAssertPattern),
    new TestSuite().forDataSuite(sg).withTitle('3 fields selects should be expected')
      .withRecordsCount(8)
      .withInputData({
        select: {
          key: ['concept'],
          value: [
            'concept_type', 'name'
          ]
        },
        from: 'concepts',
        where: {
          $and: [
            {concept_type: {$eq: 'entity_set'}}
          ]
        },
        order_by: ['concept']
      })
      .withAssertPattern(GeneralAssertPattern),
    new TestSuite().forDataSuite(sg).withTitle('ar-SA base data selects should be expected')
      .withRecordsCount(8)
      .withInputData({
        select: {
          key: ['concept'],
          value: [
            'concept_type', 'name'
          ]
        },
        from: 'concepts',
        where: {
          $and: [
            {concept_type: {$eq: 'entity_set'}}
          ]
        },
        order_by: ['concept']
      })
      .withAssertPattern(GeneralAssertPattern),
    new TestSuite().forDataSuite(sodertornsmodellen).withTitle('recent 1')
      .withRecordsCount(141)
      .withInputData({
        select: {
          key: [
            'concept'
          ],
          value: []
        },
        from: 'concepts',
        where: {},
        language: 'en'
      })
      .withAssertPattern(GeneralAssertPattern)
  ];

  after(() => {
    printSummaryTable(testSuites, aggregatedData);
  });

  runTests(getTestObjectGroups, testSuites, aggregatedData);
});
