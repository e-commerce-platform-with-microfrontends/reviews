import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, Heading3 } from 'ui-components';

import Reviews from './Reviews';

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <section className='container'>
        <Heading3>Ratings and Reviews</Heading3>
        <Reviews />
      </section>
    </ThemeProvider>
  )
}