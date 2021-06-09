class Creature {

    static allCreatures = []

    constructor(creature){
        this.id = creature.id
        this.name = creature.attributes.name
        this.image = creature.attributes.image
        this.description = creature.attributes.description
        this.skills = creature.attributes.skills
        Creature.allCreatures.push(this)
        this.renderCreature()
    }

    static renderCreatures(creatures){
        card.innerHTML = ""
        for(c of creatures){
            c.renderCreature()
        }
    }
}