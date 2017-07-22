import * as JobActions from './jobs';
import * as ContactActions from './contact';
import * as ImageActions from './images';
import * as CommunityActions from './community';

export const ActionCreators = Object.assign({},
    JobActions,
    ContactActions,
	ImageActions,
	CommunityActions,
);