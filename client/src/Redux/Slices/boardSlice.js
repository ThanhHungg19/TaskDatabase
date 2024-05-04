import { createSlice } from '@reduxjs/toolkit';
import mockData from '../../apis/mockData';
const initialState = {
	id: '',
	title: '',
	backgroundImageLink: '',
	isImage: true,
	lists: [],
	members: [],
	activity: [],
	loading: true,
	description: '',
	activityLoading: false,
	data: mockData,
	currentBoardID: mockData[0]?._id,
	currentBoardData: mockData[0],
};

const boardSlice = createSlice({
	name: 'board',
	initialState,
	reducers: {

		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		successFetchingBoard: (state, action) => {
			state.id = action.payload._id;
			state.title = action.payload.title;
			state.backgroundImageLink = action.payload.backgroundImageLink;
			state.isImage = action.payload.isImage;
			state.lists = action.payload.lists;
			state.members = action.payload.members;
			state.activity = action.payload.activity;
			state.description = action.payload.description;
		},
		updateTitle: (state, action) => {
			state.title = action.payload;
		},
		setActivityLoading: (state, action) => {
			state.activityLoading = action.payload;
		},
		updateActivity: (state, action) => {
			state.activity = action.payload;
		},
		updateDescription: (state, action) => {
			state.description = action.payload;
		},
		updateBackground: (state, action) => {
			const { background, isImage } = action.payload;
			state.backgroundImageLink = background;
			state.isImage = isImage;
		},
		addMembers: (state,action)=>{
			state.members = action.payload;
		},

		selectBoard:(state, action) =>{
			state.currentBoardID=action.payload;
			const b = state.data.find(board=>board._id===action.payload)
			console.log(b);
			state.currentBoardData = b;
		},

		updateCurrentBoardData:(state, action)=>{
			state.currentBoardData = action.payload;
		},

		updateCurrentColumnsOrder:(state, action)=>{
			state.currentBoardData.columnOrderIds=action.payload.order;
			const b = state.data.find(board=>board._id===action.payload.boardId)
			b.columnOrderIds = action.payload.order
		},
		
		updateCurrentCardsOrder:(state, action)=>{
			state.currentBoardData.cardOrderIds = action.payload;
		},
		
	
	},	
});

export const {
	setLoading,
	successFetchingBoard,
	updateTitle,
	setActivityLoading,
	updateActivity,
	updateDescription,
	updateBackground,
	addMembers,
	selectBoard,
	updateCurrentBoardData,
	updateCurrentColumnsOrder,
	updateCurrentCardsOrder,
	updateColumnsData,
} = boardSlice.actions;
export default boardSlice.reducer;