const reducer = (state, { input, type, init }) => {
    switch (type) {
        case 'change': {
            return { ...state, [input.name]: input.value };
        }
        case 'clear': {
            return { ...init };
        }

        default:
            return state;
    }
};
export default reducer;
