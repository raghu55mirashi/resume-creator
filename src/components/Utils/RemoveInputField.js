const RemoveInputField = (key, state) => {
    if (Object.keys(state).length === 1) {
        return false;
    }
    const updatedInput = Object.assign(
        ...Object.keys(state).filter(Inputkey => Inputkey !== key)
            .map((key) => ({ [key]: state[key] })))
    return updatedInput;
}

export default RemoveInputField;