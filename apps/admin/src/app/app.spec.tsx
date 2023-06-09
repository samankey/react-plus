import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('표시', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('버튼 렌더 확인', () => {
    const { getByText } = render(<App />);
    expect(getByText('불러오기')).toBeTruthy();
  });
});
