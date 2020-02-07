import { createSeriesPostsLoader } from './../entity/SeriesPosts';
import { createReactlogConfigLoader } from '../entity/ReactlogConfig';
import { createUserProfileLoader } from '../entity/UserProfile';
import { createUserLoader } from '../entity/User';
import { createTagsLoader } from '../entity/PostsTags';
import { createCommentsLoader } from '../entity/Comment';
import { createSeriesListLoader } from '../entity/Series';

function createLoaders() {
  return {
    reactlogConfig: createReactlogConfigLoader(),
    userProfile: createUserProfileLoader(),
    user: createUserLoader(),
    tags: createTagsLoader(),
    comments: createCommentsLoader(),
    seriesList: createSeriesListLoader(),
    seriesPosts: createSeriesPostsLoader()
  };
}

export type Loaders = ReturnType<typeof createLoaders>;
export default createLoaders;
