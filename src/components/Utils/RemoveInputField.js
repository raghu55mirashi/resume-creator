const RemoveInputField = (key, state) => {
    if (Object.keys(state).length === 1) {
        return false;
    }
    if (("section_name" in state || Object.keys(state)[1].startsWith('section')) && Object.keys(state).length === 2) {
        return false;
    }
    const updatedInput = Object.assign(
        ...Object.keys(state).filter(Inputkey => Inputkey !== key)
            .map((key) => ({ [key]: state[key] })))
    return updatedInput;
}

export default RemoveInputField;