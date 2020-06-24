import React from 'react';
import { action } from '@storybook/addon-actions';
import MultiColumnList from '../MultiColumnList';
import Button from '../../Button';
import { asyncGenerate } from './service';

import css from './ChildRows.css';

const sourceData = [
  {
    name: 'Resource A',
    variants: [
      {
        platform: 'Books',
        dates: ['2000-2020'],
        foo: true,
        bar: true,
      },
    ],
  },
  {
    name: 'Resource B',
    variants: [
      {
        platform: 'Books',
        dates: ['2000-2005'],
        foo: true,
        bar: false,
      },
      {
        platform: 'Books',
        dates: ['2006-2020'],
        foo: false,
        bar: true,
      },
    ],
  },
  {
    name: 'Resource C',
    variants: [
      {
        platform: 'Books',
        dates: ['2000-2005', '2006-2020'],
        foo: true,
        bar: false,
      },
      {
        platform: 'Books',
        dates: ['1990-1999'],
        foo: false,
        bar: true,
      },
    ],
  },
  {
    name: 'Resource D',
    variants: [
      {
        platform: 'Books',
        dates: ['2000-2005', '2006-2020'],
        foo: true,
        bar: false,
      },
      {
        platform: 'Internet',
        dates: ['1990-1999'],
        foo: false,
        bar: true,
      },
    ],
  },
  {
    name: 'Resource E',
    variants: [
      {
        platform: 'Books',
        dates: ['2000-2020'],
        foo: true,
        bar: true,
      },
    ],
  },
];

export default () => {
  return (
    <div style={{ width: '800px', height:'400px' }}>
      <p>Some of the rows have multiple &apos;rows&apos; in some columns</p>
      <MultiColumnList
        contentData={sourceData}
        columnWidths={{
          name: 100,
          platform: 100,
          dates: 200,
          foo: 40,
          bar: 40,
        }}
        height={400}
        formatter={{
          name: r => <strong>{r.name}</strong>,
          // we don't bother with formatters for the columns that are "weird"
          // we'll handle them in `rowFormatter`
        }}
        rowFormatter={({
          cells,
          columnMapping,
          columns,
          columnWidths,
          interactive,
          labelStrings,
          rowClass,
          rowData,
          rowIndex,
          rowProps,
          width,
        }) => {
          return (
            <div
              key={`row-${rowIndex}`}
              className={rowClass}
              aria-label={labelStrings.join('...')}
              tabIndex="0"
              {...rowProps}
            >
              {
                /* Render this one as-is because it'll only ever be one row and we can trust our `formatter` */
                cells[0]
              }
              {
                <div className={css.variantsMcl}>
                  <MultiColumnList
                    columnWidths={{
                      name: 100,
                      platform: 100,
                      dates: 200,
                      foo: 40,
                      bar: 40,
                    }}
                    contentData={rowData.variants}
                    formatter={{
                      platform: (r) => {
                        if (r.platform === rowData.variants[r.rowIndex - 1]?.platform) return '';

                        return r.platform;
                      },
                      dates: (r) => {
                        if (r.dates === rowData.variants[r.rowIndex - 1]?.dates) return '';

                        return (
                          <div>
                            {r.dates.map((date, i) => <div key={i}>{date}</div>)}
                          </div>
                        );
                      },
                      foo: r => (r.foo ? 'y' : 'n'),
                      bar: r => (r.bar ? 'y' : 'n'),
                    }}
                    headerRowClass="sr-only"
                    id="variants-mcl"
                    interactive={false}
                    rowFormatter={({
                      cells,
                      columnMapping,
                      columns,
                      columnWidths,
                      interactive,
                      labelStrings,
                      rowClass,
                      rowData,
                      rowIndex,
                      rowProps,
                      width,
                    }) => (
                      <div
                        key={`row-${rowIndex}`}
                        className={rowClass}
                        aria-label={labelStrings.join('...')}
                        {...rowProps}
                      >
                        {cells}
                      </div>
                    )}
                    visibleColumns={['platform', 'dates', 'foo', 'bar']}
                  />
                </div>
              }
            </div>
          );
        }}
        visibleColumns={['name', 'platform', 'dates', 'foo', 'bar']}
      />
    </div>
  );
};
