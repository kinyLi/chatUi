
import React from 'react';
import Heading from '.';

export default {
    title: "排版/Heading",
    component: Heading
};

export const h1 = () => <Heading level={1}>默认</Heading>;
export const h2 = () => <Heading level={2}>默认</Heading>;
export const h3 = () => <Heading level={3}>默认</Heading>;
export const h4 = () => <Heading level={4}>默认</Heading>;
export const h5 = () => <Heading level={5}>默认</Heading>;
export const h6 = () => <Heading level={6}>默认</Heading>;