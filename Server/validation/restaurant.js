import joi from "joi";

export const ValidateRestaurantCity = (restaurantObj) => {

    const Schema = joi.object({
        city: joi.string().requires()
    });

    return Schema.validateAsync(restaurantObj);
};


export const ValidateRestaurantSearchString = (restaurantObj) => {

    const Schema = joi.object({
        searchString: joi.string().requires()
    });

    return Schema.validateAsync(restaurantObj);
};