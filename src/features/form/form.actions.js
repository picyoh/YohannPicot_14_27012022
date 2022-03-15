const GET_FORM = 'getForm'

export const getForm = (value, category) => {
  return {
    type: GET_FORM,
    payload: value,
    category: category,
  };
};