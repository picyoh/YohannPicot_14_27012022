const SET_DATAS = 'setDatas'
// action creators
const setDatas = (datas) => {
    return {
      type: SET_DATAS,
      payload: datas,
    };
  };
  export {setDatas}