import { printSummaryTable, runTests, TestSuite } from 'bb-tests-provider/dist';
import { GeneralAssertPattern, getTestObjectGroups, sg, sankey } from './definitions';
import { DdfCsvReaderTestObject, WsProdServerTestObject } from './test-objects';

describe('Schema supporting', () => {
  describe('for concepts', () => {
    const aggregatedData = {};
    const testSuites = [
      new TestSuite()
          .forDataSuite(sg)
          .withTitle('simple test')
          .withRecordsCount(12)
          .withInputData({
            select: {
              key: ['key', 'value'],
              value: []
            },
            from: 'concepts.schema'
          })
          .withAssertPattern(GeneralAssertPattern)

    ];

    after(() => {
      printSummaryTable(testSuites, aggregatedData);
    });

    runTests(getTestObjectGroups, testSuites, aggregatedData);
  });

  describe('for entities', () => {
    const aggregatedData = {};
    const testSuites = [
      new TestSuite()
        .forDataSuite(sg)
        .withTitle('simple test')
        .withRecordsCount(122)
        .withInputData({
          select: {
            key: ['key', 'value'],
            value: []
          },
          from: 'entities.schema'
        })
        .withAssertPattern(GeneralAssertPattern)
    ];

    after(() => {
      printSummaryTable(testSuites, aggregatedData);
    });

    runTests(getTestObjectGroups, testSuites, aggregatedData);
  });

  describe('for datapoints', () => {
    const aggregatedData = {};
    const testSuites = [
      new TestSuite()
        .forDataSuite(sg)
        .withTitle('should response be expected for simple request')
        .withRecordsCount(1082)
        .withInputData({
          select: {
            key: ['key', 'value'],
            value: []
          },
          from: 'datapoints.schema'
        })
        .withAssertPattern(GeneralAssertPattern),
      new TestSuite()
        .forDataSuite(sg)
        .postponeFor('performance and functionality should be considered', DdfCsvReaderTestObject, WsProdServerTestObject)
        .withTitle('should max-min response be expected')
        .withRecordsCount(0)
        .withInputData({
          select: {
            key: ['key', 'value'],
            value: ['min(value)', 'max(value)']
          },
          from: 'datapoints.schema'
        })
        .withAssertPattern(GeneralAssertPattern),
      new TestSuite()
        .forDataSuite(sankey)
        .postponeFor('performance and functionality should be considered', DdfCsvReaderTestObject, WsProdServerTestObject)
        .withTitle('simple max-min test')
        .withRecordsCount(0)
        .withInputData({
          select: {
            key: ['key', 'value'],
            value: ['min(value)', 'max(value)']
          },
          from: 'datapoints.schema'
        })
        .withAssertPattern(GeneralAssertPattern)
    ];

    after(() => {
      printSummaryTable(testSuites, aggregatedData);
    });

    runTests(getTestObjectGroups, testSuites, aggregatedData);
  });

  describe('for general query', () => {
    const aggregatedData = {};
    const testSuites = [
      new TestSuite()
        .forDataSuite(sg)
        .postponeFor('this is an issue, should be resolved later', DdfCsvReaderTestObject, WsProdServerTestObject)
        .withTitle('simple test')
        .withRecordsCount(0)
        .withInputData({
          select: {
            key: ['key', 'value'],
            value: []
          },
          from: '*.schema'
        })
        .withAssertPattern(GeneralAssertPattern)
    ];

    after(() => {
      printSummaryTable(testSuites, aggregatedData);
    });

    runTests(getTestObjectGroups, testSuites, aggregatedData);
  });
});
