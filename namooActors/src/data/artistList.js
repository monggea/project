const modules=import.meta.glob('./artists/*.js', {eager: true})

export const artistList = Object.values(modules)
    .map(module => module.default)
    .flat()