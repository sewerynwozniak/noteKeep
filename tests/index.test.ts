
/**
 * @jest-environment jsdom
 */

import {App} from '../src/app'
import {AppStorage} from '../src/classes/appStorage'

jest.mock('../src/classes/appStorage')


beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    jest.clearAllMocks()
  });

  it('We can check if the consumer called the class constructor', () => {
    const app = new App();
    expect(AppStorage).toHaveBeenCalledTimes(1);
  });



