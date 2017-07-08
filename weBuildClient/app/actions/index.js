import * as JobActions from './jobs';
import * as ContactActions from './contact';
import * as ImageActions from './images';

export const ActionCreators = Object.assign({},
    JobActions,
    ContactActions,
	ImageActions,
);