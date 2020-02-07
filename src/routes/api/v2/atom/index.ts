import Router from '@koa/router';
import { getEntireFeed, getUserFeed } from './atom.ctrl';

const atom = new Router();

/**
 * Reactlog Entire RSS
 */
atom.get('/', getEntireFeed);
atom.get('/:username', getUserFeed);

export default atom;
