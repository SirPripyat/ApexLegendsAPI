export interface LegendType {
    code: Number,
    name: String,
    informations: {
        realName: String,
        age: String,
        planet: String,
        historyText: String,
    },
    phrase: String,
    description: String,
    image: {
        smallest: String,
        small: String,
        medium: String,
        large: String,
        largest: String,
    },
    video: String,
    backgroundImage: {
        smallest: String,
        small: String,
        medium: String,
        large: String,
        largest: String,
    },
    class: {
        icon: String,
        title: String,
        description: String,
    },
    passive: {
        icon: String,
        title: String,
        description: String,
    },
    tactical: {
        icon: String,
        title: String,
        description: String,
    },
    ultimate: {
        icon: String,
        title: String,
        description: String,
    },
}