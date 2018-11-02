const initialState = {
    name: '',
    address: '',
    city: '',
    houseState: '',
    zip: 0,
    img: '',
    mortgage: 0,
    rent: 0
}

const CREATE_HOUSE = "CREATE_HOUSE"


function reducer(state = initialState, action){
    switch(action.type){
        case CREATE_HOUSE:
            return Object.assign({}, state, {something: action.payload})
        default: return state;
    }
}

export function createHouse(house){
    return {
        type: CREATE_HOUSE,
        payload: house
    }
}

export default reducer;

// const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE';
// const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
// const UPDATE_CITY = 'UPDATE_CITY';

// function reducer(state = initialState, action){
//     switch(action.type){
//         case UPDATE_LOAN_TYPE:
//             return Object.assign({}, state, {loanType: action.payload});
//         case UPDATE_PROPERTY_TYPE:
//             return Object.assign({}, state, {propertyType: action.payload});
//         case UPDATE_CITY:
//             return Object.assign({}, state, {city: action.payload});

            
//         default: return state;
//     }
// }

// export function updateLoanType(loanType){
//     return {
//         type: UPDATE_LOAN_TYPE,
//         payload: loanType
//     }
// }

// export function updatePropertyType(property){
//     return {
//         type: UPDATE_PROPERTY_TYPE,
//         payload: property
//     }
// }

// export function updateCity(city){
//     return {
//         type: UPDATE_CITY,
//         payload: city
//     }
// }