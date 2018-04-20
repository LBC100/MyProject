export const changeTopNavActive = 'changeTopNavActive';

export function cTopNavActive(index) {
    return {
        type: changeTopNavActive,
        index
    }
}