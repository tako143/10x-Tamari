const defaultConfig = {
    mode: 'auto',
    speed: 80,
}

const userConfig = {
    speed: 100,
    logging: true,
}

const finalConfig = Object.assign({}, defaultConfig, userConfig);
console.log(`Final config: mode:${finalConfig.mode}, speed:${finalConfig.speed}, logging:${finalConfig.logging}`);