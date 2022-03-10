// action creators
const setDatas = (datas) => {
    return {
      type: "setDatas",
      payload: datas,
    };
  };
  
  const getForm = (value, category) => {
    return {
      type: "getForm",
      payload: value,
      category: category,
    };
  };
  
  const setFormModal = () => {
    return {
      type: "formModal",
    };
  };

  export { setDatas, getForm, setFormModal}