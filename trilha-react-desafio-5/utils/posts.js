import { getSupabaseApi } from '../services/api';

const postSummaryFields = 'id,title,description,created_at';
const postFields = `${postSummaryFields},body`;

const getPostRows = (data) => {
  if (!Array.isArray(data)) {
    throw new TypeError('Supabase returned an invalid posts response.');
  }

  return data;
};

export const getPosts = async () => {
  const { data } = await getSupabaseApi().get('/posts', {
    params: {
      select: postSummaryFields,
      order: 'created_at.desc',
    },
  });

  return getPostRows(data);
};

export const getPostById = async (id) => {
  const { data } = await getSupabaseApi().get('/posts', {
    params: {
      select: postFields,
      id: `eq.${id}`,
      limit: 1,
    },
  });

  return getPostRows(data)[0] || null;
};