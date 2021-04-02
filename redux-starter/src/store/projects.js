import {createSlice } from "@reduxjs/toolkit";
let lastId = 0;

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    // actions => action handlers

    ProjectAdded: (projects, action) => {
        projects.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },
  },
});

// -------------------- Actions need to be imported as named export & reducer needs to be imported as default export--------------------------
export const { ProjectAdded } = slice.actions;
export default slice.reducer;
