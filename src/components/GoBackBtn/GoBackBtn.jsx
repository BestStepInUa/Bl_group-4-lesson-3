import React from 'react';
import { Link } from 'react-router-dom';

export const GoBackBtn = ({ path }) => {
  return <Link to={path}>Go Back</Link>;
};
