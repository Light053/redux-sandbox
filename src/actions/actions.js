import { createAction } from '@reduxjs/toolkit';

export const incremented = createAction('counter/incremented', () => ({}));

export const decremented = createAction('counter/decremented', () => ({}));

export const random = createAction('counter/random', () => ({
	payload: {
		rand: Math.floor(Math.random() * 20)
	}
}));
