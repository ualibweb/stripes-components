import React from 'react';
import { action } from '@storybook/addon-actions';
import MultiColumnList from '../MultiColumnList';
import Button from '../../Button';
import { asyncGenerate } from './service';

export default () => {
    return (
      <div style={{ width: '800px', height:'400px' }}>
        <p>Some of the rows have multiple "rows" in some columns</p>
        <MultiColumnList
          contentData={[
            {
              name: 'Resource A',
              platform: ['Foo'],
              dates: [['2000-2020']],
              exists: ['row'],
            },
            {
              name: 'Resource B',
              platform: ['Foo'],
              dates: [['2000-2005'], ['2006-2020']],
              exists: ['true', 'false'],
            },
            {
              name: 'Resource C',
              platform: ['Foo'],
              dates: [['2000-2005', '2006-2020'], ['1990-1999']],
              exists: ['false', 'true'],
            },
            {
              name: 'Resource D',
              platform: ['Foo', 'Bar'],
              dates: [['2000-2005', '2006-2020'], ['1990-1999']],
              exists: ['false', 'true'],
            },
            {
              name: 'Resource E',
              platform: ['Foo'],
              dates: [['2000-2020']],
              exists: ['row'],
            },
          ]}
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
            columnWidths: rowColumnWidths,
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
                  <MultiColumnList
                    contentData={rowData}
                }
              </div>
            )
          }}
          visibleColumns={['name', 'platform', 'dates', 'exists']}
        />
      </div>
    );
  }
}
