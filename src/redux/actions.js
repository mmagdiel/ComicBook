import * as TYPES from "./types";

export const fetch_issues_request = (payload) => {
  return {
    type: TYPES.FETCH_ISSUES_REQUEST,
    payload,
  };
};

export const fetch_issue_request = (payload) => {
  return {
    type: TYPES.FETCH_ISSUE_REQUEST,
    payload,
  };
};
