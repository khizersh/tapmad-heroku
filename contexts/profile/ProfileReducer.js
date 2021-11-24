export const PROFILE_DATA = "PROFILE_DATA";

export function ProfileReducer(state, action) {
  switch (action.type) {
    case PROFILE_DATA:
      return { ...state, ProfileData: action.data };
  }
}
