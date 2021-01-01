import axios from 'axios';
import faker from 'faker';

export const axiosPostMock = (): jest.Mocked<typeof axios> => {
  const axiosMock = axios as jest.Mocked<typeof axios>;
  const axiosResponseMock = {
    data: faker.random.objectElement(),
    status: faker.random.number(),
  };
  axiosMock.post.mockResolvedValue(axiosResponseMock);
  return axiosMock;
};
