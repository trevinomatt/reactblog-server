import Router from '@koa/router';
import { getEntireFeed, getUserFeed } from './rss.ctrl';

const rss = new Router();

/**
 * Reactlog Entire RSS
 */
rss.get('/', getEntireFeed);
rss.get('/:username', getUserFeed);

export default rss;
