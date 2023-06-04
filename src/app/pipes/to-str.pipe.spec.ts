import { ToStrPipe } from './to-str.pipe';

describe('ToStrPipe', () => {
  it('create an instance', () => {
    const pipe = new ToStrPipe();
    expect(pipe).toBeTruthy();
  });
});
