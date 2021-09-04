export const state = () => ({
  CategoriesList: "all"
});

export const mutations = {
  UPDATE_CATEGORY(state, payload) {
    state.CategoriesList = payload;
  }
};
