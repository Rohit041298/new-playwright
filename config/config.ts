function reqEnv(name: string){
    const value = process.env[name];
    if(!value) {
        throw new Error(`Required Env variable is missing: ${name}`);
    }
    return value;
}

export const config = {
    baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com',
}