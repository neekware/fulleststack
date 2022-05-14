import React from 'react';
import { render } from '@testing-library/react-native';

import Home from './home';

describe('Home', () => {
  it('should render successfully', () => {
    const { container } = render(<Home />);
    expect(container).toBeTruthy();
  });
});
