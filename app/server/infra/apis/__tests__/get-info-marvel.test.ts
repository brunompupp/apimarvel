import { getInfoMarvel } from '~/server/infra/apis/get-info-marvel';
import { enableMock } from '../../../../../mocks';
import { mockHero, mockHeroes } from '../../../../../mocks/api/get-info-marvel';

describe('Teste de requisição api marvel', () => {
  beforeAll(() => {
    enableMock();
  });

  it('Espero que retorne todos os herois sem limit e sem offset', async () => {
    const response = await getInfoMarvel({ urlPath: '/characters' });
    expect(response).toEqual(mockHeroes);
  });
  it('Espero que retorne os dados de um heroi', async () => {
    const response = await getInfoMarvel({ urlPath: '/characters/hero-id' });
    expect(response).toEqual(mockHero);
  });
});
