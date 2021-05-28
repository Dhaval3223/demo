import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import { CustomButton } from '../../components/Button/index';

export function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <CustomButton color={'#51a8d1'} name={'Sign Up'} />
      <CustomButton color={'#20cdbb'} name={'Log In'} />
    </div>
  );
}
