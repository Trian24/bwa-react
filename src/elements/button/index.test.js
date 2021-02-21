import React from 'react'
import {render} from '@testing-library/react'
import Button from './index'
import { BrowserRouter as Router } from 'react-router-dom'


test("Should not allowed to click if isDisabled is present", () => {
  const {container} = render(<Button isDisabled></Button>);

  expect(container.querySelector('span.disabled')).toBeInTheDocument();
});

test("Should render loading... if isloading is present", () => {
  const {container, getByText} = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector('span')).toBeInTheDocument();
});

test("Should be a tag when external link", () => {
  const {container} = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector('a')).toBeInTheDocument();
});

test("Should be link component when external link", () => {
  const {container} = render(
    <Router>
      <Button href="asd" type="link"></Button>
    </Router>
  );

  expect(container.querySelector('a')).toBeInTheDocument();
});