import * as types from './types'

export function addCommunity (community){
    console.log('ACTION addCommunity', community)
    saveCommunity(community);
	setTimeout(() => fetchCommunities(), 5000);

    return {
        type: types.COMMUNITY_ADDED,
    }
}

const saveCommunity = (community) => {
	fetch(types.BASE_URL + 'community', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: community.communityName,
            township: community.township,
            county: community.county,
			superintendent: community.superintendent,
			numberOfLots: community.numberOfLots,
        })
    }).then((response) => response.json())
        .then((responseData) => {
        console.log('saveCommunityResponse', responseData)
    });
};

export function fetchCommunities (){
	return (dispatch, getState) => {
		fetch(types.BASE_URL + 'communities')
			.then((response) => response.json())
			.then((responseData) => {
				console.log(responseData);
				dispatch(setSearchedCommunities({communities: responseData}))
				return responseData;
			})
			.done();
	}
}

export function setSearchedCommunities ({communities}){
	return {
		type: types.SET_SEARCHED_COMMUNITIES,
		communities
	}
}