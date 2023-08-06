import { getEnvTest, getMarvelURL } from '~/server/infra/get-envs';
import { enableMock } from '../../../../mocks';

describe('Testar as envs', () => {
  beforeAll(() => {
    enableMock();
  });
  it('Retornando a env solicitada', () => {
    const envMarvelURL = getMarvelURL();

    expect(envMarvelURL).toEqual('https://gateway.marvel.com/v1/public');
  });

  it('Retorne um erro de não existir a env no env.test', () => {
    expect(() => getEnvTest()).toThrow('Envkey ENV_TEST not found');
  });
});
