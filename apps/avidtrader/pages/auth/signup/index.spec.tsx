import { render } from '@testing-library/react';

import Signup from './index';

describe('Signup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Signup />);
    expect(baseElement).toBeTruthy();
  });
});
