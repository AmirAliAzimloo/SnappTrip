const testEmail = (value: string): boolean => {
    const emailPattern: RegExp = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/g;
    return emailPattern.test(value);
}


export default {
    testEmail,
}