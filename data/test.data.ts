import 'dotenv/config';
function reqEnv(name: string) : string {
    const value = process.env[name];
    if(!value) {
        throw new Error(`Required Env variable is missing: ${name}`);
    }
    return value;
}

export const data = {
    validUser: {
        username: process.env.VALID_USERNAME || 'standard_user',
        password: process.env.VALID_PASSWORD || 'secret_sauce'
    },
}