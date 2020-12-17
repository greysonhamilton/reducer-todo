export const initialState = [

    {
        item: '',
        completed: false,
        id: '111111'
    }
]

export const todoReducer = (state, action) => {

    switch(action.type) {
        case ('ADD_NEW_TASK'):
            return [ ...state,
            {
                item: action.payload,
                completed: false,
                id: new Date()
            }]

        case ('COMPLETE_TASK'):
            return state.map(item => {
                if(item.id === action.payload) {
                    return {
                        ...item,
                        completed: true
                    }
                } else {
                    return item;
                }

            })

        case ('FILTER-COMPLETE'):
            return state.filter(item => !item.completed);

        default:
            return state;

    }

}