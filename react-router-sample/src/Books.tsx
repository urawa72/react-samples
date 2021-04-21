import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

interface QueryString {
  [key: string]: string;
}

const Books: React.FC = () => {
  const search = useLocation().search;

  const query1 = search
    .slice(1)
    .split('&')
    .map((str) => [str.split('=')[0], str.split('=')[1]])
    .reduce((acc, a) => {
      acc[a[0]] = a[1];
      return acc;
    }, {} as QueryString);

  const query2 = new URLSearchParams(search);

  const query3 = queryString.parse(search);
  return (
    <div>
      <h2>Books Page</h2>
      <Link to="/">move Top page</Link>
      <div>hoge: {query1['hoge']}</div>
      <div>fuga: {query1['fuga']}</div>
      <div>hoge: {query2.get('hoge')}</div>
      <div>fuga: {query2.get('fuga')}</div>
      <div>hoge: {query3['hoge']}</div>
      <div>fuga: {query3['fuga']}</div>
    </div>
  );
};

export default Books;
