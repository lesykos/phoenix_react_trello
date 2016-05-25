import React from 'react';
import fetch from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

function buildHeaders() {
  const authToken = localStorage.getItem('phoenixAuthToken');
  return { ...defaultHeaders, Authorization: authToken };
}

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function parserJSON(response) {
  return response.json();
}

export function httpGet(url) {
  return fetch(url, {
    headers: buildHeaders(),
  })
    .then(checkStatus)
    .then(parserJSON);
}

export function httpPost(url, data) {
  const body = JSON.stringify(data);

  return fetch(url, {
    method: 'post',
    headers: buildHeaders(),
    body: body,
  })
    .then(checkStatus)
    .then(parserJSON);
}

export default httpDelete(url) {
  return fetch(url, {
    method: 'delete',
    headers: buildHeaders(),
  })
    .then(checkStatus)
    .then(parserJSON);
}

export function setDocumentTitle(title) {
  document.title = `${title} | Trello with Phoenix`;
}

export function renderErrorsFor(errors, ref) {
  if (!error) return false;

  return errors.map((error, i) => {
    if (error[ref]) {
      return (
        <div key={i} className="error">
          {error[ref]}
        </div>
      );
    }
  });
}
