import legendsSchema from "./legends.schema";
import { LegendType } from "./types/legends.types";

export class LegendService {

    async list() {
        const listedLegends = await legendsSchema.find();

        return listedLegends;
    }

    async findName(name) {
        const findedLegend = await legendsSchema.find({ name: name  });

        return findedLegend;
    }

    async update(id, dataToUpdate: LegendType) {
        const updatedLegend = await legendsSchema.findOneAndUpdate({_id: id}, {
            name: dataToUpdate.name,
            informations: {
                realName: dataToUpdate.informations.realName,
                age: dataToUpdate.informations.age,
                planet: dataToUpdate.informations.planet,
                historyText: dataToUpdate.informations.historyText,
            },
            phrase: dataToUpdate.phrase,
            description: dataToUpdate.description,
            image: {
                smallest: dataToUpdate.image.smallest,
                small: dataToUpdate.image.small,
                medium: dataToUpdate.image.medium,
                large: dataToUpdate.image.large,
                largest: dataToUpdate.image.largest,
            },
            video: dataToUpdate.video,
            backgroundImage: {
                smallest: dataToUpdate.backgroundImage.smallest,
                small: dataToUpdate.backgroundImage.small,
                medium: dataToUpdate.backgroundImage.medium,
                large: dataToUpdate.backgroundImage.large,
                largest: dataToUpdate.backgroundImage.largest,
            },
            class: {
                icon: dataToUpdate.class.icon,
                title: dataToUpdate.class.title,
                description: dataToUpdate.class.description,
            },
            passive: {
                icon: dataToUpdate.passive.icon,
                title: dataToUpdate.passive.title,
                description: dataToUpdate.passive.description,
            },
            tactical: {
                icon: dataToUpdate.tactical.icon,
                title: dataToUpdate.tactical.title,
                description: dataToUpdate.tactical.description,
            },
            ultimate: {
                icon: dataToUpdate.ultimate.icon,
                title: dataToUpdate.ultimate.title,
                description: dataToUpdate.ultimate.description,
            },
        }, {new: true})

        return updatedLegend;
    }

}