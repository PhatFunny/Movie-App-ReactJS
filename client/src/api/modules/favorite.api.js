import privateClient from '../client/private.client.js';

const favoriteEndpoints = {
  list: 'user/favorite',
  add: 'user/favorite',
  remove: ({ favoriteId }) => `user/favorite/${favoriteId}`,
};

const favoriteApi = {
  getList: async () => {
    try {
      const response = await privateClient.get(favoriteEndpoints.list);
      console.log('error favorite')

      return { response };
    } catch (err) {
      return { err };
    }
  },
  add: async ({ mediaId, mediaType, mediaTitle, mediaPoster, mediaRate }) => {
    try {
      const response = await privateClient.post(favoriteEndpoints.add, {
        mediaId,
        mediaType,
        mediaTitle,
        mediaPoster,
        mediaRate,
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },
  remove: async ({ favoriteId }) => {
    try {
      const response = await privateClient.delete(
        favoriteEndpoints.remove({ favoriteId })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default favoriteApi;
