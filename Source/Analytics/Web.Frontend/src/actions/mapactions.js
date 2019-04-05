export function fetchPostsWithRedux() {
    return (dispatch) => {
      dispatch(fetchPostsRequest());
      return fetchPosts().then(([response, json]) => {
        if (response.status === 200) {
          dispatch(fetchPostsSuccess(json))
        }
        else {
          dispatch(fetchPostsError())
        }
      })
    }
  }
  
  function fetchPosts() {
    const URL = "http://localhost:5000/api/Analysis/Outbreaks/2019-01-01/2020-01-01";
    return fetch(URL, { method: 'GET' })
      .then(response => Promise.all([response, response.json()]));
  }
  
  function fetchPostsRequest() {
    return {
      type: "FETCH_REQUEST",
    }
  }
  
  function fetchPostsSuccess(payload) {
    return {
      type: "FETCH_SUCCESS",
      payload,
      name: name
    }
  }
  
  function fetchPostsError() {
    return {
      type: "FETCH_ERROR",
    }
  }