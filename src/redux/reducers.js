import initial from "./states";
import * as TYPES from "./types";

export default function reducer(state = initial, { type, payload }) {
  const handlers = {
    [TYPES.FETCH_ISSUES_SUCCESS]: handler_fetech_issues_success,
    [TYPES.FETCH_ISSUES_FAILURE]: handler_fetch_issues_failure,
    [TYPES.FETCH_ISSUE_SUCCESS]: handler_fetech_issue_success,
    [TYPES.FETCH_ISSUE_FAILURE]: handler_fetch_issue_failure,
  };
  return handlers[type] ? handlers[type](state, payload) : state;
}

const handler_fetech_issues_success = (state, payload) => {
  /*
  if (payload.error === "OK") {
    let master = [...state.master];
    let master_lower_limit,
      master_upper_limit = { state };
    if (payload.offset < lower_limit) {
      master.unshift(payload.results);
      master_lower_limit = payload.offset;
    }
    if (payload.number_of_page_results > upper_limit) {
      master.push(payload.results);
      master_upper_limit = payload.number_of_page_results;
    }
    return {
      ...state,
      master,
      master_lower_limit,
      master_upper_limit,
    };
  }
*/
  return {
    ...state,
  };
};

const handler_fetch_issues_failure = (state, payload) => {
  console.log(payload);
  return {
    ...state,
  };
};

const handler_fetech_issue_success = (state, payload) => {
  /*
  if (payload.error === "OK") {
    const id = payload.results.id;
    let detail_ids = [...state.detail_ids];
    if (detail_ids.includes(id)) {
      detail_ids.push(id);
      detail = [...state.detail];
      detail.push(payload.results);
    }
    return {
      ...state,
      detail,
      detail_ids,
    };
  }
*/
  return {
    ...state,
  };
};

const handler_fetch_issue_failure = (state, payload) => {
  console.log(payload);
  return {
    ...state,
  };
};
