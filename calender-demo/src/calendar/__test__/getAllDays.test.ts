import { describe, test, expect } from 'vitest';
import { getAllDays } from '../month-calendar';
import dayjs from 'dayjs';

describe('getAllDays Test', () => {
  test('test1', () => {
    expect(getAllDays(dayjs('2023-01-01'))).toMatchInlineSnapshot(`
      [
        {
          "currentMonth": true,
          "date": "2022-12-31T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-01T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-02T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-03T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-04T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-05T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-06T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-07T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-08T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-09T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-10T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-11T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-12T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-13T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-14T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-15T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-16T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-17T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-18T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-19T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-20T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-21T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-22T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-23T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-24T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-25T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-26T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-27T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-28T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-29T16:00:00.000Z",
        },
        {
          "currentMonth": true,
          "date": "2023-01-30T16:00:00.000Z",
        },
        {
          "currentMonth": false,
          "date": "2023-01-31T16:00:00.000Z",
        },
        {
          "currentMonth": false,
          "date": "2023-02-01T16:00:00.000Z",
        },
        {
          "currentMonth": false,
          "date": "2023-02-02T16:00:00.000Z",
        },
        {
          "currentMonth": false,
          "date": "2023-02-03T16:00:00.000Z",
        },
        {
          "currentMonth": false,
          "date": "2023-02-04T16:00:00.000Z",
        },
        {
          "currentMonth": false,
          "date": "2023-02-05T16:00:00.000Z",
        },
        {
          "currentMonth": false,
          "date": "2023-02-06T16:00:00.000Z",
        },
        {
          "currentMonth": false,
          "date": "2023-02-07T16:00:00.000Z",
        },
        {
          "currentMonth": false,
          "date": "2023-02-08T16:00:00.000Z",
        },
        {
          "currentMonth": false,
          "date": "2023-02-09T16:00:00.000Z",
        },
        {
          "currentMonth": false,
          "date": "2023-02-10T16:00:00.000Z",
        },
      ]
    `);
  });
});
