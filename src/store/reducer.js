export const ADD_BOOK = "ADD_BOOK";
const initalState = {
    books: []
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initalState, action) => {
    switch (action.type) {
        case ADD_BOOK: {
            const newBooks = [...state.books, action.payload];
            return {
                ...state,
                book: newBooks
            };
        }
        default: {
            console.warn('Unknown action type');
            return { ...state }
        }
    }
};

export const addBook = (book) => dispatch => {
    dispatch({ type: ADD_BOOK, payload: book })
}