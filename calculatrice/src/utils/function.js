
export function calc(state) {
    const {current, prev, operator} = state;

    switch(operator) {
        case '+':
            return parseInt(prev) + parseInt(current);

        case '-':
            return parseInt(prev) - parseInt(current);

        case '*':
            return parseInt(prev) * parseInt(current);
    }
}